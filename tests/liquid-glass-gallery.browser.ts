/** Full collection integration through the production Vite preview. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Browser} from 'playwright';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
import {galleryReady,selectCategory} from './gallery-ready.ts';

const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const all=buildCatalog(),glass=all.parts.filter(p=>p.id.startsWith('lg-')||p.id.startsWith('lgc-'));
const out=path.join(ROOT,'.test-output/glass-collection-gallery');fs.mkdirSync(out,{recursive:true});
const tests:string[]=[],errors:string[]=[];let browser:Browser|undefined,close:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 const {preview}=await import('vite'),server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}});
 close=()=>new Promise<void>((resolve,reject)=>server.httpServer.close(error=>error?reject(error):resolve()));
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:960}});page.setDefaultTimeout(180000);page.on('pageerror',error=>errors.push(error.message));
 await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit',timeout:180000});
 await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 const detail=page.locator('#part-details');
 const open=async(id:string)=>{const part=glass.find(p=>p.id===id)!;await selectCategory(page,part.category);await page.locator(`[data-open="${id}"]`).click();await galleryReady(page,true);return part;};
 const closeDetail=async()=>{await detail.locator('.close-detail').click();};
 await run('All 37 ordinary categories contain their glass A and B in the normal filter order',async()=>{
  assert.equal(all.parts.length,891);assert.equal(glass.length,74);assert.equal(await page.locator('.liquid-glass-shortcut,.lg-preview-controls').count(),0);
  for(const category of [...new Set(all.parts.map(p=>p.category))]){
   await selectCategory(page,category);const pair=glass.filter(p=>p.category===category);assert.equal(pair.length,2);
   assert.equal(await page.locator('.glass-series').count(),2);
   assert.equal(await page.locator('.glass-series .lg-demo-host').count(),2);
   for(const type of ['A','B']as const){const expected=pair.find(p=>p.designType===type)!;assert.equal(await page.locator(`[data-part][data-design="${type}"]`).last().getAttribute('data-part'),expected.id);}
   const widths=await page.locator('.object-card').evaluateAll(cards=>cards.map(card=>{
    const mount=card.querySelector('.stage-mount')!;
    const root=mount.querySelector(':scope > :not(.lg-demo-scene)')!;
    return {glass:card.classList.contains('glass-series'),width:root.getBoundingClientRect().width};
   }));
   const ordinary=widths.filter(item=>!item.glass).map(item=>item.width).sort((a,b)=>a-b);
   const ordinaryMedian=ordinary[Math.floor(ordinary.length/2)];
   assert.ok(widths.filter(item=>item.glass).every(item=>item.width<=ordinaryMedian+24),`${category}: glass component wider than ordinary parts`);
   if(category==='accordions'||category==='tabs'||category==='segments'){
    await page.locator('.glass-series').first().screenshot({path:path.join(out,`${category}-width.png`)});
    await page.locator('.glass-series').last().screenshot({path:path.join(out,`${category}-width-b.png`)});
   }
  }
 });
 await run('Usual details and background picker work for old and new glass parts',async()=>{
  for(const id of ['lg-lens-toggle','lg-bloom-select','lgc-blocks-lens','lgc-scrollbars-lens','lgc-accordions-lens','lgc-textboxes-lens','lgc-tables-lens','lgc-ornaments-lens']){
   await open(id);assert.equal(await detail.locator('.lg-demo-host').count(),1,id);assert.equal(await detail.locator('.lg-preview-controls').count(),0,id);
   const seen=new Set<string>();for(const [button,scene] of [['studio','coast'],['dark','ink'],['light','paper']]as const){await detail.locator(`[data-bg="${button}"]`).click();assert.equal(await detail.locator('.lg-demo-host').getAttribute('data-lg-scene'),scene,id);assert.equal(await detail.locator('.live-preview').evaluate(el=>el.classList.contains('bg-studio')),true,id);seen.add(await detail.locator('.lg-demo-scene').evaluate(el=>getComputedStyle(el).backgroundColor));}assert.equal(seen.size,3,id);
   if(id==='lgc-tables-lens')await detail.locator('.live-preview').screenshot({path:path.join(out,'table-paper.png')});
   await closeDetail();
  }
 });
 await run('Both glass segment markers glide between choices and respect reduced motion',async()=>{
  await page.emulateMedia({reducedMotion:'no-preference'});
  await selectCategory(page,'segments');
  for(const id of ['lgc-segments-lens','lgc-segments-mist']){
   const motion=await page.locator(`[data-part="${id}"] .sop-segments`).evaluate(async root=>{
    const marker=root.querySelector<HTMLElement>('.sop-choice-marker')!;
    const items=[...root.querySelectorAll<HTMLElement>('.sop-choice-item')];
    const before=marker.getBoundingClientRect().left;
    const target=items[2].getBoundingClientRect().left;
    items[2].querySelector<HTMLInputElement>('input')!.click();
    await new Promise(resolve=>setTimeout(resolve,80));
    const during=marker.getBoundingClientRect().left;
    await new Promise(resolve=>setTimeout(resolve,400));
    return {before,target,during,end:marker.getBoundingClientRect().left,property:getComputedStyle(marker).transitionProperty,value:root.dataset.value};
   });
   assert.ok(motion.property.split(',').map(s=>s.trim()).includes('transform'),`${id}: marker has no transform transition`);
   assert.ok(motion.during>motion.before+3&&motion.during<motion.target-3,`${id}: marker jumped instead of gliding`);
   assert.ok(Math.abs(motion.end-motion.target)<2,`${id}: marker missed target`);
   assert.equal(motion.value,'choice-3');
  }
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const id of ['lgc-segments-lens','lgc-segments-mist'])assert.equal(await page.locator(`[data-part="${id}"] .sop-choice-marker`).evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('Representative code and prompt use the usual delivery path',async()=>{
  for(const id of ['lg-flow-tabs','lgc-segments-lens','lgc-datepickers-mist','lgc-navigation-lens','lgc-ornaments-mist']){
   const part=await open(id),delivery=getDelivery(part,'tsx','portable');
   await detail.locator('[data-format="tsx"]').click();await detail.locator('#export-layout').selectOption('portable');
   const file=delivery.files.find(f=>f.name===delivery.entry)!;
   await detail.locator(`[data-file="${file.name}"]`).click();assert.deepEqual(await detail.locator('.editor .line-code').allTextContents(),file.code.split('\n').map(line=>line||' '),id);
   await detail.locator('[data-detail-tab="prompt"]').click();assert.equal(await detail.locator('#prompt-text').inputValue(),buildPrompt(part,'tsx','portable'));
   await closeDetail();
  }
 });
 await run('Both glass scrollbars stay inside their gallery and detail previews',async()=>{
  for(const width of [1440,390]){
   await page.setViewportSize({width,height:960});
   await selectCategory(page,'scrollbars');
   for(const id of ['lgc-scrollbars-lens','lgc-scrollbars-mist']){
    const card=page.locator(`[data-part="${id}"]`);
    const layout=await card.evaluate(el=>{
     const stage=el.querySelector('.object-stage')!.getBoundingClientRect();
     const root=el.querySelector('.sop-scroll-area')!.getBoundingClientRect();
     const footer=el.querySelector('.card-bottom')!.getBoundingClientRect();
     const viewport=el.querySelector('.sop-scroll-viewport')!;
     return {stageHeight:stage.height,rootBottom:root.bottom,stageBottom:stage.bottom,footerTop:footer.top,scrollable:viewport.scrollHeight>viewport.clientHeight};
    });
    assert.ok(layout.stageHeight<450,`${id} ${width}: stage ${layout.stageHeight}`);
    assert.ok(layout.rootBottom<=layout.stageBottom+2,`${id} ${width}: root escaped stage`);
    assert.ok(layout.stageBottom<=layout.footerTop+2,`${id} ${width}: footer displaced`);
    assert.ok(layout.scrollable,`${id} ${width}: sample cannot scroll`);
    if(id==='lgc-scrollbars-lens'&&width===1440)await card.screenshot({path:path.join(out,'scrollbar-lens-card.png')});
    await open(id);
    const detailLayout=await detail.locator('.preview-stage').evaluate(el=>{
     const stage=el.getBoundingClientRect();
     const root=el.querySelector('.sop-scroll-area')!.getBoundingClientRect();
     const viewport=el.querySelector('.sop-scroll-viewport')!;
     return {stageHeight:stage.height,rootBottom:root.bottom,stageBottom:stage.bottom,scrollable:viewport.scrollHeight>viewport.clientHeight};
    });
    assert.ok(detailLayout.stageHeight<390,`${id} ${width}: detail stage ${detailLayout.stageHeight}`);
    assert.ok(detailLayout.rootBottom<=detailLayout.stageBottom+2,`${id} ${width}: detail root escaped`);
    assert.ok(detailLayout.scrollable,`${id} ${width}: detail cannot scroll`);
    await closeDetail();
   }
  }
 });
 await run('Both glass blocks also remain inside their cards',async()=>{
  await page.setViewportSize({width:1440,height:960});
  await selectCategory(page,'blocks');
  for(const id of ['lgc-blocks-lens','lgc-blocks-mist']){
   const card=page.locator(`[data-part="${id}"]`);
   const fits=await card.evaluate(el=>{
    const stage=el.querySelector('.object-stage')!.getBoundingClientRect();
    const surface=el.querySelector('.sop-surface')!.getBoundingClientRect();
    const footer=el.querySelector('.card-bottom')!.getBoundingClientRect();
    return surface.top>=stage.top-2&&surface.bottom<=stage.bottom+2&&stage.bottom<=footer.top+2;
   });
   assert.ok(fits,id);
  }
 });
 await run('Narrow layouts retain controls and avoid page overflow',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:900});for(const id of ['lgc-accordions-lens','lgc-accordions-mist','lg-flow-tabs','lg-index-tabs','lgc-segments-lens','lgc-segments-mist','lgc-textboxes-mist','lgc-tables-lens']){await open(id);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),id+' '+width);await closeDetail();}}
 });
 assert.deepEqual(errors,[]);console.log('Glass collection gallery:',tests.length,'checks passed');
 await page.close();
}finally{fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({parts:all.parts.length,glass:glass.length,tests,errors},null,2)+'\n');await browser?.close();await close?.();}
