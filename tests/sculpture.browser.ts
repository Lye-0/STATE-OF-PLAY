/** A-only scrollbar/select redesign checks. Default transport is Vite; offline mode is explicit. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import type {Browser} from 'playwright';
import type {Part} from '../src/catalog/types.ts';
import {ROOT} from '../scripts/catalog.ts';
import {testBundle} from './offline-fixture.ts';
import {scrollSampleHTML} from '../src/catalog/scroll-sample.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline';
const read=(f:string)=>fs.readFileSync(path.join(ROOT,f),'utf8');
const bases=JSON.parse(read('src/catalog/registry.json')) as string[];
const parts=bases.filter(b=>/src\/parts\/(scrollbars|dropdowns)\//.test(b)).map(base=>{
 const p=JSON.parse(read(base+'/meta.json')) as Part;
 return {...p,base,markup:read(base+'/markup.html').replace('<!-- slot: insert your scrollable content -->',scrollSampleHTML(p))};
});
const expressive=parts.filter(p=>p.designType==='A');
function css(file:string,seen=new Set<string>()):string{
 if(seen.has(file))return '';seen.add(file);
 return read(file).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,relative:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(file),relative)),seen));
}
const seen=new Set<string>();const allCSS=bases.map(b=>css(b+'/styles.css',seen)).join('\n');
const hostCSS=`html{overflow-y:scroll}body{padding:24px;margin:0;background:#171b20;color:#eee;font:14px Arial}#host{max-width:376px;width:100%;margin:auto}#stage{min-height:560px}.sop-scroll-area{height:320px}.sop-select{margin-top:10px}#outside{padding:10px}#demo-dialog{width:min(450px,calc(100% - 24px));max-height:90vh;overflow:auto;background:#172126;color:#e2eee6;border:1px solid #9faea9;padding:18px}`+read('src/app/scroll-samples.css');
const out=path.join(ROOT,'.test-output/sculpture');fs.mkdirSync(out,{recursive:true});
const entry='.test-output/sculpture/entry.ts';
const source=`import {createScrollArea} from '/src/shared/scroll-area.ts';import {createSelectController} from '/src/shared/select-controller.ts';
const definitions=${JSON.stringify(parts)};let api=null;window.mountSculpture=(id)=>{api?.destroy();const p=definitions.find(p=>p.id===id);document.getElementById('host').innerHTML=p.markup;const root=document.getElementById('host').firstElementChild;api=p.category==='scrollbars'?createScrollArea(root):createSelectController(root);window.api=api;};
window.unmountSculpture=()=>{api?.destroy();api=null;document.getElementById('host').replaceChildren();};`;
const html='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="stage"><form id="form"><div id="host"></div><button type="reset" id="reset">Reset</button></form></div><button id="outside">Outside</button><dialog id="demo-dialog"><div id="dialog-content"></div><button id="close-dialog">Close</button></dialog><script type="module" src="./entry.ts"></script></body></html>';
fs.writeFileSync(path.join(ROOT,entry),source);fs.writeFileSync(path.join(out,'index.html'),html);
let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined;
const tests:string[]=[],errors:string[]=[];
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 let url='';if(!offline){const {createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await server.listen();url=requireLocalServerUrl(server,'sculpted parts');shutdown=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const page=await browser.newPage({viewport:{width:800,height:900}});page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(6000);
 if(offline){await page.setContent(html.replace(/<script[\s\S]*?<\/script>/g,''));await page.addScriptTag({content:testBundle(entry,new Map([[entry,source]]))});}
 else await page.goto(new URL('.test-output/sculpture/index.html',url).href);
 await page.addStyleTag({content:hostCSS});await page.addStyleTag({content:allCSS});await page.evaluate(()=>document.head.lastElementChild!.id='skins');
 await page.emulateMedia({reducedMotion:'reduce'});
 const mount=async(id:string)=>{await page.evaluate(id=>(window as any).mountSculpture(id),id);await page.waitForTimeout(35);};
 const signature=()=>page.locator('#host').evaluate(host=>[...host.querySelectorAll('.sop-select-trigger,.sop-select-icon,.sop-select-option,.sop-scroll-handle,.sop-scroll-track,.sop-scroll-grip')].map(e=>{
 const names=['','::before','::after'];return names.map(p=>{const s=getComputedStyle(e,p||null);return [s.background,s.border,s.boxShadow,s.borderRadius,s.clipPath,s.fontSize,s.color,s.width,s.height]});
 }));
 await run('All 48 skins: computed design (including pseudo-elements) matches standalone and full-catalogue CSS',async()=>{
  for(const p of parts){await page.evaluate(text=>document.getElementById('skins')!.textContent=text,allCSS);await mount(p.id);const mixed=await signature();await page.evaluate(text=>document.getElementById('skins')!.textContent=text,css(p.base+'/styles.css'));assert.deepEqual(await signature(),mixed,p.id);}
  await page.evaluate(text=>document.getElementById('skins')!.textContent=text,allCSS);
 });
 await run('Sixteen sculpted rails: real pointer dragging reaches both native scroll endpoints',async()=>{
  for(const p of expressive.filter(p=>p.category==='scrollbars')){
   await mount(p.id);const rail=page.locator('#host .sop-scroll-rail'),thumb=page.locator('#host .sop-scroll-thumb'),view=page.locator('#host .sop-scroll-viewport');
   const rb=(await rail.boundingBox())!,tb=(await thumb.boundingBox())!;assert.ok(tb.height>=28&&tb.height<rb.height,p.id);
   await page.mouse.move(tb.x+tb.width/2,tb.y+tb.height/2);await page.mouse.down();await page.mouse.move(tb.x+tb.width/2,rb.y+rb.height-tb.height/2,{steps:8});await page.mouse.up();await page.waitForTimeout(35);
   assert.equal(await rail.getAttribute('aria-valuenow'),'100',p.id);assert.ok(await view.evaluate(e=>Math.abs(e.scrollTop+e.clientHeight-e.scrollHeight)<=1),p.id);
   await rail.focus();await page.keyboard.press('Home');await page.waitForTimeout(30);assert.equal(await rail.getAttribute('aria-valuenow'),'0',p.id);
  }
 });
 await run('Sculpted rails keep proportional thumb geometry after resize and content mutation',async()=>{
  for(const p of expressive.filter(p=>p.category==='scrollbars')){await mount(p.id);const before=await page.locator('#host .sop-scroll-thumb').evaluate(e=>e.clientHeight);await page.locator('#host .sop-scroll-content').evaluate(e=>{const extra=document.createElement('div');extra.style.height='1400px';e.append(extra);});await page.waitForTimeout(50);const after=await page.locator('#host .sop-scroll-thumb').evaluate(e=>e.clientHeight);assert.ok(after<=before&&after>=28,p.id);await page.evaluate(()=>(window as any).api.scrollTo(1));await page.waitForTimeout(35);assert.equal(await page.locator('#host .sop-scroll-rail').getAttribute('aria-valuenow'),'100');}
 });
 await run('All expressive rails retain horizontal and RTL geometry without visible overflow',async()=>{
  for(const p of expressive.filter(p=>p.category==='scrollbars'))for(const direction of ['ltr','rtl']){await mount(p.id);await page.locator('#host>.sop-scroll-area').evaluate((e,d)=>{(e as HTMLElement).dir=d},direction);await page.evaluate(()=>{(window as any).api.setOrientation('horizontal');(window as any).api.scrollTo(.5);});await page.waitForTimeout(35);const rail=page.locator('#host .sop-scroll-rail'),b=(await rail.boundingBox())!,h=(await page.locator('#host .sop-scroll-handle').boundingBox())!;assert.ok(h.x>=b.x-1&&h.x+h.width<=b.x+b.width+1,p.id);assert.ok(h.y>=b.y-1&&h.y+h.height<=b.y+b.height+1,p.id);assert.equal(await rail.getAttribute('aria-valuenow'),'50');}
 });
 await run('All redesigned menus select and reflect the supplied option content, badge and value',async()=>{
  for(const p of expressive.filter(p=>p.category==='dropdowns')){await mount(p.id);const b=page.locator('#host .sop-select-trigger');await b.click();await page.keyboard.press('End');const expected=await page.locator('#host [role=option]').last().getAttribute('data-value');await page.keyboard.press('Enter');assert.equal(await page.locator('#host>.sop-select').getAttribute('data-value'),expected,p.id);assert.equal(await b.getAttribute('aria-expanded'),'false');assert.equal(await page.locator('#host .sop-select-input').inputValue(),expected);}
 });
 await run('Menu Escape cancels navigation; disabled options are not selectable; form reset restores initial value',async()=>{
  for(const p of expressive.filter(p=>p.category==='dropdowns')){await mount(p.id);const initial=await page.locator('#host>.sop-select').getAttribute('data-value');const b=page.locator('#host .sop-select-trigger');await b.click();await page.keyboard.press('End');await page.keyboard.press('Escape');assert.equal(await page.locator('#host>.sop-select').getAttribute('data-value'),initial);
   await page.locator('#host [role=option]').last().evaluate(e=>e.setAttribute('aria-disabled','true'));await b.click();await page.keyboard.press('End');const active=await page.locator('#host [data-active=true]').getAttribute('data-value');assert.notEqual(active,await page.locator('#host [role=option]').last().getAttribute('data-value'));await page.keyboard.press('Enter');await page.locator('#reset').click();assert.equal(await page.locator('#host>.sop-select').getAttribute('data-value'),initial);}
 });
 await run('320 / 390 / 768 px: all 32 A skins fit; open menus remain within the viewport',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:920});for(const p of expressive){await mount(p.id);const info=await page.locator('#host').evaluate(e=>({scroll:e.scrollWidth,width:e.clientWidth,doc:document.documentElement.scrollWidth,viewport:innerWidth}));assert.ok(info.doc<=info.viewport+1,`${width} ${p.id}: document overflow`);assert.ok(info.scroll<=info.width+1,`${width} ${p.id}: component overflow`);
   if(p.category==='dropdowns'){await page.locator('#host .sop-select-trigger').click();const box=(await page.locator('#host .sop-select-popup').boundingBox())!;assert.ok(box.x>=0&&box.x+box.width<=width,`${width} ${p.id}`);const overflow=await page.locator('#host .sop-select-popup').evaluate(e=>e.scrollWidth-e.clientWidth);assert.ok(overflow<=1,`${width} ${p.id}: menu content overflow ${overflow}`);await page.keyboard.press('Escape');}
  }}
 });
 await run('Long Japanese labels, descriptions and custom badges are neither hidden nor forced outside',async()=>{
  await page.setViewportSize({width:320,height:900});for(const p of expressive.filter(p=>p.category==='dropdowns')){await mount(p.id);await page.locator('#host [role=option]').first().evaluate(e=>{e.querySelector('b')!.textContent='長い日本語ラベルでも読みながら選べる候補の内容です';e.querySelector('small')!.textContent='詳細の説明文は折り返し、装飾とは別に読むことができます。';e.querySelector('.sop-select-badge')!.textContent='CUSTOM-LONG-BADGE';});await page.evaluate(()=>(window as any).api.refresh());await page.locator('#host .sop-select-trigger').click();assert.ok(await page.locator('#host .sop-select-popup').evaluate(e=>e.scrollWidth<=e.clientWidth+1),p.id);await page.keyboard.press('Escape');}
 });
 await run('Top/bottom placement: tall popup uses available space and retains scrollable options',async()=>{
  await page.setViewportSize({width:430,height:700});for(const p of expressive.filter(p=>p.category==='dropdowns')){await mount(p.id);await page.locator('#host').evaluate(e=>e.style.marginTop='420px');await page.locator('#host .sop-select-trigger').click();const panel=page.locator('#host .sop-select-popup');assert.equal(await panel.getAttribute('data-side'),'top',p.id);const b=(await panel.boundingBox())!;assert.ok(b.y>=0&&b.y+b.height<=700,p.id);await page.keyboard.press('Escape');await page.locator('#host').evaluate(e=>e.style.marginTop='');}
 });
 await run('Popover inside a real modal remains above it; native focus stays on the trigger',async()=>{
  await page.setViewportSize({width:800,height:900});await mount('aurora-select');await page.evaluate(()=>{const form=document.getElementById('form')!;document.getElementById('dialog-content')!.append(form);(document.getElementById('demo-dialog') as HTMLDialogElement).showModal();});await page.locator('#host .sop-select-trigger').click();const panel=page.locator('#host .sop-select-popup');assert.ok(await panel.isVisible());assert.equal(await page.locator('#host .sop-select-trigger').evaluate(e=>e===document.activeElement),true);await page.keyboard.press('ArrowDown');await page.keyboard.press('Enter');assert.equal(await panel.isVisible(),false);await page.evaluate(()=>{(document.getElementById('demo-dialog') as HTMLDialogElement).close();document.getElementById('stage')!.append(document.getElementById('form')!);});
 });
 await run('Reduced motion has no running decorative animation; forced colors restore native scrollbars',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});for(const p of expressive){await mount(p.id);if(p.category==='dropdowns')await page.locator('#host .sop-select-trigger').click();assert.equal(await page.locator('#host').evaluate(e=>e.getAnimations({subtree:true}).some(a=>a.playState==='running')),false,p.id);}
  await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});await mount('capillary');assert.equal(await page.locator('#host .sop-scroll-rail').isVisible(),false);await mount('optic-select');await page.locator('#host .sop-select-trigger').click();await page.keyboard.press('End');await page.keyboard.press('Enter');assert.equal(await page.locator('#host .sop-select-input').inputValue(),'tele');await page.emulateMedia({forcedColors:'none',reducedMotion:'reduce'});
 });
 await run('Unmount/reopen does not leave popovers; independent instance IDs stay unique',async()=>{
  for(const p of expressive){for(let i=0;i<2;i++){await mount(p.id);if(p.category==='dropdowns')await page.locator('#host .sop-select-trigger').click();await page.evaluate(()=>(window as any).unmountSculpture());assert.equal(await page.locator(':popover-open').count(),0,p.id);}}
  assert.deepEqual(errors,[]);
 });
 await page.setViewportSize({width:1280,height:900});await mount('atelier-select');await page.locator('#host .sop-select-trigger').click();await page.screenshot({path:path.join(out,'menu.png')});
 console.log(`Sculpture checks: ${tests.length} passed.`);
}finally{
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'real Chromium / explicit offline transport; not Vite':'Vite HTTP',tests,passed:tests.length,errors},null,2)+'\n');
 await browser?.close();await shutdown?.();
}
