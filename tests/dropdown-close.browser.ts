/** Every dropdown must leave the visible/top-layer tree in the same frame it closes. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT,buildCatalog,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
import {galleryReady} from './gallery-ready.ts';

const affected=buildCatalog().parts.filter(part=>part.category==='dropdowns'&&part.tags.includes('KINETIC'));
assert.equal(affected.length,12);
let deliveries=0;
for(const part of affected)for(const layout of ['portable','original']as const)for(const format of FORMATS){
 const delivery=getDelivery(part,format,layout),files=packageContents(part,format,layout);
 assert.ok(delivery.files.some(file=>file.name===delivery.entry));
 assert.ok(files.some(file=>/kinetic-select\.(ts|js)$/.test(file.name)&&!file.code.includes('kineticClosing')));
 assert.ok(files.some(file=>file.name.endsWith('kinetic-select.css')&&!file.code.includes('[hidden][data-kinetic-closing')));
 assert.equal(files.find(file=>file.name==='PROMPT.md')?.code,buildPrompt(part,format,layout));
 deliveries++;
}
assert.equal(deliveries,96);
console.log(`PASS ${deliveries} Kinetic dropdown exports carry the close fix and current AI prompts`);

const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});
await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 await page.goto(server.resolvedUrls!.local[0]);await galleryReady(page);
 await page.locator('#category-jump').selectOption('dropdowns');await galleryReady(page);
 const ids=await page.locator('[data-part]').evaluateAll(cards=>cards.map(card=>(card as HTMLElement).dataset.part!));
 assert.equal(ids.length,36);
 const failures:string[]=[];
 for(const id of ids){
  const trigger=page.locator(`[data-part="${id}"] .sop-select-trigger`);
  await trigger.click();
  const opened=await trigger.getAttribute('aria-expanded')==='true';
  await trigger.click();
  const state=await page.evaluate(id=>{
   const root=document.querySelector<HTMLElement>(`[data-part="${id}"] .sop-select`)!;
   const trigger=root.querySelector<HTMLButtonElement>('.sop-select-trigger')!;
   const panel=root.querySelector<HTMLElement>('.sop-select-popup')!;
   return {expanded:trigger.getAttribute('aria-expanded'),hidden:panel.hidden,display:getComputedStyle(panel).display,topLayer:panel.matches(':popover-open'),closing:panel.dataset.kineticClosing??''};
  },id);
  if(!opened||state.expanded!=='false'||!state.hidden||state.display!=='none'||state.topLayer)failures.push(`${id}: ${JSON.stringify({opened,...state})}`);
  await page.evaluate(()=>new Promise<void>(resolve=>requestAnimationFrame(()=>resolve())));
  const nextFrame=await page.locator(`[data-part="${id}"] .sop-select-popup`).evaluate(panel=>({display:getComputedStyle(panel).display,topLayer:panel.matches(':popover-open')}));
  if(nextFrame.display!=='none'||nextFrame.topLayer)failures.push(`${id} next frame: ${JSON.stringify(nextFrame)}`);
  await page.waitForTimeout(220);
 }
 for(const id of ids.filter(id=>['liquid-lens-menu','foldout-menu','portal-menu'].includes(id))){
  const trigger=page.locator(`[data-part="${id}"] .sop-select-trigger`);
  await trigger.click();
  await trigger.press('Escape');
  const state=await page.locator(`[data-part="${id}"] .sop-select-popup`).evaluate(panel=>({display:getComputedStyle(panel).display,topLayer:panel.matches(':popover-open')}));
  if(state.display!=='none'||state.topLayer)failures.push(`${id} Escape: ${JSON.stringify(state)}`);
 }
 assert.deepEqual(failures,[],'Closed dropdowns briefly remained painted');
 assert.deepEqual(errors,[]);
 console.log(`PASS ${ids.length} dropdowns are hidden immediately after closing; no open popup remains`);
 await page.close();
}finally{await browser.close();await server.close();}
