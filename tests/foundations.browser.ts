/** Actual browser execution of reconstructed foundation sources, not a mock DOM.
 * Normal mode uses Vite. SOP_TEST_MODE=offline uses the explicitly documented local adapter.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Browser,Page} from 'playwright';
import {buildCatalog,ROOT} from '../scripts/catalog.ts';
import {offlineFiles,testBundle} from './offline-fixture.ts';
import {selectCategory} from './gallery-ready.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const data=buildCatalog(),parts=data.parts.filter(p=>p.foundation),offline=process.env.SOP_TEST_MODE==='offline';
const out=path.join(ROOT,'.test-output/foundations');fs.mkdirSync(out,{recursive:true});
const results:string[]=[],errors:string[]=[];let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined,url='';
const run=async(name:string,fn:()=>Promise<void>)=>{await fn();results.push(name);console.log('PASS '+name);};
async function install(page:Page,html:string,script:string,css:string,vendor=false){
 await page.setContent(html.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));await page.addStyleTag({content:css});
 if(vendor)for(const v of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor',v+'.js'),'utf8')});
 await page.addScriptTag({content:script});
}
try{
 if(!offline){const{createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await server.listen();url=requireLocalServerUrl(server,'Foundation tests');shutdown=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext({viewport:{width:1440,height:1100},acceptDownloads:true});const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(20000);await page.emulateMedia({reducedMotion:'reduce'});
 if(offline){const scoped={...data,parts,bases:data.bases.filter(b=>parts.some(p=>b.endsWith('/'+p.id)))},fixture=offlineFiles(scoped);await install(page,fixture.get('/index.html')!,fixture.get('/test-app.js')!,fixture.get('/test-styles.css')!,true);}else await page.goto(url);
 await run(`${parts.length} foundation components: categories, exact A/B counts and accessible category jump`,async()=>{
  for(const category of [...new Set(parts.map(p=>p.category))]){await selectCategory(page,category);const group=parts.filter(p=>p.category===category);assert.equal(await page.locator('[data-part]').count(),group.length);await page.locator('[data-design-filter="A"]').click();assert.equal(await page.locator('[data-part]').count(),group.filter(p=>p.designType==='A').length);await page.locator('[data-design-filter="B"]').click();assert.equal(await page.locator('[data-part]').count(),group.filter(p=>p.designType==='B').length);await page.locator('[data-design-filter="all"]').click();}
 });
 await run('Slider inspector: bounds/unit/step update, native keyboard, format/layout preserve editing state',async()=>{
  await selectCategory(page,'sliders');await page.locator('[data-open="aurora-range"]').click();const d=page.locator('#part-details');
  for(const [key,value]of [['min','10'],['max','50'],['step','5'],['unit','kg']]){await d.locator(`[data-set-${key}]`).fill(value);await d.locator(`[data-set-${key}]`).press('Tab');}
  assert.equal(await d.locator('[data-min]').innerText(),'10kg');assert.equal(await d.locator('[data-max]').innerText(),'50kg');
  const slider=d.locator('[data-range="0"]');await slider.focus();await slider.press('Home');await slider.press('ArrowRight');assert.equal(await slider.inputValue(),'15');
  await d.locator('[data-format="jsx"]').click();await d.locator('#export-layout').selectOption('original');assert.equal(await slider.inputValue(),'15');
  await d.locator('[data-foundation-disabled]').check();assert.ok(await slider.isDisabled());await d.locator('[data-foundation-disabled]').uncheck();
  await d.locator('[data-format="tsx"]').click();await d.locator('#export-layout').selectOption('portable');await d.locator('[data-detail-tab="prompt"]').click();assert.equal(await d.locator('#prompt-text').inputValue(),buildPrompt(parts.find(p=>p.id==='aurora-range')!,'tsx','portable'));
  await d.locator('[data-detail-tab="code"]').click();await page.screenshot({path:path.join(out,'detail.png')});await d.locator('.close-detail').click();
 });
 await run('Source inspector: representative of each new category, both layouts (full inventory in gallery suite)',async()=>{
  for(const p of parts.filter((p,i)=>i===parts.findIndex(x=>x.category===p.category))){await selectCategory(page,p.category);await page.locator(`[data-open="${p.id}"]`).click();const d=page.locator('#part-details');for(const layout of ['portable','original']as const){await d.locator('#export-layout').selectOption(layout);const delivery=getDelivery(p,'tsx',layout);const expected=delivery.files.find(f=>f.name===delivery.entry)!;assert.equal((await d.locator('.editor code .line-code').allTextContents()).map(line=>line===' '?'':line).join('\n').trimEnd(),expected.code.trimEnd());}await d.locator('.close-detail').click();}
 });
 // One host can move or unmount each actual exported implementation without a gallery dependency.
 const imports=parts.map((p,i)=>`import {init as init${i}} from '/src/parts/${p.category}/${p.id}/vanilla/init.ts';`).join('\n');
 const source=imports+`\nconst definitions=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},markup:${JSON.stringify(p.markup)},init:init${i}}`).join(',')}];
 const mounted=new Map();window.changes=[];window.actions=[];
 // Observe native submission without navigating the fixture. Valid submit remains a component feature.
 document.getElementById('fixture-form').addEventListener('submit',event=>{event.preventDefault();window.submitted=true;});
 window.mountFoundation=(id,options={},hostId='test-host')=>{const old=mounted.get(hostId);old?.destroy();const definition=definitions.find(p=>p.id===id);if(!definition)throw new Error('Unknown fixture '+id);const host=document.getElementById(hostId);host.innerHTML=definition.markup;const root=host.firstElementChild;const api=definition.init(root,{onDataChange:value=>window.changes.push(value),onAction:value=>window.actions.push(value),...options});mounted.set(hostId,api);window.api=api;return true;};
 window.destroyFoundations=()=>{for(const api of mounted.values())api.destroy();mounted.clear();};`;
 const entry='.test-output/foundations/fixture.ts';fs.writeFileSync(path.join(ROOT,entry),source);
 const native=await context.newPage();native.setDefaultTimeout(7000);native.on('pageerror',e=>errors.push(e.message));await native.emulateMedia({reducedMotion:'reduce'});
 const html='<html><head><meta charset="utf-8"></head><body><form id="fixture-form"><div id="test-host"></div><button type="reset" id="reset">Reset</button></form><div id="second-host"></div><button id="outside">Outside</button><script type="module" src="./fixture.ts"></script></body></html>';
 const css=data.styles+'\nbody{padding:48px;background:#181b1d;color:#eee;font:14px Arial}#test-host,#second-host{max-width:400px;margin:20px}button#reset,button#outside{padding:12px;margin:10px}';
 if(offline)await install(native,html,testBundle(entry,new Map([[entry,source]])),css);else{fs.writeFileSync(path.join(out,'fixture.html'),html);await native.goto(new URL('.test-output/foundations/fixture.html',url).href);await native.addStyleTag({content:css});}
 const mount=async(id:string,options:Record<string,unknown>={},host='test-host')=>native.evaluate(({id,options,host})=>(window as any).mountFoundation(id,options,host),{id,options,host});
 const update=async(options:Record<string,unknown>)=>native.evaluate(o=>(window as any).api.updateFoundation(o),options);
 const value=()=>native.evaluate(()=>(window as any).api.getData());
 await run(`All ${parts.length} genuine initializers: unique instances, independent lifecycle and no page errors`,async()=>{for(const p of parts){await mount(p.id);assert.equal(await native.locator('#test-host [data-foundation-mounted=true]').count(),1);await native.evaluate(()=>(window as any).api.destroy());assert.equal(await native.locator('#test-host [data-foundation-mounted=true]').count(),0);}});
 await run('Range: two native handles, min/max crossing, decimals, readonly and form reset',async()=>{
  await mount('aurora-range',{range:true,min:0,max:10,step:.5,defaultValue:[2,8],name:'range'});const inputs=native.locator('#test-host input[type=range]');assert.equal(await inputs.count(),2);await inputs.first().focus();await inputs.first().press('End');assert.deepEqual(await value(),[8,8]);await inputs.last().focus();await inputs.last().press('Home');assert.deepEqual(await value(),[8,8]);
  await native.locator('#reset').click();await native.waitForFunction(()=>JSON.stringify((window as any).api.getData())==='[2,8]'&&(document.querySelector('[data-range="0"]') as HTMLInputElement)?.value==='2');assert.deepEqual(await value(),[2,8]);await update({min:10,max:50,step:5,unit:'kg',range:false});await native.evaluate(()=>(window as any).api.setData(25));assert.equal(await native.locator('#test-host [data-max]').innerText(),'50kg');await inputs.first().focus();await inputs.first().press('ArrowRight');assert.equal(await value(),30);await update({readOnly:true});assert.ok(await inputs.first().isDisabled());
 });
 await run('Radio cards: native form values, disabled skip, updates and controlled-declined requests',async()=>{
  const items=[{value:'a',label:'A'},{value:'b',label:'B',disabled:true},{value:'c',label:'C'}];await mount('aurora-choice',{items,defaultValue:'a',name:'choice',required:true});await native.locator('#test-host input[value=c]').check();assert.equal(await value(),'c');assert.equal(await native.evaluate(()=>new FormData(document.querySelector('form')!).get('choice')),'c');assert.ok(await native.locator('#test-host input[value=b]').isDisabled());await update({items:items.slice(0,2)});assert.equal(await value(),'a');
  await update({controlled:true,value:'a',items});await native.locator('#test-host input[value=c]').click();assert.equal(await value(),'a');assert.ok(await native.locator('#test-host input[value=a]').isChecked());
 });
 await run('Combobox: filtering, keyboard, multi values, disabled items and loading/empty/error states',async()=>{
  const items=[{value:'a',label:'Alpha',description:'Alpha detail'},{value:'b',label:'Beta',disabled:true},{value:'c',label:'Gamma'}];await mount('aurora-finder',{items,defaultValue:'',name:'pick'});const input=native.locator('#test-host [data-combo]');await input.fill('Al');assert.equal(await native.locator('#test-host [data-option]').count(),1);await input.press('ArrowDown');await input.press('Enter');assert.equal(await value(),'a');assert.equal(await input.inputValue(),'Alpha');assert.equal(await native.evaluate(()=>new FormData(document.querySelector('form')!).get('pick')),'a');
  await update({multiple:true,value:[],loading:false});await input.fill('');await native.locator('#test-host [data-combo-toggle]').click();await native.locator('#test-host [data-option=a]').click();await native.locator('#test-host [data-option=c]').click();assert.deepEqual(await value(),['a','c']);await native.locator('#test-host [data-remove=a]').click();assert.deepEqual(await value(),['c']);
  await update({loading:true});await native.evaluate(()=>(window as any).api.show());assert.match(await native.locator('#test-host [data-results]').innerText(),/読み込み/);await update({loading:false,error:'接続を確認'});assert.match(await native.locator('#test-host [data-results]').innerText(),/接続を確認/);await update({error:'',items:[]});assert.match(await native.locator('#test-host [data-results]').innerText(),/一致する候補/);await input.press('Escape');assert.equal(await input.getAttribute('aria-expanded'),'false');
 });
 await run('Combobox IME composition does not intercept Enter or commit partial candidates',async()=>{
  await mount('aurora-finder',{items:[{value:'jp',label:'日本語'}],defaultValue:''});const input=native.locator('#test-host [data-combo]');await input.focus();await input.dispatchEvent('compositionstart',{data:''});await input.fill('日本');await input.dispatchEvent('keydown',{key:'Enter',isComposing:true});assert.equal(await value(),'');await input.dispatchEvent('compositionend',{data:'日本'});await input.press('ArrowDown');await input.press('Enter');assert.equal(await value(),'jp');
 });
 await run('Number editing: decimal drafts, IME, invalid draft reporting, min/max and reset',async()=>{
  await mount('aurora-stepper',{min:-2,max:2,step:.25,defaultValue:.5,name:'amount'});const input=native.locator('#test-host [data-number]');await input.fill('-');await update({unit:'kg'});assert.equal(await input.inputValue(),'-');await input.fill('1.25');await input.press('Tab');assert.equal(await value(),1.25);await native.locator('#test-host [data-adjust="1"]').click();assert.equal(await value(),1.5);
  await input.fill('abc');await input.press('Tab');assert.equal(await input.getAttribute('aria-invalid'),'true');assert.equal(await input.evaluate((el:HTMLInputElement)=>el.checkValidity()),false);await native.locator('#reset').click();await native.waitForFunction(()=>(document.querySelector('[data-number]') as HTMLInputElement)?.value==='0.5');assert.equal(await input.inputValue(),'0.5');assert.equal(await input.evaluate((el:HTMLInputElement)=>el.checkValidity()),true);
  await input.dispatchEvent('compositionstart');await input.fill('1');await input.dispatchEvent('keydown',{key:'Enter',isComposing:true});assert.equal(await value(),.5);await input.dispatchEvent('compositionend');await input.press('Enter');assert.equal(await value(),1);
 });
 await run('All 20 number designs keep focus on the clicked adjust control',async()=>{
  const numberParts=parts.filter(p=>p.category==='numbers');assert.equal(numberParts.length,20);
  for(const part of numberParts){await mount(part.id,{defaultValue:3,min:0,max:10,step:1});const input=native.locator('#test-host [data-number]'),plus=native.locator('#test-host [data-adjust="1"]'),minus=native.locator('#test-host [data-adjust="-1"]');await plus.click();assert.equal(await value(),4,part.id+' increment');assert.ok(await plus.evaluate(e=>e===document.activeElement),part.id+' plus retains focus');assert.notEqual(await input.evaluate(e=>e===document.activeElement),true,part.id+' input is not refocused');await minus.click();assert.equal(await value(),3,part.id+' decrement');assert.ok(await minus.evaluate(e=>e===document.activeElement),part.id+' minus retains focus');assert.notEqual(await input.evaluate(e=>e===document.activeElement),true,part.id+' input is not refocused after decrement');await input.focus();assert.ok(await input.evaluate(e=>e===document.activeElement),part.id+' input remains directly focusable');}
 });
 await run('Toast: action callback, capacity, expiry, hover pause and destroy removes top-layer stack',async()=>{
  await mount('aurora-notice',{maxNotices:2});await native.evaluate(()=>{const a=(window as any).api;for(let i=0;i<3;i++)a.notify({title:'Notice '+i,duration:0});});assert.equal(await native.locator('#test-host .ff-toast-stack .ff-notice').count(),2);await native.evaluate(()=>(window as any).api.dismiss());
  await native.evaluate(()=>(window as any).api.notify({title:'Action',actionLabel:'Confirm',duration:0,onAction:()=>{(window as any).performed=true;}}));await native.locator('#test-host [data-notice-action]').click();assert.ok(await native.evaluate(()=>(window as any).performed));
  await native.evaluate(()=>(window as any).api.notify({title:'Pause',duration:350}));await native.locator('#test-host .ff-toast-stack .ff-notice').hover();await native.waitForTimeout(450);assert.equal(await native.locator('#test-host .ff-toast-stack .ff-notice').count(),1);await native.locator('#outside').hover();await native.waitForTimeout(500);assert.equal(await native.locator('#test-host .ff-toast-stack .ff-notice').count(),0);
  await native.evaluate(()=>{(window as any).api.notify({title:'Will close',duration:0});(window as any).api.destroy();});assert.ok(await native.locator('#test-host .ff-toast-stack').isHidden());
 });
 await run('Tooltip/popover: top-layer fit, content update, Escape and safe text',async()=>{
  await mount('aurora-popover',{interactive:true,content:'First'});await native.locator('#test-host [data-hint-trigger]').click();assert.ok(await native.locator('#test-host [data-hint-panel]').isVisible());await update({content:'<script>not executable</script>'});assert.equal(await native.locator('#test-host [data-hint-content]').innerText(),'<script>not executable</script>');await native.keyboard.press('Escape');assert.ok(await native.locator('#test-host [data-hint-panel]').isHidden());
  await mount('mercury-popover',{interactive:false});await native.locator('#test-host [data-hint-trigger]').focus();assert.equal(await native.locator('#test-host [data-hint-panel]').getAttribute('role'),'tooltip');await native.keyboard.press('Escape');assert.ok(await native.locator('#test-host [data-hint-panel]').isHidden());
 });
 await run('Progress and loader: determinate/indeterminate, dynamic limits, paused/reduced motion',async()=>{
  await mount('aurora-progress',{min:20,max:80,value:50});assert.equal((await native.locator('#test-host [data-progress-reading]').textContent())?.replace(/\s/g,''),'50%');await update({indeterminate:true});assert.equal(await native.locator('#test-host progress').getAttribute('value'),null);await update({indeterminate:false,max:100});await native.evaluate(()=>(window as any).api.setData(100));assert.equal((await native.locator('#test-host [data-progress-reading]').textContent())?.replace(/\s/g,''),'100%');
  await mount('aurora-loader');await native.evaluate(()=>(window as any).api.setPaused(true));assert.equal(await native.locator('#test-host .sop-foundation').getAttribute('aria-busy'),'false');await update({content:'Custom loading'});assert.equal(await native.locator('#test-host [role=status]').innerText(),'Custom loading');
 });
 await run('Upload: genuine FileList, accept/size checks, remove, native FormData and reset',async()=>{
  await mount('aurora-dropzone',{multiple:true,maxFiles:2,maxBytes:1000,accept:'.txt',name:'files'});const input=native.locator('#test-host [data-upload]');await input.setInputFiles([{name:'first.txt',mimeType:'text/plain',buffer:Buffer.from('hello')},{name:'second.txt',mimeType:'text/plain',buffer:Buffer.from('world')}]);assert.equal(await native.locator('#test-host [data-upload-files] li').count(),2);assert.deepEqual(await native.evaluate(()=>new FormData(document.querySelector('form')!).getAll('files').map(f=>(f as File).name)),['first.txt','second.txt']);await native.locator('#test-host [data-file-remove="0"]').click();assert.equal(await native.locator('#test-host [data-upload-files] li').count(),1);
  await input.setInputFiles({name:'bad.exe',mimeType:'application/octet-stream',buffer:Buffer.from('not executable')});assert.match(await native.locator('#test-host [data-upload-error]').innerText(),/対象外/);assert.equal(await native.locator('#test-host [data-upload-files] li').count(),1);await native.locator('#reset').click();await native.waitForFunction(()=>document.querySelectorAll('#test-host [data-upload-files] li').length===0);assert.equal(await native.locator('#test-host [data-upload-files] li').count(),0);
 });
 await run('Date/time: constraints, direct input, calendar navigation, range, invalid dates',async()=>{
  await mount('aurora-calendar',{mode:'date',defaultValue:'2026-09-10',minDate:'2026-09-01',maxDate:'2026-09-30',name:'day'});const input=native.locator('#test-host [data-date="0"]');assert.equal(await input.inputValue(),'2026-09-10');await native.locator('#test-host [data-calendar-toggle]').click();assert.ok(await native.locator('#test-host [data-calendar]').isVisible());await native.locator('#test-host [data-day="2026-09-12"]').click();assert.equal(await value(),'2026-09-12');assert.equal(await native.evaluate(()=>new FormData(document.querySelector('form')!).get('day')),'2026-09-12');
  await update({mode:'range',value:[]});await native.locator('#test-host [data-calendar-toggle]').click();await native.locator('#test-host [data-day="2026-09-20"]').click();await native.locator('#test-host [data-day="2026-09-15"]').click();assert.deepEqual(await value(),['2026-09-15','2026-09-20']);
  await update({mode:'datetime',value:'2026-09-15T25:99'});assert.equal(await value(),'');await update({mode:'time',value:'18:42'});assert.equal(await input.inputValue(),'18:42');await update({value:'28:00'});assert.equal(await value(),'');
 });
 await run('Pagination and breadcrumbs: native links, page limits, dynamic hierarchy and popup cleanup',async()=>{
  await mount('aurora-pages',{totalPages:30,defaultValue:1});await native.locator('#test-host [aria-label="次のページ"]').click();assert.equal(await value(),2);await update({totalPages:1});assert.equal(await value(),1);assert.ok(await native.locator('#test-host [aria-label="次のページ"]').isDisabled());
  await native.evaluate(()=>(window as any).api.updateFoundation({totalPages:12,hrefForPage:(n:number)=>'/project/page/'+n}));assert.equal(await native.locator('#test-host [data-page="2"]').first().getAttribute('href'),'/project/page/2');
  const items=Array.from({length:7},(_,i)=>({value:'v'+i,label:'Level '+i,href:'#level-'+i}));await mount('aurora-trail',{items});await native.locator('#test-host [data-crumb-more]').click();assert.ok(await native.locator('#test-host [data-crumb-menu]').isVisible());await native.keyboard.press('Escape');await update({items:items.slice(0,5)});await native.locator('#test-host [data-crumb-more]').click();assert.equal(await native.locator('#test-host [data-crumb-menu] a').count(),2);await native.keyboard.press('Escape');assert.equal(await native.locator('#test-host [aria-current=page]').innerText(),'Level 4');
 });
 await run('Badges/chips: independent selection, removal callbacks, disabled and updates',async()=>{
  await mount('aurora-tags',{items:[{value:'a',label:'A'},{value:'b',label:'B'}],selectable:true,removable:true,defaultValue:[]});await native.locator('#test-host input[data-tag-select=a]').check();assert.deepEqual(await value(),['a']);await native.locator('#test-host [data-tag-remove=b]').click();assert.equal(await native.locator('#test-host .ff-tag').count(),1);await update({disabled:true});assert.ok(await native.locator('#test-host input').isDisabled());
 });
 await run('Every part fits 320/390/768px; sample code and modal remain usable on small screens',async()=>{
  for(const width of [320,390,768]){await native.setViewportSize({width,height:900});await native.addStyleTag({content:'body{padding:10px}#test-host,#second-host{margin:0;max-width:100%}'});for(const p of parts){await mount(p.id);assert.ok(await native.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),width+' '+p.id);}}
  await page.setViewportSize({width:390,height:844});await selectCategory(page,'comboboxes');await page.locator('[data-open="aurora-finder"]').click();await page.screenshot({path:path.join(out,'mobile-390.png')});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.locator('.close-detail').click();
 });
 await run('All native instances unmount cleanly without any observed browser exception',async()=>{await native.evaluate(()=>(window as any).destroyFoundations());assert.equal(await native.locator('[data-foundation-mounted]').count(),0);assert.equal(await native.locator(':popover-open').count(),0);assert.deepEqual(errors,[]);});
 await native.close();
 console.log(`Foundation browser checks: ${results.length} passed; ${offline?'explicit offline adapter, not Vite HTTP':'real Vite HTTP'}.`);
}finally{
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'explicit offline adapter; actual Chromium, not Vite HTTP':'real Vite HTTP',passed:results.length,tests:results,errors},null,2)+'\n');await browser?.close();await shutdown?.();
}
