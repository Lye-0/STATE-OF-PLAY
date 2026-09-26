/** Complete material inventory: exhibit alignment, detail adjustment and open states. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {preview} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {galleryReady,selectCategory} from './gallery-ready.ts';
import {exerciseGlass} from './glass-review-actions.ts';
const bases=JSON.parse(fs.readFileSync(path.join(ROOT,'src/catalog/registry.json'),'utf8')) as string[];
const parts=bases.filter(p=>/\/(lg-|lgc-)/.test(p)).map(base=>JSON.parse(fs.readFileSync(path.join(ROOT,base,'meta.json'),'utf8')));
const out=path.join(ROOT,'.test-output/glass-review');fs.mkdirSync(out,{recursive:true});
const server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}});
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1440,height:1000}});page.setDefaultTimeout(30000);
const errors:string[]=[],report:any[]=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit'});await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 const categories=[...new Set(parts.map(p=>p.category))];
 for(const category of categories.slice(process.env.GLASS_REVIEW_FROM?categories.indexOf(process.env.GLASS_REVIEW_FROM):0)){
  await selectCategory(page,category);await galleryReady(page,true);
  const rowMetrics=await page.locator('.object-card').evaluateAll(cards=>cards.map(card=>{const r=card.getBoundingClientRect(),stage=card.querySelector('.object-stage')!.getBoundingClientRect(),title=card.querySelector('.card-bottom h2')!.getBoundingClientRect();return{id:(card as HTMLElement).dataset.part,top:r.top,height:r.height,stage:stage.height,title:title.top,description:card.querySelector('.card-bottom p')!.getBoundingClientRect().top};}));
  for(let i=0;i<rowMetrics.length-1;i+=2)assert.ok(Math.abs(rowMetrics[i].title-rowMetrics[i+1].title)<2,`${category} caption row: ${JSON.stringify(rowMetrics.slice(i,i+2))}`);
  for(let i=0;i<rowMetrics.length-1;i+=2)if(rowMetrics.slice(i,i+2).some(row=>/^(lg-|lgc-)/.test(row.id??'')))assert.ok(Math.abs(rowMetrics[i].description-rowMetrics[i+1].description)<2,`${category}: descriptions are not aligned`);
  for(const part of parts.filter(p=>p.category===category)){
   const card=page.locator(`[data-part="${part.id}"]`);await card.scrollIntoViewIfNeeded();await card.screenshot({path:path.join(out,part.id+'-exhibit.png')});
   await card.locator('.open-part').click();await galleryReady(page,true);
   const detail=page.locator('#part-details'),root=detail.locator('.preview-stage > .lg-root,.preview-stage > .lgc-root');
   assert.equal(await detail.locator('#glass-transparency').count(),1,part.id);
   const read=()=>root.evaluate(el=>[el,...el.querySelectorAll('*')].flatMap(node=>[null,'::before','::after'].map(pseudo=>{const s=getComputedStyle(node,pseudo);return{background:s.backgroundColor,image:s.backgroundImage,color:s.color,opacity:s.opacity}})));
   const initial=await read();
   await detail.locator('#glass-transparency').fill('80');await page.waitForTimeout(100);const clear=await read();
   const materialChanges=initial.some((s,i)=>s.background!==clear[i]?.background||s.image!==clear[i]?.image);
   const textStable=initial.every((s,i)=>s.color===clear[i]?.color&&s.opacity===clear[i]?.opacity);
   assert.equal(await card.locator('.lg-root,.lgc-root').first().evaluate(el=>(el as HTMLElement).style.getPropertyValue('--lg-density')),'',part.id+' modifies exhibit');
   await detail.locator('[data-detail-tab="prompt"]').click();await page.waitForTimeout(30);assert.match(await detail.locator('#prompt-text').inputValue(),/透明度: 80 \/ 100/);
   await detail.locator('[data-glass-reset]').click();await page.waitForTimeout(40);
   await detail.locator('.live-preview').screenshot({path:path.join(out,part.id+'-detail.png')});
   let shot=0;const actions=await exerciseGlass(page,root,detail,category,async()=>{
    await page.waitForTimeout(80);await page.screenshot({path:path.join(out,part.id+'-state-'+shot+++'.png')});
    await detail.locator('#glass-transparency').evaluate((el:HTMLInputElement)=>{el.value='80';el.dispatchEvent(new Event('input',{bubbles:true}));});
    await page.waitForTimeout(30);
    const floating=await root.locator('dialog[open],[popover]:popover-open').evaluateAll(nodes=>nodes.map(node=>getComputedStyle(node).getPropertyValue('--lg-density').trim()));
    assert.ok(floating.every(value=>Math.abs(Number(value)-(part.designType==='A'?.328:.4))<.001),part.id+' floating material lost transparency');
    await detail.locator('#glass-transparency').evaluate((el:HTMLInputElement)=>{el.value='50';el.dispatchEvent(new Event('input',{bubbles:true}));});
   });
   const metrics=await root.evaluate(el=>{const r=el.getBoundingClientRect();return {width:r.width,height:r.height,white:[...el.querySelectorAll('*')].filter(node=>{const s=getComputedStyle(node),r=node.getBoundingClientRect();return r.width>80&&r.height>30&&/^rgb\(2[34]\d, 2[34]\d, 2[34]\d\)$/.test(s.backgroundColor)&&/^rgb\(2[34]\d, 2[34]\d, 2[34]\d\)$/.test(s.color)}).map(node=>node.className)};});
   report.push({id:part.id,category,actions,materialChanges,textStable,...metrics,exhibit:rowMetrics.find(p=>p.id===part.id)});
   // Close top-layer controls before the parent dialog.
   await root.evaluate(el=>{el.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(d=>d.close());el.querySelectorAll<HTMLElement>('[popover]').forEach(p=>{try{p.hidePopover()}catch{}})});
   await detail.locator('[data-bg="light"]').click();await detail.locator('.live-preview').screenshot({path:path.join(out,part.id+'-light.png')});await detail.locator('[data-bg="studio"]').click();
   await detail.locator('.close-detail').click();console.log('REVIEW '+part.id);
  }
 }
 for(const width of [390,320]){await page.setViewportSize({width,height:900});for(const category of categories){await selectCategory(page,category);await galleryReady(page,true);for(const part of parts.filter(p=>p.category===category)){
  const card=page.locator(`[data-part="${part.id}"]`);await card.scrollIntoViewIfNeeded();
  const bounds=await card.evaluate(el=>{const card=el.getBoundingClientRect(),root=el.querySelector('.stage-mount > .lg-root,.stage-mount > .lgc-root')!.getBoundingClientRect();return {left:root.left-card.left,right:root.right-card.right,overflow:document.documentElement.scrollWidth>innerWidth+2};});
  assert.ok(bounds.left>=-1&&bounds.right<=1&&!bounds.overflow,`${part.id} ${width}: ${JSON.stringify(bounds)}`);
 }}}
 assert.deepEqual(errors,[]);assert.ok(report.every(p=>p.materialChanges&&p.textStable),JSON.stringify(report.filter(p=>!p.materialChanges||!p.textStable).map(p=>p.id)));console.log(`Reviewed ${report.length} glass parts`);
}finally{fs.writeFileSync(path.join(out,'report.json'),JSON.stringify({report,errors},null,2));await browser.close();await new Promise<void>(resolve=>server.httpServer.close(()=>resolve()));}
