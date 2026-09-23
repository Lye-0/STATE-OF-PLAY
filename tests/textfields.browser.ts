import {galleryReady} from './gallery-ready.ts';
/** Native text editing + real React exports. Offline transport is explicit, never reported as a Vite build. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Page,Browser} from 'playwright';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';
import {offlineFiles,testBundle,inlineTestCSS} from './offline-fixture.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline',data=buildCatalog(),parts=data.parts.filter(p=>p.category==='textboxes');
const out=path.join(ROOT,'.test-output/textfields');fs.mkdirSync(out,{recursive:true});
const results:string[]=[],errors:string[]=[];let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined,url='';
let page:Page;
const run=async(name:string,fn:()=>Promise<void>)=>{await fn();results.push(name);console.log('PASS '+name);};
const write=(name:string,code:string)=>{const f=path.join(ROOT,name);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,code);};
try{
 if(!offline){const {createServer}=await import('vite');const s=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});shutdown=()=>s.close();await s.listen();url=requireLocalServerUrl(s,'Text-field test server');}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
 page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 if(offline){const files=offlineFiles();await page.setContent(files.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));await page.addStyleTag({content:files.get('/test-styles.css')!});for(const v of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor',v+'.js'),'utf8')});await page.addScriptTag({content:files.get('/test-app.js')!});}else await page.goto(url);
 await run('Gallery: 24 native editable fields, labels focus the input, typing never opens details',async()=>{
  await page.locator('[data-category="textboxes"]').click();await galleryReady(page,true);assert.equal(await page.locator('[data-part]').count(),24);
  for(const p of parts){const r=page.locator(`[data-part="${p.id}"] .sop-textfield`),f=r.locator('.sop-field-control');await r.locator('label').click();assert.ok(await f.evaluate(e=>e===document.activeElement));await f.fill(p.id==='contact-field'?'hello@example.com':'日本語入力 + text');assert.ok((await f.inputValue()).length>0);assert.equal(await r.getAttribute('data-filled'),'true');assert.equal(await page.locator('dialog[open]').count(),0);}
  await page.locator('[data-design-filter="B"]').click();await galleryReady(page,true);assert.equal(await page.locator('[data-part]').count(),8);await page.locator('[data-design-filter="A"]').click();await galleryReady(page,true);assert.equal(await page.locator('[data-part]').count(),16);await page.locator('[data-design-filter="all"]').click();await galleryReady(page,true);
 });
 await run('Native editing: caret movement, undo, clear focus and safe text display',async()=>{
  const r=page.locator('[data-part="essential-field"] .sop-textfield'),f=r.locator('.sop-field-control');
  await f.fill('');await f.focus();await page.keyboard.type('hello');await page.keyboard.press('Home');await page.keyboard.type('X');assert.equal(await f.inputValue(),'Xhello');await page.keyboard.press('Control+z');assert.equal(await f.inputValue(),'hello');
  await r.locator('.sop-field-clear').click();assert.equal(await f.inputValue(),'');assert.ok(await f.evaluate(e=>e===document.activeElement));
  await f.fill('<img src=x onerror=alert(1)>');assert.equal(await r.locator('img').count(),0);
 });
 await run('Detail controls: value survives format/layout changes; error, success, readOnly, disabled and reset',async()=>{
  await page.locator('[data-open="aurora-field"]').click();await galleryReady(page,true);const d=page.locator('#part-details'),f=d.locator('.sop-field-control');await f.fill('Keep this draft');
  await d.locator('[data-format="js"]').click();await d.locator('#export-layout').selectOption('original');assert.equal(await f.inputValue(),'Keep this draft');
  await d.locator('[data-field-status]').selectOption('error');assert.equal(await f.getAttribute('aria-invalid'),'true');assert.ok(await d.locator('.sop-field-validation').isVisible());
  await d.locator('[data-field-status]').selectOption('success');assert.equal(await f.getAttribute('aria-invalid'),'false');assert.equal(await d.locator('.sop-textfield').getAttribute('data-success'),'true');
  await d.locator('[data-field-readonly]').check();assert.equal(await f.evaluate(e=>(e as HTMLInputElement).readOnly),true);assert.ok(await d.locator('.sop-field-clear').isDisabled());
  await d.locator('[data-field-disabled]').check();assert.ok(await f.isDisabled());await d.locator('[data-field-reset]').click();assert.ok(await f.isEnabled());assert.equal(await f.inputValue(),'');
  await d.locator('[data-format="tsx"]').click();await d.locator('#export-layout').selectOption('portable');await d.locator('[data-field-sample]').click();await page.screenshot({path:path.join(out,'detail.png')});
  await d.locator('[data-detail-tab="prompt"]').click();assert.equal(await d.locator('#prompt-text').inputValue(),buildPrompt(parts[0],'tsx','portable'));
  await d.locator('.close-detail').click();
 });
 await run('Email validation on blur, explicit error recovery and password visibility without submission',async()=>{
  const r=page.locator('[data-part="contact-field"] .sop-textfield'),f=r.locator('.sop-field-control');await f.fill('invalid-address');await f.blur();assert.equal(await f.getAttribute('aria-invalid'),'true');await f.fill('hello@example.com');await f.blur();assert.equal(await f.getAttribute('aria-invalid'),'false');
  for(const id of ['capsule-field','password-field']){const r=page.locator(`[data-part="${id}"] .sop-textfield`),f=r.locator('input');await f.fill('Sample-secret');await r.locator('.sop-field-reveal').click();assert.equal(await f.getAttribute('type'),'text');assert.equal(await f.inputValue(),'Sample-secret');await r.locator('.sop-field-reveal').click();assert.equal(await f.getAttribute('type'),'password');}
 });
 await run('IME synthetic lifecycle preserves composition values and disables destructive controls',async()=>{
  const r=page.locator('[data-part="aurora-field"] .sop-textfield'),f=r.locator('.sop-field-control');await f.focus();
  await f.evaluate(e=>{const f=e as HTMLInputElement;f.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true,data:''}));f.value='にほん';f.dispatchEvent(new InputEvent('input',{bubbles:true,data:'にほん',inputType:'insertCompositionText',isComposing:true}));});
  assert.equal(await f.inputValue(),'にほん');assert.equal(await r.getAttribute('data-composing'),'true');assert.ok(await r.locator('.sop-field-clear').isDisabled());
  await f.evaluate(e=>{const f=e as HTMLInputElement;f.value='日本';f.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true,data:'日本'}));f.dispatchEvent(new InputEvent('input',{bubbles:true,data:'日本',inputType:'insertText'}));});
  assert.equal(await f.inputValue(),'日本');assert.equal(await r.getAttribute('data-composing'),'false');assert.ok(await r.locator('.sop-field-clear').isEnabled());
 });
 await run('Multiline fields grow and shrink within a bounded height without dropping text',async()=>{
  for(const p of parts.filter(p=>p.markup.includes('<textarea'))){const f=page.locator(`[data-part="${p.id}"] textarea`);await f.fill('Short note');const before=(await f.boundingBox())!.height;const text=Array(30).fill('日本語メモ。Note.').join('\n');await f.fill(text);const after=(await f.boundingBox())!.height;assert.ok(after>before&&after<=282,p.id);assert.equal(await f.inputValue(),text);assert.ok(await f.evaluate(e=>e.scrollHeight>e.clientHeight));await f.fill('');assert.ok((await f.boundingBox())!.height<after,p.id);}
 });
 await run('24 fields at 320/390/768: no horizontal overflow, 16px native text and usable detail controls',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:900});for(const p of parts){const r=page.locator(`[data-part="${p.id}"] .sop-textfield`),f=r.locator('.sop-field-control');const b=(await r.boundingBox())!;assert.ok(b.x>=-1&&b.x+b.width<=width+1,p.id+' '+width);assert.ok(await f.evaluate(e=>parseFloat(getComputedStyle(e).fontSize)>=16));}
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   if(width===390){await page.locator('[data-open="letterpress-note"]').click();await galleryReady(page,true);await page.locator('[data-field-sample]').click();await page.screenshot({path:path.join(out,'mobile-390.png')});assert.ok(await page.locator('.download-file').isVisible());await page.locator('.close-detail').click();}
  }await page.setViewportSize({width:1440,height:1000});
 });
 // Isolated native fields with no gallery state or assets. Two copies of every part.
 const native=await context.newPage();native.on('pageerror',e=>errors.push(e.message));
 await native.setContent('<form id="form"><button type="reset" id="reset">Reset</button>'+parts.flatMap(p=>[0,1].map(i=>`<section data-case="${p.id}-${i}">${p.markup}</section>`)).join('')+'</form>');
 for(const p of parts)await native.addStyleTag({content:p.preview['styles.css']});
 await run('Without initialization: native input and textarea still accept ordinary text',async()=>{
  const f=native.locator('[data-case="essential-field-0"] input');await f.fill('Plain HTML');assert.equal(await f.inputValue(),'Plain HTML');
  const t=native.locator('[data-case="letterpress-note-0"] textarea');await t.fill('Plain HTML\nNew line');assert.equal(await t.inputValue(),'Plain HTML\nNew line');
  await native.evaluate(()=>HTMLFormElement.prototype.reset.call(document.querySelector('form')!));
 });
 const entry='.test-output/textfields/native-fixture.ts';const source=parts.map((p,i)=>`import{init as i${i}}from'../../src/parts/textboxes/${p.id}/vanilla/init';`).join('\n')+`\nconst controllers=[];`+parts.map((p,i)=>`for(const e of document.querySelectorAll('[data-case^="${p.id}-"]>.sop-textfield')){const f=e.querySelector('.sop-field-control');f.defaultValue='Initial';controllers.push(i${i}(e));}`).join('\n')+`\nwindow.fieldControllers=controllers;window.submits=0;document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();window.submits++});`;
 const extras=new Map([[entry,source]]);await native.addScriptTag({content:testBundle(entry,extras)});
 await run('Native forms: independent IDs, values, reset cancellation, disabled exclusion and readonly submission',async()=>{
  const ids=await native.locator('[id]').evaluateAll(es=>es.map(e=>e.id));assert.equal(ids.length,new Set(ids).size);
  const f=native.locator('[data-case="essential-field-0"] input');await f.fill('Saved value');const pair=native.locator('[data-case="essential-field-1"] input');assert.equal(await pair.inputValue(),'Initial');
  await pair.evaluate(e=>(e as HTMLInputElement).disabled=true);await f.evaluate(e=>(e as HTMLInputElement).readOnly=true);
  assert.deepEqual(await native.evaluate(()=>new FormData(document.querySelector('form')!).getAll('essential-field')),['Saved value']);
  await native.locator('#reset').click();assert.equal(await f.inputValue(),'Initial');
  await f.evaluate(e=>(e as HTMLInputElement).readOnly=false);await f.fill('Keep');await native.evaluate(()=>document.querySelector('form')!.addEventListener('reset',e=>e.preventDefault(),{once:true}));await native.locator('#reset').click();assert.equal(await f.inputValue(),'Keep');
  await native.locator('[data-case="essential-field-0"] .sop-field-clear').click();assert.equal(await native.evaluate(()=>(window as any).submits),0);
 });
 await run('Native maxlength, no-JS editing fallback and teardown stop enhancement listeners',async()=>{
  const f=native.locator('[data-case="essential-field-0"] input');await f.evaluate(e=>(e as HTMLInputElement).maxLength=5);await f.fill('');await f.pressSequentially('abcdefg');assert.equal(await f.inputValue(),'abcde');
  await native.evaluate(()=>{for(const c of (window as any).fieldControllers)c.destroy();});
  await f.fill('abc');assert.equal(await f.inputValue(),'abc'); // still a usable native input
 });
 await native.close();
 // Real React, never a mocked renderer. Test exports in both layouts and both React formats.
 if(!offline||process.env.SOP_REACT_BROWSER_BUNDLE){
 for(const format of ['tsx','jsx'] as const)for(const layout of ['portable','original'] as const){
  const prefix=`.test-output/textfields/react-${format}-${layout}`,extra=new Map<string,string>();
  const imports=parts.map((p,i)=>{const d=getDelivery(p,format,layout);for(const f of d.files){const name=`${prefix}/${p.id}/${f.name}`;extra.set(name,f.code);write(name,f.code);}return `import Part${i} from './${p.id}/${d.entry}';`;}).join('\n');
  const source=`import React,{useState,useRef}from'react';import{createRoot}from'react-dom/client';${imports}\nconst parts=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},C:Part${i}}`).join(',')}];
function Item({p}){const[v,set]=useState(''),[bad,error]=useState(false),ref=useRef(null);const C=p.C;return <section data-react-part={p.id}><button type="button" className="external" onClick={()=>set('External value')}>External update</button><button type="button" className="error" onClick={()=>error(!bad)}>Error</button><C label={p.id} name={p.id} value={v} onValueChange={set} error={bad?'Check your input':''} maxLength={120} inputRef={ref} data-variant="controlled"/><output>{v}</output><C label="Uncontrolled" defaultValue="Initial" data-variant="uncontrolled"/><C label="Read only" value="Read only" readOnly data-variant="readonly"/><C label="Disabled" disabled data-variant="disabled"/></section>}
function App(){const[show,set]=useState(true),[v,value]=useState('');const C=parts[0].C;return <><button id="mount" onClick={()=>set(!show)}>Mount</button>{show&&<form onSubmit={e=>e.preventDefault()}><button type="reset" id="reset-react">Reset</button>{parts.map(p=><Item key={p.id} p={p}/>)}<C label="Refused" value="locked" onValueChange={()=>{}} data-variant="refused"/><C label="Native onChange" value={v} onChange={e=>value(e.currentTarget.value)} clearable data-variant="onchange"/></form>}</>};createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);`;
  const entry=prefix+'/main.jsx';extra.set(entry,source);write(entry,source);
  const html='<html><head><meta charset="utf-8"></head><body style="background:#191d20;color:#eee"><div id="root"></div><script type="module" src="./main.jsx"></script></body></html>';write(prefix+'/index.html',html);
  const rp=await context.newPage();rp.on('pageerror',e=>errors.push(e.message));
  if(offline){await rp.setContent(html.replace(/<script[\s\S]*?<\/script>/,''));await rp.addStyleTag({content:data.styles+'[data-react-part]{width:500px;padding:30px;display:grid;gap:20px;}'});await rp.evaluate(async text=>{const u=URL.createObjectURL(new Blob([text],{type:'text/javascript'}));const m=await import(u);Object.assign(window,{RealReact:m.r,RealDOM:m.e});URL.revokeObjectURL(u);},fs.readFileSync(process.env.SOP_REACT_BROWSER_BUNDLE!,'utf8'));await rp.addScriptTag({content:testBundle(entry,extra,'const React=window.RealReact,ReactDOMClient=window.RealDOM;')});}else await rp.goto(new URL(prefix+'/index.html',url).href);
  await run(`Real React ${format}/${layout}: all 24 exports, controlled/uncontrolled editing and value changes`,async()=>{
   await rp.locator('[data-react-part]').first().waitFor();
   for(const p of parts){const r=rp.locator(`[data-react-part="${p.id}"]`),f=r.locator('[data-variant="controlled"]');await f.fill('日本語と React');assert.equal(await r.locator('output').innerText(),'日本語と React');await r.locator('.external').click();assert.equal(await f.inputValue(),'External value');await r.locator('.error').click();assert.equal(await f.getAttribute('aria-invalid'),'true');await r.locator('.error').click();await rp.waitForFunction(e=>e?.getAttribute('aria-invalid')==='false',await f.elementHandle());assert.equal(await f.getAttribute('aria-invalid'),'false',p.id);
    const u=r.locator('[data-variant="uncontrolled"]');assert.equal(await u.inputValue(),'Initial');await u.fill('Changed');assert.ok(await r.locator('[data-variant="disabled"]').isDisabled());assert.ok(await r.locator('[data-variant="readonly"]').evaluate(e=>(e as HTMLInputElement).readOnly));}
   await rp.locator('#reset-react').click();for(const p of parts){const r=rp.locator(`[data-react-part="${p.id}"]`);assert.equal(await r.locator('[data-variant="uncontrolled"]').inputValue(),'Initial');assert.equal(await r.locator('[data-variant="controlled"]').inputValue(),'External value');}
   const refused=rp.locator('[data-variant="refused"]');await refused.fill('Rejected');assert.equal(await refused.inputValue(),'locked');
  });
  await run(`Real React ${format}/${layout}: native onChange clear, selection, independent IDs and repeated teardown`,async()=>{
   const f=rp.locator('[data-variant="onchange"]');await f.fill('Clear me');const r=f.locator('xpath=../..');await r.locator('.sop-field-clear').click();assert.equal(await f.inputValue(),'');await f.focus();await rp.keyboard.type('hello');await rp.keyboard.press('Home');await rp.keyboard.type('X');assert.equal(await f.inputValue(),'Xhello');
   const ids=await rp.locator('[id]').evaluateAll(es=>es.map(e=>e.id));assert.equal(ids.length,new Set(ids).size);
   for(let i=0;i<3;i++){await rp.locator('#mount').click();assert.equal(await rp.locator('.sop-textfield').count(),0);await rp.locator('#mount').click();await rp.locator('[data-react-part]').first().waitFor();assert.equal(await rp.locator('[data-react-part]').count(),24);}
  });await rp.close();
 }
 }else console.log('React checks not run: no actual React runtime supplied for offline mode.');
 await run('Reduced motion and forced colours keep native input and focus available',async()=>{
  await page.emulateMedia({reducedMotion:'reduce',forcedColors:'active'});const f=page.locator('[data-part="essential-field"] input');await f.fill('Accessible text');assert.equal(await f.inputValue(),'Accessible text');assert.equal(await f.evaluate(e=>getComputedStyle(e).animationName),'none');await page.emulateMedia({forcedColors:'none'});
 });
 assert.deepEqual(errors,[]);
}finally{fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'explicit synthetic documents (not Vite HTTP)':'Vite HTTP',react:offline?(process.env.SOP_REACT_BROWSER_BUNDLE?'actual provided production runtime':'not run'):'installed React + development StrictMode',passed:results,errors,ime:'Synthetic composition lifecycle; OS IME not automated'},null,2));await browser?.close();await shutdown?.();}
console.log(`Text field checks: ${results.length} passed.`);
