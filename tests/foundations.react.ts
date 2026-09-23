/** Real React runtime + the actual generated TSX/JSX files. No substitute React implementation. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Browser} from 'playwright';
import {buildCatalog,ROOT} from '../scripts/catalog.ts';
import {getDelivery} from '../src/catalog/delivery.ts';
import {testBundle} from './offline-fixture.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline',runtime=process.env.SOP_REACT_BROWSER_BUNDLE;
if(offline&&!runtime)throw new Error('Offline React verification requires a real React+ReactDOM browser bundle in SOP_REACT_BROWSER_BUNDLE. No runtime is substituted.');
const data=buildCatalog(),parts=data.parts.filter(p=>p.foundation),out=path.join(ROOT,'.test-output/foundations-react');fs.mkdirSync(out,{recursive:true});
const tests:string[]=[],errors:string[]=[],versions:unknown[]=[];let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined,url='';
const run=async(name:string,fn:()=>Promise<void>)=>{await fn();tests.push(name);console.log('PASS '+name);};
try{
 if(!offline){const{createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await server.listen();url=requireLocalServerUrl(server,'Foundation React tests');shutdown=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 for(const [format,layout]of [['tsx','portable'],['jsx','original']]as const){
  const prefix=`.test-output/foundations-react/${format}-${layout}`,extra=new Map<string,string>();
  const imports=parts.map((p,i)=>{const delivery=getDelivery(p,format,layout);for(const file of delivery.files){const name=`${prefix}/${p.id}/${file.name}`;extra.set(name,file.code);if(!offline){const target=path.join(ROOT,name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,file.code);}}return `import Component${i} from './${p.id}/${delivery.entry}';`;}).join('\n');
  const source=`import React,{useState,useRef}from'react';import{createRoot}from'react-dom/client';${imports}
 const definitions=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},kind:${JSON.stringify(p.category)},initial:${JSON.stringify(p.foundation!.defaultValue??null)},C:Component${i}}`).join(',')}];
 window.controllers=new Map();window.assignments=new Map();window.refs=new Map();window.nativeChanges=[];
 const fixtureItems=[{value:'a',label:'Alpha'},{value:'b',label:'Beta',disabled:true},{value:'c',label:'Gamma'}];
 function Item({item}){const[value,setValue]=useState(item.initial),[options,setOptions]=useState({});const C=item.C;window.assignments.set(item.id,updates=>setOptions(old=>({...old,...updates})));return <section data-item={item.id}><C ref={el=>{if(el)window.refs.set(item.id,el);else window.refs.delete(item.id);}} controllerRef={api=>{if(api)window.controllers.set(item.id,api);else window.controllers.delete(item.id);}} {...options} label={'Field '+item.id}/></section>;}
 function Controlled(){const[v,setV]=useState(25),[version,setVersion]=useState(0);const Slider=definitions.find(p=>p.id==='aurora-range').C,Radio=definitions.find(p=>p.id==='aurora-choice').C,NumberInput=definitions.find(p=>p.id==='aurora-stepper').C,Combo=definitions.find(p=>p.id==='aurora-finder').C;const[choice,setChoice]=useState('a'),[amount,setAmount]=useState(.5),[combo,setCombo]=useState('');return <div id='controlled'>
  <section data-case='slider'><Slider label='Controlled slider' min={0} max={100} value={v} onValueChange={setV}/><output>{v}</output></section>
  <section data-case='slider-declined'><Slider label='Declined slider' value={25} onValueChange={x=>window.nativeChanges.push(x)}/></section>
  <section data-case='radio'><Radio items={fixtureItems} value={choice} onValueChange={setChoice}/><output>{choice}</output></section>
  <section data-case='radio-declined'><Radio items={fixtureItems} value='a' onValueChange={x=>window.nativeChanges.push(x)}/></section>
  <section data-case='number'><NumberInput min={-2} max={2} step={.25} value={amount} onValueChange={setAmount} description={'revision '+version}/><output>{amount}</output></section>
  <section data-case='combo'><Combo items={fixtureItems} value={combo} onValueChange={setCombo}/><output>{combo}</output></section>
  <button id='rerender' onClick={()=>setVersion(x=>x+1)}>Rerender {version}</button>
 </div>;}
 function App(){const[visible,setVisible]=useState(true);return <><button id='mount-toggle' onClick={()=>setVisible(v=>!v)}>Mount toggle</button><Controlled/>{visible&&definitions.map(item=><Item key={item.id} item={item}/>)}</>;}
 const root=createRoot(document.getElementById('root'));window.unmountAll=()=>root.unmount();root.render(<React.StrictMode><App/></React.StrictMode>);window.reactVersion=React.version;`;
  const entry=prefix+'/entry.jsx';extra.set(entry,source);const p=await browser.newPage({viewport:{width:1280,height:960}});p.on('pageerror',e=>errors.push(e.message));p.setDefaultTimeout(10000);await p.emulateMedia({reducedMotion:'reduce'});
  if(offline){await p.setContent('<!doctype html><html><head><meta charset="utf-8"></head><body><div id="root"></div></body></html>');await p.evaluate(async text=>{const u=URL.createObjectURL(new Blob([text],{type:'text/javascript'}));const m=await import(u);Object.assign(window,{RealReact:m.r,RealDOM:m.e});URL.revokeObjectURL(u);},fs.readFileSync(runtime!,'utf8'));await p.addScriptTag({content:testBundle(entry,extra,'const React=window.RealReact,ReactDOMClient=window.RealDOM;')});}
  else {fs.mkdirSync(path.join(ROOT,prefix),{recursive:true});fs.writeFileSync(path.join(ROOT,entry),source);fs.writeFileSync(path.join(ROOT,prefix,'index.html'),'<html><head><meta charset="utf-8"></head><body><div id="root"></div><script type="module" src="./entry.jsx"></script></body></html>');await p.goto(new URL(prefix+'/index.html',url).href);}
  await p.addStyleTag({content:data.styles+'\nbody{padding:32px;background:#181b1c;color:#eef;font:14px Arial}section{display:inline-block;vertical-align:top;width:360px;margin:20px;padding:10px}section>output{display:block;padding:10px}'});
  await p.waitForSelector('[data-item]');versions.push(await p.evaluate(()=>(window as any).reactVersion));
  await run(`${format}/${layout}: all ${parts.length} generated components mount with usable refs and unique identifiers`,async()=>{
   assert.equal(await p.locator('[data-item]').count(),parts.length);assert.equal(await p.evaluate(()=>(window as any).controllers.size),parts.length);assert.equal(await p.evaluate(()=>(window as any).refs.size),parts.length);
   const ids=await p.locator('[id]').evaluateAll(es=>es.map(e=>e.id));assert.equal(ids.length,new Set(ids).size);
   await p.evaluate(()=>{for(const api of (window as any).controllers.values()){api.setDisabled(true);api.setDisabled(false);}});assert.equal(await p.locator('[data-item] [data-foundation-mounted=true]').count(),parts.length);
  });
  await run(`${format}/${layout}: controlled native range and radio reflect accepted and declined changes`,async()=>{
   const slider=p.locator('[data-case=slider] input[data-range="0"]');await slider.focus();await slider.press('ArrowRight');assert.equal(await p.locator('[data-case=slider] output').last().innerText(),'26');const declined=p.locator('[data-case=slider-declined] input[data-range="0"]');await declined.focus();await declined.press('ArrowRight');assert.equal(await declined.inputValue(),'25');
   await p.locator('[data-case=radio] input[value=c]').check();assert.equal(await p.locator('[data-case=radio]>output').innerText(),'c');await p.locator('[data-case=radio-declined] input[value=c]').click();assert.ok(await p.locator('[data-case=radio-declined] input[value=a]').isChecked());
  });
  await run(`${format}/${layout}: native editing survives React rerender; callback commits a numeric value`,async()=>{
   const input=p.locator('[data-case=number] [data-number]');await input.fill('-');await p.locator('#rerender').click();assert.equal(await input.inputValue(),'-');await input.fill('1.25');await input.press('Tab');assert.equal(await p.locator('[data-case=number]>output').innerText(),'1.25');assert.equal(await input.inputValue(),'1.25');
  });
  await run(`${format}/${layout}: controlled combobox changes value and shows the selected label`,async()=>{
   const input=p.locator('[data-case=combo] [data-combo]');await input.fill('Ga');await input.press('ArrowDown');await input.press('Enter');assert.equal(await p.locator('[data-case=combo]>output').innerText(),'c');assert.equal(await input.inputValue(),'Gamma');
  });
  await run(`${format}/${layout}: updated props reach controller without replacing its root`,async()=>{
   await p.evaluate(()=>{(window as any).oldRange=(window as any).refs.get('mercury-range');(window as any).assignments.get('mercury-range')({min:10,max:40,step:5,unit:'kg'});});await p.waitForFunction(()=>document.querySelector('[data-item="mercury-range"] [data-max]')?.textContent==='40kg');assert.ok(await p.evaluate(()=>(window as any).oldRange===(window as any).refs.get('mercury-range')));
  });
  await run(`${format}/${layout}: notification and open popup clean up during mount/unmount cycles`,async()=>{
   for(let n=0;n<2;n++){await p.evaluate(()=>{(window as any).controllers.get('aurora-notice').notify({title:'Close on unmount',duration:0});(window as any).controllers.get('aurora-finder').show();});await p.locator('#mount-toggle').click();assert.equal(await p.locator('[data-item]').count(),0);assert.equal(await p.locator('.ff-toast-stack').count(),0);assert.equal(await p.evaluate(()=>(window as any).controllers.size),0);await p.locator('#mount-toggle').click();assert.equal(await p.locator('[data-item]').count(),parts.length);}
   await p.evaluate(()=>(window as any).unmountAll());assert.equal(await p.locator('[data-foundation-mounted]').count(),0);assert.equal(await p.locator(':popover-open').count(),0);assert.deepEqual(errors,[]);
  });await p.close();
 }
 console.log(`Real React checks: ${tests.length} passed.`);
}finally{fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'offline transport, real installed React/ReactDOM modules; not Vite':'real Vite with installed React',versions,passed:tests.length,tests,errors},null,2)+'\n');await browser?.close();await shutdown?.();}
