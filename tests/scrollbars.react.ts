/** Actual exported React sources, not a replacement implementation. Default uses Vite + installed React. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';
import {getDelivery} from '../src/catalog/delivery.ts';
import {testBundle,inlineTestCSS} from './offline-fixture.ts';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline';
if(offline&&!process.env.SOP_REACT_BROWSER_BUNDLE)throw new Error('Offline React verification requires an actual React browser runtime.');
const bars=buildCatalog().parts.filter(p=>p.category==='scrollbars');
const results:string[]=[],errors:string[]=[];
const out=path.join(ROOT,'.test-output/scrollbar-react');fs.mkdirSync(out,{recursive:true});
let shutdown:(()=>Promise<void>)|undefined,url='';
if(!offline){const {createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await server.listen();url=server.resolvedUrls!.local[0].replace(/\/$/,'');shutdown=()=>server.close();}
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try {
 for(const format of ['tsx','jsx'] as const) {
  const prefix=`.test-output/scrollbar-react/${format}`,extra=new Map<string,string>();
  const imports:string[]=[],styles:string[]=[];
  for(const [i,part] of bars.entries()) {
   const d=getDelivery(part,format,'portable');for(const f of d.files)extra.set(prefix+'/'+f.name,f.code);
   imports.push(`import Part${i} from './${d.entry}';`);styles.push(prefix+'/'+d.stylesheet);
  }
  const source=`import React,{useState} from 'react';import {createRoot} from 'react-dom/client';\n${imports.join('\n')}
const parts=[${bars.map((p,i)=>`{id:'${p.id}',C:Part${i}}`).join(',')}];
function Item({part,short,direction}){const [progress,setProgress]=useState(0),[clicks,setClicks]=useState(0);const C=part.C;return <section data-part={part.id}><output>{Math.round(progress*100)}</output><C orientation={direction} onProgressChange={setProgress} style={{height:260,width:460}}><div style={{height:short?60:1200,width:direction==='horizontal'&&!short?1700:'auto'}}><button onClick={()=>setClicks(clicks+1)}>child {clicks}</button><p>Actual consumer children</p></div></C><C style={{height:100,width:460}}><p>Short independent copy</p></C></section>}
function App(){const [show,setShow]=useState(true),[short,setShort]=useState(false),[direction,setDirection]=useState('vertical');return <><button id="show" onClick={()=>setShow(!show)}>Mount</button><button id="short" onClick={()=>setShort(!short)}>Content</button><button id="direction" onClick={()=>setDirection(direction==='vertical'?'horizontal':'vertical')}>Direction</button>{show&&parts.map(part=><Item key={part.id} part={part} short={short} direction={direction}/>)}</>};
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);`;
  extra.set(prefix+'/main.jsx',source);
  const html=`<!doctype html><html><head><meta charset="utf-8">${styles.map(s=>`<link rel="stylesheet" href="/${s}">`).join('')}<style>body{background:#181b1e;color:#ddd}body section{margin:20px}button{padding:8px}</style></head><body><div id="root"></div><script type="module" src="/${prefix}/main.jsx"></script></body></html>`;
  for(const [name,code] of extra){const full=path.join(ROOT,name);fs.mkdirSync(path.dirname(full),{recursive:true});fs.writeFileSync(full,code);}fs.writeFileSync(path.join(ROOT,prefix,'index.html'),html);
  const page=await browser.newPage({viewport:{width:1200,height:900}});page.on('pageerror',e=>errors.push(e.message));
  const track=()=>{const frames=new Set<number>(),request=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window);Object.assign(window,{scrollReactFrames:frames});window.requestAnimationFrame=fn=>{const id=request(t=>{frames.delete(id);fn(t)});frames.add(id);return id;};window.cancelAnimationFrame=id=>{frames.delete(id);cancel(id);};};
  await page.addInitScript(track);
  if(offline){await page.setContent(html.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));await page.evaluate(track);
   for(const s of styles)await page.addStyleTag({content:inlineTestCSS('/'+s,name=>extra.get(name.slice(1))??fs.readFileSync(path.join(ROOT,name),'utf8'))});
   const bundle=testBundle(prefix+'/main.jsx',extra,"const {r:React,e:ReactDOMClient}=window.testReactRuntime;");
   await page.evaluate(async source=>{const u=URL.createObjectURL(new Blob([source],{type:'text/javascript'}));try{Object.assign(window,{testReactRuntime:await import(u)});}finally{URL.revokeObjectURL(u)}},fs.readFileSync(process.env.SOP_REACT_BROWSER_BUNDLE!,'utf8'));
   await page.addScriptTag({content:bundle});
  } else await page.goto(url+'/'+prefix+'/index.html');
  await page.waitForFunction(()=>document.querySelectorAll('[data-part]').length===24);await page.waitForTimeout(100);
  assert.equal(await page.locator('.sop-scroll-area').count(),48);
  for(const p of bars){const section=page.locator(`[data-part="${p.id}"]`),rail=section.locator('.sop-scroll-rail').first();await rail.waitFor({state:'visible'});await rail.focus();await page.keyboard.press('End');await page.waitForFunction(id=>document.querySelector('[data-part="'+id+'"] output')?.textContent==='100',p.id);assert.equal(await section.locator('.sop-scroll-rail').nth(1).isVisible(),false);}
  await page.locator('#direction').click();await page.waitForFunction(()=>[...document.querySelectorAll('[data-part] .sop-scroll-area:first-of-type .sop-scroll-rail')].every(e=>e.getAttribute('aria-orientation')==='horizontal'));
  for(const p of bars){const rail=page.locator(`[data-part="${p.id}"] .sop-scroll-rail`).first();await rail.focus();await page.keyboard.press('End');await page.waitForFunction(id=>document.querySelector('[data-part="'+id+'"] output')?.textContent==='100',p.id);}
  await page.locator('#short').click();await page.waitForFunction(()=>[...document.querySelectorAll('.sop-scroll-rail')].every(e=>(e as HTMLElement).hidden));
  const child=page.locator('[data-part="capillary"] .sop-scroll-content button');await child.click();assert.equal(await child.innerText(),'child 1');
  const ids=await page.locator('.sop-scroll-viewport').evaluateAll(e=>e.map(v=>v.id));assert.equal(new Set(ids).size,48);
  await page.locator('#short').click();await page.waitForFunction(()=>[...document.querySelectorAll('[data-part]')].every(e=>!(e.querySelector('.sop-scroll-rail') as HTMLElement).hidden));
  for(let i=0;i<3;i++){await page.locator('#show').click();await page.waitForFunction(()=>document.querySelectorAll('.sop-scroll-area').length===0);assert.equal(await page.evaluate(()=>(window as unknown as {scrollReactFrames:Set<number>}).scrollReactFrames.size),0);await page.locator('#show').click();await page.waitForFunction(()=>document.querySelectorAll('.sop-scroll-area').length===48);}
  results.push(`${format}: 24 parts, 48 independent instances, progress callbacks, React orientation/content updates, child actions, unique IDs, repeated cleanup`);console.log('PASS '+results.at(-1));await page.close();
 }
 assert.deepEqual(errors,[]);fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'synthetic document, actual installed React production runtime (not Vite)':'Vite + installed React development StrictMode',tests:results,errors},null,2)+'\n');
}finally{await browser.close();await shutdown?.();}
