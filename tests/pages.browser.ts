/** Serve the built artifact exactly as static Pages files, without Vite's SPA fallback. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createServer} from 'node:http';
import {chromium} from 'playwright';
import {ROOT} from '../scripts/catalog.ts';
import {categories} from '../src/catalog/categories.ts';
import {JSZip} from '../scripts/zip.ts';
import {galleryReady, selectCategory} from './gallery-ready.ts';

const dist = path.join(ROOT, 'dist');
assert.ok(fs.existsSync(path.join(dist, 'index.html')), 'Run the production build before test:pages');
const records = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/catalog/registry.json'), 'utf8')) as string[];
const base = '/' + (process.env.PAGES_BASE_PATH ?? '/STATE-OF-PLAY').split('/').filter(Boolean).join('/');
const prefix = base === '/' ? '/' : base + '/';
const mime: Record<string, string> = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.png': 'image/png', '.ico': 'image/x-icon'
};
const server = createServer((req, res) => {
  const pathname = new URL(req.url ?? '/', 'http://localhost').pathname;
  if (!pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
  const relative = decodeURIComponent(pathname.slice(prefix.length)) || 'index.html';
  const file = path.resolve(dist, relative);
  if (!file.startsWith(dist + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end(); return;
  }
  res.writeHead(200, {'Content-Type': mime[path.extname(file)] ?? 'application/octet-stream'});
  res.end(fs.readFileSync(file));
});
await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
const address = server.address();
assert.ok(address && typeof address !== 'string');
const url = `http://127.0.0.1:${address.port}${prefix}`;
const output = path.join(ROOT, '.test-output/pages');
fs.mkdirSync(output, {recursive: true});
let browser: Awaited<ReturnType<typeof chromium.launch>> | undefined;
try {
  browser = await chromium.launch({headless: true, ...(process.env.CHROMIUM_PATH ? {executablePath: process.env.CHROMIUM_PATH} : {})});
  const page = await browser.newPage({viewport: {width: 1440, height: 960}, reducedMotion: 'reduce'});
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(60000);
  const errors: string[] = [];
  const requests: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    requests.push(response.url());
    if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  });
  page.on('requestfailed', request => errors.push(`${request.failure()?.errorText} ${request.url()}`));

  await page.goto(url, {waitUntil: 'domcontentloaded'});
  await page.waitForFunction(() => document.documentElement.classList.contains('site-ready'));
  await galleryReady(page);
  assert.equal(await page.locator('[data-part]').count(), records.filter(p => p.split('/')[2] === 'toggles').length);
  const toggle = page.locator('[data-part="chrome"] [role="switch"]');
  const before = await toggle.getAttribute('aria-checked');
  await toggle.click();
  assert.notEqual(await toggle.getAttribute('aria-checked'), before);
  console.log('PASS static Pages entry, vendor assets and native toggle interaction');

  for (const category of categories.filter(c => c.id !== 'all')) {
    await selectCategory(page, category.id);
    assert.equal(await page.locator('[data-part]').count(), records.filter(p => p.split('/')[2] === category.id).length, category.id);
  }
  console.log('PASS all 37 lazy category modules and their styles under the Pages base path');

  await page.goto(url + '?category=tables#part=lgc-tables-mist', {waitUntil: 'domcontentloaded'});
  await galleryReady(page);
  const details = page.locator('#part-details');
  await details.locator('[data-preview-part="lgc-tables-mist"]').waitFor();
  await page.reload({waitUntil: 'domcontentloaded'});
  await galleryReady(page);
  await details.locator('[data-preview-part="lgc-tables-mist"]').waitFor();
  await details.locator('[data-format="js"]').click();
  await details.locator('#export-layout').selectOption('portable');
  assert.ok((await details.locator('.editor code').innerText()).length > 100);
  await details.locator('#tab-prompt').click();
  assert.ok((await details.locator('#prompt-text').inputValue()).includes('Mist Table'));
  await details.locator('[data-prompt-mode="spec"]').click();
  assert.ok((await details.locator('#prompt-text').inputValue()).length > 100);
  await details.locator('#tab-code').click();
  const filePending = page.waitForEvent('download');
  await details.locator('.download-file').click();
  const fileDownload = await filePending;
  assert.ok(fs.statSync((await fileDownload.path())!).size > 0);
  await details.locator('#download-part').click();
  const zipPending = page.waitForEvent('download');
  await page.locator('.package-dialog .package-save').click();
  const zipDownload = await zipPending;
  const zip = await JSZip.loadAsync(fs.readFileSync((await zipDownload.path())!), {checkCRC32: true});
  assert.ok(Object.keys(zip.files).some(name => name.endsWith('/INTEGRATION.json')));
  assert.ok(Object.keys(zip.files).some(name => name.endsWith('/styles.css')));
  await page.locator('.package-dialog .package-close').click();
  await page.screenshot({path: path.join(output, 'details.png')});
  await details.locator('.close-detail').click();
  await page.screenshot({path: path.join(output, 'gallery.png')});
  console.log('PASS category query and detail hash survive reload; source, prompts, file and ZIP downloads work');

  assert.ok(requests.some(request => /\.json(?:\?|$)/.test(request)), 'Detail payload was requested');
  assert.ok(requests.every(request => new URL(request).pathname.startsWith(prefix)), 'Every request stays within the Pages base path');
  assert.deepEqual(errors, []);
  console.log('PASS no browser errors or failed static requests');
} finally {
  await browser?.close();
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
}
