import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {buildCatalog,ROOT} from '../../../scripts/catalog.ts';
import {getDelivery} from '../../../src/catalog/delivery.ts';
const batch=process.argv[2],work=path.join(ROOT,'docs/design-renewal');
const rows=JSON.parse(fs.readFileSync(work+'/targets.json','utf8')).filter((r:any)=>r.batch===batch&&r.category==='uploads');
const parts=buildCatalog(ROOT,rows.map((r:any)=>r.id),{appearance:false}).parts;
assert.ok(parts.length);
const server=await createServer({root:ROOT,cacheDir:path.join(work,'batches',batch,'exports','vite-cache-uploads'),configFile:false,optimizeDeps:{entries:[],noDiscovery:true,include:['react','react-dom/client','react/jsx-dev-runtime']},server:{host:'127.0.0.1',port:0,hmr:false,watch:null}});
await server.listen();const browser=await chromium.launch({executablePath:'/usr/bin/chromium'}),errors:string[]=[];
try {
 for(const [format,layout] of [['tsx','portable'],['jsx','portable'],['tsx','original'],['jsx','original']] as const) {
  const out=path.join(work,'batches',batch,'exports','react-uploads',format+'-'+layout);fs.mkdirSync(out,{recursive:true});let imports='';
  for(const [p,i] of parts.map((p,i)=>[p,i] as const)){const d=getDelivery(p,format,layout);for(const f of d.files){const q=path.join(out,p.id,f.name);fs.mkdirSync(path.dirname(q),{recursive:true});fs.writeFileSync(q,f.code)}imports+=`import C${i} from './${p.id}/${d.entry}';\n`}
  fs.writeFileSync(out+'/entry.jsx',`import React,{useState}from'react';import{createRoot}from'react-dom/client';${imports}
window.refs={};window.controllers={};window.events=[];
const seed=new File(['default'],'default.txt',{type:'text/plain',lastModified:1});
const entries=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},C:C${i}}`).join(',')}];
function Fixture({id,C}){const[value,setValue]=useState([]),[reject,setReject]=useState(false),[readOnly,setReadOnly]=useState(false),[disabled,setDisabled]=useState(false),[long,setLong]=useState(false);return <section data-part={id}>
<button data-reject onClick={()=>setReject(!reject)}>拒否切替</button><button data-readonly onClick={()=>setReadOnly(!readOnly)}>読取切替</button><button data-disable onClick={()=>setDisabled(!disabled)}>無効切替</button><button data-long onClick={()=>setLong(!long)}>長文切替</button>
<form data-case="controlled" onSubmit={e=>e.preventDefault()}><C value={value} onValueChange={files=>{window.events.push({id,names:files.map(f=>f.name)});if(!reject)setValue(files)}} multiple maxFiles={4} maxBytes={10485760} accept=".txt,.png" name="files" required readOnly={readOnly} disabled={disabled} label={long?'素材を選ぶ長い日本語LongUnbrokenLatinHeadingWithoutWhitespace':'素材を選ぶ'} description={long?'十分長い日本語の補足SupplementalInformationWithoutWhitespace':''} ref={e=>window.refs[id]=e}/><button type="reset" data-reset>リセット</button></form>
<form data-case="uncontrolled" onSubmit={e=>e.preventDefault()}><C defaultValue={[seed]} multiple accept=".txt,.png" name="files" label="別の素材" controllerRef={e=>window.controllers[id]=e}/><button type="reset" data-reset>リセット</button></form></section>}
const root=createRoot(document.querySelector('#root'));window.teardown=()=>root.unmount();root.render(<React.StrictMode>{entries.map(e=><Fixture key={e.id} {...e}/>)}</React.StrictMode>);`);
  fs.writeFileSync(out+'/index.html','<!doctype html><html lang="ja"><meta charset="utf-8"><link rel="icon" href="data:,"><style>*{box-sizing:border-box}body{padding:18px;margin:0;background:#181d23;color:white;font:14px Arial}section[data-part]{max-width:410px;margin:32px 0}form{width:100%;min-width:0}</style><div id="root"></div><script type="module" src="./entry.jsx"></script>');
  const page=await browser.newPage({viewport:{width:390,height:844}});page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{(window as any).urlEvents={created:[],revoked:[]};const create=URL.createObjectURL.bind(URL),revoke=URL.revokeObjectURL.bind(URL);URL.createObjectURL=f=>{const u=create(f);(window as any).urlEvents.created.push(u);return u};URL.revokeObjectURL=u=>{(window as any).urlEvents.revoked.push(u);revoke(u)}});
  await page.goto(server.resolvedUrls!.local[0]+path.relative(ROOT,out+'/index.html'));await page.waitForFunction(n=>document.querySelectorAll('[data-part]').length===n,parts.length);
  for(const part of parts){
   const h=page.locator(`[data-part="${part.id}"]`),c=h.locator('[data-case=controlled]'),u=h.locator('[data-case=uncontrolled]'),r=c.locator('[data-foundation]'),input=c.locator('[data-upload]'),other=u.locator('[data-upload]');
   const names=(which=input)=>which.evaluate(e=>Array.from((e as HTMLInputElement).files!).map(f=>f.name));
   assert.equal(await r.evaluate((e,id)=>e===(window as any).refs[id],part.id),true);assert.equal(await input.evaluate(e=>(e as HTMLInputElement).checkValidity()),false);assert.deepEqual(await names(other),['default.txt']);
   await input.focus();const chooser=page.waitForEvent('filechooser');await input.press('Enter');await (await chooser).setFiles({name:'accepted.txt',mimeType:'text/plain',buffer:Buffer.from('native selected')});
   assert.deepEqual(await names(),['accepted.txt']);assert.equal(await input.evaluate(e=>(e as HTMLInputElement).checkValidity()),true);
   assert.deepEqual(await c.evaluate(e=>new FormData(e as HTMLFormElement).getAll('files').map(f=>(f as File).name)),['accepted.txt']);
   await h.locator('[data-reject]').click();await input.setInputFiles({name:'rejected.txt',mimeType:'text/plain',buffer:Buffer.from('rejected')});assert.deepEqual(await names(),['accepted.txt']);assert.equal(await c.locator('li strong').textContent(),'accepted.txt');
   await h.locator('[data-reject]').click();await input.setInputFiles({name:'wrong.pdf',mimeType:'application/pdf',buffer:Buffer.from('invalid')});assert.match((await c.locator('[data-upload-error]').textContent())!,/形式/);assert.deepEqual(await names(),['accepted.txt']);
   await c.locator('[data-reset]').click();await page.waitForFunction(id=>(document.querySelector('[data-part="'+id+'"] [data-case=controlled] [data-upload]') as HTMLInputElement).files![0]?.name==='accepted.txt',part.id);assert.deepEqual(await names(),['accepted.txt'],'controlled reset retains parent value');
   await h.locator('[data-readonly]').click();assert.equal(await input.isDisabled(),true);assert.equal(await c.locator('[data-file-remove]').isDisabled(),true);await h.locator('[data-readonly]').click();await h.locator('[data-disable]').click();assert.equal(await input.isDisabled(),true);await h.locator('[data-disable]').click();
   await c.locator('[data-file-remove]').click();assert.deepEqual(await names(),[]);assert.equal(await input.evaluate(e=>e===document.activeElement),true);assert.deepEqual(await names(other),['default.txt']);
   await page.evaluate(id=>(window as any).controllers[id].setData([new File(['imperative'],'independent.txt',{type:'text/plain'})]),part.id);assert.deepEqual(await names(other),['independent.txt']);assert.deepEqual(await names(),[]);await u.locator('[data-reset]').click();await page.waitForFunction(id=>(document.querySelector('[data-part="'+id+'"] [data-case=uncontrolled] [data-upload]') as HTMLInputElement).files![0]?.name==='default.txt',part.id);assert.deepEqual(await names(other),['default.txt']);
   await input.setInputFiles({name:'日本語の非常に長いファイル名LongUnbrokenLatinFileNameWithoutWhitespaceAndWithoutExtensionSpacing.txt',mimeType:'text/plain',buffer:Buffer.from('long')});await h.locator('[data-long]').click();assert.match((await c.locator('li strong').textContent())!,/LongUnbroken/);await r.evaluate(e=>e.dir='rtl');
   for(const width of [320,390,768]){await page.setViewportSize({width,height:844});await page.evaluate(()=>new Promise<void>(res=>requestAnimationFrame(()=>requestAnimationFrame(()=>res()))));assert.ok(await r.evaluate(e=>e.scrollWidth<=e.clientWidth+1),part.id+' '+format+' '+layout+' fits '+width);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
   await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});assert.notEqual(await c.locator('[data-drop] strong').evaluate(e=>getComputedStyle(e).color),await c.locator('[data-drop]').evaluate(e=>getComputedStyle(e).backgroundColor));assert.equal(await r.evaluate(e=>e.getAnimations({subtree:true}).length),0);await page.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
   await input.setInputFiles({name:'tiny.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6ZmkAAAAASUVORK5CYII=','base64')});assert.equal(await c.locator('img').count(),1);
  }
  const ids=await page.locator('[data-upload]').evaluateAll(es=>es.map(e=>e.id));assert.equal(new Set(ids).size,ids.length);await page.evaluate(()=>(window as any).teardown());assert.equal(await page.locator('[data-part]').count(),0);assert.equal(await page.evaluate(()=>Object.values((window as any).refs).every(v=>v===null)),true);assert.equal(await page.evaluate(()=>Object.values((window as any).controllers).every(v=>v===null)),true);assert.ok(await page.evaluate(()=>(window as any).urlEvents.created.length>0&&(window as any).urlEvents.created.every((u:string)=>(window as any).urlEvents.revoked.includes(u))));
  await page.close();console.log('PASS '+parts.length+' uploads React '+format+' '+layout+' keyboard native chooser/controlled accepted-rejected/native FileList-FormData/required/accept/readonly/disabled/remove focus/independent uncontrolled reset/default data/long320390768/RTL/forced/reduced/uniqueIDs/refs/objectURL StrictMode cleanup');
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await server.close()}
