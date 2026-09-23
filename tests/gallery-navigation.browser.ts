/** Category navigation must keep the visible tab strip and page position stable. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});
await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const url=server.resolvedUrls!.local[0];
const captures=path.join(ROOT,'.test-output/category-loading');fs.mkdirSync(captures,{recursive:true});
try {
 for(const width of [1440,390]) {
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url);
  const ready=()=>page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');
  await ready();
  await page.evaluate(()=>scrollTo({top:380,behavior:'instant'}));
  const before=await page.evaluate(()=>scrollY);
  assert.equal(before,380);
  const tabMetrics=await page.locator('#category-tabs').evaluate(el=>({overflowY:getComputedStyle(el).overflowY,client:el.clientHeight,content:el.scrollHeight}));
  assert.equal(tabMetrics.overflowY,'hidden',`vertical scrollbar at width ${width}`);
  assert.ok(tabMetrics.content>tabMetrics.client,`test exercises actual 1px overflow at width ${width}`);
  // Slow the next module: the old gallery must keep its height throughout the loading state.
  let release!:()=>void;const gate=new Promise<void>(r=>release=r);
  await page.route(/sop-category\/numbers/,async route=>{await gate;await route.continue();});
  await page.locator('[data-category="numbers"]').click();
  await page.locator('#part-grid[aria-busy="true"]').waitFor();
  const loader=page.locator('.collection-loading .sop-orbital-loom-loader');
  await loader.waitFor();
  assert.equal(await loader.locator('.ld-hoop').count(),3);
  assert.equal(await loader.locator('.ld-pearl').count(),1);
  assert.equal(await loader.locator('[data-loader-label]').getAttribute('role'),'status');
  assert.match(await loader.locator('[data-loader-label]').innerText(),/パーツを読み込んでいます/);
  await page.waitForFunction(()=>document.querySelector('.collection-loading .sop-motion-loader')?.getAttribute('data-motion-running')==='true');
  assert.equal(await loader.locator('.ld-loom').evaluate(el=>getComputedStyle(el).animationName),'ld-loom-turn');
  if(width===1440)await page.screenshot({path:path.join(captures,'orbital-loading.png')});
  await page.emulateMedia({reducedMotion:'reduce'});
  assert.equal(await loader.locator('.ld-loom').evaluate(el=>getComputedStyle(el).animationName),'none');
  await page.emulateMedia({reducedMotion:'no-preference'});
  const loadingY=await page.evaluate(()=>scrollY);
  assert.ok(Math.abs(loadingY-before)<=2,`loading jumped from ${before} to ${loadingY} at ${width}px`);
  await page.evaluate(()=>scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'}));
  await page.waitForFunction(()=>document.querySelector('.collection-loading .sop-motion-loader')?.getAttribute('data-motion-running')==='false');
  await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),before);
  await page.waitForFunction(()=>document.querySelector('.collection-loading .sop-motion-loader')?.getAttribute('data-motion-running')==='true');
  release();await ready();
  assert.equal(await page.locator('.collection-loading').count(),0);
  const after=await page.evaluate(()=>scrollY);
  assert.ok(Math.abs(after-before)<=2,`finished switch jumped from ${before} to ${after} at ${width}px`);
  assert.equal(await page.locator('[data-part]').count(),20);
  await page.locator('[data-category="numbers"]').focus();
  await page.keyboard.press('Home');await ready();
  assert.equal(await page.locator('[data-category="all"]').getAttribute('aria-selected'),'true');
  assert.ok(Math.abs(await page.evaluate(()=>scrollY)-before)<=2,`Home moved the page at ${width}px`);
  await page.keyboard.press('End');await ready();
  assert.equal(await page.locator('[data-category="numbers"]').getAttribute('aria-selected'),'true');
  assert.ok(Math.abs(await page.evaluate(()=>scrollY)-before)<=2,`End moved the page at ${width}px`);
  assert.ok(await page.locator('#category-tabs').evaluate(el=>el.scrollLeft>0),'focused tab stays visible horizontally');
  assert.deepEqual(errors,[]);
  await page.close();
  console.log(`PASS ${width}px: Orbital Loom, no tab scrollbar or page jump; pointer and keyboard navigation`);
 }
}finally{await browser.close();await server.close();}
