import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium, type Page} from 'playwright';
import {ROOT} from '../scripts/catalog.ts';
import {createComponentServer, openRenderedFixture} from './component-server.ts';

const directory = path.join(ROOT, '.test-output/component-fixture');
fs.mkdirSync(directory, {recursive: true});
fs.writeFileSync(path.join(directory, 'index.html'),
  '<html><head><link rel="icon" href="data:,"></head><body><div id="root"></div><script type="module" src="./entry.jsx"></script></body></html>');
fs.writeFileSync(path.join(directory, 'entry.jsx'),
  "import React from 'react';import{createRoot}from'react-dom/client';createRoot(document.getElementById('root')).render(<React.StrictMode><section data-part='probe'>ready</section></React.StrictMode>);");
const server = await createComponentServer('component-fixture');
await server.listen();
const url = server.resolvedUrls!.local[0] + '.test-output/component-fixture/index.html';
const browser = await chromium.launch({headless: true,
  ...(process.env.CHROMIUM_PATH ? {executablePath: process.env.CHROMIUM_PATH} : {})});
async function scenario(name: string, test: (page: Page) => Promise<void>) {
  const page = await browser.newPage();
  try { await test(page); console.log('PASS fixture loading: ' + name); }
  finally { await page.close(); }
}
try {
  await scenario('waits for React to render after a slow module response', async page => {
    await page.route('**/component-fixture/entry.jsx', async route => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.continue();
    });
    await openRenderedFixture(page, url, 1);
    assert.equal(await page.locator('[data-part=probe]').textContent(), 'ready');
  });
  await scenario('recovers from one failed module fetch', async page => {
    let requests = 0;
    await page.route('**/component-fixture/entry.jsx', async route => {
      if (++requests === 1) await route.abort('connectionreset');
      else await route.continue();
    });
    await openRenderedFixture(page, url, 1);
    assert.equal(requests, 2);
    assert.equal(await page.locator('[data-part=probe]').textContent(), 'ready');
  });
  await scenario('recovers from one Vite dependency HTTP 504 response', async page => {
    let requests = 0;
    await page.route('**/component-fixture/entry.jsx', async route => {
      if (++requests === 1) await route.fulfill({status: 504, body: 'Outdated Optimize Dep'});
      else await route.continue();
    });
    await openRenderedFixture(page, url, 1);
    assert.equal(requests, 2);
    assert.equal(await page.locator('[data-part=probe]').textContent(), 'ready');
  });
  await scenario('a repeated transport failure is not hidden', async page => {
    let requests = 0;
    await page.route('**/component-fixture/entry.jsx', async route => {
      requests++;
      await route.abort('connectionreset');
    });
    await assert.rejects(openRenderedFixture(page, url, 1), /ERR_CONNECTION_RESET/);
    assert.equal(requests, 2);
  });
  await scenario('missing modules fail without retry', async page => {
    let requests = 0;
    await page.route('**/component-fixture/entry.jsx', async route => {
      requests++;
      await route.fulfill({status: 404, body: 'missing module'});
    });
    await assert.rejects(openRenderedFixture(page, url, 1), /HTTP 404/);
    assert.equal(requests, 1);
  });
  await scenario('runtime errors fail without retry', async page => {
    let requests = 0;
    await page.route('**/component-fixture/entry.jsx', async route => {
      requests++;
      await route.fulfill({status: 200, contentType: 'text/javascript',
        body: "throw new Error('fixture runtime regression');"});
    });
    await assert.rejects(openRenderedFixture(page, url, 1), /fixture runtime regression/);
    assert.equal(requests, 1);
  });
  await scenario('a render timeout is not retried', async page => {
    let requests = 0;
    await page.route('**/component-fixture/entry.jsx', async route => {
      requests++;
      await route.fulfill({status: 200, contentType: 'text/javascript', body: '// no render'});
    });
    await assert.rejects(openRenderedFixture(page, url, 1, 1500), /Timeout/);
    assert.equal(requests, 1);
  });
} finally {
  await browser.close();
  await server.close();
}
