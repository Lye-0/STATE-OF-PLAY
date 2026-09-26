import fs from 'node:fs';import assert from 'node:assert/strict';import {chromium} from 'playwright';import {preview} from 'vite';import {ROOT} from '../scripts/catalog.ts';import {selectCategory,galleryReady} from './gallery-ready.ts';
const parts=JSON.parse(fs.readFileSync('src/catalog/registry.json','utf8')).filter((p:string)=>/\/(lg-|lgc-)/.test(p)).map((p:string)=>JSON.parse(fs.readFileSync(p+'/meta.json','utf8')));
const server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}}),browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit'});await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
 for(const part of parts){
  await selectCategory(page,part.category);await galleryReady(page,true);const card=page.locator(`[data-part="${part.id}"]`);await card.locator('.open-part').click();await galleryReady(page,true);
  const detail=page.locator('#part-details'),root=detail.locator('.preview-stage > .lg-root,.preview-stage > .lgc-root');
  const read=()=>root.evaluate(el=>[el,...el.querySelectorAll('*')].flatMap(node=>[null,'::before','::after',...(node.tagName==='DIALOG'?['::backdrop']:[])].map(p=>{const s=getComputedStyle(node,p);return{blur:Number(s.backdropFilter.match(/blur\(([\d.]+)px\)/)?.[1]??0),background:s.background,color:s.color,opacity:s.opacity}})));
  const original=await read();if(!original.some(s=>s.blur>0))console.log(await root.evaluate(el=>({filter:getComputedStyle(el).backdropFilter,blur:getComputedStyle(el).getPropertyValue('--lgc-blur'),scale:getComputedStyle(el).getPropertyValue('--lg-blur-scale')})));assert.ok(original.some(s=>s.blur>0),part.id+' has no sampled glass surface');
  await detail.locator('#glass-blur').fill('0');const clear=await read();assert.ok(clear.every(s=>s.blur===0),part.id+' retains background blur at zero');assert.deepEqual(clear.map(({blur,...s})=>s),original.map(({blur,...s})=>s),part.id+' blur changes transparency or text');
  await detail.locator('#glass-blur').fill('100');const strong=await read();assert.ok(strong.every((s,i)=>Math.abs(s.blur-original[i].blur*2)<.05),part.id+' blur ratio differs');
  await detail.locator('#glass-transparency').fill('80');assert.deepEqual((await read()).map(s=>s.blur),strong.map(s=>s.blur),part.id+' transparency changes blur');
  assert.equal(await card.locator('.lg-root,.lgc-root').first().evaluate(el=>(el as HTMLElement).style.getPropertyValue('--lg-blur-scale')),'');
  await detail.locator('#glass-blur').fill('0');
  const trigger=root.locator('.sop-select-trigger,[data-combo-toggle],[data-popup-open],[data-hint-trigger],[data-calendar-toggle],[data-notify],.wb-command-launch,.wb-context-open,.wb-nav-mobile-open').filter({visible:true}).first();
  if(await trigger.count()){await trigger.click();await page.waitForTimeout(50);assert.ok((await read()).every(s=>s.blur===0),part.id+' expanded surface/backdrop retains blur');}
  await root.evaluate(el=>{el.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(d=>d.close());el.querySelectorAll<HTMLElement>('[popover]').forEach(p=>{try{p.hidePopover()}catch{}})});
  await detail.locator('[data-glass-reset]').click();assert.equal(await detail.locator('#glass-blur').inputValue(),'50');assert.equal(await detail.locator('#glass-transparency').inputValue(),'50');
  if(part.id==='lg-lens-toggle')await detail.locator('.glass-material-controls').screenshot({path:'.test-output/glass-material-controls.png'});
  await detail.locator('.close-detail').click();console.log('PASS '+part.id);
 }
 assert.equal(parts.length,70);assert.deepEqual(errors,[]);console.log('PASS independent transparency and blur across all 70 parts');
}finally{await browser.close();await new Promise<void>(resolve=>server.httpServer.close(()=>resolve()));}
