import {libraryCount} from './gallery-counts.ts';
import {selectSetting} from './detail-settings.ts';
import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';
import {chromium} from 'playwright';import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';import {JSZip} from '../scripts/zip.ts';import {galleryReady,selectCategory} from './gallery-ready.ts';
const owned=!process.env.SOP_TEST_URL;
const server=owned?await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}}):undefined;if(server)await server.listen();
const url=process.env.SOP_TEST_URL??server!.resolvedUrls!.local[0];
const connected=!!process.env.AUDIT_CDP;
const browser=connected?await chromium.connectOverCDP(process.env.AUDIT_CDP!):await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const context=connected?browser.contexts()[0]:await browser.newContext({acceptDownloads:true});
const page=await context.newPage();await page.setViewportSize({width:1440,height:1000});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
const out=path.join(ROOT,'.test-output/appearance');fs.mkdirSync(out,{recursive:true});
const detail=page.locator('#part-details');
const paints=async(selector:string)=>page.locator(selector).evaluate(el=>[el,...el.querySelectorAll('*')].map(n=>{const s=getComputedStyle(n);return [s.color,s.backgroundColor,s.borderColor,s.fill,s.getPropertyValue('--ff-accent'),s.getPropertyValue('--sg-a'),s.getPropertyValue('--lg-accent')];}));
try{
 await page.goto(url);await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));assert.equal(await page.locator('#library-total').innerText(),String(libraryCount()));
 for(const [id,category] of [['quiet-button','buttons'],['paper-card','blocks'],['essential-select','dropdowns'],['essential-range','sliders'],['circle-profile','avatars'],['fan-spark','ornaments'],['origami-segments','segments'],['aurora-loader','loaders'],['mercury-loader','loaders'],['prism-loader','loaders'],['copper-loader','loaders'],['lg-lens-toggle','toggles'],['lgc-tables-lens','tables']] as const){
  await selectCategory(page,category);await galleryReady(page);const gallerySelector=`[data-part="${id}"] .sop-${id}`;const gallery=await paints(gallerySelector);
  await page.locator(`[data-open="${id}"]`).click();await galleryReady(page);const selector=`#part-details .preview-stage .sop-${id}`;const before=await paints(selector);
  assert.ok(await detail.locator('.appearance-color').count(),id+' offers colors');await detail.locator('.appearance-color').first().locator('.appearance-trigger').click();const hex=detail.locator('.appearance-color').first().locator('input[type=text]');await hex.fill('#C65EAA');await page.waitForTimeout(160);
  assert.notDeepEqual(await paints(selector),before,id+' color is visible');assert.deepEqual(await paints(gallerySelector),gallery,id+' exhibit unchanged');
  if(id==='paper-card'){
   assert.equal((await paints(selector))[0][1],before[0][1],'accent preserves independently controlled surface');
  }
  if(id==='quiet-button'){
   await hex.fill('#202020');await page.mouse.move(2,2);await page.waitForTimeout(450);
   const ink=await page.locator(selector).evaluate(el=>getComputedStyle(el).color);assert.ok((ink.match(/\d+/g)??[]).slice(0,3).every(n=>Number(n)>180),'dark button keeps readable foreground');
   await hex.fill('#C65EAA');await page.waitForTimeout(450);
  }
  await page.keyboard.press('Escape');assert.ok(await detail.isVisible());assert.equal(await detail.locator('.appearance-color[open]').count(),0);
  if(id==='paper-card'||id==='lg-lens-toggle')await detail.screenshot({path:path.join(out,id+'.png')});
  if(id==='paper-card'){
   await detail.locator('.appearance-color').nth(1).locator('.appearance-trigger').click();await detail.locator('.appearance-color').nth(1).locator('input[type=text]').fill('#243A47');await page.keyboard.press('Escape');await page.waitForTimeout(450);
   assert.equal((await paints(selector))[0][1],'rgb(36, 58, 71)','surface picker uses selected color');
   for(const format of ['tsx','jsx','ts','js'])for(const layout of ['portable','original']){
    await detail.locator(`[data-format="${format}"]`).click();await selectSetting(detail.locator('#export-layout'),layout);await detail.locator('[data-detail-tab="code"]').click();await detail.locator(`[data-source="src/parts/blocks/paper-card/styles.css"]`).click();assert.match(await detail.locator('.code-scroll').innerText(),/Detail appearance/);
    await detail.locator('[data-detail-tab="prompt"]').click();assert.match(await detail.locator('#prompt-text').inputValue(),/詳細で調整した配色/);
    await detail.locator('#download-part').click();const downloaded=page.waitForEvent('download');await page.locator('.package-save').click();const download=await downloaded,target=path.join(out,`paper-${format}-${layout}.zip`);await download.saveAs(target);
    const zip=await JSZip.loadAsync(fs.readFileSync(target),{checkCRC32:true}),names=Object.keys(zip.files),read=async(suffix:string)=>zip.file(names.find(n=>n.endsWith(suffix))!)!.async('string');
    assert.equal(JSON.parse(await read('/INTEGRATION.json')).appearanceColors.accent,'#c65eaa');assert.match(await read('/PROMPT.md'),/詳細で調整した配色/);assert.match(await read('/preview/styles.css'),/Detail appearance/);assert.ok(names.some(n=>n.endsWith('/paper-card/styles.css')));
    const demo=await context.newPage();await demo.setContent(await read('/preview/index.html'));await demo.addStyleTag({content:await read('/preview/styles.css')});await demo.addScriptTag({content:await read('/preview/app.js')});const exported=await demo.locator('.sop-paper-card').evaluate(el=>getComputedStyle(el).getPropertyValue('--sop-accent-ink'));const shown=await detail.locator('.sop-paper-card').evaluate(el=>getComputedStyle(el).getPropertyValue('--sop-accent-ink'));assert.equal(exported.trim(),shown.trim());await demo.close();await page.locator('.package-close').click();
   }
  }
  if(id==='lg-lens-toggle'){await detail.locator('#glass-transparency').fill('75');await detail.locator('#glass-blur').fill('25');await page.waitForTimeout(170);await detail.locator('[data-detail-tab="prompt"]').click();const prompt=await detail.locator('#prompt-text').inputValue();assert.match(prompt,/詳細で調整した配色/);assert.match(prompt,/透明度: 75/);assert.match(prompt,/背景のぼかし: 25/);}
  await detail.locator('.appearance-reset').click();await page.mouse.move(2,2);await page.waitForTimeout(450);if(id!=='lg-lens-toggle')assert.deepEqual(await paints(selector),before,id+' reset');await detail.locator('.close-detail').click();
  await page.locator(`[data-open="${id}"]`).click();await galleryReady(page);assert.deepEqual(await paints(selector),before,id+' reopens with exhibit defaults');await detail.locator('.close-detail').click();console.log('PASS '+id);
 }
 await selectCategory(page,'toggles');await page.locator('[data-open="chrome"]').click();await galleryReady(page);assert.equal(await detail.locator('.appearance-color').count(),0);await detail.locator('.close-detail').click();
 await page.setViewportSize({width:390,height:844});await selectCategory(page,'blocks');await page.locator('[data-open="paper-card"]').click();await galleryReady(page);await detail.locator('.appearance-color .appearance-trigger').first().click();await detail.locator('.appearance-picker').first().scrollIntoViewIfNeeded();assert.ok(await detail.locator('.appearance-picker').first().isVisible());assert.equal(await detail.evaluate(el=>el.scrollWidth>el.clientWidth),false);await page.screenshot({path:path.join(out,'mobile-picker.png')});
 assert.deepEqual(errors,[]);console.log('PASS four formats, both layouts, ZIP previews, gallery isolation, reopen/reset, glass composition, intrinsic exclusions and mobile picker');
}finally{await page.close();await browser.close();await server?.close();}
