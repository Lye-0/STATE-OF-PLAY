import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';import type{Browser}from'playwright';
import{ROOT,buildCatalog,FORMATS}from'../scripts/catalog.ts';import{getDelivery,buildPrompt}from'../src/catalog/delivery.ts';import{galleryReady,selectCategory}from'./gallery-ready.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const all=buildCatalog(),parts=all.parts.filter(x=>x.tags.includes('GLASS LAB'));
const out=path.join(ROOT,'.test-output/liquid-glass-gallery');fs.mkdirSync(out,{recursive:true});
const tests:string[]=[],errors:string[]=[];let browser:Browser|undefined,close:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 const{preview}=await import('vite'),s=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}});
 const url=s.resolvedUrls!.local[0];close=()=>new Promise<void>((resolve,reject)=>s.httpServer.close(error=>error?reject(error):resolve()));
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});const p=await browser.newPage({viewport:{width:1440,height:1040}});p.setDefaultTimeout(180000);p.on('pageerror',e=>errors.push(e.message));
 await p.goto(url,{waitUntil:'commit',timeout:180000});await p.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 const d=p.locator('#part-details');
 const open=async(id:string)=>{const part=parts.find(x=>x.id===id)!;await selectCategory(p,part.category);await p.locator(`[data-open="${id}"]`).click();await galleryReady(p,true);return part;};
 const shut=async()=>{await d.locator('.close-detail').evaluate(e=>(e as HTMLButtonElement).click());};
 await run('New A and B parts follow their respective category groups without a separate filter',async()=>{
  assert.equal(all.parts.length,825);assert.equal(parts.length,8);assert.equal(new Set(all.parts.map(p=>p.category)).size,37);
  assert.equal(await p.locator('.liquid-glass-shortcut').count(),0);
  const pairs={toggles:['lg-lens-toggle','lg-mist-toggle'],buttons:['lg-pressure-button','lg-frost-button'],tabs:['lg-flow-tabs','lg-index-tabs'],dropdowns:['lg-bloom-select','lg-clarity-select']} as const;
  for(const [category,[a,b]] of Object.entries(pairs)){
   await selectCategory(p,category);assert.equal(await p.locator('.glass-series').count(),2);
   assert.equal(await p.locator('[data-part][data-design="A"]').last().getAttribute('data-part'),a);
   assert.equal(await p.locator('[data-part][data-design="B"]').last().getAttribute('data-part'),b);
   await p.locator('[data-design-filter="A"]').click();await galleryReady(p);assert.equal(await p.locator('.glass-series').count(),1);assert.equal(await p.locator('[data-part]').last().getAttribute('data-part'),a);
   await p.locator('[data-design-filter="B"]').click();await galleryReady(p);assert.equal(await p.locator('.glass-series').count(),1);assert.equal(await p.locator('[data-part]').last().getAttribute('data-part'),b);
   await p.locator('[data-design-filter="all"]').click();await galleryReady(p);
  }
 });
 let filesChecked=0;
 await run('All eight inspectors display exact source code and prompts in all eight export combinations',async()=>{
  for(const part of parts){await open(part.id);assert.equal(await d.locator('.lg-preview-controls').count(),1);
   for(const layout of['portable','original']as const){await d.locator('#export-layout').selectOption(layout);for(const format of FORMATS){await d.locator(`[data-format="${format}"]`).evaluate(e=>(e as HTMLButtonElement).click());
    for(const file of getDelivery(part,format,layout).files){await d.locator(`[data-file="${file.name}"]`).evaluate(e=>(e as HTMLButtonElement).click());assert.deepEqual(await d.locator('.editor .line-code').allTextContents(),file.code.split('\n').map(x=>x||' '),file.name);filesChecked++;}
    await d.locator('[data-detail-tab=prompt]').evaluate(e=>(e as HTMLButtonElement).click());assert.equal(await d.locator('#prompt-text').inputValue(),buildPrompt(part,format,layout));await d.locator('[data-detail-tab=code]').evaluate(e=>(e as HTMLButtonElement).click());
   }}await shut();
  }console.log('EXACT DISPLAY FILES '+filesChecked);
 });
 await run('Background, material and format switching keep input and selection state',async()=>{
  await open('lg-flow-tabs');await d.locator('[data-choice-value="notes"]').click();await d.locator('input[aria-label="メモ"]').fill('背景を変えても残す');
  const colors=new Set<string>();
  for(const [button,scene] of [['studio','coast'],['dark','ink'],['light','paper']] as const){await d.locator(`[data-bg="${button}"]`).click();assert.equal(await d.locator('.lg-demo-host').getAttribute('data-lg-scene'),scene);assert.equal(await d.locator('[data-glass-scene]').inputValue(),scene);assert.equal(await d.locator('.live-preview').evaluate(el=>el.classList.contains('bg-studio')),true);colors.add(await d.locator('.lg-demo-scene').evaluate(el=>getComputedStyle(el).backgroundColor));}
  assert.equal(colors.size,3);
  await d.locator('[data-glass-scene]').selectOption('grid');assert.equal(await d.locator('.lg-demo-host').getAttribute('data-lg-scene'),'grid');assert.match(await d.locator('.lg-demo-scene').evaluate(el=>getComputedStyle(el).backgroundImage),/repeating-linear-gradient/);
  await d.locator('[data-glass-scene]').selectOption('paper');await d.locator('[data-glass-setting="material"]').selectOption('solid');await d.locator('[data-format=js]').click();
  assert.equal(await d.locator('input[aria-label="メモ"]').inputValue(),'背景を変えても残す');assert.equal(await d.locator('.lg-root').getAttribute('data-lg-appearance'),'light');await shut();
 });
 await run('Nested dropdown stays above inspector and Escape closes only the list',async()=>{
  await open('lg-bloom-select');await d.locator('.sop-select-trigger').click();await d.locator('.sop-select-trigger').press('ArrowDown');await p.keyboard.press('Enter');assert.equal(await d.locator('.sop-select-input').inputValue(),'name');
  await d.locator('.sop-select-trigger').click();assert.ok(await d.locator('.sop-select-popup').evaluate(e=>e.matches(':popover-open')));await p.keyboard.press('Escape');assert.ok(await d.isVisible());await p.screenshot({path:out+'/detail.png'});await shut();
 });
 await run('Mobile inspectors retain code controls and material settings at 320 and 390px',async()=>{
  for(const width of[320,390]){await p.setViewportSize({width,height:1000});for(const id of ['lg-pressure-button','lg-bloom-select']){await open(id);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));await d.locator('.copy-file').scrollIntoViewIfNeeded();assert.ok(await d.locator('.download-file').isVisible());await shut();}}
 });
 await run('No runtime errors or optical-resource leaks after inspectors close',async()=>{assert.equal(await p.locator('[data-lg-resource]').count(),0);assert.deepEqual(errors,[]);});
 console.log('Liquid Glass gallery '+tests.length+' checks passed');
}finally{fs.writeFileSync(out+'/results.json',JSON.stringify({mode:'Production Vite preview with the full 825-part catalogue',passed:tests.length,tests,errors},null,2)+'\n');await browser?.close();await close?.();}
