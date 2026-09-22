/** Consumer relocation tests. Real HTTP by default; explicit synthetic/offline mode for restricted runners. */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { ROOT, buildCatalog } from '../scripts/catalog.ts';
import { sourceReferences, isLocalReference, resolveLocal } from '../scripts/source-tools.ts';
import { inlineTestCSS } from './offline-fixture.ts';
import { scrollSampleHTML } from '../src/catalog/scroll-sample.ts';
import { getDelivery } from '../src/catalog/delivery.ts';
const offline=process.env.SOP_TEST_MODE==='offline';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const {parts}=buildCatalog(),out=path.join(ROOT,'.test-output/relocation');
fs.mkdirSync(out,{recursive:true});
const write=(name:string,code:string)=>{const full=path.join(out,name);fs.mkdirSync(path.dirname(full),{recursive:true});fs.writeFileSync(full,code);};
const topologies=['src/components/ui','apps/frontend/src/features/settings/ui','部品ライブラリ/widgets'];
const fixtures:string[]=[];
for(const [index,parent]of topologies.entries())for(const layout of ['portable','original']as const){
 const prefix=`consumer-${index}-${layout}`;fixtures.push(prefix);
 const styles:string[]=[],imports:string[]=[],mounts:string[]=[],markup:string[]=[];
 for(const [i,part]of parts.entries()){
  const d=getDelivery(part,'js',layout);
  // Original layout is nested per-part to avoid overwriting another part's shared/ files.
  const target=`${prefix}/${parent}/${layout==='original'?part.id+'/':''}`;
  for(const file of d.runtimeFiles)write(target+file.name,file.code);
  const entry=target.slice(prefix.length+1)+d.entry,css=target.slice(prefix.length+1)+d.stylesheet;
  imports.push(`import { init as init${i} } from ${JSON.stringify('./'+entry)};`);
  styles.push(`<link rel="stylesheet" href="./${css}">`);
  const art=part.category==='blocks'?part.markup.replace('<div class="sop-surface-content">','<div class="sop-surface-content"><button>Independent content</button>'):part.category==='scrollbars'?part.markup.replace('<div class="sop-scroll-content">','<div class="sop-scroll-content"><div style="height:1400px;width:1800px">'+scrollSampleHTML(part)+'</div>'):part.markup;
  markup.push(`<section data-part="${part.id}">${art}</section>`);
  mounts.push(`init${i}(document.querySelector('[data-part="${part.id}"] > *'))`);
 }
 write(prefix+'/src/shared/motion.ts','// existing user-owned shared helper — must not be overwritten\n');
 write(prefix+'/app-main.ts','// existing application entry — must not be overwritten\n');
 write(prefix+'/index.html',`<!doctype html><html lang="ja"><head><meta charset="utf-8">${styles.join('')}<style>body{background:#191b20;color:#eee}body>section{padding:20px;min-height:180px}.sop-surface{width:330px}</style></head><body><button id="unmount">取り外す</button>${markup.join('')}<script type="module" src="./harness.js"></script></body></html>`);
 write(prefix+'/harness.js',imports.join('\n')+`\nconst controls=[${mounts.join(',')}];window.ready=true;document.querySelector('#unmount').onclick=()=>{controls.forEach(c=>c.destroy());document.querySelectorAll('section[data-part]').forEach(s=>s.remove());window.removed=true;};`);
}
const server=http.createServer((req,res)=>{
 try{
  const url=new URL(req.url??'/','http://localhost');const name=decodeURIComponent(url.pathname);
  const full=path.resolve(out,'.'+name);
  if(!full.startsWith(out+path.sep)||!fs.statSync(full).isFile()){res.writeHead(404);res.end();return;}
  const type=full.endsWith('.js')?'text/javascript':full.endsWith('.css')?'text/css':'text/html';
  res.writeHead(200,{'Content-Type':type+'; charset=utf-8'});res.end(fs.readFileSync(full));
 }catch{res.writeHead(404);res.end();}
});
if(!offline) await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));
const address=server.address();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
const errors:string[]=[],results:string[]=[];
try{
 for(const fixture of fixtures){
  const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
  const failed:string[]=[];page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
  const trackAnimationFrames=()=>{const set=new Set<number>(),request=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window);window.requestAnimationFrame=callback=>{const id=request(time=>{set.delete(id);callback(time);});set.add(id);return id;};window.cancelAnimationFrame=id=>{set.delete(id);cancel(id);};Object.assign(window,{pendingRAF:set});};
  await page.addInitScript(trackAnimationFrames);
  if(offline) await page.evaluate(trackAnimationFrames);
  if (!offline) {
   if(!address||typeof address==='string')throw new Error('No local address');
   await page.goto(`http://127.0.0.1:${address.port}/${fixture}/index.html`);
  } else {
   // Explicit synthetic document, NOT an HTTP navigation success. Never change browser policy.
   const html=fs.readFileSync(path.join(out,fixture,'index.html'),'utf8');
   await page.setContent(html.replace(/<script[^>]*src="[^"]+"[^>]*><\/script>/g,'').replace(/<link[^>]*rel="stylesheet"[^>]*>/g,''));
   for(const match of html.matchAll(/<link[^>]*href="([^"]+)"/g)) await page.addStyleTag({content:inlineTestCSS(path.posix.join('/',fixture,match[1]), name=>fs.readFileSync(path.join(out,name),'utf8'))});
   const modules:Record<string,string>={};
   function visit(name:string){
    if(name in modules)return;const code=fs.readFileSync(path.join(out,name),'utf8');modules[name]='';
    const refs=sourceReferences(code,name).filter(isLocalReference);let result=code;
    for(const ref of refs.sort((a,b)=>b.start-a.start)){
     const target=resolveLocal(name,ref.request,n=>fs.existsSync(path.join(out,n)));visit(target);
     result=result.slice(0,ref.start)+'sop-fixture/'+target+result.slice(ref.end);
    }
    modules[name]=result;
   }
   visit(fixture+'/harness.js');
   await page.evaluate(async({modules,entry})=>{
    const imports:Record<string,string>={};
    for(const [name,code]of Object.entries(modules))imports['sop-fixture/'+name]=URL.createObjectURL(new Blob([code],{type:'text/javascript'}));
    const script=document.createElement('script');script.type='importmap';script.textContent=JSON.stringify({imports});document.head.append(script);
    await import('sop-fixture/'+entry);
    for(const url of Object.values(imports))URL.revokeObjectURL(url);
   },{modules,entry:fixture+'/harness.js'});
  }
  await page.waitForFunction(()=>Boolean((window as unknown as {ready:boolean}).ready));
  assert.equal(await page.locator('section[data-part]').count(),parts.length);assert.deepEqual(failed,[]);
  for(const part of parts){const root=page.locator(`[data-part="${part.id}"] > *`);assert.ok((await root.boundingBox())!.width>0);if(part.category==='scrollbars'){const rail=root.locator('.sop-scroll-rail');await rail.waitFor({state:'visible'});await rail.focus();await page.keyboard.press('End');await page.waitForFunction(id=>document.querySelector('[data-part="'+id+'"] .sop-scroll-rail')?.getAttribute('aria-valuenow')==='100',part.id);}if(part.category==='toggles'){const before=await root.getAttribute('aria-checked');await root.click();assert.notEqual(await root.getAttribute('aria-checked'),before);}}
  await page.locator('#unmount').click();await page.waitForTimeout(100);
  assert.equal(await page.locator('section[data-part]').count(),0);
  assert.equal(await page.evaluate(()=>(window as unknown as {pendingRAF:Set<number>}).pendingRAF.size),0);
  assert.match(fs.readFileSync(path.join(out,fixture,'src/shared/motion.ts'),'utf8'),/existing user-owned/);
  assert.match(fs.readFileSync(path.join(out,fixture,'app-main.ts'),'utf8'),/existing application entry/);
  results.push(fixture);console.log('PASS '+(offline?'explicit offline fixture':'real HTTP')+' relocation: '+fixture);await page.close();
 }
 assert.deepEqual(errors,[]);
 fs.writeFileSync(path.join(ROOT,'.test-output/relocation-results.json'),JSON.stringify({transport:offline?'explicit synthetic document + native ESM import map (NOT HTTP)':'HTTP/native ESM (no URL/module rewriting)',results,errors},null,2));
 console.log(`Relocation: ${results.length} consumer projects × ${parts.length} parts = ${results.length*parts.length} mounted parts.`);
}finally{await browser.close();if(server.listening)await new Promise<void>(resolve=>server.close(()=>resolve()));}
