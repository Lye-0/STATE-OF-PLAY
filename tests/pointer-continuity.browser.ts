/** Real standalone previews: light tracking is continuous and never commits an input value. */
import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {chromium} from 'playwright';import {createServer} from 'vite';
import {buildCatalog,ROOT} from '../scripts/catalog.ts';
import {getDelivery} from '../src/catalog/delivery.ts';
const cases=[
 {id:'capillary-field',owner:'.sop-responsive-field',target:'.sop-field-shell',property:'--field-px',rest:50},
 {id:'aurora-window',owner:'dialog',target:'dialog',property:'--pop-x',rest:65},
 {id:'aurora-select',owner:'.sop-select-popup',target:'.sop-select-popup',property:'--sel-light-x',rest:50},
];
const parts=buildCatalog(ROOT,cases.map(c=>c.id),{appearance:false}).parts;const fixtures=path.join(ROOT,'.test-output/pointer-continuity'),out=path.join(fixtures,'screenshots');fs.mkdirSync(out,{recursive:true});
for(const part of parts){const dir=path.join(fixtures,part.id);fs.mkdirSync(dir,{recursive:true});for(const [name,code]of Object.entries(part.preview))fs.writeFileSync(path.join(dir,name),code);}
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0,watch:{ignored:['**/.test-output/**','**/docs/**']}}});await server.listen();const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1100,height:850}});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
// Sample the first rendered return step in the browser, before IPC latency can
// consume the animation. A jump straight to rest must still fail the assertion.
async function firstReturn(c:typeof cases[number],held:number){
 const sample=await page.waitForFunction(({selector,property,held})=>{
  const value=Number.parseFloat(getComputedStyle(document.querySelector(selector)!).getPropertyValue(property));
  return value<held-.1?{value}:false;
 },{selector:c.owner,property:c.property,held});
 const result=await sample.jsonValue();await sample.dispose();assert.ok(result);return result.value;
}

try{
 for(const c of cases){
  await page.goto(server.resolvedUrls!.local[0]+'.test-output/pointer-continuity/'+c.id+'/index.html');await page.emulateMedia({reducedMotion:'no-preference'});
  if(c.id==='aurora-window')await page.locator('[data-popup-open]').click();if(c.id==='aurora-select')await page.locator('.sop-select-trigger').click();
  const owner=page.locator(c.owner),target=page.locator(c.target);await target.waitFor({state:'visible'});await page.mouse.move(1,1);await page.waitForTimeout(450);
  const read=()=>owner.evaluate((el,property)=>Number.parseFloat(getComputedStyle(el).getPropertyValue(property)),c.property);
  const rect=await target.boundingBox();assert.ok(rect);assert.ok(Math.abs(await read()-c.rest)<.1,c.id+' rest');
  const beforeInput=c.id==='capillary-field'?await page.locator('.sop-field-control').inputValue():c.id==='aurora-select'?await page.locator('.sop-select-input').inputValue():null;
  const immediate=await target.evaluate((el,{selector,property,x,y})=>{const owner=document.querySelector(selector)!;const read=()=>Number.parseFloat(getComputedStyle(owner).getPropertyValue(property));const before=read();el.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,pointerType:'mouse',clientX:x,clientY:y}));return{before,after:read()};},{selector:c.owner,property:c.property,x:rect.x+rect.width*.82,y:rect.y+rect.height*.3});
  assert.ok(Math.abs(immediate.after-immediate.before)<.01,c.id+' does not teleport on pointer entry');
  await page.mouse.move(rect.x+rect.width*.82,rect.y+rect.height*.3);await page.waitForFunction(({selector,property})=>Number.parseFloat(getComputedStyle(document.querySelector(selector)!).getPropertyValue(property))>80,{selector:c.owner,property:c.property});const held=await read();assert.ok(held>75,c.id+' follows the pointer');
  await owner.screenshot({path:path.join(out,c.id+'-hover.png'),animations:'disabled'});
  await page.mouse.move(Math.max(1,rect.x-25),Math.max(1,rect.y-25));const returning=await firstReturn(c,held);assert.ok(returning>c.rest+.1&&returning<held-.1,c.id+' smooth return '+[held,returning]);
  // Re-entry while returning must continue from the rendered position.
  const reentry=await target.evaluate((el,{selector,property,x,y})=>{const owner=document.querySelector(selector)!;const read=()=>Number.parseFloat(getComputedStyle(owner).getPropertyValue(property));const before=read();el.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,pointerType:'mouse',clientX:x,clientY:y}));return{before,after:read()};},{selector:c.owner,property:c.property,x:rect.x+rect.width*.2,y:rect.y+rect.height*.3});
  assert.ok(Math.abs(reentry.after-reentry.before)<.01,c.id+' no snap on interrupted return');
  await target.dispatchEvent('pointerleave');await page.waitForFunction(({selector,property,rest})=>Math.abs(Number.parseFloat(getComputedStyle(document.querySelector(selector)!).getPropertyValue(property))-rest)<.2,{selector:c.owner,property:c.property,rest:c.rest});assert.ok(Math.abs(await read()-c.rest)<.2,c.id+' settles');
  await page.emulateMedia({reducedMotion:'reduce'});await page.waitForFunction(({selector,property,rest})=>Number.parseFloat(getComputedStyle(document.querySelector(selector)!).getPropertyValue(property))===rest,{selector:c.owner,property:c.property,rest:c.rest});const reduced=await read();await target.dispatchEvent('pointermove',{pointerType:'mouse',clientX:rect.x+rect.width*.85,clientY:rect.y+rect.height*.3});await page.waitForTimeout(120);assert.equal(await read(),reduced,c.id+' reduced motion');
  if(c.id==='capillary-field')assert.equal(await page.locator('.sop-field-control').inputValue(),beforeInput);if(c.id==='aurora-select')assert.equal(await page.locator('.sop-select-input').inputValue(),beforeInput);
  console.log('PASS '+c.id+': entry, return, interrupted return, reduced motion and unchanged values');
 }
 await page.emulateMedia({reducedMotion:'no-preference'});
 const reveal=await page.evaluate(async()=>{
  const {presentationSpring}=await import(/* @vite-ignore */'/src/shared/presentation-spring.ts' as string);
  const root=document.createElement('div');root.style.cssText='position:fixed;left:20px;top:20px;width:50px;height:50px;display:none';document.body.append(root);
  const driver=presentationSpring(root,{x:50},(v:{x:number})=>root.style.setProperty('--probe',String(v.x)));driver.to({x:50},true);
  const frame=()=>new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));await frame();await frame();
  root.style.display='block';driver.to({x:82});const initial=Number(root.style.getPropertyValue('--probe'));await frame();const moving=Number(root.style.getPropertyValue('--probe'));
  root.style.left='-1000px';await frame();await frame();driver.to({x:20});const offscreen=Number(root.style.getPropertyValue('--probe'));
  driver.destroy();root.remove();return{initial,moving,offscreen};
 });
 assert.equal(reveal.initial,50,'newly revealed surfaces do not snap before the observer catches up');assert.ok(reveal.moving>50&&reveal.moving<82);assert.equal(reveal.offscreen,20,'offscreen surfaces stay static');console.log('PASS newly revealed surfaces ease immediately; offscreen surfaces remain static');
 for(const [format,layout]of [['tsx','portable'],['jsx','original']]as const){
  const directory=path.join(fixtures,'react-'+format+'-'+layout);fs.mkdirSync(directory,{recursive:true});
  const imports=parts.map((part,i)=>{const delivery=getDelivery(part,format,layout);for(const file of delivery.files){const target=path.join(directory,part.id,file.name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,file.code);}return `import C${i} from './${part.id}/${delivery.entry}';`;}).join('\n');
  fs.writeFileSync(path.join(directory,'entry.jsx'),`import React from 'react';import{createRoot}from'react-dom/client';${imports}\nconst root=createRoot(document.querySelector('#root'));window.teardown=()=>root.unmount();root.render(<React.StrictMode>${parts.map((p,i)=>`<section data-part="${p.id}"><C${i} ${p.category==='dropdowns'?"items={[{value:'one',label:'One'},{value:'two',label:'Two'},{value:'three',label:'Three'}]}":p.category==='popups'?"title='Preview'":"label='Preview'"}/></section>`).join('')}</React.StrictMode>);`);
  fs.writeFileSync(path.join(directory,'index.html'),'<html><head><meta charset="utf-8"><link rel="icon" href="data:,"><style>body{background:#192025;color:#edf2eb;font:14px Arial;padding:30px}section{width:350px;margin:35px}</style></head><body><div id="root"></div><script type="module" src="./entry.jsx"></script></body></html>');
  await page.goto(server.resolvedUrls!.local[0]+path.relative(ROOT,path.join(directory,'index.html')).replaceAll('\\','/'));await page.emulateMedia({reducedMotion:'no-preference'});await page.waitForFunction(()=>document.querySelectorAll('[data-part]').length===3);
  for(const c of cases){
   if(c.id==='aurora-window')await page.locator('[data-popup-open]').click();if(c.id==='aurora-select')await page.locator('.sop-select-trigger').click();
   const owner=page.locator(c.owner),target=page.locator(c.target);await target.scrollIntoViewIfNeeded();await page.mouse.move(1,1);await page.waitForTimeout(500);
   const read=()=>owner.evaluate((el,p)=>Number.parseFloat(getComputedStyle(el).getPropertyValue(p)),c.property),rect=await target.boundingBox();assert.ok(rect);assert.ok(Math.abs(await read()-c.rest)<.2,c.id+' React rest');
   await page.mouse.move(rect.x+rect.width*.82,rect.y+rect.height*.3);await page.waitForFunction(({selector,property})=>Number.parseFloat(getComputedStyle(document.querySelector(selector)!).getPropertyValue(property))>80,{selector:c.owner,property:c.property});const held=await read();assert.ok(held>75,c.id+' React follows pointer');
   await page.mouse.move(Math.max(1,rect.x-25),Math.max(1,rect.y-25));const returning=await firstReturn(c,held);assert.ok(returning>c.rest+.1&&returning<held-.1,c.id+' React gradual return');await page.waitForFunction(({selector,property,rest})=>Math.abs(Number.parseFloat(getComputedStyle(document.querySelector(selector)!).getPropertyValue(property))-rest)<.2,{selector:c.owner,property:c.property,rest:c.rest});assert.ok(Math.abs(await read()-c.rest)<.2,c.id+' React settles');
   if(c.id==='aurora-window')await page.keyboard.press('Escape');if(c.id==='aurora-select')await page.locator('.sop-select-trigger').press('Escape');
  }
  await page.evaluate(()=>(window as any).teardown());assert.equal(await page.locator('[data-part]').count(),0);console.log('PASS real React StrictMode entry/return and unmount: '+format+' '+layout);
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await server.close();}
