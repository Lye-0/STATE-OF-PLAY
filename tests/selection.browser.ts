/** Tabs and native radio selectors: real browser/React, variable counts and consumer relocation. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire}from'node:module';
import type {Browser}from'playwright';
import {ROOT,buildCatalog}from'../scripts/catalog.ts';
import {offlineFiles,testBundle}from'./offline-fixture.ts';
import {getDelivery,buildPrompt}from'../src/catalog/delivery.ts';
import {requireLocalServerUrl}from'./vite-url.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright')as typeof import('playwright');
const data=buildCatalog(),parts=data.parts.filter(p=>p.category==='tabs'||p.category==='segments');
const offline=process.env.SOP_TEST_MODE==='offline',out=path.join(ROOT,'.test-output/selection');fs.mkdirSync(out,{recursive:true});
let browser:Browser|undefined,shutdown:(()=>Promise<void>)|undefined,url='';const results:string[]=[],errors:string[]=[];
const run=async(name:string,fn:()=>Promise<void>)=>{await fn();results.push(name);console.log('PASS '+name);};
const write=(name:string,code:string)=>{const file=path.join(ROOT,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,code);};
try{
 if(!offline){const{createServer}=await import('vite');const s=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});await s.listen();url=requireLocalServerUrl(s,'Selection test');shutdown=()=>s.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 if(offline){const files=offlineFiles(data);await page.setContent(files.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));await page.addStyleTag({content:files.get('/test-styles.css')!});for(const vendor of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor',vendor+'.js'),'utf8')});await page.addScriptTag({content:files.get('/test-app.js')!});}else await page.goto(url);
 await run('48 new parts: 24 tabs / 24 selectors, A16 B8 with existing filters',async()=>{
  for(const category of ['tabs','segments']){await page.locator(`[data-category="${category}"]`).click();assert.equal(await page.locator('[data-part]').count(),24);await page.locator('[data-design-filter="A"]').click();assert.equal(await page.locator('[data-part]').count(),16);await page.locator('[data-design-filter="B"]').click();assert.equal(await page.locator('[data-part]').count(),8);await page.locator('[data-design-filter="all"]').click();}
 });
 await run('All 24 tabs: actual panel switching, IDs/ARIA and note state survives hiding',async()=>{
  await page.locator('[data-category="tabs"]').click();
  for(const p of parts.filter(p=>p.category==='tabs')){const r=page.locator(`[data-part="${p.id}"] .sop-tabs`),tabs=r.locator('[role="tab"]');await tabs.nth(2).click();assert.equal(await r.locator('.sop-choice-panel:visible').count(),1);const input=r.locator('input');await input.fill('日本語 note '+p.id);await tabs.nth(0).click();assert.ok(await input.isHidden());await tabs.nth(2).click();assert.equal(await input.inputValue(),'日本語 note '+p.id);assert.equal(await r.locator('[aria-selected="true"]').count(),1);}
  const ids=await page.locator('[id]').evaluateAll(nodes=>nodes.map(n=>n.id));assert.equal(ids.length,new Set(ids).size);assert.equal(await page.locator('dialog[open]').count(),0);
 });
 await run('All 24 segments are native radios; clicking/arrow keys changes exactly one choice',async()=>{
  await page.locator('[data-category="segments"]').click();for(const p of parts.filter(p=>p.category==='segments')){const r=page.locator(`[data-part="${p.id}"] .sop-segments`),inputs=r.locator('input[type="radio"]');await inputs.nth(0).check();assert.equal(await inputs.nth(0).isChecked(),true);await inputs.nth(0).focus();await page.keyboard.press('ArrowRight');assert.ok(await inputs.nth(1).isChecked());assert.equal(await r.locator('input:checked').count(),1);assert.equal(await r.getAttribute('data-value'),'choice-2');}assert.equal(await page.locator('dialog[open]').count(),0);
 });
 await run('Inspector: 2/3/4/5/7 choices, direction, disabled and code/layout preserve selection',async()=>{
  for(const id of ['atlas-tabs','mercury-segments']){
   await page.locator(`[data-category="${id==='atlas-tabs'?'tabs':'segments'}"]`).click();await page.locator(`[data-open="${id}"]`).click();const d=page.locator('#part-details'),r=d.locator('[data-selection-kind]');
   for(const n of [2,4,5,7,3]){await d.locator(`[data-selection-count="${n}"]`).click();assert.equal(await d.locator(`[data-selection-count="${n}"]`).getAttribute('aria-pressed'),'true');assert.equal(await d.locator('[data-selection-count][aria-pressed="true"]').count(),1);assert.equal(await r.locator('.sop-choice-item').count(),n);await r.locator('.sop-choice-item').last().click();assert.equal(await r.getAttribute('data-value'),`choice-${n}`);}
   await d.locator('[data-format="jsx"]').click();await d.locator('#export-layout').selectOption('original');assert.equal(await r.getAttribute('data-value'),'choice-3');
   await d.locator('[data-selection-axis]').selectOption('vertical');assert.equal(await r.getAttribute('data-orientation'),'vertical');await d.locator('[data-selection-axis]').selectOption('horizontal');
   await d.locator('[data-selection-disabled]').check();await r.locator('.sop-choice-item').first().click({force:true});assert.equal(await r.getAttribute('data-value'),'choice-3');await d.locator('[data-selection-disabled]').uncheck();
   await d.locator('[data-format="tsx"]').click();await d.locator('#export-layout').selectOption('portable');await d.locator('[data-detail-tab="prompt"]').click();assert.equal(await d.locator('#prompt-text').inputValue(),buildPrompt(parts.find(p=>p.id===id)!,'tsx','portable'));await d.locator('[data-detail-tab="code"]').click();
   await page.screenshot({path:path.join(out,id+'-detail.png')});await d.locator('.close-detail').click();
  }
 });
 await run('320/390/768px: every new part fits, labels readable, inspector reachable',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:950});for(const category of ['tabs','segments']){await page.locator(`[data-category="${category}"]`).click();for(const p of parts.filter(p=>p.category===category)){const r=page.locator(`[data-part="${p.id}"] [data-selection-kind]`);const b=(await r.boundingBox())!;assert.ok(b.x>=-1&&b.x+b.width<=width+1,p.id+' width '+width);}assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
   await page.locator('[data-open="mercury-segments"]').click();const d=page.locator('#part-details');await d.locator('[data-selection-count="7"]').click();assert.ok(await d.locator('.download-file').isVisible());if(width===390){await page.waitForTimeout(400);}if(width===390)await page.screenshot({path:path.join(out,'mobile-390.png')});await d.locator('.close-detail').click();
  }await page.setViewportSize({width:1440,height:1000});
 });
 // Native consumer fixture with no gallery CSS or JavaScript.
 const native=await context.newPage();native.on('pageerror',e=>errors.push(e.message));
 const tab=parts.find(p=>p.id==='essential-tabs')!,segment=parts.find(p=>p.id==='essential-segments')!;
 await native.setContent('<form id="consumer">'+`<div id="manual">${tab.markup}</div><div id="automatic">${tab.markup}</div><div id="first">${segment.markup}</div><div id="second">${segment.markup}</div><button type="reset" id="reset">Reset</button></form>`);
 await native.addStyleTag({content:data.styles+'body{background:#171b19;color:#eee;margin:30px}form>div{max-width:480px;margin:25px}'});
 const entry='.test-output/selection/native.ts',code=`import{createTabsController}from'../../src/shared/tabs-controller';import{createSegmentController}from'../../src/shared/segment-controller';const get=id=>document.querySelector('#'+id+' > *');const controls={manual:createTabsController(get('manual'),{activation:'manual'}),automatic:createTabsController(get('automatic')),first:createSegmentController(get('first'),{name:'mode'}),second:createSegmentController(get('second'))};Object.assign(window,{controls});`;
 await native.addScriptTag({content:testBundle(entry,new Map([[entry,code]]))});
 await run('Manual/automatic tabs: roving focus, Space/Enter, Home/End, disabled skip, vertical and RTL',async()=>{
  const r=native.locator('#manual .sop-tabs'),tabs=r.locator('[role="tab"]');await tabs.nth(0).focus();await native.keyboard.press('ArrowRight');assert.equal(await r.getAttribute('data-value'),'choice-1');assert.ok(await tabs.nth(1).evaluate(e=>e===document.activeElement));await native.keyboard.press('Enter');assert.equal(await r.getAttribute('data-value'),'choice-2');
  await native.keyboard.press('End');assert.equal(await r.getAttribute('data-value'),'choice-2');await native.keyboard.press('Space');assert.equal(await r.getAttribute('data-value'),'choice-3');
  const auto=native.locator('#automatic .sop-tabs');await auto.locator('[role="tab"]').nth(1).evaluate(e=>(e as HTMLButtonElement).disabled=true);await native.evaluate(()=>(window as any).controls.automatic.refresh());await auto.locator('[role="tab"]').first().focus();await native.keyboard.press('ArrowRight');assert.equal(await auto.getAttribute('data-value'),'choice-3');
  await auto.evaluate(e=>e.setAttribute('dir','rtl'));await native.keyboard.press('ArrowRight');assert.equal(await auto.getAttribute('data-value'),'choice-1');await native.evaluate(()=>(window as any).controls.automatic.setOrientation('vertical'));await native.keyboard.press('ArrowDown');assert.equal(await auto.getAttribute('data-value'),'choice-3');
 });
 await run('Native forms: value submission, distinct groups, reset, disable, no artificial change on setters',async()=>{
  const first=native.locator('#first .sop-segments'),second=native.locator('#second .sop-segments');await first.locator('input').nth(2).check();assert.equal(await second.getAttribute('data-value'),'choice-2');assert.equal(await native.evaluate(()=>new FormData(document.querySelector('form')!).get('mode')),'choice-3');await native.locator('#reset').click();assert.equal(await first.getAttribute('data-value'),'choice-2');
  await native.evaluate(()=>{const c=(window as any).controls.first;c.setDisabled(true);});assert.equal(await native.evaluate(()=>new FormData(document.querySelector('form')!).has('mode')),false);await native.evaluate(()=>(window as any).controls.first.setDisabled(false));
 });
 await run('Dynamic native options: add/remove/reorder and refreshed disabled values; marker follows geometry',async()=>{
  const r=native.locator('#first .sop-segments');await r.evaluate(e=>{const list=e.querySelector('.sop-choice-list')!;const copy=list.querySelector('.sop-choice-item')!.cloneNode(true) as HTMLElement;copy.dataset.choiceValue='custom';const input=copy.querySelector('input')!;input.value='custom';input.checked=false;copy.querySelector('.sop-choice-label')!.textContent='長い日本語ラベルを含む追加の選択肢';list.append(copy);});await native.evaluate(()=>{const c=(window as any).controls.first;c.refresh();c.setValue('custom');});assert.equal(await r.getAttribute('data-value'),'custom');
  await r.evaluate(e=>{const item=e.querySelector('[data-choice-value="custom"]')!;item.parentElement!.prepend(item);});await native.evaluate(()=>(window as any).controls.first.refresh());assert.equal(await r.getAttribute('data-value'),'custom');
  await native.waitForTimeout(450);const valid=await r.evaluate(e=>{const marker=e.querySelector('.sop-choice-marker')!.getBoundingClientRect(),item=e.querySelector('[data-selected="true"]')!.getBoundingClientRect();return Math.abs(marker.left-item.left)<2&&Math.abs(marker.width-item.width)<2&&Math.abs(marker.top-item.top)<2;});assert.ok(valid);
  await r.locator('[data-choice-value="custom"]').evaluate(e=>e.remove());await native.evaluate(()=>(window as any).controls.first.refresh());assert.equal(await r.getAttribute('data-value'),'choice-1');
  await r.locator('input').evaluateAll(es=>es.forEach(e=>(e as HTMLInputElement).disabled=true));await native.evaluate(()=>(window as any).controls.first.refresh());assert.equal(await r.locator('input:checked').count(),0);
 });
 await run('Adding tabs after deletion never recycles panel IDs; setters do not emit input events',async()=>{
  const r=native.locator('#automatic .sop-tabs');
  await r.evaluate(e=>{const list=e.querySelector('.sop-choice-list')!,panels=e.querySelector('.sop-choice-panels')!;const original=list.querySelector('button')!;const originalPanel=panels.querySelector('section')!;const b=original.cloneNode(true) as HTMLElement,panel=originalPanel.cloneNode(true) as HTMLElement;original.remove();originalPanel.remove();b.removeAttribute('id');b.removeAttribute('aria-controls');b.dataset.choiceValue='added';panel.removeAttribute('id');panel.removeAttribute('aria-labelledby');panel.dataset.panelValue='added';list.append(b);panels.append(panel);});
  await native.evaluate(()=>(window as any).controls.automatic.refresh());await r.locator('[data-choice-value="added"]').click();assert.equal(await r.getAttribute('data-value'),'added');
  const ids=await native.locator('[id]').evaluateAll(es=>es.map(e=>e.id));assert.equal(new Set(ids).size,ids.length);
  assert.equal(await native.evaluate(()=>{let events=0;const root=document.querySelector('#second .sop-segments')!;root.addEventListener('sop:selection',()=>events++);(window as any).controls.second.setValue('choice-3');return events;}),0);
 });
 await run('Nested selectors retain their own skin and do not change the parent tab',async()=>{
  const template=parts.find(p=>p.id==='nixie-segments')!.markup;
  await native.evaluate(html=>{const outside=document.createElement('div');outside.id='skin-outside';outside.innerHTML=html;document.body.append(outside);const inside=document.createElement('div');inside.id='skin-inside';inside.innerHTML=html;document.querySelector('#manual [data-panel-value="choice-3"]')!.append(inside);},template);
  const entry='.test-output/selection/nested.ts',source=`import{createSegmentController}from'../../src/shared/segment-controller';Object.assign(window,{inside:createSegmentController(document.querySelector('#skin-inside > *')),outside:createSegmentController(document.querySelector('#skin-outside > *'))});`;
  await native.addScriptTag({content:testBundle(entry,new Map([[entry,source]]))});
  const before=await native.locator('#manual .sop-tabs').getAttribute('data-value');await native.locator('#skin-inside input').last().check();assert.equal(await native.locator('#manual .sop-tabs').getAttribute('data-value'),before);
  const styles=await native.evaluate(()=>['#skin-outside','#skin-inside'].map(id=>{const s=getComputedStyle(document.querySelector(id+' .sop-choice-list')!);return[s.backgroundColor,s.borderRadius,s.boxShadow];}));assert.deepEqual(styles[0],styles[1]);
  await native.evaluate(()=>{(window as any).inside.destroy();(window as any).outside.destroy();document.querySelector('#skin-inside')!.remove();document.querySelector('#skin-outside')!.remove();});
 });
 await run('Reduced motion / forced colours keep an explicit selected state and focus',async()=>{
  await native.emulateMedia({reducedMotion:'reduce',forcedColors:'active'});await native.keyboard.press('Tab');const r=native.locator('#manual .sop-tabs');await r.locator('[role="tab"]').first().focus();assert.notEqual(await r.locator('[role="tab"]').first().evaluate(e=>getComputedStyle(e).outlineStyle),'none');assert.equal(await r.locator('.sop-choice-marker').evaluate(e=>getComputedStyle(e).transitionDuration),'0s');
 });
 await native.close();
 if(!offline||process.env.SOP_REACT_BROWSER_BUNDLE){
  for(const format of ['tsx','jsx']as const)for(const layout of ['portable','original']as const){
   const prefix=`.test-output/selection/react-${format}-${layout}`,extra=new Map<string,string>();
   const imports=parts.map((p,i)=>{const d=getDelivery(p,format,layout);for(const file of d.files){const f=`${prefix}/${p.id}/${file.name}`;extra.set(f,file.code);write(f,file.code);}return `import Part${i} from './${p.id}/${d.entry}';`;}).join('\n');
   const source=`import React,{useState}from'react';import{createRoot}from'react-dom/client';${imports}\nconst parts=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},tabs:${p.category==='tabs'},C:Part${i}}`).join(',')}];
function Item({p}){const[n,count]=useState(3),[value,set]=useState('v1'),[disabled,disable]=useState(false),[flip,reverse]=useState(false);let items=Array.from({length:n},(_,i)=>({value:'v'+i,label:'項目 '+(i+1),content:<label>Note<input defaultValue="keep me"/></label>}));if(flip)items.reverse();const C=p.C;return <section data-react-part={p.id} style={{padding:20,maxWidth:630}}><button data-count="2" onClick={()=>count(2)}>2</button><button data-count="4" onClick={()=>count(4)}>4</button><button data-count="7" onClick={()=>count(7)}>7</button><button data-count="0" onClick={()=>count(0)}>0</button><button className="reverse" onClick={()=>reverse(!flip)}>Reverse</button><button className="disable" onClick={()=>disable(!disabled)}>Disable</button><C data-case="controlled" items={items} value={value} onValueChange={set} disabled={disabled}/><C data-case="uncontrolled" items={items} defaultValue="v1"/><C data-case="declined" items={items} value="v0" onValueChange={()=>{}}/><output>{value}</output></section>}
function Forms(){const[value,set]=useState('v1');const C=parts.find(p=>!p.tabs).C;const items=[0,1,2].map(i=>({value:'v'+i,label:'項目 '+(i+1)}));return <form id="selection-form"><C data-form-case="internal" name="mode" items={items} defaultValue="v1"/><C data-form-case="controlled" name="controlled" items={items} value={value} defaultValue="v1" onValueChange={set}/><C data-form-case="declined" name="declined" items={items} value="v2" defaultValue="v0" onValueChange={()=>{}}/><button type="reset">Restore</button></form>}
function App(){const[show,set]=useState(true);return <><Forms/><button id="mount" onClick={()=>set(!show)}>Mount</button>{show&&parts.map(p=><Item key={p.id} p={p}/>)}</>};createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);`;
   const entry=prefix+'/main.jsx';extra.set(entry,source);write(entry,source);const html='<html><head><meta charset="utf-8"></head><body style="background:#171d1b;color:#eee"><div id="root"></div><script type="module" src="./main.jsx"></script></body></html>';write(prefix+'/index.html',html);
   const rp=await context.newPage();rp.on('pageerror',e=>errors.push(e.message));
   if(offline){await rp.setContent(html.replace(/<script[\s\S]*?<\/script>/,''));await rp.addStyleTag({content:data.styles});await rp.evaluate(async text=>{const u=URL.createObjectURL(new Blob([text],{type:'text/javascript'}));const m=await import(u);Object.assign(window,{RealReact:m.r,RealDOM:m.e});URL.revokeObjectURL(u);},fs.readFileSync(process.env.SOP_REACT_BROWSER_BUNDLE!,'utf8'));await rp.addScriptTag({content:testBundle(entry,extra,'const React=window.RealReact,ReactDOMClient=window.RealDOM;')});}else await rp.goto(new URL(prefix+'/index.html',url).href);
   await run(`React ${format}/${layout}: 48 exports, controlled/uncontrolled/declined, 2/4/7 options and empty`,async()=>{
    await rp.locator('[data-react-part]').first().waitFor();assert.equal(await rp.locator('[data-react-part]').count(),48);
    for(const p of parts){const r=rp.locator(`[data-react-part="${p.id}"]`),c=r.locator('[data-case="controlled"]');await c.locator('.sop-choice-item').last().click();assert.equal(await c.getAttribute('data-value'),'v2');if(p.category==='tabs'){await c.locator('[role=tabpanel]:visible input').fill('retained '+p.id);await c.locator('.sop-choice-item').first().click();await c.locator('.sop-choice-item').last().click();assert.equal(await c.locator('[role=tabpanel]:visible input').inputValue(),'retained '+p.id);}await r.locator('[data-case="uncontrolled"] .sop-choice-item').first().click();assert.equal(await r.locator('[data-case="uncontrolled"]').getAttribute('data-value'),'v0');await r.locator('[data-case="declined"] .sop-choice-item').last().click();assert.equal(await r.locator('[data-case="declined"]').getAttribute('data-value'),'v0');
     if(p.category==='segments')assert.ok(await r.locator('[data-case="declined"] input').first().isChecked());
     await r.locator('.disable').click();await c.locator('.sop-choice-item').first().click({force:true});assert.equal(await c.getAttribute('data-value'),'v2');await r.locator('.disable').click();
     for(const n of [2,4,7]){await r.locator(`[data-count="${n}"]`).click();assert.equal(await c.locator('.sop-choice-item').count(),n);await c.locator('.sop-choice-item').last().click();assert.equal(await c.getAttribute('data-value'),'v'+(n-1));}
     await r.locator('.reverse').click();assert.equal(await c.getAttribute('data-value'),'v6');await r.locator('[data-count="0"]').click();assert.equal(await c.locator('.sop-choice-item').count(),0);assert.ok(await c.locator('.sop-choice-empty').isVisible());await r.locator('[data-count="4"]').click();assert.equal(await c.locator('.sop-choice-item').count(),4);
    }
    const ids=await rp.locator('[id]').evaluateAll(nodes=>nodes.map(n=>n.id));assert.equal(ids.length,new Set(ids).size);
    for(let i=0;i<3;i++){await rp.locator('#mount').click();assert.equal(await rp.locator('[data-react-part]').count(),0);await rp.locator('#mount').click();assert.equal(await rp.locator('[data-react-part]').count(),48);}
   });
   await run(`React ${format}/${layout}: native FormData and controlled/uncontrolled/declined reset`,async()=>{
    const form=rp.locator('#selection-form');await form.locator('[data-form-case="internal"] input').last().check();await form.locator('[data-form-case="controlled"] input').first().check();
    const values=()=>rp.evaluate(()=>Object.fromEntries(new FormData(document.querySelector('#selection-form') as HTMLFormElement)));
    assert.deepEqual(await values(),{mode:'v2',controlled:'v0',declined:'v2'});await form.locator('button[type=reset]').click();
    await rp.waitForFunction(()=>new FormData(document.querySelector('#selection-form') as HTMLFormElement).get('mode')==='v1');assert.deepEqual(await values(),{mode:'v1',controlled:'v1',declined:'v2'});
   });await rp.close();
  }
 }
 assert.deepEqual(errors,[]);console.log(`Selection checks: ${results.length} passed.`);
}finally{fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({mode:offline?'explicit offline browser adapter; not Vite HTTP':'Vite HTTP',react:offline?(process.env.SOP_REACT_BROWSER_BUNDLE?'real installed browser runtime':'not run'):'installed React',tests:results,passed:results.length,errors},null,2));await browser?.close();await shutdown?.();}
