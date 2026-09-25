/** The first paint and reload must show the self-contained Nixie loader, never unstyled gallery HTML. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { createServer } from 'vite';
import { ROOT } from '../scripts/catalog.ts';

const server = await createServer({root: ROOT, server: {host: '127.0.0.1', port: 0}});
await server.listen();
const browser = await chromium.launch({headless: true, ...(process.env.CHROMIUM_PATH ? {executablePath: process.env.CHROMIUM_PATH} : {})});
const url = server.resolvedUrls!.local[0];
const captures = path.join(ROOT, '.test-output', 'site-boot');
fs.mkdirSync(captures, {recursive: true});
try {
  const page = await browser.newPage({viewport: {width: 1440, height: 900}});
  page.setDefaultTimeout(180000);
  page.setDefaultNavigationTimeout(180000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  async function checkCycle(kind: 'open' | 'reload') {
    let release!: () => void;
    const gate = new Promise<void>(resolve => { release = resolve; });
    const route = async (request: import('playwright').Route) => { await gate; await request.continue(); };
    await page.route('**/src/main.ts', route);
    try {
      if (kind === 'open') await page.goto(url, {waitUntil: 'commit'});
      else await page.reload({waitUntil: 'commit'});
      await page.locator('#site-boot .ff-orbit.o2').waitFor();
      assert.equal(await page.locator('.page-shell').evaluate(el => getComputedStyle(el).visibility), 'hidden');
      assert.equal(await page.locator('.skip-link').evaluate(el => getComputedStyle(el).visibility), 'hidden');
      assert.equal(await page.locator('#site-boot').evaluate(el => getComputedStyle(el).display), 'grid');
      assert.equal(await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(17, 18, 19)');
      assert.equal(await page.locator('#site-boot .ff-orbit.o2').evaluate(el => getComputedStyle(el).animationName), 'sop-ff-offset-square-spin');
      assert.match(await page.locator('#site-boot-status').innerText(), /読み込み中/);
      if (kind === 'open') await page.screenshot({path: path.join(captures, 'loading.png')});
    } finally {
      release();
    }
    await page.waitForFunction(() => document.documentElement.classList.contains('site-ready'));
    await page.unroute('**/src/main.ts', route);
    await page.locator('#site-boot').waitFor({state: 'detached'});
    assert.equal(await page.locator('.page-shell').evaluate(el => getComputedStyle(el).visibility), 'visible');
    assert.equal(await page.locator('[data-part]').count(), 24);
    if (kind === 'open') await page.screenshot({path: path.join(captures, 'ready.png')});
    console.log(`PASS ${kind}: Nixie appears before application CSS, then 24 styled cards replace it`);
  }
  await checkCycle('open');
  await checkCycle('reload');
  assert.deepEqual(errors, []);
  await page.close();

  const mobile = await browser.newPage({viewport: {width: 390, height: 844}});
  mobile.setDefaultTimeout(180000);
  mobile.setDefaultNavigationTimeout(180000);
  let releaseMobile!: () => void;
  const mobileGate = new Promise<void>(resolve => { releaseMobile = resolve; });
  await mobile.route('**/src/main.ts', async request => { await mobileGate; await request.continue(); });
  try {
    await mobile.goto(url, {waitUntil: 'commit'});
    await mobile.locator('#site-boot .ff-orbit.o2').waitFor();
    const bounds = await mobile.locator('#site-boot .site-boot-content').boundingBox();
    assert.ok(bounds && bounds.x >= 0 && bounds.x + bounds.width <= 390);
    assert.equal(await mobile.locator('.page-shell').evaluate(el => getComputedStyle(el).visibility), 'hidden');
    await mobile.screenshot({path: path.join(captures, 'loading-mobile.png')});
    console.log('PASS 390px: Nixie fits the first paint');
  } finally {
    releaseMobile();
    await mobile.waitForFunction(() => document.documentElement.classList.contains('site-ready'));
    await mobile.close();
  }

  const reduced = await browser.newPage({reducedMotion: 'reduce'});
  reduced.setDefaultTimeout(180000);
  reduced.setDefaultNavigationTimeout(180000);
  let releaseReduced!: () => void;
  const reducedGate = new Promise<void>(resolve => { releaseReduced = resolve; });
  await reduced.route('**/src/main.ts', async request => { await reducedGate; await request.continue(); });
  try {
    await reduced.goto(url, {waitUntil: 'commit'});
    await reduced.locator('#site-boot .ff-orbit.o2').waitFor();
    assert.equal(await reduced.locator('#site-boot .ff-orbit.o2').evaluate(el => getComputedStyle(el).animationName), 'none');
    assert.equal(await reduced.locator('#site-boot').evaluate(el => getComputedStyle(el).display), 'grid');
    console.log('PASS reduced motion: Nixie stays visible without animation');
  } finally {
    releaseReduced();
    await reduced.waitForFunction(() => document.documentElement.classList.contains('site-ready'));
    await reduced.close();
  }

  const noJs = await browser.newPage({javaScriptEnabled: false});
  await noJs.goto(url);
  assert.equal(await noJs.locator('#site-boot').evaluate(el => getComputedStyle(el).display), 'none');
  assert.equal(await noJs.locator('.page-shell').evaluate(el => getComputedStyle(el).display), 'none');
  assert.match(await noJs.locator('.noscript-message').innerText(), /JavaScriptが必要/);
  console.log('PASS no JavaScript: styled fallback message replaces unfinished loader');
  await noJs.close();

  const slow = await browser.newPage();
  slow.setDefaultTimeout(180000);
  slow.setDefaultNavigationTimeout(180000);
  await slow.clock.install();
  let releaseSlow!: () => void;
  const slowGate = new Promise<void>(resolve => { releaseSlow = resolve; });
  await slow.route('**/src/main.ts', async request => { await slowGate; await request.continue(); });
  try {
    await slow.goto(url, {waitUntil: 'commit'});
    await slow.locator('#site-boot-status').waitFor();
    await slow.clock.fastForward(12001);
    assert.match(await slow.locator('#site-boot-status').innerText(), /通常より読み込みに時間がかかっています/);
    assert.equal(await slow.locator('#site-boot-status').getAttribute('data-failed'), null);
    assert.equal(await slow.locator('.site-boot-retry').isVisible(), true);
  } finally {
    releaseSlow();
    await slow.waitForFunction(() => document.documentElement.classList.contains('site-ready'));
    await slow.close();
  }
  console.log('PASS slow module: loading stays recoverable and is not mislabeled as failure');

  const failed = await browser.newPage();
  failed.setDefaultTimeout(180000);
  failed.setDefaultNavigationTimeout(180000);
  await failed.clock.install();
  await failed.route('**/src/main.ts', request => request.abort());
  await failed.goto(url + '?category=loaders#part=nixie-loader', {waitUntil: 'domcontentloaded'});
  await failed.clock.fastForward(12001);
  assert.match(await failed.locator('#site-boot-status').innerText(), /読み込めませんでした/);
  assert.equal(await failed.locator('.site-boot-retry').isVisible(), true);
  assert.match(await failed.locator('.site-boot-retry').getAttribute('href') ?? '', /\?category=loaders#part=nixie-loader$/);
  console.log('PASS failed module: visible retry replaces endless loading');
  await failed.close();
} finally {
  await browser.close();
  await server.close();
}
