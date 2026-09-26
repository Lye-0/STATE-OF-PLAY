import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {chromium} from 'playwright';import {preview} from 'vite';import {ROOT} from '../scripts/catalog.ts';import {JSZip} from '../scripts/zip.ts';import {selectCategory,galleryReady} from './gallery-ready.ts';
const server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}}),browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});
try{
 await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit'});await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 for(const [id,category,density] of [['lg-lens-toggle','toggles',.492],['lgc-contextmenus-mist','contextmenus',.6]] as const){
  await selectCategory(page,category);await galleryReady(page,true);await page.locator(`[data-open="${id}"]`).click();await galleryReady(page,true);
  const detail=page.locator('#part-details');await detail.locator('#glass-transparency').fill('70');await detail.locator('[data-format="js"]').click();await detail.locator('#download-part').click();
  const download=page.waitForEvent('download');await page.locator('.package-save').click();const file=await download;const target=path.join(ROOT,'.test-output',id+'-adjusted.zip');await file.saveAs(target);
  const zip=await JSZip.loadAsync(fs.readFileSync(target),{checkCRC32:true}),names=Object.keys(zip.files);
  const content=async(suffix:string)=>zip.file(names.find(name=>name.endsWith(suffix))!)!.async('string');
  assert.equal(JSON.parse(await content('/INTEGRATION.json')).glassTransparency,70);assert.match(await content('/PROMPT.md'),/透明度: 70 \/ 100/);
  const css=await content('/preview/styles.css');assert.ok(css.includes('--lg-density:'+density));
  const demo=await browser.newPage();await demo.setContent(await content('/preview/index.html'));await demo.addStyleTag({content:css});await demo.addScriptTag({content:await content('/preview/app.js')});
  assert.equal(await demo.locator('.sop-'+id).evaluate(el=>Number(getComputedStyle(el).getPropertyValue('--lg-density'))),density);
  await demo.close();await page.locator('.package-close').click();await detail.locator('.close-detail').click();
 }
 console.log('PASS configured ZIP downloads and standalone previews (A/B)');
}finally{await browser.close();await new Promise<void>(resolve=>server.httpServer.close(()=>resolve()));}
