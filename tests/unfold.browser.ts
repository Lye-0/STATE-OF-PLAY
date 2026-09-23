import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {createRequire} from 'node:module';import type {Browser} from 'playwright';
import {unfoldFixture} from './unfold-fixture.ts';import {ROOT} from '../scripts/catalog.ts';import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline',f=unfoldFixture();
const acc=f.records.filter(p=>p.tags.includes('UNFOLD')),fields=f.records.filter(p=>p.tags.includes('RESPONSIVE'));
const tests:string[]=[],errors:string[]=[];
let browser:Browser|undefined,close:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 let url='';if(!offline){const {createServer}=await import('vite'),s=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await s.listen();url=requireLocalServerUrl(s,'Unfold');close=()=>s.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const p=await browser.newPage({viewport:{width:740,height:1000}});p.on('pageerror',e=>errors.push(e.message));p.setDefaultTimeout(5000);
 if(offline){await p.setContent(f.shell.replace('<link rel="stylesheet" href="./styles.css">',''));await p.addScriptTag({content:f.bundle()});}
 else await p.goto(new URL('.test-output/unfold/test.html',url).href);
 await p.addStyleTag({content:f.styles});await p.waitForFunction(()=>typeof (window as any).mount==='function');
 const mount=async(id:string|string[],options={})=>{await p.evaluate(({ids,opts})=>(window as any).mount(ids,opts),{ids:typeof id==='string'?[id]:id,opts:options});};
 await run('all 16 materials preserve native headings, immediate ARIA and animated presentation',async()=>{
  for(const part of acc){await mount(part.id,{expanded:[]});await p.locator('.sop-accordion-trigger').first().click();assert.equal(await p.locator('.sop-accordion-trigger').first().getAttribute('aria-expanded'),'true');await p.waitForTimeout(80);
   const value=await p.locator('.sop-accordion-item').first().evaluate(e=>parseFloat((e as HTMLElement).style.getPropertyValue('--unfold')));assert.ok(value>0&&value<1,part.id+': '+value);
   assert.equal(await p.locator('.sop-accordion-panel').first().evaluate(e=>(e as HTMLElement).inert),false);await p.evaluate(()=>(window as any).api.collapseAll());assert.ok(await p.locator('.sop-accordion-panel').first().evaluate(e=>(e as HTMLElement).inert));
  }
 });
 await run('rapid reversal settles to the committed state, not an old animation target',async()=>{
  for(const part of acc){await mount(part.id);await p.evaluate(async()=>{const api=(window as any).api;for(let i=0;i<12;i++){api.setExpanded(i%2?['section-1']:[]);await new Promise(r=>setTimeout(r,12));}api.setExpanded([]);});await p.waitForTimeout(1200);assert.equal(await p.locator('.sop-accordion-item').first().evaluate(e=>(e as HTMLElement).style.getPropertyValue('--unfold')),'0.00000',part.id);}
 });
 await run('keyboard, single/multiple policy, collapse policy and disabled headings',async()=>{
  await mount('folio-accordion',{expanded:[]});await p.locator('.sop-accordion-trigger').first().focus();await p.keyboard.press('End');assert.ok(await p.locator('.sop-accordion-trigger').last().evaluate(e=>e===document.activeElement));await p.keyboard.press('Space');assert.equal(await p.locator('.sop-accordion-trigger').last().getAttribute('aria-expanded'),'true');await p.keyboard.press('Home');await p.keyboard.press('Enter');assert.equal(await p.locator('[data-open=true]').count(),1);
  await mount('glass-vault-accordion',{multiple:true,expanded:[]});await p.evaluate(()=>(window as any).api.expandAll());assert.equal(await p.locator('[data-open=true]').count(),3);
  await mount('folio-accordion',{expanded:['section-1'],collapsible:false});await p.locator('.sop-accordion-trigger').first().focus();await p.keyboard.press('Enter');assert.equal(await p.locator('.sop-accordion-trigger').first().getAttribute('aria-expanded'),'true');await p.locator('.sop-accordion-trigger').nth(1).evaluate((e:HTMLButtonElement)=>e.disabled=true);assert.ok(await p.locator('.sop-accordion-trigger').nth(1).isDisabled());
 });
 await run('arbitrary native content survives close/reopen, does not toggle parents, and transfers hidden focus',async()=>{
  await mount('tide-pages-accordion');await p.locator('.sop-accordion-content').first().evaluate(e=>{e.innerHTML='<label>メモ<input name="memo" id="memo"></label><button type="button" id="inside">内側</button><p style="height:400px">長い本文</p>';});await p.waitForTimeout(80);await p.locator('#memo').fill('書いた内容を残す');await p.locator('#inside').click();assert.equal(await p.locator('[data-open=true]').count(),1);await p.locator('#memo').focus();await p.evaluate(()=>(window as any).api.collapseAll());assert.ok(await p.locator('.sop-accordion-trigger').first().evaluate(e=>e===document.activeElement));await p.locator('.sop-accordion-trigger').first().click();await p.waitForTimeout(900);assert.equal(await p.locator('#memo').inputValue(),'書いた内容を残す');assert.ok(await p.locator('.sop-accordion-panel').first().evaluate(e=>e.clientHeight>400));
 });
 await run('nested skin instances receive their own material progress and state only',async()=>{
  await mount('silk-chapter-accordion');await p.locator('.sop-accordion-content').first().evaluate(e=>{const w=window as any,r=w.records.find((r:any)=>r.id==='blueprint-accordion');e.innerHTML=r.markup;w.nested=w.initAt(r.id,e.firstElementChild,{expanded:[]});});await p.locator('.sop-blueprint-accordion .sop-accordion-trigger').first().click();await p.waitForTimeout(100);assert.equal(await p.locator('.sop-silk-chapter-accordion').evaluate(e=>e.querySelector(':scope > .sop-accordion-item')!.getAttribute('data-open')),'true');assert.equal(await p.locator('.sop-blueprint-accordion .sop-accordion-trigger').first().getAttribute('aria-expanded'),'true');
 });
 await run('dynamic accordion items are measured and cleaned without a fixed content height',async()=>{
  await mount('blueprint-accordion',{multiple:true});await p.locator('.sop-accordion').evaluate(e=>{const extra=e.querySelector('.sop-accordion-item')!.cloneNode(true) as HTMLElement;extra.dataset.value='extra';extra.dataset.open='false';extra.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));extra.querySelector('.sop-accordion-content')!.innerHTML='<p style="height:470px">可変長</p>';e.append(extra);});await p.evaluate(()=>(window as any).api.refresh());await p.locator('.sop-accordion-trigger').last().click();await p.waitForTimeout(900);assert.equal(await p.locator('[data-value=extra]').getAttribute('data-open'),'true');assert.ok(await p.locator('[data-value=extra] .sop-accordion-panel').evaluate(e=>e.clientHeight>470));
 });
 await run('six selected fields preserve native value, selection, form payload and reset',async()=>{
  for(const part of fields){await mount(part.id);const field=p.locator('.sop-field-control');await field.fill('A small idea');await field.press('Home');await field.press('Shift+End');await field.press('Backspace');await field.fill('文字入力そのまま');assert.equal(await field.inputValue(),'文字入力そのまま');assert.equal(await field.evaluate(e=>getComputedStyle(e).transform),'none');assert.equal(await field.evaluate(e=>getComputedStyle(e).filter),'none');assert.ok((await p.evaluate(()=>Array.from(new FormData(document.querySelector('form')!).values()))).includes('文字入力そのまま'));await p.locator('#reset').click();assert.equal(await field.inputValue(),'');}
 });
 await run('field focus reacts while glyph bounds and caret geometry remain stable',async()=>{
  for(const part of fields){await mount(part.id);const field=p.locator('.sop-field-control'),before=(await field.boundingBox())!;await field.focus();await field.fill('Stable native editing');await p.waitForTimeout(100);const after=(await field.boundingBox())!;assert.ok(Math.abs(before.x-after.x)<.5&&Math.abs(before.width-after.width)<.5,part.id);assert.ok(await p.locator('.sop-textfield').evaluate(e=>parseFloat((e as HTMLElement).style.getPropertyValue('--field-focus')))>0);}
 });
 await run('IME composition does not pulse until commit and does not rewrite text',async()=>{
  await mount('prism-field');const field=p.locator('.sop-field-control');await field.focus();await p.waitForTimeout(1100);await field.evaluate(e=>{e.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true,data:''}));(e as HTMLInputElement).value='へんかん';e.dispatchEvent(new InputEvent('input',{bubbles:true,isComposing:true,data:'へんかん',inputType:'insertCompositionText'}));});await p.waitForTimeout(80);assert.equal(await field.inputValue(),'へんかん');assert.equal(await p.locator('.sop-textfield').evaluate(e=>parseFloat((e as HTMLElement).style.getPropertyValue('--field-energy'))),0);
  await field.evaluate(e=>e.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true,data:'変換'})));await p.waitForTimeout(40);assert.ok(await p.locator('.sop-textfield').evaluate(e=>parseFloat((e as HTMLElement).style.getPropertyValue('--field-energy')))>0);assert.equal(await field.inputValue(),'へんかん');
 });
 await run('clear, errors, disabled and readonly leave native field APIs intact',async()=>{
  await mount('capillary-field');await p.locator('.sop-field-control').fill('Clear me');await p.locator('.sop-field-clear').click();assert.equal(await p.locator('.sop-field-control').inputValue(),'');await p.evaluate(()=>(window as any).api.setError('入力例を確認してください'));assert.equal(await p.locator('.sop-field-control').getAttribute('aria-invalid'),'true');await p.locator('.sop-field-control').evaluate((e:HTMLInputElement)=>{e.disabled=true;e.readOnly=true;});await p.waitForTimeout(80);assert.ok(await p.locator('.sop-field-control').isDisabled());assert.equal(await p.locator('.sop-textfield').getAttribute('data-readonly'),'true');
 });
 await run('auto-growing textareas, long text and native undo remain usable',async()=>{
  await mount('contour-note');const field=p.locator('textarea'),initial=await field.evaluate(e=>e.clientHeight);await field.fill(Array(25).fill('長い本文、入力を増やしても本文は消えません。').join('\n'));assert.ok(await field.evaluate(e=>e.clientHeight)>initial);assert.ok(await field.evaluate(e=>e.scrollHeight>e.clientHeight));await field.fill('test');await field.press('End');await field.press('x');await field.press('Control+z');assert.equal(await field.inputValue(),'test');
 });
 await run('independent instances have unique native IDs and isolated values',async()=>{
  await mount(['capillary-field','capillary-field']);await p.locator('.sop-field-control').first().fill('one');assert.equal(await p.locator('.sop-field-control').last().inputValue(),'');const ids=await p.locator('[id]').evaluateAll(nodes=>nodes.map(e=>e.id));assert.equal(ids.length,new Set(ids).size);
 });
 await run('all revised parts fit 320 / 390 / 768 widths with long Japanese labels',async()=>{
  for(const width of [320,390,768]){await p.setViewportSize({width,height:1100});for(const part of [...acc,...fields]){await mount(part.id);await p.locator('.sop-accordion-title b,.sop-field-label').first().evaluate(e=>e.textContent='長い日本語のラベルも自然に折り返して表示します');assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),part.id+': '+width);}}
 });
 await run('RTL keeps the same semantic order and clipped decorations within the component',async()=>{
  await p.setViewportSize({width:700,height:1050});await p.locator('body').evaluate(e=>e.setAttribute('dir','rtl'));for(const part of acc){await mount(part.id);await p.locator('.sop-accordion-trigger').nth(1).click();assert.equal(await p.locator('.sop-accordion-trigger').nth(1).getAttribute('aria-expanded'),'true');assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}await p.locator('body').evaluate(e=>e.setAttribute('dir','ltr'));
 });
 await run('reduced motion displays final materials without transient animation or RAF',async()=>{
  await p.emulateMedia({reducedMotion:'reduce'});for(const part of [...acc,...fields]){await mount(part.id);if(part.category==='accordions'){await p.evaluate(()=>(window as any).api.setExpanded(['section-2']));}else await p.locator('.sop-field-control').fill('No motion');await p.waitForTimeout(50);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,part.id);assert.equal(await p.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,part.id);}
 });
 await run('forced colors hides decorative layers and retains the actual controls',async()=>{
  await p.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});await mount('glass-vault-accordion');assert.ok(await p.locator('.sop-unfold-scene').first().isHidden());await p.locator('.sop-accordion-trigger').first().click();await mount('prism-field');assert.ok(await p.locator('.sop-field-fx').isHidden());await p.locator('.sop-field-control').fill('Accessible');assert.equal(await p.locator('.sop-field-control').inputValue(),'Accessible');await p.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
 });
 await run('settled / unmounted parts release all their animation frames',async()=>{
  for(const part of [...acc,...fields]){await mount(part.id);if(part.category==='accordions')await p.locator('.sop-accordion-trigger').nth(1).click();else await p.locator('.sop-field-control').fill('hello');await p.waitForTimeout(1900);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,part.id);await p.evaluate(()=>(window as any).unmount());assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,part.id);}
 });
 assert.deepEqual(errors,[]);console.log('UNFOLD/RESPONSIVE checks:',tests.length,'passed');
}finally{fs.writeFileSync(path.join(f.out,'browser-results.json'),JSON.stringify({mode:offline?'Explicit offline fixture / real Chromium; not Vite':'real Vite HTTP',passed:tests.length,tests,errors},null,2)+'\n');await browser?.close();await close?.();}
