import {galleryReady} from './gallery-ready.ts';
/** Native button/link behavior plus real exported React components. No network actions are performed. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import type {Browser,Page} from 'playwright';
import {ROOT,buildCatalog} from './historical-catalog.ts';
import {offlineFiles,testBundle} from './offline-fixture.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const data=buildCatalog(),parts=data.parts.filter(p=>(p.category==='buttons'||p.category==='links')&&!p.tags.includes('GLASS LAB'));
const offline=process.env.SOP_TEST_MODE==='offline';
const out=path.join(ROOT,'.test-output/actions');fs.mkdirSync(out,{recursive:true});
const results:string[]=[],errors:string[]=[];let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined,url='';
const run=async(name:string,fn:()=>Promise<void>)=>{await fn();results.push(name);console.log('PASS '+name);};
const write=(name:string,code:string)=>{const f=path.join(ROOT,name);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,code);};
try {
 if(!offline){const {createServer}=await import('vite');const s=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});shutdown=()=>s.close();await s.listen();url=requireLocalServerUrl(s,'Action test server');}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext({viewport:{width:1440,height:1020},acceptDownloads:true});
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 if(offline){const files=offlineFiles(data);await page.setContent(files.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));await page.addStyleTag({content:files.get('/test-styles.css')!});for(const v of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor',v+'.js'),'utf8')});await page.addScriptTag({content:files.get('/test-app.js')!});}else await page.goto(url);
 await run('Collections: 24 buttons and 16 links with both design intentions',async()=>{
  for(const [category,total,a]of [['buttons',26,17],['links',16,10]]as const){const extra=category==='links'&&!offline?1:0;await page.locator(`[data-category="${category}"]`).click();await galleryReady(page,true);assert.equal(await page.locator('[data-part]').count(),total+2*extra);await page.locator('[data-design-filter="A"]').click();await galleryReady(page,true);assert.equal(await page.locator('[data-part]').count(),a+extra);await page.locator('[data-design-filter="B"]').click();await galleryReady(page,true);assert.equal(await page.locator('[data-part]').count(),total-a+extra);await page.locator('[data-design-filter="all"]').click();await galleryReady(page,true);}
 });
 await run('Button demo: mouse, Space, Enter, visible feedback and busy reentry guard',async()=>{
  await page.locator('[data-category="buttons"]').click();await galleryReady(page,true);const button=page.locator('[data-part="helios-button"] .sop-action'),card=page.locator('[data-part="helios-button"]');
  await button.click();assert.equal(await button.getAttribute('aria-busy'),'true');await button.evaluate(e=>{(e as HTMLButtonElement).click();(e as HTMLButtonElement).click();});await page.waitForTimeout(920);assert.match(await card.locator('.action-demo-feedback').innerText(),/^1回/);
  await button.focus();await page.keyboard.press('Space');await page.waitForTimeout(920);await page.keyboard.press('Enter');await page.waitForTimeout(920);assert.match(await card.locator('.action-demo-feedback').innerText(),/^3回/);assert.equal(await page.locator('dialog[open]').count(),0);
 });
 await run('Detail: persistent preview, loading/disabled controls and exact code prompt',async()=>{
  await page.locator('[data-open="mercury-button"]').click();await galleryReady(page,true);const d=page.locator('#part-details'),b=d.locator('.sop-action');
  await d.locator('[data-action-state="loading"]').click();assert.equal(await b.getAttribute('aria-busy'),'true');await d.locator('[data-format="js"]').click();await d.locator('#export-layout').selectOption('original');assert.equal(await b.getAttribute('aria-busy'),'true');
  await d.locator('[data-action-state="disabled"]').click();assert.ok(await b.isDisabled());await d.locator('[data-action-state="ready"]').click();assert.ok(await b.isEnabled());assert.equal(await b.getAttribute('aria-busy'),null);
  await b.click();await d.locator('[data-action-state="loading"]').click();await page.waitForTimeout(950);assert.equal(await b.getAttribute('aria-busy'),'true','manual state must cancel demo timer');
  await d.locator('[data-action-state="ready"]').click();assert.match(await d.locator('.action-demo-feedback').innerText(),/クリックして/);await d.locator('[data-format="tsx"]').click();await d.locator('#export-layout').selectOption('portable');await d.locator('[data-detail-tab="prompt"]').click();assert.equal(await d.locator('#prompt-text').inputValue(),buildPrompt(parts.find(p=>p.id==='mercury-button')!,'tsx','portable'));
  await d.locator('[data-detail-tab="code"]').click();await page.screenshot({path:path.join(out,'button-detail.png')});await d.locator('.close-detail').click();
 });
 await run('Native links navigate to actual targets without opening/closing part details',async()=>{
  await page.locator('[data-category="links"]').click();await galleryReady(page,true);const link=page.locator('[data-part="compass-link"] .sop-link');await link.click();assert.match(page.url(),/#sop-demo-compass-link-gallery-destination$/);assert.ok(await page.locator('#sop-demo-compass-link-gallery-destination').isVisible());assert.equal(await page.locator('dialog[open]').count(),0);
  await page.locator('#sop-demo-compass-link-gallery-destination a').click();await page.locator('[data-open="compass-link"]').click();await galleryReady(page,true);const d=page.locator('#part-details');await d.locator('.sop-link').focus();await page.keyboard.press('Enter');assert.ok(await d.isVisible());assert.ok(await d.locator('.action-link-destination').isVisible());await d.locator('.action-link-destination a').click();await page.screenshot({path:path.join(out,'link-detail.png')});await d.locator('.close-detail').click();
 });
 await run('Mobile 320/390/768 and long Japanese labels preserve text/icon and usable source controls',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:900});for(const category of ['buttons','links']){await page.locator(`[data-category="${category}"]`).click();await galleryReady(page,true);for(const p of parts.filter(p=>p.category===category)){const el=page.locator(`[data-part="${p.id}"] .${category==='buttons'?'sop-action':'sop-link'}`);const box=(await el.boundingBox())!;assert.ok(box.x>=-1&&box.x+box.width<=width+1,p.id+' '+width);}assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
   await page.locator('[data-open="compass-link"]').click();await galleryReady(page,true);const d=page.locator('#part-details');assert.ok(await d.locator('.download-file').isVisible());if(width===390)await page.screenshot({path:path.join(out,'mobile-390.png')});await d.locator('.close-detail').click();
  }await page.setViewportSize({width:1440,height:1020});
 });
 const native=await context.newPage();native.on('pageerror',e=>errors.push(e.message));
 await native.setContent('<form id="form">'+parts.map(p=>`<section data-case="${p.id}" style="margin:16px">${p.markup}</section>`).join('')+'<section id="destination" tabindex="-1">Destination</section></form>');await native.addStyleTag({content:data.styles+'body{background:#181b1d;color:#eee;}'});
 const entry='.test-output/actions/native.ts';const code=parts.map((p,i)=>`import{init as i${i}}from'../../src/parts/${p.category}/${p.id}/vanilla/init';`).join('\n')+`const controllers={};`+parts.map((p,i)=>`controllers['${p.id}']=i${i}(document.querySelector('[data-case="${p.id}"]>*'));`).join('\n')+`Object.assign(window,{controllers,counts:{},submits:0});document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();window.submits++});document.querySelectorAll('.sop-action').forEach(b=>b.addEventListener('click',()=>{const id=b.parentElement.dataset.case;window.counts[id]=(window.counts[id]||0)+1;}));`;
 await native.addScriptTag({content:testBundle(entry,new Map([[entry,code]]))});
 await run('All 24 native buttons: type=button, busy/disabled guards, restore after destroy',async()=>{
  for(const p of parts.filter(p=>p.category==='buttons')){const b=native.locator(`[data-case="${p.id}"] button`);await b.click();assert.equal(await b.getAttribute('type'),'button');
   await native.evaluate(id=>(window as any).controllers[id].setLoading(true),p.id);await b.evaluate(e=>(e as HTMLButtonElement).click());assert.equal(await native.evaluate(id=>(window as any).counts[id],p.id),1);
   await native.evaluate(id=>{(window as any).controllers[id].setLoading(false);(window as any).controllers[id].setDisabled(true);},p.id);assert.ok(await b.isDisabled());await b.evaluate(e=>(e as HTMLButtonElement).click());assert.equal(await native.evaluate(id=>(window as any).counts[id],p.id),1);
   await native.evaluate(id=>(window as any).controllers[id].setDisabled(false),p.id);await b.click();assert.equal(await native.evaluate(id=>(window as any).counts[id],p.id),2);
  }assert.equal(await native.evaluate(()=>(window as any).submits),0);
 });
 await run('Explicit submit/reset, fieldset disabled, and busy programmatic clicks',async()=>{
  const b=native.locator('[data-case="quiet-button"] button');await b.evaluate(e=>(e as HTMLButtonElement).type='submit');await b.click();assert.equal(await native.evaluate(()=>(window as any).submits),1);
  await native.evaluate(()=>{const f=document.getElementById('form')!;const input=document.createElement('input');input.defaultValue='Initial';input.value='Changed';input.id='form-value';f.append(input);});await b.evaluate(e=>(e as HTMLButtonElement).type='reset');await b.click();assert.equal(await native.locator('#form-value').inputValue(),'Initial');
  await b.evaluate(e=>{const fieldset=document.createElement('fieldset');e.before(fieldset);fieldset.append(e);fieldset.disabled=true;});await b.evaluate(e=>(e as HTMLButtonElement).click());assert.ok(await b.isDisabled());
 });
 await run('All 16 links retain native href and do not cancel modified click events',async()=>{
  for(const p of parts.filter(p=>p.category==='links')){const a=native.locator(`[data-case="${p.id}"] a`);assert.equal(await a.getAttribute('href'),'#destination');
   const prevented=await a.evaluate(e=>{let canceled=false;e.addEventListener('click',event=>{canceled=event.defaultPrevented;event.preventDefault();},{once:true});e.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,ctrlKey:true}));return canceled;});assert.equal(prevented,false);
  }
 });
 await run('Long labels wrap, forced colours keep focus, teardown keeps native controls',async()=>{
  for(const cls of ['.sop-action','.sop-link']){await native.locator(cls).evaluateAll(es=>es.forEach(e=>{(e as HTMLElement).style.maxWidth='225px';e.querySelector(e.classList.contains('sop-action')?'.sop-action-label':'.sop-link-label')!.textContent='日本語の長いラベルでも目的を省略せずに伝えるための表示テスト';}));}
  for(const p of parts){const e=native.locator(`[data-case="${p.id}"] .${p.category==='buttons'?'sop-action':'sop-link'}`);assert.ok(await e.evaluate(e=>{const root=e.getBoundingClientRect(),label=e.querySelector('.sop-action-label,.sop-link-label')!.getBoundingClientRect(),icon=e.querySelector('.sop-action-icon,.sop-link-icon')!.getBoundingClientRect();return label.left>=root.left-1&&label.right<=root.right+1&&(icon.width===0||((icon.left+icon.right)/2>=root.left&&(icon.left+icon.right)/2<=root.right));}),p.id+' readable content within control (decorative corner marks may extend)');}
  await native.emulateMedia({reducedMotion:'reduce',forcedColors:'active'});const a=native.locator('[data-case="compass-link"] a');await native.keyboard.press('Tab');await a.focus();assert.notEqual(await a.evaluate(e=>getComputedStyle(e).outlineStyle),'none');
  await native.evaluate(()=>Object.values((window as any).controllers).forEach((c:any)=>c.destroy()));
  const button=native.locator('[data-case="helios-button"] button');await button.click();assert.ok(await button.isEnabled());
 });await native.close();
 if(!offline || process.env.SOP_REACT_BROWSER_BUNDLE) {
  for(const format of ['tsx','jsx']as const)for(const layout of ['portable','original']as const){
   const prefix=`.test-output/actions/react-${format}-${layout}`,extra=new Map<string,string>();
   const imports=parts.map((p,i)=>{const d=getDelivery(p,format,layout);for(const f of d.files){const name=`${prefix}/${p.id}/${f.name}`;extra.set(name,f.code);write(name,f.code);}return `import Part${i} from './${p.id}/${d.entry}';`;}).join('\n');
   const source=`import React,{useState,useRef}from'react';import{createRoot}from'react-dom/client';${imports}\nconst parts=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},button:${p.category==='buttons'},C:Part${i}}`).join(',')}];
function Item({p}){const[n,set]=useState(0),[loading,busy]=useState(false),[disabled,disable]=useState(false),ref=useRef(null);const C=p.C;return <section data-react-part={p.id} style={{padding:22}}><button className="busy" onClick={()=>busy(!loading)}>Busy</button><button className="disable" onClick={()=>disable(!disabled)}>Disabled</button><button className="focus" onClick={()=>ref.current.focus()}>Focus</button>{p.button?<C ref={ref} loading={loading} disabled={disabled} data-case="component" onClick={()=>set(n+1)}>Apply changes</C>:<C ref={ref} href={'#destination-'+p.id} target="_blank" rel="author" data-case="component">Read the details</C>}<output>{n}</output><div id={'destination-'+p.id}>Destination</div></section>}
function App(){const[show,set]=useState(true);return <><button id="mount" onClick={()=>set(!show)}>Mount</button>{show&&parts.map(p=><Item key={p.id} p={p}/>)}</>};createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);`;
   const entry=prefix+'/main.jsx';extra.set(entry,source);write(entry,source);const html='<html><head><meta charset="utf-8"></head><body style="background:#181b1d;color:#eee"><div id="root"></div><script type="module" src="./main.jsx"></script></body></html>';write(prefix+'/index.html',html);
   const rp=await context.newPage();rp.on('pageerror',e=>errors.push(e.message));
   if(offline){await rp.setContent(html.replace(/<script[\s\S]*?<\/script>/,''));await rp.addStyleTag({content:data.styles});await rp.evaluate(async text=>{const u=URL.createObjectURL(new Blob([text],{type:'text/javascript'}));const m=await import(u);Object.assign(window,{RealReact:m.r,RealDOM:m.e});URL.revokeObjectURL(u);},fs.readFileSync(process.env.SOP_REACT_BROWSER_BUNDLE!,'utf8'));await rp.addScriptTag({content:testBundle(entry,extra,'const React=window.RealReact,ReactDOMClient=window.RealDOM;')});}else await rp.goto(new URL(prefix+'/index.html',url).href);
   await run(`Actual React ${format}/${layout}: 40 exports, busy state, refs, disabled and anchor semantics`,async()=>{
    await rp.locator('[data-react-part]').first().waitFor();assert.equal(await rp.locator('[data-react-part]').count(),40);
    for(const p of parts){const r=rp.locator(`[data-react-part="${p.id}"]`),c=r.locator('[data-case="component"]');await r.locator('.focus').click();assert.ok(await c.evaluate(e=>e===document.activeElement));
     if(p.category==='buttons'){await c.click();assert.equal(await r.locator('output').innerText(),'1');await r.locator('.busy').click();await c.evaluate(e=>(e as HTMLButtonElement).click());assert.equal(await r.locator('output').innerText(),'1');assert.equal(await c.getAttribute('aria-busy'),'true');await r.locator('.busy').click();await c.click();assert.equal(await r.locator('output').innerText(),'2');await r.locator('.disable').click();assert.ok(await c.isDisabled());}
     else{assert.equal(await c.evaluate(e=>e.tagName),'A');assert.equal(await c.getAttribute('href'),'#destination-'+p.id);assert.equal(await c.getAttribute('target'),'_blank');assert.match(await c.getAttribute('rel')??'',/noopener/);assert.match(await c.innerText(),/新しいタブ/);}
    }
    for(let i=0;i<3;i++){await rp.locator('#mount').click();assert.equal(await rp.locator('[data-react-part]').count(),0);await rp.locator('#mount').click();await rp.locator('[data-react-part]').first().waitFor();assert.equal(await rp.locator('[data-react-part]').count(),40);}
   });await rp.close();
  }
 } else console.log('React checks not run: no actual runtime available for offline mode.');
 assert.deepEqual(errors,[]);
} finally {
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'explicit synthetic document (not Vite HTTP)':'real Vite HTTP',passed:results,errors},null,2)+'\n');
 await browser?.close();await shutdown?.();
}
console.log(`Action/link checks: ${results.length} passed.`);
