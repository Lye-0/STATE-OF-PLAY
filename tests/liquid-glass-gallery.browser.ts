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
 await run('Both glass checkbox groups stay visually centered and clickable',async()=>{
  for(const width of [1440,390,320]){
   await page.setViewportSize({width,height:960});
   await selectCategory(page,'checkboxes');
   for(const id of ['lgc-checkboxes-lens','lgc-checkboxes-mist']){
    const card=page.locator(`[data-part="${id}"]`);
    const alignment=await card.evaluate(el=>{
     const scene=el.querySelector('.lg-demo-scene')!.getBoundingClientRect();
     const box=el.querySelector('.sop-check-box')!.getBoundingClientRect();
     const input=el.querySelector('input')!.getBoundingClientRect();
     const label=el.querySelector('.sop-check-label')!,description=el.querySelector('.sop-check-description')!;
     const a=document.createRange(),b=document.createRange();a.selectNodeContents(label);b.selectNodeContents(description);
     const visibleRight=Math.max(a.getBoundingClientRect().right,b.getBoundingClientRect().right);
     return {offset:(box.left+visibleRight)/2-(scene.left+scene.width/2),hitOffset:input.left-box.left};
    });
    assert.ok(Math.abs(alignment.offset)<8,`${id} ${width}: visible group is off center`);
    assert.ok(Math.abs(alignment.hitOffset)<2,`${id} ${width}: input hit area moved away from the box`);
    if(width===1440)await card.screenshot({path:path.join(out,`${id}-center.png`)});
    await open(id);
    const detailOffset=await detail.locator('.preview-stage').evaluate(el=>{
     const host=el.getBoundingClientRect(),box=el.querySelector('.sop-check-box')!.getBoundingClientRect();
     const label=el.querySelector('.sop-check-label')!,description=el.querySelector('.sop-check-description')!;
     const a=document.createRange(),b=document.createRange();a.selectNodeContents(label);b.selectNodeContents(description);
     return (box.left+Math.max(a.getBoundingClientRect().right,b.getBoundingClientRect().right))/2-(host.left+host.width/2);
    });
    assert.ok(Math.abs(detailOffset)<8,`${id} ${width}: detail group is off center`);
    const input=detail.locator('.sop-check input');
    await input.click();
    assert.equal(await input.isChecked(),id==='lgc-checkboxes-lens');
    await closeDetail();
   }
  }
  await page.setViewportSize({width:1440,height:960});
 });
 await run('Glass popup thumbnails and native dialogs show readable translucent material',async()=>{
  await selectCategory(page,'popups');
  for(const id of ['lgc-popups-lens','lgc-popups-mist']){
   const card=page.locator(`[data-part="${id}"]`);
   const thumbnail=card.locator('.sop-popup-thumbnail > .sop-popup-window');
   assert.ok(await thumbnail.evaluate(el=>getComputedStyle(el).backdropFilter.includes('blur(')),`${id}: thumbnail has no glass blur`);
   await card.screenshot({path:path.join(out,`${id}-thumbnail.png`)});
   await card.locator('.sop-popup-trigger').click();
   const popup=card.locator('dialog.sop-popup-window');
   await popup.waitFor({state:'visible'});
   await page.waitForTimeout(400);
   const material=await popup.evaluate(el=>{
    const windowStyle=getComputedStyle(el),shellStyle=getComputedStyle(el.querySelector('.sop-popup-shell')!);
    const alpha=Number(windowStyle.backgroundColor.match(/[\d.]+/g)?.at(-1)??1);
    const titleColor=getComputedStyle(el.querySelector('h2')!).color.match(/\d+/g)!.map(Number);
    return {modal:el.matches(':modal'),blur:windowStyle.backdropFilter,alpha,shell:shellStyle.backgroundColor,titleColor};
   });
   assert.ok(material.modal&&material.blur.includes('blur('),`${id}: open dialog lacks top-layer glass`);
   assert.ok(material.alpha>0&&material.alpha<.9,`${id}: dialog is opaque`);
   assert.equal(material.shell,'rgba(0, 0, 0, 0)',`${id}: shell covers the glass`);
   assert.ok(material.titleColor.every(channel=>channel>180),`${id}: title is unreadable`);
   if(id==='lgc-popups-mist'){const input=popup.locator('.pp-fields input');await input.fill('新しい名前');assert.equal(await input.inputValue(),'新しい名前');}
   await page.screenshot({path:path.join(out,`${id}-open.png`)});
   await page.keyboard.press('Escape');
   await popup.waitFor({state:'hidden'});
   const root=card.locator('.stage-mount > .sop-popup');
   await root.evaluate(el=>el.setAttribute('data-lg-appearance','light'));
   await card.locator('.sop-popup-trigger').click();
   const light=await popup.evaluate(el=>({color:getComputedStyle(el.querySelector('h2')!).color.match(/\d+/g)!.map(Number),background:getComputedStyle(el).backgroundColor}));
   assert.ok(light.color.every(channel=>channel<100)&&light.background.startsWith('rgba('),`${id}: light glass is unreadable`);
   await page.keyboard.press('Escape');await popup.waitFor({state:'hidden'});
   await root.evaluate(el=>el.setAttribute('data-lg-material','solid'));
   await card.locator('.sop-popup-trigger').click();
   const solid=await popup.evaluate(el=>({background:getComputedStyle(el).backgroundColor,blur:getComputedStyle(el).backdropFilter}));
   assert.ok(solid.background.startsWith('rgb(')&&solid.blur==='none',`${id}: solid fallback remains translucent`);
   await page.keyboard.press('Escape');await popup.waitFor({state:'hidden'});
   await root.evaluate(el=>{el.removeAttribute('data-lg-material');el.removeAttribute('data-lg-appearance');});
   await open(id);
   await detail.locator('.sop-popup-trigger').click();
   const nested=detail.locator('dialog.sop-popup-window');
   assert.ok(await nested.evaluate(el=>el.matches(':modal')),`${id}: popup does not open above details`);
   await page.keyboard.press('Escape');
   await nested.waitFor({state:'hidden'});
   assert.ok(await detail.isVisible(),`${id}: closing popup also closed details`);
   await closeDetail();
  }
 });
 await run('Glass combobox result lists use styled scrollbars and remain scrollable',async()=>{
  for(const id of ['lgc-comboboxes-lens','lgc-comboboxes-mist']){
   await open(id);
   const preview=detail.locator(`[data-preview-part="${id}"]`);
   const input=preview.locator('[data-combo]');
   await input.press('ArrowDown');
   const results=preview.locator('[data-results]');
   await page.waitForFunction(id=>{const el=document.querySelector(`#part-details [data-preview-part="${id}"] [data-results]`);return !!el&&el.clientHeight>0&&el.scrollHeight>el.clientHeight;},id);
   const initial=await results.evaluate(el=>({width:getComputedStyle(el).scrollbarWidth,color:getComputedStyle(el).scrollbarColor,scrollable:el.scrollHeight>el.clientHeight,button:getComputedStyle(el,'::-webkit-scrollbar-button').display,blur:getComputedStyle(el.closest('.ff-combo-list')!).backdropFilter}));
   assert.equal(initial.width,'thin',`${id}: browser default scrollbar width`);
   assert.notEqual(initial.color,'auto',`${id}: browser default scrollbar color`);
   assert.equal(initial.button,'none',`${id}: native scrollbar arrows remain`);
   assert.ok(initial.scrollable,`${id}: results cannot scroll`);
   assert.ok(initial.blur.includes('blur('),`${id}: glass panel lost its backdrop blur`);
   await results.evaluate(el=>el.scrollTop=el.scrollHeight);
   const end=await results.evaluate(el=>({top:el.scrollTop,max:el.scrollHeight-el.clientHeight,last:el.lastElementChild?.getBoundingClientRect().bottom??0,bottom:el.getBoundingClientRect().bottom}));
   assert.ok(end.top>0&&Math.abs(end.max-end.top)<2&&end.last<=end.bottom+2,`${id}: last option is unreachable`);
   await page.screenshot({path:path.join(out,`${id}-scrollbar.png`)});
   await input.press('Escape');
   assert.equal(await input.getAttribute('aria-expanded'),'false');
   await closeDetail();
  }
 });
 await run('Floating notices remain clearer than Mist in the actual top layer',async()=>{
  const measured:Record<string,Record<string,{alpha:number;blur:string}>>={studio:{},light:{}};
  for(const id of ['lgc-toasts-lens','lgc-toasts-mist']){
   await open(id);
   const preview=detail.locator(`[data-preview-part="${id}"]`);
   const sample=preview.locator('.ff-notice-sample');
   assert.ok(await sample.evaluate(el=>getComputedStyle(el).backdropFilter.includes('blur(')),`${id}: showcase lost glass blur`);
   const notice=preview.locator('.ff-toast-stack .ff-notice');
   for(const scene of ['studio','light']){
    await detail.locator(`[data-bg="${scene}"]`).click();
    await page.waitForTimeout(360);
    const sampleAlpha=await sample.evaluate(el=>Number(getComputedStyle(el).backgroundColor.match(/[\d.]+/g)?.at(-1)??1));
    await preview.locator('[data-notify]').click();
    await notice.waitFor({state:'visible'});
    await page.waitForTimeout(300);
    const material=await notice.evaluate(el=>{
     const style=getComputedStyle(el),alpha=Number(style.backgroundColor.match(/[\d.]+/g)?.at(-1)??1);
     return {alpha,blur:style.backdropFilter};
    });
    assert.ok(material.blur.includes('blur('),`${id} ${scene}: live notice lost backdrop blur`);
    assert.ok(Math.abs(material.alpha-sampleAlpha)<0.02,`${id} ${scene}: showcase and live notice differ`);
    measured[scene][id]=material;
    await page.screenshot({path:path.join(out,`${id}-${scene}-live.png`)});
    await notice.locator('[data-notice-close]').click();
    await notice.waitFor({state:'hidden'});
   }
   await preview.locator('.sop-foundation').evaluate(el=>el.setAttribute('data-lg-material','solid'));
   await preview.locator('[data-notify]').click();
   await notice.waitFor({state:'visible'});
   const solid=await notice.evaluate(el=>({background:getComputedStyle(el).backgroundColor,blur:getComputedStyle(el).backdropFilter}));
   assert.ok(solid.background.startsWith('rgb(')&&solid.blur==='none',`${id}: solid notice still transmits the background`);
   await notice.locator('[data-notice-close]').click();
   await notice.waitFor({state:'hidden'});
   await closeDetail();
  }
  for(const scene of ['studio','light'])assert.ok(measured[scene]['lgc-toasts-lens'].alpha+0.35<measured[scene]['lgc-toasts-mist'].alpha,`${scene}: Floating and Mist have nearly the same opacity: ${JSON.stringify(measured[scene])}`);
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
