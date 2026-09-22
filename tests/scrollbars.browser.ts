/** Real browser interaction tests. Set SOP_TEST_MODE=offline only in restricted test runners. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Browser, Page} from 'playwright';
import {ROOT, buildCatalog} from '../scripts/catalog.ts';
import {offlineFiles, testBundle} from './offline-fixture.ts';
import {scrollSampleHTML} from '../src/catalog/scroll-sample.ts';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline';
const out=path.join(ROOT,'.test-output/scrollbars');fs.mkdirSync(out,{recursive:true});
const {parts}=buildCatalog(),bars=parts.filter(p=>p.category==='scrollbars');
const results:string[]=[],errors:string[]=[];
let browser:Browser|undefined,closeServer:(()=>Promise<void>)|undefined;
async function run(name:string,action:()=>Promise<void>){await action();results.push(name);console.log('PASS '+name);}
try {
 let url='';
 if(!offline){const {createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await server.listen();url=server.resolvedUrls!.local[0];closeServer=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext({viewport:{width:1440,height:1000},hasTouch:true});
 await context.addInitScript(()=>{const w=window as unknown as {activeScrollFrames:Set<number>};w.activeScrollFrames=new Set();const request=window.requestAnimationFrame.bind(window),cancel=window.cancelAnimationFrame.bind(window);window.requestAnimationFrame=fn=>{const id=request(t=>{w.activeScrollFrames.delete(id);fn(t);});w.activeScrollFrames.add(id);return id;};window.cancelAnimationFrame=id=>{w.activeScrollFrames.delete(id);cancel(id);};});
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 if(offline) {
  const files=offlineFiles();
  await page.setContent(files.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));
  await page.addStyleTag({content:files.get('/test-styles.css')!});
  for(const vendor of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor/'+vendor+'.js'),'utf8')});
  await page.addScriptTag({content:files.get('/test-app.js')!});
 } else await page.goto(url);
 await page.emulateMedia({reducedMotion:'reduce'});
 const card=(id:string)=>page.locator(`[data-part="${id}"]`);
 await run('new category intersects A/B and retains all 48 original parts',async()=>{
  assert.equal(await page.locator('[data-part]').count(),72);await page.locator('[data-category="scrollbars"]').click();assert.equal(await page.locator('[data-part]').count(),24);
  assert.equal(await page.locator('#toggle-controls').isVisible(),false);
  await page.locator('[data-design-filter="A"]').click();assert.equal(await page.locator('[data-part]').count(),16);
  await page.locator('[data-design-filter="B"]').click();assert.equal(await page.locator('[data-part]').count(),8);await page.locator('[data-design-filter="all"]').click();
 });
 await run('all 24 rails use proportional thumbs, real drag, keyboard and stable content movement',async()=>{
  for(const part of bars) {
   const rail=card(part.id).locator('.sop-scroll-rail'),thumb=card(part.id).locator('.sop-scroll-thumb'),viewport=card(part.id).locator('.sop-scroll-viewport');
   await rail.scrollIntoViewIfNeeded();await page.waitForTimeout(25);assert.ok(await rail.isVisible(),part.id);
   await rail.focus();await page.keyboard.press('Home');await page.waitForTimeout(25);
   const geometry=await viewport.evaluate(v=>({visible:v.clientHeight,content:v.scrollHeight}));const rb=(await rail.boundingBox())!,tb=(await thumb.boundingBox())!;
   assert.ok(Math.abs(tb.height-Math.max(28,rb.height*geometry.visible/geometry.content))<2,part.id+' thumb ratio');
   await page.mouse.move(tb.x+tb.width/2,tb.y+tb.height/2);await page.mouse.down();await page.mouse.move(rb.x+rb.width/2,rb.y+rb.height-tb.height/2,{steps:10});await page.mouse.up();await page.waitForTimeout(35);
   assert.ok(Number(await rail.getAttribute('aria-valuenow'))>=98,part.id+' drag end');
   await rail.focus();await page.keyboard.press('Home');await page.waitForTimeout(35);assert.equal(await viewport.evaluate(v=>v.scrollTop),0);
   await page.keyboard.press('PageDown');await page.waitForTimeout(35);assert.ok(await viewport.evaluate(v=>v.scrollTop>0),part.id);
   assert.equal(await page.locator('#part-details').getAttribute('open'),null);
  }
 });
 await run('wheel and viewport keyboard remain native; interactive content retains clicks',async()=>{
  const viewport=card('capillary').locator('.sop-scroll-viewport');await viewport.scrollIntoViewIfNeeded();await viewport.evaluate(v=>{v.scrollTop=0;const button=document.createElement('button');button.textContent='Child action';button.id='scroll-child-action';button.addEventListener('click',()=>button.dataset.clicked='true');v.querySelector('.sop-scroll-content')!.prepend(button);});
  await page.locator('#scroll-child-action').click();assert.equal(await page.locator('#scroll-child-action').getAttribute('data-clicked'),'true');assert.equal(await page.locator('#part-details').getAttribute('open'),null);
  await viewport.hover();await page.mouse.wheel(0,220);await page.waitForTimeout(220);assert.ok(await viewport.evaluate(v=>v.scrollTop>0));
  await viewport.focus();await page.keyboard.press('Home');await page.keyboard.press('ArrowDown');await page.waitForTimeout(160);assert.ok(await viewport.evaluate(v=>v.scrollTop>0));
 });
 await page.locator('[data-open="capillary"]').click();
 const detail=page.locator('.preview-stage .sop-scroll-area'), rail=detail.locator('.sop-scroll-rail'),viewport=detail.locator('.sop-scroll-viewport');
 await run('detail has scroll controls instead of ON/OFF; track clicking pages the actual content',async()=>{
  assert.equal(await page.locator('[data-state]').count(),0);assert.ok(await page.locator('#scroll-orientation').isVisible());
  await page.locator('[data-jump="0"]').click();await page.waitForFunction(()=>document.querySelector('.preview-stage .sop-scroll-rail')?.getAttribute('aria-valuenow')==='0');await rail.scrollIntoViewIfNeeded();const b=(await rail.boundingBox())!;await page.mouse.click(b.x+b.width/2,b.y+b.height-8);await page.waitForTimeout(80);
  await page.waitForFunction(()=>Number(document.querySelector('.preview-stage .sop-scroll-rail')?.getAttribute('aria-valuenow'))>0);await page.locator('[data-jump="1"]').click();await page.waitForFunction(()=>document.querySelector('.preview-stage .sop-scroll-rail')?.getAttribute('aria-valuenow')==='100');assert.equal(await rail.getAttribute('aria-valuenow'),'100');
 });
 await run('short content hides rail; content mutations and resize update metrics',async()=>{
  await page.locator('#scroll-short').click();await rail.waitFor({state:'hidden'});assert.equal(await rail.isVisible(),false);
  await page.locator('#scroll-short').click();await rail.waitFor({state:'visible'});assert.equal(await rail.isVisible(),true);
  const before=await detail.locator('.sop-scroll-thumb').evaluate(e=>e.clientHeight);
  await detail.locator('.sop-scroll-content').evaluate(e=>{const extra=document.createElement('div');extra.style.height='1500px';e.append(extra);});await page.waitForTimeout(70);
  await page.waitForFunction(before => {const thumb=document.querySelector<HTMLElement>('.preview-stage .sop-scroll-thumb');return !!thumb && thumb.clientHeight>0 && thumb.clientHeight<before;},before,{timeout:5000});
  await detail.evaluate(e=>e.style.height='190px');await page.waitForTimeout(70);assert.equal(await viewport.evaluate(e=>e.clientHeight),190);
  await detail.evaluate(e=>e.style.removeProperty('height'));await page.locator('#scroll-short').click();await page.locator('#scroll-short').click();
 });
 await run('horizontal orientation and RTL preserve physical endpoint/ARIA alignment',async()=>{
  for(const direction of ['ltr','rtl']) {
   await detail.evaluate((e,dir)=>(e as HTMLElement).dir=dir,direction);
   await page.locator('#scroll-orientation').selectOption('vertical');await page.locator('#scroll-orientation').selectOption('horizontal');await page.waitForTimeout(80);
   assert.equal(await rail.getAttribute('aria-orientation'),'horizontal');
   await rail.focus();await page.keyboard.press('End');await page.waitForFunction(()=>document.querySelector('.preview-stage .sop-scroll-rail')?.getAttribute('aria-valuenow')==='100');assert.equal(await rail.getAttribute('aria-valuenow'),'100');
   const box=(await rail.boundingBox())!,thumb=(await detail.locator('.sop-scroll-thumb').boundingBox())!;
   assert.ok(Math.abs(direction==='rtl'?thumb.x-box.x:thumb.x+thumb.width-box.x-box.width)<2,direction+' endpoint');
   assert.ok(await viewport.evaluate(v=>Math.abs(v.scrollLeft)>0));await page.keyboard.press('Home');await page.waitForFunction(()=>document.querySelector('.preview-stage .sop-scroll-rail')?.getAttribute('aria-valuenow')==='0');assert.equal(await rail.getAttribute('aria-valuenow'),'0');
   const handle=(await detail.locator('.sop-scroll-handle').boundingBox())!;assert.ok(handle.width>0&&handle.height>0);
  }
  await detail.evaluate(e=>(e as HTMLElement).dir='ltr');await page.locator('#scroll-orientation').selectOption('vertical');
 });
 await run('touch swipe moves native content without requiring the custom rail',async()=>{
  await page.locator('[data-jump="0"]').click();await viewport.scrollIntoViewIfNeeded();const b=(await viewport.boundingBox())!;
  const cdp=await context.newCDPSession(page);const x=b.x+b.width/2,start=b.y+b.height-30;
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y:start}]});
  for(let i=1;i<=8;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:start-i*20}]});await page.waitForTimeout(16);}
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(200);assert.ok(await viewport.evaluate(v=>v.scrollTop>30));await cdp.detach();
 });
 await run('forced colors uses native scrollbars and returns cleanly to the custom rail',async()=>{
  await page.emulateMedia({forcedColors:'active'});await rail.waitFor({state:'hidden'});assert.equal(await rail.isVisible(),false);assert.equal(await viewport.evaluate(e=>getComputedStyle(e).scrollbarWidth),'auto');
  await page.emulateMedia({forcedColors:'none'});await rail.waitFor({state:'visible'});assert.ok(await rail.isVisible());
 });
 await run('code, guide, prompt and both directory layouts are wired for new parts',async()=>{
  for(const format of ['tsx','jsx','ts','js'])for(const layout of ['portable','original']){
   await page.locator('[data-detail-tab="code"]').click();await page.locator(`[data-format="${format}"]`).click();await page.locator('#export-layout').selectOption(layout);
   assert.ok((await page.locator('.editor code').textContent())!.includes('Scroll')||(await page.locator('.editor code').textContent())!.includes('scroll'));
   await page.locator('[data-detail-tab="prompt"]').click();assert.ok((await page.locator('#prompt-text').inputValue()).includes('ネイティブ'));
  }
  await page.locator('[data-detail-tab="code"]').click();await page.locator('[data-format="tsx"]').click();await page.locator('#export-layout').selectOption('portable');
 });
 await page.locator('[data-jump="0.5"]').click();await page.screenshot({path:path.join(out,'detail.png')});
 await page.locator('.close-detail').click();
 await run('nested scroll areas retain their own skin and orientation',async()=>{
  const isolated=await page.evaluate(()=>{
   const outer=document.querySelector<HTMLElement>('[data-part="capillary"] .sop-scroll-area')!;
   const inner=document.querySelector<HTMLElement>('[data-part="ink-scroll"] .sop-scroll-area')!;
   const parent=inner.parentElement!,next=inner.nextSibling;
   const read=()=>{const handle=getComputedStyle(inner.querySelector('.sop-scroll-handle')!),viewport=getComputedStyle(inner.querySelector('.sop-scroll-viewport')!);return JSON.stringify([handle.backgroundImage,handle.backgroundColor,handle.borderRadius,viewport.overflowX,viewport.overflowY]);};
   const before=read(),orientation=outer.dataset.orientation;
   outer.querySelector('.sop-scroll-content')!.append(inner);outer.dataset.orientation='horizontal';
   const after=read();parent.insertBefore(inner,next);outer.dataset.orientation=orientation;
   return before===after;
  });assert.equal(isolated,true);
 });
 await run('all 24 cards and detail controls fit at 320/390/768px without page overflow',async()=>{
  for(const width of [320,390,768]) {
   await page.setViewportSize({width,height:844});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   for(const part of bars){const root=card(part.id).locator('.sop-scroll-area');const b=(await root.boundingBox())!,c=(await card(part.id).boundingBox())!;assert.ok(b.x>=c.x&&b.x+b.width<=c.x+c.width+1,part.id+width);}
   await page.locator('[data-open="capillary"]').click();assert.ok(await page.locator('.download-file').isVisible());assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   await page.locator('#scroll-orientation').selectOption('horizontal');await page.locator('[data-jump="1"]').click();await page.waitForFunction(()=>document.querySelector('.preview-stage .sop-scroll-rail')?.getAttribute('aria-valuenow')==='100');assert.equal(await page.locator('.preview-stage .sop-scroll-rail').getAttribute('aria-valuenow'),'100');
   if(width===390)await page.screenshot({path:path.join(out,'mobile-390.png')});
   await page.locator('.close-detail').click();
  }
  await page.setViewportSize({width:1440,height:1000});
 });
 await run('24 static rails stop work at rest and have unique controlled viewport identifiers',async()=>{
  await page.waitForTimeout(800);const ids=await page.locator('.object-grid .sop-scroll-viewport').evaluateAll(nodes=>nodes.map(n=>n.id));assert.equal(ids.length,new Set(ids).size);assert.ok(ids.every(Boolean));
  const frames=await page.evaluate(()=>(window as unknown as {activeScrollFrames:Set<number>}).activeScrollFrames.size);assert.equal(frames,0);
  for(let i=0;i<3;i++){await page.locator('[data-category="blocks"]').click();await page.locator('[data-category="scrollbars"]').click();}
  await page.waitForTimeout(800);assert.equal(await page.locator('.object-grid .sop-scroll-area').count(),24);
 });
 await page.locator('#collection').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(out,'gallery.png')});
 assert.deepEqual(errors,[]);
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'offline documents, real Chromium; HTTP/Vite not verified':'real Vite HTTP',passed:results.length,tests:results,errors},null,2)+'\n');
 console.log(`${results.length} scrollbar browser tests passed.`);
} finally {await browser?.close();await closeServer?.();}
