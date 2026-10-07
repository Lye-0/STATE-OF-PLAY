import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {buildCatalog, ROOT} from '../scripts/catalog.ts';
import {getDelivery} from '../src/catalog/delivery.ts';
import {currentParts} from './gallery-counts.ts';

// Regressions observed in the visual review: test the real exported components, without gallery styles.
const categories = ['ornaments','loaders','numbers','segments','uploads','dropdowns','textboxes','contextmenus','tables'];
const specs = currentParts().filter(p => p.tags.includes('EXPANSION-50') && categories.includes(p.category));
const directory = path.join(ROOT, '.test-output/expansion-review');
fs.mkdirSync(directory, {recursive:true});
const parts = buildCatalog(ROOT, specs.map(p => p.id), {appearance:false}).parts;
const imports = parts.map((part, i) => {
  const delivery = getDelivery(part, 'js', 'portable');
  for (const file of delivery.files) {
    const target = path.join(directory, part.id, file.name);
    fs.mkdirSync(path.dirname(target), {recursive:true}); fs.writeFileSync(target, file.code);
  }
  return `import {init as init${i}} from './${part.id}/${delivery.entry}'; import './${part.id}/${delivery.stylesheet}';`;
}).join('\n');
fs.writeFileSync(path.join(directory,'entry.js'), imports + `
window.apis = {};
for (const part of [${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},markup:${JSON.stringify(p.markup)},init:init${i}}`).join(',')}]) {
 const section = document.createElement('section'); section.dataset.part = part.id; section.innerHTML = part.markup;
 document.body.append(section); window.apis[part.id] = part.init(section.firstElementChild);
}
window.ready = true;`);
fs.writeFileSync(path.join(directory,'index.html'), '<html><head><meta charset="utf-8"><style>body{margin:0;padding:12px;background:#242b36;color:#eee}section{width:100%;max-width:420px;box-sizing:border-box;margin:40px 0;padding:8px}*{box-sizing:border-box}</style></head><body><script type="module" src="./entry.js"></script></body></html>');
const server = await createServer({root:ROOT,server:{host:'127.0.0.1',port:0,watch:{ignored:['**/.test-output/**']}}});
await server.listen();
const browser = await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page = await browser.newPage({viewport:{width:320,height:844},reducedMotion:'reduce'});
const errors:string[]=[]; page.on('pageerror',e=>errors.push(e.message));
try {
 await page.goto(server.resolvedUrls!.local[0]+'.test-output/expansion-review/index.html');
 await page.waitForFunction(()=>(window as any).ready);
 for (const part of specs) {
  const host = page.locator(`[data-part="${part.id}"]`), root=host.locator(`.sop-${part.id}`);
  if (part.category === 'segments') {
   const rects=await root.locator('.sop-choice-item').evaluateAll(es=>es.map(e=>{const r=e.getBoundingClientRect();return {y:r.y,w:r.width}}));
   assert.equal(rects.length,3);
   assert.ok(rects.every(r=>Math.abs(r.y-rects[0].y)<1&&Math.abs(r.w-rects[0].w)<1),part.id+' equal choices at 320px');
  }
  if (part.category === 'uploads') {
   const aligned=await root.evaluate(e=>{
    const icon=e.querySelector('.ff-upload-symbol')!.getBoundingClientRect();
    const label=e.querySelector('.ff-dropzone strong')!.getBoundingClientRect();
    return Math.abs(icon.x+icon.width/2-label.x-label.width/2)<2;
   });
   assert.ok(aligned,part.id+' upload icon and label share an axis');
  }
  if (part.category === 'loaders' && part.designType==='A') {
   const contained=await root.evaluate(e=>{
    const stage=e.querySelector('.ct-loader-stage')!.getBoundingClientRect();
    return [...e.querySelectorAll('.x-composition i')].every(el=>{const r=el.getBoundingClientRect();return r.left>=stage.left-1&&r.right<=stage.right+1&&r.top>=stage.top-1&&r.bottom<=stage.bottom+1});
   });
   assert.ok(contained,part.id+' complete static composition, no clipped elements');
  }
  if (part.category === 'numbers' && part.designType==='A') {
   await root.scrollIntoViewIfNeeded();
   const input=root.locator('[data-number]'),before=await input.boundingBox(),value=Number(await input.inputValue());
   await root.locator('[data-adjust="1"]').click();
   await page.waitForFunction(({id,value})=>document.querySelector<HTMLElement>(`.sop-${id}`)?.style.getPropertyValue('--number-value')===String(value),{id:part.id,value:value+1});
   assert.deepEqual(await input.boundingBox(),before,part.id+' glyph/hit box stable during material response');
   await page.evaluate(id=>(window as any).apis[id].setData(9),part.id);
   await page.waitForFunction(id=>document.querySelector<HTMLElement>(`.sop-${id}`)?.style.getPropertyValue('--number-value')==='9',part.id);
  }
 }
 console.log('PASS equal segments, aligned upload controls, complete loader geometry and committed number material');
 // Text implicated by the audit: composite translucent ancestors before measuring contrast.
 for (const part of specs.filter(p => ['dropdowns','textboxes','contextmenus','tables'].includes(p.category) &&
   (p.designType==='A' || ['contextmenus','tables'].includes(p.category) || ['everyday-select','dense-list-select','warm-form-select'].includes(p.id)))) {
  const root=page.locator(`.sop-${part.id}`); await root.scrollIntoViewIfNeeded();
  if(part.category==='dropdowns') await root.locator('.sop-select-trigger').click();
  if(part.category==='contextmenus') await root.locator('.wb-context-open').click();
  const selector:Record<string,string>={dropdowns:'.sop-select-option-copy small,.sop-select-caption',textboxes:'.sop-field-help',contextmenus:'[data-danger=true]',tables:'.wb-cell-badge[data-value=review]'};
  const contrasts=await root.locator(selector[part.category]).evaluateAll(es=>{
   const canvas=document.createElement('canvas'); canvas.width=canvas.height=1; const context=canvas.getContext('2d')!;
   const color=(value:string)=>{context.clearRect(0,0,1,1);context.fillStyle=value;context.fillRect(0,0,1,1);return [...context.getImageData(0,0,1,1).data].map((v,i)=>i===3?v/255:v)};
   const mix=(a:number[],b:number[])=>a.slice(0,3).map((v,i)=>v*a[3]+b[i]*(1-a[3])).concat(1);
   const lum=(c:number[])=>c.slice(0,3).map(v=>v/255<=.04045?v/3294.6:((v/255+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
   return es.filter(e=>e.checkVisibility({checkOpacity:true,checkVisibilityCSS:true})).map(e=>{
    const layers:number[][]=[];let ancestor:Element|null=e;
    while(ancestor){const c=color(getComputedStyle(ancestor).backgroundColor);layers.push(c);if(c[3]===1)break;ancestor=ancestor.parentElement}
    let background=[255,255,255,1];for(const c of layers.reverse())background=mix(c,background);
    const a=lum(mix(color(getComputedStyle(e).color),background)),b=lum(background);
    return {text:e.textContent?.trim(),ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)};
   });
  });
  assert.ok(contrasts.length>0,part.id+' expected text is visible');
  assert.ok(contrasts.every(c=>c.ratio>=4.5),part.id+' readable text: '+JSON.stringify(contrasts));
  if(['dropdowns','contextmenus'].includes(part.category))await page.keyboard.press('Escape');
 }
 console.log('PASS corrected descriptions, danger actions and Review badges have text contrast >= 4.5:1');
 // Native lifecycle: visible, out of view, explicit pause, reduced motion, destroy/re-mount.
 await page.emulateMedia({reducedMotion:'no-preference'});
 for (const part of specs.filter(p=>p.category==='ornaments')) {
  const root=page.locator(`.sop-${part.id}`);await root.scrollIntoViewIfNeeded();
  await page.waitForFunction(id=>document.querySelector(`.sop-${id}`)?.getAttribute('data-ambient-running')==='true',part.id);
  const time=await root.evaluate(e=>e.getAnimations({subtree:true})[0]?.currentTime);assert.notEqual(time,undefined);
  await page.evaluate(()=>scrollTo(0,0));
  await page.waitForFunction(id=>document.querySelector(`.sop-${id}`)?.getAttribute('data-ambient-running')==='false',part.id);
  assert.ok(await root.evaluate(e=>e.getAnimations({subtree:true}).every(a=>a.playState==='paused')),part.id+' offscreen animation pauses');
  await root.scrollIntoViewIfNeeded();await page.evaluate(id=>(window as any).apis[id].setPaused(true),part.id);
  await page.waitForFunction(id=>document.querySelector(`.sop-${id}`)?.getAttribute('data-ambient-running')==='false',part.id);
  await page.evaluate(id=>(window as any).apis[id].setPaused(false),part.id);
  await page.waitForFunction(id=>document.querySelector(`.sop-${id}`)?.getAttribute('data-ambient-running')==='true',part.id);
 }
 await page.emulateMedia({reducedMotion:'reduce'});
 for (const part of specs.filter(p=>p.category==='ornaments')) {
  const root=page.locator(`.sop-${part.id}`);
  assert.equal(await root.evaluate(e=>e.getAnimations({subtree:true}).length),0,part.id+' reduced motion');
 }
 await page.evaluate(()=>{for(const api of Object.values((window as any).apis) as any[])api.destroy?.()});
 assert.equal(await page.locator('[data-ambient-running]').count(),0,'destroy restores owned lifecycle attributes');
 assert.equal(await page.locator('[style*="--number-value"]').count(),0,'destroy restores owned number properties');
 assert.deepEqual(errors,[]);
 console.log('PASS 20 independent ornament exports: visibility, pause, reduced motion and cleanup');
} finally {await browser.close();await server.close()}
