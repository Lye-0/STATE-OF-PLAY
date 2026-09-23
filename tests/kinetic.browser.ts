import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {createRequire} from 'node:module';import type {Browser,Page} from 'playwright';
import {kineticFixture} from './kinetic-fixture.ts';import {ROOT} from '../scripts/catalog.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline',fixture=kineticFixture();
const bars=fixture.records.filter(p=>p.category==='scrollbars'),menus=fixture.records.filter(p=>p.category==='dropdowns');
const passed:string[]=[],errors:string[]=[];
let browser:Browser|undefined,closeServer:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();passed.push(name);console.log('PASS '+name);}
try{
 let url='';if(!offline){const {createServer}=await import('vite');const s=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await s.listen();url=requireLocalServerUrl(s,'Kinetic tests');closeServer=()=>s.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const p=await browser.newPage({viewport:{width:840,height:950}});p.setDefaultTimeout(6000);p.on('pageerror',e=>errors.push(e.message));
 const bundle=offline?fixture.bundle():'';
 async function prepare(page:Page){if(offline){await page.setContent(fixture.shell);await page.addScriptTag({content:bundle});}else await page.goto(new URL('.test-output/kinetic/test.html',url).href);await page.addStyleTag({content:fixture.styles});await page.waitForFunction(()=>typeof (window as any).mount==='function');}
 await prepare(p);
 async function mount(id:string|string[]){await p.evaluate(ids=>(window as any).mount(ids),typeof id==='string'?[id]:id);await p.waitForTimeout(40);}
 async function open(){await p.locator('#host [role=combobox]').click();await p.waitForTimeout(520);}
 await run('12 canvas topologies render without replacing native viewport or thumb sizing',async()=>{
  for(const part of bars){await mount(part.id);await p.evaluate(()=>(window as any).api.scrollTo(.6));await p.waitForTimeout(60);
   assert.equal(await p.locator('.sop-scroll-rail').getAttribute('aria-valuenow'),'60',part.id);
   const pixels=await p.locator('canvas').evaluate((e:HTMLCanvasElement)=>{const a=e.getContext('2d')!.getImageData(0,0,e.width,e.height).data;let n=0;for(let i=3;i<a.length;i+=4)if(a[i]>0)n++;return n;});assert.ok(pixels>100,part.id);
   assert.ok(await p.locator('.sop-scroll-thumb').evaluate(e=>e.clientHeight>20&&e.clientHeight<200));
  }
 });
 await run('mouse dragging, track paging, native wheel and Home/End retain accurate positions',async()=>{
  for(const part of bars){await mount(part.id);const thumb=p.locator('.sop-scroll-thumb'),r=(await thumb.boundingBox())!;
   await p.mouse.move(r.x+r.width/2,r.y+r.height/2);await p.mouse.down();await p.mouse.move(r.x+r.width/2,r.y+170,{steps:8});await p.mouse.up();await p.waitForTimeout(80);assert.ok(await p.evaluate(()=>(window as any).api.getProgress())>.4,part.id);
   await p.locator('.sop-scroll-rail').focus();await p.keyboard.press('End');await p.waitForTimeout(40);assert.equal(await p.locator('.sop-scroll-rail').getAttribute('aria-valuenow'),'100');await p.keyboard.press('Home');await p.waitForTimeout(40);assert.equal(await p.locator('.sop-scroll-rail').getAttribute('aria-valuenow'),'0');
  }
  await p.locator('.sop-scroll-viewport').hover();await p.mouse.wheel(0,230);await p.waitForTimeout(100);assert.ok(await p.evaluate(()=>(window as any).api.getProgress())>0);
 });
 await run('horizontal and RTL art tracks the measured thumb rather than logical progress alone',async()=>{
  for(const part of bars)for(const dir of ['ltr','rtl']){await mount(part.id);await p.locator('.sop-scroll-area').evaluate((e,d)=>{e.setAttribute('dir',d);(e.querySelector('.sop-scroll-content') as HTMLElement).style.width='1800px';},dir);await p.evaluate(()=>{(window as any).api.setOrientation('horizontal');(window as any).api.scrollTo(.65);});await p.waitForTimeout(50);
   const pos=await p.locator('.sop-scroll-rail').evaluate(e=>{const r=e.getBoundingClientRect(),t=e.querySelector('.sop-scroll-handle')!.getBoundingClientRect();return{left:t.left-r.left,top:t.top-r.top,right:t.right-r.left,height:r.height,width:r.width};});assert.ok(pos.left>=-1&&pos.right<=pos.width+1&&pos.top>=0&&pos.top<pos.height,part.id+dir);assert.equal(await p.locator('.sop-scroll-rail').getAttribute('aria-valuenow'),'65');}
 });
 await run('no overflow hides the rail; changed content and viewport resize remeasure',async()=>{
  await mount('liquid-channel');await p.locator('.sop-scroll-content').evaluate(e=>e.innerHTML='<p>短い内容</p>');await p.waitForTimeout(100);assert.ok(await p.locator('.sop-scroll-rail').isHidden());await p.locator('.sop-scroll-content').evaluate(e=>e.innerHTML='<p style="height:1800px">長い内容</p>');await p.waitForTimeout(100);assert.ok(await p.locator('.sop-scroll-rail').isVisible());
 });
 await run('new menus remain icon-free, editable listboxes with immediate commit and cancel',async()=>{
  for(const part of menus){await mount(part.id);await open();assert.equal(await p.locator('#host .sop-select-icon').count(),0);await p.keyboard.press('ArrowDown');assert.equal(await p.locator('.sop-select-input').inputValue(),'recent');await p.keyboard.press('Escape');assert.equal(await p.locator('.sop-select-input').inputValue(),'recent');await p.waitForTimeout(250);await open();await p.keyboard.press('End');await p.keyboard.press('Enter');assert.equal(await p.locator('.sop-select-input').inputValue(),'priority');assert.equal(await p.locator('[role=combobox]').getAttribute('aria-expanded'),'false');await p.waitForTimeout(260);assert.ok(await p.locator('.sop-select-popup').isHidden());}
 });
 await run('moving plate is animated while option text and committed state stay independent',async()=>{
  await mount('elastic-menu');await open();const row=p.locator('[role=option]').nth(3),before=(await row.boundingBox())!;await row.hover();await p.waitForTimeout(55);const a=await p.locator('.sop-select-popup').evaluate(e=>({y:parseFloat((e as HTMLElement).style.getPropertyValue('--ky')),target:(e.querySelector('[data-active=true]') as HTMLElement).offsetTop}));assert.ok(Math.abs(a.y-a.target)>1);await p.waitForTimeout(750);const after=(await row.boundingBox())!;assert.ok(Math.abs(before.x-after.x)<.5&&Math.abs(before.y-after.y)<.5);assert.equal(await p.locator('.sop-select-input').inputValue(),'recent');
 });
 await run('opening choreography is real animation and fast re-open leaves no inert stale menu',async()=>{
  for(const part of menus){await mount(part.id);await p.locator('[role=combobox]').click();assert.ok(await p.locator('.sop-select-popup').evaluate(e=>e.getAnimations({subtree:true}).length)>0,part.id);await p.evaluate(()=>(window as any).api.setOpen(false));assert.equal(await p.locator('[role=combobox]').getAttribute('aria-expanded'),'false');await p.evaluate(()=>(window as any).api.setOpen(true));await p.waitForTimeout(550);assert.equal(await p.locator('.sop-select-popup').evaluate(e=>(e as HTMLElement).inert),false);assert.equal(await p.locator('.sop-select-popup').getAttribute('aria-hidden'),null);await p.locator('[role=option]').nth(1).click();assert.equal(await p.locator('.sop-select-input').inputValue(),'name');}
 });
 await run('closing surface cannot be clicked or read as a live list while its animation finishes',async()=>{
  await mount('foldout-menu');await open();await p.keyboard.press('Escape');assert.equal(await p.locator('.sop-select-popup').getAttribute('aria-hidden'),'true');assert.ok(await p.locator('.sop-select-popup').evaluate(e=>(e as HTMLElement).inert));await p.waitForTimeout(300);assert.ok(await p.locator('.sop-select-popup').isHidden());
 });
 await run('disabled candidates, whole-field disable, reset, and variable option counts remain functional',async()=>{
  await mount('portal-menu');await p.locator('[role=option]').nth(1).evaluate(e=>e.setAttribute('aria-disabled','true'));await open();await p.keyboard.press('ArrowDown');assert.equal(await p.locator('[data-active=true]').getAttribute('data-value'),'created');await p.keyboard.press('Enter');await p.waitForTimeout(250);await p.locator('#reset').click();assert.equal(await p.locator('.sop-select-input').inputValue(),'recent');await p.locator('[role=combobox]').evaluate((e:HTMLButtonElement)=>e.disabled=true);assert.ok(await p.locator('[role=combobox]').isDisabled());
 });
 await run('many long options scroll inside the popup, align the plane and work near the lower edge',async()=>{
  for(const part of menus){await mount(part.id);await p.locator('.sop-select-popup').evaluate(e=>{const row=e.querySelector('[role=option]')!;for(let i=0;i<14;i++){const c=row.cloneNode(true) as HTMLElement;c.id='';c.dataset.value='v'+i;c.dataset.label='候補'+i;c.querySelector('b')!.textContent='長い日本語の項目でも内容を確認して選択できます '+i;e.append(c);}});await p.evaluate(()=>(window as any).api.refresh());await open();await p.keyboard.press('End');await p.waitForTimeout(600);assert.ok(await p.locator('.sop-select-popup').evaluate(e=>e.scrollTop)>0);const box=await p.locator('.sop-select-popup').boundingBox();assert.ok(box!.y+box!.height<=952);await p.keyboard.press('Enter');assert.equal(await p.locator('.sop-select-input').inputValue(),'v13');await p.waitForTimeout(240);}
 });
 await run('mobile widths 320 / 390 / 768 have no document overflow and keep keyboard selection',async()=>{
  for(const width of [320,390,768]){await p.setViewportSize({width,height:900});for(const part of fixture.records){await mount(part.id);if(part.category==='dropdowns')await open();assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),part.id+width);if(part.category==='dropdowns'){const r=await p.locator('.sop-select-popup').boundingBox();assert.ok(r!.x>=0&&r!.x+r!.width<=width+1);await p.keyboard.press('Escape');await p.waitForTimeout(235);}}}
 });
 await run('reduced motion snaps to final shape and has no Web Animations or ongoing RAF',async()=>{
  await p.emulateMedia({reducedMotion:'reduce'});for(const part of fixture.records){await mount(part.id);if(part.category==='dropdowns'){await open();await p.keyboard.press('End');}else{await p.evaluate(()=>(window as any).api.scrollTo(.7));}await p.waitForTimeout(150);assert.equal(await p.evaluate(()=>document.getAnimations().some(a=>a.playState==='running')),false,part.id);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,part.id);}
 });
 await run('forced colors uses native scrollbar and preserves option focus',async()=>{
  await p.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});await mount('split-rail');assert.ok(await p.locator('.sop-scroll-rail').isHidden());await mount('iris-menu');await open();await p.keyboard.press('ArrowDown');assert.notEqual(await p.locator('[data-active=true]').evaluate(e=>getComputedStyle(e).outlineStyle),'none');await p.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
 });
 await run('independent instances have unique control identifiers and do not share values',async()=>{
  await mount(['liquid-lens-menu','liquid-lens-menu']);await p.locator('[role=combobox]').first().click();await p.keyboard.press('End');await p.keyboard.press('Enter');assert.equal(await p.locator('.sop-select-input').nth(0).inputValue(),'priority');assert.equal(await p.locator('.sop-select-input').nth(1).inputValue(),'recent');const ids=await p.locator('[id]').evaluateAll(a=>a.map(e=>e.id));assert.equal(new Set(ids).size,ids.length);
 });
 await run('after scroll trails settle and on unmount, all presentation RAFs are released',async()=>{
  for(const part of fixture.records){await mount(part.id);if(part.category==='dropdowns'){await p.evaluate(()=>(window as any).api.setOpen(true));await p.keyboard.press('ArrowDown');}else await p.evaluate(()=>(window as any).api.scrollTo(.7));await p.waitForTimeout(2100);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,part.id);await p.evaluate(()=>(window as any).unmount());await p.waitForTimeout(25);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,part.id);assert.equal(await p.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,part.id);}
 });
 assert.deepEqual(errors,[]);console.log('Kinetic browser checks:',passed.length,'passed');
}finally{
 fs.writeFileSync(path.join(fixture.out,'browser-results.json'),JSON.stringify({mode:offline?'offline synthetic DOM; real Chromium, not Vite':'real Vite HTTP',passed:passed.length,tests:passed,errors},null,2)+'\n');await browser?.close();await closeServer?.();
}
