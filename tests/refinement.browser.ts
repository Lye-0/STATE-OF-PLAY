/** v4.3 behavioral/visual invariants. Default: real Vite HTTP. Explicit offline mode never claims Vite. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import type {Browser, Page} from 'playwright';
import type {Part} from '../src/catalog/types.ts';
import {ROOT} from '../scripts/catalog.ts';
import {testBundle} from './offline-fixture.ts';
import {requireLocalServerUrl} from './vite-url.ts';
import {scrollSampleHTML} from '../src/catalog/scroll-sample.ts';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline';
const read=(f:string)=>fs.readFileSync(path.join(ROOT,f),'utf8');
const bases=JSON.parse(read('src/catalog/registry.json')) as string[];
const parts=bases.filter(b=>/src\/parts\/(scrollbars|dropdowns)\//.test(b)).map(base=>{
 const part=JSON.parse(read(base+'/meta.json')) as Part;
 return {...part,base,markup:read(base+'/markup.html').replace('<!-- slot: insert your scrollable content -->',scrollSampleHTML(part))};
});
const expressive=parts.filter(p=>p.designType==='A'), selects=expressive.filter(p=>p.category==='dropdowns'),rails=expressive.filter(p=>p.category==='scrollbars');
function css(file:string,seen=new Set<string>()):string{if(seen.has(file))return '';seen.add(file);return read(file).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,rel:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(file),rel)),seen));}
const seen=new Set<string>();const allCSS=parts.map(p=>css(p.base+'/styles.css',seen)).join('\n');
const duplicateCSS=parts.map(p=>css(p.base+'/styles.css')).join('\n');
const out=path.join(ROOT,'.test-output/refinement');fs.mkdirSync(out,{recursive:true});
const entry='.test-output/refinement/entry.ts';
const source=`import {createSelectController} from '/src/shared/select-controller.ts';import {createScrollArea} from '/src/shared/scroll-area.ts';
const parts=${JSON.stringify(parts)};let api=null;const active=new Set();window.activeFrames=active;const raf=window.requestAnimationFrame.bind(window),cancel=window.cancelAnimationFrame.bind(window);window.requestAnimationFrame=fn=>{const id=raf(t=>{active.delete(id);fn(t)});active.add(id);return id};window.cancelAnimationFrame=id=>{active.delete(id);cancel(id)};
window.unmount=()=>{api?.destroy();api=null;window.api=null;document.getElementById('host').replaceChildren();};
window.mount=(id,mode='demo')=>{window.unmount();const p=parts.find(p=>p.id===id);document.getElementById('host').innerHTML=p.markup;const root=document.getElementById('host').firstElementChild;
if(p.category==='dropdowns'&&mode!=='demo'){
 const panel=root.querySelector('.sop-select-popup');panel.innerHTML='';
 const n=mode==='many'?16:4;for(let i=0;i<n;i++){if(mode==='many'&&i%4===0){const h=document.createElement('div');h.className='sop-select-group';h.textContent='Group '+(i/4+1);panel.append(h);}
 const item=document.createElement('div');item.className='sop-select-option';item.setAttribute('role','option');item.dataset.value='value-'+i;item.dataset.label=['最近更新した順','名前の昇順','作成日の新しい順','優先度の高い順'][i%4];item.setAttribute('aria-selected',String(i===0));
 item.innerHTML=(mode==='icons'?'<span class="sop-select-icon" aria-hidden="true">↗</span>':'')+'<span class="sop-select-option-copy"><b>'+item.dataset.label+'</b>'+(mode==='many'?'<small>補足説明。長い項目も折り返します。</small>':'')+'</span><span class="sop-select-check" aria-hidden="true">✓</span>';panel.append(item);}
 root.dataset.value='value-0';
}
api=p.category==='dropdowns'?createSelectController(root):createScrollArea(root);window.api=api;
};`;
fs.writeFileSync(path.join(ROOT,entry),source);
const shell='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><form id="fixture"><main id="host"></main><button id="reset" type="reset">Reset</button></form><button id="outside">Outside</button><script type="module" src="./entry.ts"></script></body></html>';
fs.writeFileSync(path.join(out,'index.html'),shell);
const hostCSS='*{box-sizing:border-box}body{margin:0;padding:24px;background:#17191c;color:#e4e8e4;font:14px Arial,sans-serif}#host{width:100%;max-width:376px;margin:20px auto;min-height:30px}#host>.sop-scroll-area{height:330px}#host>.sop-select{max-width:100%}#outside,#reset{margin:16px;padding:8px}'+read('src/app/scroll-samples.css');
let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined;
const tests:string[]=[],errors:string[]=[];
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 let url='';if(!offline){const {createServer}=await import('vite');const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();url=requireLocalServerUrl(server,'refinement tests');shutdown=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const page=await browser.newPage({viewport:{width:850,height:850}});page.setDefaultTimeout(6000);page.on('pageerror',e=>errors.push(e.message));
 const prepare=async(p:Page)=>{if(offline){await p.setContent(shell.replace(/<script[\s\S]*?<\/script>/g,''));await p.addScriptTag({content:testBundle(entry,new Map([[entry,source]]))});}else await p.goto(new URL('.test-output/refinement/index.html',url).href);await p.addStyleTag({content:hostCSS});await p.addStyleTag({content:allCSS});await p.evaluate(()=>document.head.lastElementChild!.id='skins');};
 await prepare(page);
 const mount=async(id:string,mode='demo')=>{await page.evaluate(([id,mode])=>(window as any).mount(id,mode),[id,mode]);await page.waitForTimeout(40);};
 const open=async()=>{await page.locator('#host .sop-select-trigger').click();await page.waitForTimeout(280);};
 const signature=()=>page.locator('#host').evaluate(root=>[...root.querySelectorAll('.sop-select-trigger,.sop-select-popup,.sop-select-option,.sop-scroll-track,.sop-scroll-handle')].map(e=>['','::before','::after'].map(p=>{const s=getComputedStyle(e,p||null);return[s.background,s.color,s.borderRadius,s.boxShadow,s.width,s.height]})));
 await page.emulateMedia({reducedMotion:'reduce'});
 await run('all 48 A/B skins: independently bundled CSS and duplicate shared imports agree',async()=>{
  for(const p of parts){await mount(p.id);await page.evaluate(css=>document.getElementById('skins')!.textContent=css,allCSS);const expected=await signature();await page.evaluate(css=>document.getElementById('skins')!.textContent=css,duplicateCSS);assert.deepEqual(await signature(),expected,p.id);await page.evaluate(css=>document.getElementById('skins')!.textContent=css,css(p.base+'/styles.css'));assert.deepEqual(await signature(),expected,p.id);}
  await page.evaluate(css=>document.getElementById('skins')!.textContent=css,allCSS);
 });
 await run('A rail/handle visual dimensions are narrow; invisible hit target remains 34px',async()=>{
  for(const p of rails){await mount(p.id);const box=await page.locator('#host').evaluate(e=>({rail:e.querySelector('.sop-scroll-rail')!.getBoundingClientRect().width,track:e.querySelector('.sop-scroll-track')!.getBoundingClientRect().width,thumb:e.querySelector('.sop-scroll-handle')!.getBoundingClientRect().width}));assert.ok(box.track>=9&&box.track<=12,p.id);assert.ok(box.thumb>=15&&box.thumb<=18,p.id);assert.equal(box.rail,34,p.id);}
 });
 await run('eight progress rails change at .25/.75; others intentionally keep one rail surface',async()=>{
  let enabled=0;for(const p of rails){await mount(p.id);await page.evaluate(()=>(window as any).api.scrollTo(.25));await page.waitForTimeout(30);const before=await page.locator('#host .sop-scroll-fill').evaluate(e=>({opacity:getComputedStyle(e).opacity,transform:getComputedStyle(e).transform}));await page.evaluate(()=>(window as any).api.scrollTo(.75));await page.waitForTimeout(30);const after=await page.locator('#host .sop-scroll-fill').evaluate(e=>getComputedStyle(e).transform);assert.notEqual(before.transform,after,p.id);if(+before.opacity>0)enabled++;assert.equal(await page.locator('#host .sop-scroll-rail').getAttribute('aria-valuenow'),'75');}assert.equal(enabled,8);
 });
 await run('magnetic rail shape follows the actual thumb in both horizontal LTR and RTL',async()=>{
  for(const dir of ['ltr','rtl']){await mount('magnetic-scroll');await page.locator('#host .sop-scroll-area').evaluate((e,dir)=>{e.setAttribute('dir',dir);const c=e.querySelector<HTMLElement>('.sop-scroll-content')!;c.style.width='1800px';},dir);await page.evaluate(()=>(window as any).api.setOrientation('horizontal'));await page.evaluate(()=>(window as any).api.scrollTo(.7));await page.waitForTimeout(60);
   const geometry=await page.locator('#host .sop-scroll-rail').evaluate(e=>{const p=getComputedStyle(e.querySelector('.sop-scroll-track')!,'::before');return{offset:parseFloat((e as HTMLElement).style.getPropertyValue('--sop-thumb-offset')),left:parseFloat(p.left),width:parseFloat(p.width),thumb:parseFloat((e as HTMLElement).style.getPropertyValue('--sop-thumb-size'))};});assert.ok(Math.abs(geometry.left-(geometry.offset-4))<.02,dir);assert.ok(Math.abs(geometry.width-(geometry.thumb+8))<.02,dir); // CSSOM rounds fractional layout pixels.
  }
 });
 await run('A defaults contain no leading icons; text-only choices stay compact and selectable',async()=>{
  for(const p of selects){await mount(p.id);assert.equal(await page.locator('#host .sop-select-icon').count(),0,p.id);await mount(p.id,'plain');await open();const rows=await page.locator('#host [role=option]').evaluateAll(nodes=>nodes.map(e=>e.getBoundingClientRect().height));assert.ok(rows.every(h=>h>=44&&h<=54),p.id);await page.keyboard.press('End');await page.keyboard.press('Enter');assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-3',p.id);}
 });
 await run('supplied icons remain optional, small, and do not introduce mandatory whitespace',async()=>{
  for(const p of selects){await mount(p.id,'icons');await open();const sizes=await page.locator('#host .sop-select-popup .sop-select-icon').evaluateAll(nodes=>nodes.map(e=>e.getBoundingClientRect().width));assert.ok(sizes.length===4&&sizes.every(x=>x===20),p.id);await page.keyboard.press('Escape');}
 });
 await run('keyboard highlight changes the moving plane but does not change the committed check',async()=>{
  for(const p of selects){await mount(p.id,'plain');await open();await page.keyboard.press('ArrowDown');await page.keyboard.press('ArrowDown');const active=page.locator('#host [role=option][data-active=true]');assert.equal(await active.getAttribute('data-value'),'value-2');assert.equal(await page.locator('#host [aria-selected=true]').getAttribute('data-value'),'value-0');const geom=await page.locator('#host .sop-select-popup').evaluate(panel=>{const e=panel.querySelector<HTMLElement>('[data-active=true]')!;return{y:+(panel as HTMLElement).style.getPropertyValue('--sel-plane-y').replace('px',''),h:+(panel as HTMLElement).style.getPropertyValue('--sel-plane-h').replace('px',''),expectedY:e.offsetTop,expectedH:e.offsetHeight}});assert.equal(geom.y,geom.expectedY,p.id);assert.equal(geom.h,geom.expectedH,p.id);await page.keyboard.press('Escape');assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-0');}
 });
 await run('long grouped menus scroll only the popup; moving plane stays on its option',async()=>{
  for(const p of selects){await mount(p.id,'many');await open();const hostBefore=await page.evaluate(()=>window.scrollY);await page.keyboard.press('End');await page.waitForTimeout(50);assert.equal(await page.evaluate(()=>window.scrollY),hostBefore);const geometry=await page.locator('#host .sop-select-popup').evaluate(panel=>{const a=panel.querySelector<HTMLElement>('[data-active=true]')!,r=a.getBoundingClientRect(),b=panel.getBoundingClientRect();return{scroll:panel.scrollTop,y:parseFloat((panel as HTMLElement).style.getPropertyValue('--sel-plane-y')),expectedY:a.offsetTop,inside:r.bottom<=b.bottom+1&&r.top>=b.top-1}});assert.ok(geometry.scroll>0&&geometry.inside,p.id);assert.equal(geometry.y,geometry.expectedY,p.id);}
 });
 await run('content edits and resize update the active-plane geometry without replacing text',async()=>{
  await mount('aurora-select','plain');await open();await page.keyboard.press('ArrowDown');await page.locator('#host [data-active=true] b').evaluate(e=>e.textContent='幅の狭い画面でも長い日本語のラベルを省略せずに折り返して読むことができます');await page.locator('#host').evaluate(e=>e.style.maxWidth='260px');await page.waitForTimeout(120);const g=await page.locator('#host .sop-select-popup').evaluate(e=>{const active=e.querySelector<HTMLElement>('[data-active=true]')!;return{actual:parseFloat((e as HTMLElement).style.getPropertyValue('--sel-plane-h')),expected:active.offsetHeight}});assert.equal(g.actual,g.expected);await page.locator('#host').evaluate(e=>e.style.maxWidth='');
 });
 await run('motion interpolates the plane, never option text or the committed value',async()=>{
  await page.emulateMedia({reducedMotion:'no-preference'});await mount('orbit-select','plain');await open();const row=page.locator('#host [role=option]').nth(3),before=(await row.boundingBox())!;await row.hover();await page.waitForTimeout(25);const moving=await page.locator('#host .sop-select-popup').evaluate(e=>({y:new DOMMatrix(getComputedStyle(e,'::before').transform).m42,end:parseFloat((e as HTMLElement).style.getPropertyValue('--sel-plane-y'))}));assert.ok(Math.abs(moving.y-moving.end)>1);await page.waitForTimeout(300);const after=(await row.boundingBox())!;assert.equal(after.x,before.x);assert.equal(after.y,before.y);assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-0');
 });
 await run('pointer light follows location; fast candidate changes have no delayed commits',async()=>{
  await mount('aurora-select','plain');await open();const row=page.locator('#host [role=option]').nth(2),r=(await row.boundingBox())!;await page.mouse.move(r.x+15,r.y+10);await page.waitForTimeout(30);const left=await page.locator('#host .sop-select-popup').evaluate(e=>(e as HTMLElement).style.getPropertyValue('--sel-light-x'));await page.mouse.move(r.x+r.width-30,r.y+10);await page.waitForTimeout(30);const right=await page.locator('#host .sop-select-popup').evaluate(e=>(e as HTMLElement).style.getPropertyValue('--sel-light-x'));assert.ok(parseFloat(right)>parseFloat(left)+30);await row.click();assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-2');assert.equal(await page.locator('#host .sop-select-trigger').getAttribute('aria-expanded'),'false');
 });
 await run('all A menus support long text on 320/390/768px with no page or list overflow',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});for(const width of [320,390,768]){await page.setViewportSize({width,height:850});for(const p of selects){await mount(p.id,'plain');await page.locator('#host [role=option]').first().evaluate(e=>e.querySelector('b')!.textContent='とても長い日本語の候補でも読みやすさを保って選択できます');await page.evaluate(()=>(window as any).api.refresh());await open();const info=await page.locator('#host .sop-select-popup').evaluate(e=>({overflow:e.scrollWidth-e.clientWidth,doc:document.documentElement.scrollWidth,viewport:innerWidth}));assert.ok(info.overflow<=1&&info.doc<=info.viewport+1,`${p.id}:${width}`);}}
 });
 await run('coarse pointer keeps a 44px rail target without making the visual rail thicker',async()=>{
  const mobile=await browser!.newPage({viewport:{width:390,height:844},hasTouch:true,isMobile:true});await prepare(mobile);await mobile.emulateMedia({reducedMotion:'reduce'});for(const p of rails){await mobile.evaluate(id=>(window as any).mount(id),p.id);await mobile.waitForTimeout(30);const g=await mobile.locator('#host').evaluate(e=>({target:e.querySelector('.sop-scroll-rail')!.getBoundingClientRect().width,visible:e.querySelector('.sop-scroll-track')!.getBoundingClientRect().width}));assert.equal(g.target,44,p.id);assert.ok(g.visible<=12,p.id);}await mobile.close();
 });
 await run('reduced motion disables animation; forced colors keep active selection visible',async()=>{
  await page.setViewportSize({width:800,height:850});await page.emulateMedia({reducedMotion:'reduce'});for(const p of expressive){await mount(p.id,'plain');if(p.category==='dropdowns'){await open();await page.keyboard.press('ArrowDown');}assert.equal(await page.locator('#host').evaluate(e=>e.getAnimations({subtree:true}).some(a=>a.playState==='running')),false,p.id);}
  await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});await mount('capillary');assert.equal(await page.locator('#host .sop-scroll-rail').isVisible(),false);await mount('spectrum-select','plain');await open();await page.keyboard.press('End');assert.equal(await page.locator('#host .sop-select-popup').evaluate(e=>getComputedStyle(e,'::before').display),'none');assert.notEqual(await page.locator('#host [data-active=true]').evaluate(e=>getComputedStyle(e).outlineStyle),'none');await page.keyboard.press('Enter');assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-3');await page.emulateMedia({forcedColors:'none',reducedMotion:'reduce'});
 });
 await run('all redesigned inputs preserve native click/keyboard form reset and disabled behavior',async()=>{
  for(const p of selects){await mount(p.id,'plain');await page.locator('#host [role=option]').last().evaluate(e=>e.setAttribute('aria-disabled','true'));await open();await page.keyboard.press('End');await page.keyboard.press('Enter');assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-2');await page.locator('#reset').click();assert.equal(await page.locator('#host .sop-select-input').inputValue(),'value-0');await page.locator('#host .sop-select-trigger').evaluate(e=>(e as HTMLButtonElement).disabled=true);assert.ok(await page.locator('#host .sop-select-trigger').isDisabled());}
 });
 await run('repeated open/close/dispose leaves zero RAFs, no popovers and no detached-light observers',async()=>{
  await page.emulateMedia({reducedMotion:'no-preference'});for(const p of selects){for(let n=0;n<3;n++){await mount(p.id,'plain');await page.locator('#host .sop-select-trigger').click();await page.keyboard.press('ArrowDown');await page.evaluate(()=>(window as any).unmount());await page.waitForTimeout(35);assert.equal(await page.locator(':popover-open').count(),0,p.id);assert.equal(await page.evaluate(()=>(window as any).activeFrames.size),0,p.id);}}
  await mount('aurora-select','plain');await open();await page.waitForTimeout(450);assert.equal(await page.evaluate(()=>(window as any).activeFrames.size),0);
 });
 assert.deepEqual(errors,[]);
 await page.setViewportSize({width:1000,height:850});await mount('aurora-select','plain');await open();await page.keyboard.press('ArrowDown');await page.waitForTimeout(300);await page.screenshot({path:path.join(out,'text-first.png')});
 console.log(`Refinement: ${tests.length} browser checks passed; ${offline?'offline Chromium (not Vite)':'real Vite HTTP'}.`);
} finally {
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'explicit offline Chromium transport; NOT Vite':'Vite HTTP',tests,passed:tests.length,errors},null,2)+'\n');
 await browser?.close();await shutdown?.();
}
