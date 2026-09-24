/** Verify SIGNATURE in the actual lazy-loaded Vite gallery and inspector. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import type { Browser } from 'playwright';
import { createServer } from 'vite';
import { ROOT, buildCatalog, FORMATS } from '../scripts/catalog.ts';
import { getDelivery, buildPrompt } from '../src/catalog/delivery.ts';
import { readBrowserIndex } from '../scripts/vite-catalog.ts';
import { galleryReady, selectCategory, selectedCategory } from './gallery-ready.ts';
import { requireLocalServerUrl } from './vite-url.ts';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH ?? 'playwright') as typeof import('playwright');
const categories = ['avatars', 'ratings', 'colors', 'skeletons', 'timelines', 'wizards'] as const;
const representative = ['orbital-portrait', 'blossom-rating', 'chromatic-orbit', 'folding-skeleton', 'document-timeline', 'folio-wizard'] as const;
const output = path.join(ROOT, '.test-output/signature-gallery');
fs.mkdirSync(output, { recursive: true });
const passed: string[] = [];
const errors: string[] = [];
let browser: Browser | undefined;
const server = await createServer({ root: ROOT, server: { host: '127.0.0.1', port: 0 } });
async function check(name: string, run: () => Promise<void>) {
  await run();
  passed.push(name);
  console.log('PASS ' + name);
}
try {
  await server.listen();
  const url = requireLocalServerUrl(server, 'SIGNATURE gallery');
  browser = await chromium.launch({ headless: true, args: ['--no-sandbox'], ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1050 }, reducedMotion: 'reduce' });
  page.setDefaultTimeout(20000);
  const requests: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => requests.push(request.url()));
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await galleryReady(page);

  await check('entry keeps the first category lazy while listing 817 parts and 37 categories', async () => {
    assert.equal(await page.locator('#library-total').innerText(), '817');
    assert.equal(await page.locator('#library-collections').innerText(), '37');
    assert.equal(await page.locator('#part-grid [data-part]').count(), 24);
    assert.equal(await selectedCategory(page), 'toggles');
    assert.ok(!requests.some(request => request.includes('/src/parts/avatars/')), 'avatar runtime loaded before selection');
    assert.ok(!readBrowserIndex().index.some(part => part.id === 'paper-loader'));
  });

  await check('six categories expose 16 independent cards with A10 and B6', async () => {
    for (const category of categories) {
      await selectCategory(page, category);
      assert.equal(await page.locator('#part-grid .signature-card').count(), 16, category);
      assert.equal(await page.locator('#part-grid .sop-sig').count(), 16, category);
      await page.locator('[data-design-filter="A"]').click();
      await galleryReady(page);
      assert.equal(await page.locator('#part-grid [data-part]').count(), 10, category + ' A');
      await page.locator('[data-design-filter="B"]').click();
      await galleryReady(page);
      assert.equal(await page.locator('#part-grid [data-part]').count(), 6, category + ' B');
      await page.locator('[data-design-filter="all"]').click();
      await galleryReady(page);
    }
  });

  await check('gallery actions and the detail controls operate on the actual new parts', async () => {
    await selectCategory(page, 'avatars');
    await page.locator('[data-part="orbital-portrait"] [data-user="rin"]').click();
    assert.equal(await page.locator('[data-part="orbital-portrait"] [data-user="rin"]').getAttribute('aria-pressed'), 'true');
    for (let i = 0; i < categories.length; i++) {
      await selectCategory(page, categories[i]);
      await page.locator('[data-open="' + representative[i] + '"]').click();
      await page.locator('#part-details [data-preview-part="' + representative[i] + '"]').waitFor();
      assert.equal(await page.locator('#part-details .signature-preview .sop-sig').count(), 1);
      assert.ok(await page.locator('#part-details .signature-controls').isVisible());
      if (categories[i] === 'skeletons') {
        await page.locator('#part-details input[data-sg-loading]').uncheck();
        assert.equal(await page.locator('#part-details .sop-sig').getAttribute('aria-busy'), 'false');
      }
      if (categories[i] === 'ratings') {
        await page.locator('#part-details [data-sg-max]').selectOption('7');
        assert.equal(await page.locator('#part-details input[type="radio"]').count(), 7);
      }
      await page.locator('#part-details .close-detail').click();
      await galleryReady(page);
    }
  });

  await check('all eight code and prompt choices for a new part match its delivery source', async () => {
    const part = buildCatalog(ROOT, ['orbital-portrait']).parts[0];
    await selectCategory(page, 'avatars');
    await page.locator('[data-open="orbital-portrait"]').click();
    await page.locator('#part-details [data-preview-part="orbital-portrait"]').waitFor();
    for (const layout of ['portable', 'original'] as const) {
      await page.locator('#part-details #export-layout').selectOption(layout);
      for (const format of FORMATS) {
        await page.locator('#part-details [data-format="' + format + '"]').click();
        const delivery = getDelivery(part, format, layout);
        assert.ok(await page.locator('#part-details #detail-pane').innerText().then(text => text.includes(delivery.files[0].name.split('/').at(-1)!)));
        await page.locator('#part-details [data-detail-tab="prompt"]').click();
        assert.equal(await page.locator('#part-details #prompt-text').inputValue(), buildPrompt(part, format, layout));
        await page.locator('#part-details [data-detail-tab="code"]').click();
      }
    }
    await page.screenshot({ path: path.join(output, 'avatar-detail.png') });
    await page.locator('#part-details .close-detail').click();
  });

  await check('direct link to a new category opens its detail without loading old categories', async () => {
    const direct = await browser!.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    direct.on('pageerror', error => errors.push(error.message));
    await direct.goto(url + '#part=folio-wizard', { waitUntil: 'domcontentloaded', timeout: 120000 });
    await galleryReady(direct);
    assert.equal(await selectedCategory(direct), 'wizards');
    assert.ok(await direct.locator('#part-details [data-preview-part="folio-wizard"]').isVisible());
    assert.ok(await direct.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await direct.close();
  });
  assert.deepEqual(errors, []);
  console.log('SIGNATURE gallery: ' + passed.length + ' checks passed over Vite HTTP.');
} finally {
  fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ mode: 'Vite HTTP', passed, errors }, null, 2) + '\n');
  await browser?.close();
  await server.close();
}
