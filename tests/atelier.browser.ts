/** Visual containment and interaction checks for Atelier. Default mode is a real Vite server.
 * The explicit offline mode only changes transport; real DOM/controllers/CSS still execute. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import type {Browser,Page} from 'playwright';
import type {Part} from '../src/catalog/types.ts';
import {ROOT} from '../scripts/catalog.ts';
import {testBundle} from './offline-fixture.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const req=createRequire(import.meta.url), {chromium}=req(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline';
const read=(name:string)=>fs.readFileSync(path.join(ROOT,name),'utf8');
const bases=JSON.parse(read('src/catalog/registry.json')) as string[];
const all=bases.map(base=>({...JSON.parse(read(base+'/meta.json')),base,markup:read(base+'/markup.html')})) as (Part&{base:string})[];
const parts=all.filter(p=>p.foundation),target=parts.filter(p=>p.designType==='A'&&p.category!=='loaders');
function css(file:string,seen=new Set<string>()):string{if(seen.has(file))return '';seen.add(file);return read(file).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,name:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(file),name)),seen));}
const seen=new Set<string>(),mixed=bases.map(base=>css(base+'/styles.css',seen)).join('\n');
const out=path.join(ROOT,'.test-output/atelier');fs.mkdirSync(out,{recursive:true});
const entry='.test-output/atelier/entry.ts';
const source=parts.map((p,i)=>`import {init as init${i}} from '/${p.base}/vanilla/init.ts';`).join('\n')+`
import {mountFoundationSample} from '/src/app/foundation-preview.ts';
const definitions=[${parts.map((p,i)=>`{...${JSON.stringify(p)},init:init${i}}`).join(',')}];let api=null,cleanup=null;window.changes=[];
window.mountArt=(id,options={})=>{cleanup?.();api?.destroy();const p=definitions.find(p=>p.id===id);const host=document.getElementById('host');host.innerHTML=p.markup;const root=host.firstElementChild;api=p.init(root,{onDataChange:v=>window.changes.push(v),...options});cleanup=mountFoundationSample(root,p,api);window.api=api;};
window.unmountArt=()=>{cleanup?.();api?.destroy();api=null;document.getElementById('host').replaceChildren();};`;
const html=`<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><main><form id="test-form"><div id="host"></div><button type="reset" id="reset">Reset</button></form></main><button id="outside">Outside</button><script type="module" src="./entry.ts"></script></body></html>`;
const hostCSS='body{margin:0;padding:36px;background:#181a1b;color:#ecede6;font:14px Arial}#host{width:100%;max-width:360px;margin:12px auto}#reset,#outside{margin:20px;padding:12px}main{min-height:650px}.foundation-inline-demo{margin-top:14px}';
fs.writeFileSync(path.join(ROOT,entry),source);fs.writeFileSync(path.join(out,'index.html'),html);
const results:string[]=[],errors:string[]=[];let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();results.push(name);console.log('PASS '+name);}
try{
 let origin='';if(!offline){const {createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await server.listen();origin=requireLocalServerUrl(server,'Atelier tests');shutdown=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1024,height:900}});page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(6000);await page.emulateMedia({reducedMotion:'reduce'});
 if(offline){await page.setContent(html.replace(/<script[^>]*>[\s\S]*?<\/script>/g,''));await page.addScriptTag({content:testBundle(entry,new Map([[entry,source]]))});}else await page.goto(new URL('.test-output/atelier/index.html',origin).href);
 await page.addStyleTag({content:hostCSS});await page.evaluate(()=>{const style=document.createElement('style');style.id='skins';document.head.append(style);});
 const setCSS=(text:string)=>page.evaluate(text=>{document.getElementById('skins')!.textContent=text;},text);
 const mount=(id:string,options:Record<string,unknown>={})=>page.evaluate(({id,options})=>(window as any).mountArt(id,options),{id,options});
 const update=(options:Record<string,unknown>)=>page.evaluate(options=>(window as any).api.updateFoundation(options),options);
 const signature=()=>page.evaluate(()=>{const root=document.querySelector('#host>.sop-foundation')!;const nodes=[root,...root.querySelectorAll('.ff-choice,.ff-choice-icon,.ff-combo-shell,.ff-progress-visual,.ff-loader-core,.ff-loader-bars,.ff-orbit,.ff-reading,.ff-tag,.ff-stepper,.ff-notice,.ff-pages,.ff-breadcrumb,.ff-dropzone,.ff-hint-trigger,.ff-date-fields,.ff-heading')];return nodes.map(el=>{const s=getComputedStyle(el);return [el.className,s.display,s.backgroundImage,s.backgroundColor,s.borderRadius,s.borderWidth,s.boxShadow,s.color,s.fontFamily,s.fontSize,s.clipPath];});});
 await run('All 284 skins: mixed catalogue and standalone computed designs match (no sibling CSS leakage)',async()=>{
  for(const p of parts){await setCSS(mixed);await mount(p.id);const together=await signature();await setCSS(css(p.base+'/styles.css'));assert.deepEqual(await signature(),together,p.id);}
 });
 await setCSS(mixed);
 await run('All 171 redesigned parts fit 320 / 390 / 768 px without cutting off the input area',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:920});for(const p of target){await mount(p.id);const data=await page.locator('#host>.sop-foundation').evaluate(root=>({width:root.getBoundingClientRect().width,scroll:root.scrollWidth,client:root.clientWidth,body:document.documentElement.scrollWidth,viewport:innerWidth}));assert.ok(data.body<=data.viewport+1,`${width} ${p.id}: page overflow ${JSON.stringify(data)}`);assert.ok(data.scroll<=data.client+2,`${width} ${p.id}: component overflow ${JSON.stringify(data)}`);}}
 });
 await page.setViewportSize({width:1024,height:900});
 await run('Sixteen material sliders: native keyboard, range bounds, disabled state and thumb alignment',async()=>{
  for(const p of target.filter(p=>p.category==='sliders')){await mount(p.id,{range:false,min:0,max:100,step:1});const input=page.locator('#host input[data-range]').first();await input.focus();await input.press('End');assert.equal(await input.inputValue(),'100');await input.press('Home');assert.equal(await input.inputValue(),'0');await input.press('ArrowRight');assert.equal(await input.inputValue(),'1');await update({disabled:true});assert.ok(await input.isDisabled());}
 });
 await run('All A choice cards: native inputs remain reachable above decorative material layers',async()=>{
  for(const p of target.filter(p=>p.category==='radios')){await mount(p.id);const input=page.locator('#host input[type=radio]').last();await input.check();assert.ok(await input.isChecked());assert.equal(await page.locator('#host .ff-choice[data-selected=true]').count(),1);}
 });
 await run('All A tag styles: selecting and removing tags preserve independent interactive targets',async()=>{
  for(const p of target.filter(p=>p.category==='badges')){await mount(p.id,{selectable:true,removable:true,items:[{value:'a',label:'One'},{value:'b',label:'Two'}]});const input=page.locator('#host input[type=checkbox]').first();await input.check();assert.ok(await input.isChecked());await page.locator('#host [data-tag-remove=b]').click();assert.equal(await page.locator('#host .ff-tag').count(),1);}
 });
 await run('Open A menus and calendars stay inside a 320 px viewport; Escape / outside dismissal works',async()=>{
  await page.setViewportSize({width:320,height:860});for(const p of target.filter(p=>['comboboxes','datepickers','hints'].includes(p.category))){await mount(p.id);await page.evaluate(()=>(window as any).api.show?.());const panel=page.locator('#host .ff-floating').first();if(await panel.isVisible()){const r=await panel.boundingBox();assert.ok(r&&r.x>=-1&&r.x+r.width<=321,p.id);await page.locator('#outside').click();assert.equal(await panel.isVisible(),false,p.id);}}
 });
 await page.setViewportSize({width:1024,height:900});
 await run('Breadcrumb menus begin hidden, open on demand, and return to hidden after content updates',async()=>{
  for(const p of parts.filter(p=>p.category==='breadcrumbs')){await mount(p.id);const panel=page.locator('#host [data-crumb-menu]');assert.equal(await panel.isVisible(),false);const more=page.locator('#host [data-crumb-more]');if(await more.count()){await more.click();assert.equal(await panel.isVisible(),true);await update({label:'Changed'});assert.equal(await panel.isVisible(),false);}}
 });
 await run('Light material legends and detached captions keep their own opaque backing',async()=>{
  for(const id of ['folio-choice','botanical-choice','ceramic-choice','folio-finder','botanical-calendar','ceramic-stepper']){await mount(id);const label=page.locator('#host .ff-heading,#host legend').first();const bg=await label.evaluate(el=>getComputedStyle(el).backgroundColor);assert.notEqual(bg,'rgba(0, 0, 0, 0)',id);}
 });
 await run('Reduced motion disables decorative animations; forced colors retain native focus and selected states',async()=>{
  for(const p of target.filter(p=>['sliders','radios','progress'].includes(p.category))){await mount(p.id);assert.equal(await page.locator('#host').evaluate(root=>root.getAnimations({subtree:true}).some(a=>a.playState==='running')),false,p.id);}
  await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});await mount('mercury-choice');await page.locator('#host input[type=radio]').last().check();assert.equal(await page.locator('#host .ff-choice[data-selected=true]').count(),1);await mount('nixie-range',{range:false});const input=page.locator('#host input[data-range]').first();await input.focus();await input.press('End');assert.equal(await input.inputValue(),'100');await page.emulateMedia({forcedColors:'none',reducedMotion:'reduce'});
 });
 await run('Sample notification, loading progress and open popup leave no popovers after unmount',async()=>{
  for(const id of ['aurora-notice','folio-notice','nixie-finder','botanical-calendar']){await mount(id);await page.evaluate(()=>{(window as any).api.notify?.({title:'Material test',description:'No network operation.',duration:0});(window as any).api.show?.();});await page.evaluate(()=>(window as any).unmountArt());assert.equal(await page.locator(':popover-open').count(),0);}
  assert.deepEqual(errors,[]);
 });
 await mount('nixie-range');await page.screenshot({path:path.join(out,'native.png')});
 console.log(`Atelier browser checks: ${results.length} passed.`);
}finally{fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'real Chromium; explicit offline transport, not Vite':'real Vite HTTP',passed:results.length,tests:results,errors},null,2)+'\n');await browser?.close();await shutdown?.();}
