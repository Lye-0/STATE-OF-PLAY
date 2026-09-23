import {galleryReady} from './gallery-ready.ts';
/** The default run tests real Vite over HTTP. SOP_TEST_MODE=offline is an explicit, reported test adapter. */
import assert from 'node:assert/strict';
import { requireLocalServerUrl } from './vite-url.ts';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import type { Browser, Page } from 'playwright';
import { ROOT, buildCatalog, FORMATS } from '../scripts/catalog.ts';
import { getDelivery, buildPrompt, buildUsage, packageRoot, packageContents } from '../src/catalog/delivery.ts';
import { JSZip } from '../scripts/zip.ts';
import { offlineFiles, testBundle, inlineTestCSS } from './offline-fixture.ts';
import { resolveLocal } from '../scripts/source-tools.ts';
import ts from 'typescript';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const offline=process.env.SOP_TEST_MODE==='offline';
const OUT=path.join(ROOT,'.test-output');fs.mkdirSync(OUT,{recursive:true});
const catalog=buildCatalog();
const layouts=['portable','original'] as const;
const results: string[]=[];const errors: string[]=[];
const normalize=(s:string)=>s.split('\n').map(l=>l.trimEnd()).join('\n');
function write(relative:string,code:string){const name=path.join(ROOT,relative);fs.mkdirSync(path.dirname(name),{recursive:true});fs.writeFileSync(name,code);}
// Only temporary test fixtures; the normal build never expands a packages/ tree.
for(const part of catalog.parts){
 for(const [name,code]of Object.entries(part.preview))write(`.test-output/exports/${part.id}/preview/${name}`,code);
 for(const layout of layouts)for(const format of FORMATS)for(const file of getDelivery(part,format,layout).files)write(`.test-output/exports/${part.id}/${layout}/${format}/${file.name}`,file.code);
}
async function run(name:string,action:()=>Promise<void>){await action();results.push(name);console.log('PASS '+name);}
let browser: Browser|undefined;let closeServer:(()=>Promise<void>)|undefined;let page:Page;let url='';
const memory=new Map<string,string>();
try{
 if(offline){for(const [key,value]of offlineFiles())memory.set(key,value);}
 else{const {createServer}=await import('vite');const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});closeServer=()=>server.close();await server.listen();url=requireLocalServerUrl(server, 'Vite development server').replace(/\/$/,'');}
 browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:1440,height:960},acceptDownloads:true});
 await context.addInitScript(()=>{const active=new Set<number>();const request=window.requestAnimationFrame.bind(window);const cancel=window.cancelAnimationFrame.bind(window);window.requestAnimationFrame=callback=>{const id=request(time=>{active.delete(id);callback(time);});active.add(id);return id;};window.cancelAnimationFrame=id=>{active.delete(id);cancel(id);};(window as unknown as {activeRAF:Set<number>}).activeRAF=active;});
 page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
 async function load(route='/') {
  if(!offline){await page.goto(url+route);await page.waitForLoadState('networkidle');return;}
  // Directly render test documents when administrator policy forbids local navigation.
  // No policy changes or alternate hostnames. Relative imports are separately checked by unit tests.
  await page.close();page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
  const name=route==='/'?'/index.html':route;
  const read=(file:string):string=>memory.get(file)??fs.readFileSync(path.join(ROOT,file.startsWith('/vendor/')?'public'+file:file),'utf8');
  const html=read(name);const directory=path.posix.dirname(name);
  const styles=[...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)].map(m=>path.posix.resolve(directory,m[1]));
  const scripts=[...html.matchAll(/<script\b([^>]*?)src="([^"]+)"[^>]*><\/script>/g)].map(m=>({name:path.posix.resolve(directory,m[2]),module:m[1].includes('module')}));
  await page.setContent(html.replace(/<script\b[^>]*src="[^"]+"[^>]*><\/script>/g,'').replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g,''));
  for(const file of styles)await page.addStyleTag({content:inlineTestCSS(file,read)});
  for(const script of scripts){
   if(!script.module){await page.addScriptTag({content:read(script.name)});continue;}
   // Execute actual exported JS as native ESM, using blob URLs only for transport in this offline test.
   const modules:Record<string,{code:string;refs:{start:number;end:number;target:string}[]}>= {};
   function visit(file:string){
    if(modules[file])return;
    const code=file==='/runtime.js'?fs.readFileSync(process.env.SOP_REACT_BROWSER_BUNDLE!,'utf8'):read(file);
    const refs:{start:number;end:number;target:string}[]=[];modules[file]={code,refs};
    if(file==='/runtime.js')return;
    // Read syntax nodes: text like `from 'x'` inside strings/comments is not an import.
    const ast=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true);
    for(const node of ast.statements){
     if(!(ts.isImportDeclaration(node)||ts.isExportDeclaration(node))||!node.moduleSpecifier||!ts.isStringLiteral(node.moduleSpecifier))continue;
     const spec=node.moduleSpecifier,request=spec.text;
     const dep=request==='/runtime.js'?request:'/'+resolveLocal(file.slice(1),request,p=>memory.has('/'+p)||fs.existsSync(path.join(ROOT,p)));
     refs.push({start:spec.getStart(ast)+1,end:spec.getEnd()-1,target:dep});visit(dep);
    }
   }
   visit(script.name);
   await page.evaluate(async({modules,entry})=>{
    const urls=new Map<string,string>();
    function make(id:string):string {if(urls.has(id))return urls.get(id)!;const item=modules[id];
     let code=item.code;for(const ref of [...item.refs].sort((a,b)=>b.start-a.start))code=code.slice(0,ref.start)+make(ref.target)+code.slice(ref.end);
     const result=URL.createObjectURL(new Blob([code],{type:'text/javascript'}));urls.set(id,result);return result;
    }
    await import(make(entry));for(const value of urls.values())URL.revokeObjectURL(value);
   },{modules,entry:script.name});
  }
 }
 await load();await galleryReady(page);await page.locator('[data-category="all"]').click();await galleryReady(page,true);
 await run(`Gallery: ${catalog.parts.length} parts, no runtime errors`,async()=>{assert.equal(await page.locator('[data-part]').count(),catalog.parts.length);assert.deepEqual(errors,[]);});
 await run('A/B and category filters intersect, counts remain correct, and search resets cleanly',async()=>{
  for(const category of ['all','toggles','blocks','scrollbars','dropdowns','accordions','textboxes']){
   await page.locator(`[data-category="${category}"]`).click();await galleryReady(page,true);
   for(const kind of ['A','B','all']){
    await page.locator(`[data-design-filter="${kind}"]`).click();await galleryReady(page,true);
    const expected=catalog.parts.filter(p=>(category==='all'||p.category===category)&&(kind==='all'||p.designType===kind));
    assert.equal(await page.locator('[data-part]').count(),expected.length);
    assert.equal(await page.locator(`[data-design-filter="${kind}"]`).getAttribute('aria-pressed'),'true');
    for(const part of expected)assert.equal(await page.locator(`[data-part="${part.id}"]`).getAttribute('data-design'),part.designType);
   }
  }
  await page.locator('[data-category="all"]').click();await galleryReady(page,true);await page.locator('#search-parts').fill('zz-missing-part');await galleryReady(page,true);
  assert.equal(await page.locator('[data-part]').count(),0);await page.locator('#clear-empty').click();await galleryReady(page,true);
  assert.equal(await page.locator('[data-part]').count(),catalog.parts.length);
 });
 await run('Liquid, Fold, Prism have intrinsic opposite state labels and distinct optical treatment',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const [id,on,off,material]of [['liquid','.liquid-mark','.liquid-rest','.liquid-lens'],['fold','.fold-on','.fold-off','.fold-tab'],['prism','.prism-state:not(.off)','.prism-state.off','.prism-crystal']]){
   await page.locator(`[data-open="${id}"]`).click();await galleryReady(page,true);const root=page.locator('.preview-stage [role="switch"]');
   await page.locator('[data-state="off"]').click();
   assert.equal(await root.getAttribute('aria-checked'),'false');
   assert.equal(await root.locator(off).evaluate(n=>getComputedStyle(n).opacity),'1');assert.equal(await root.locator(on).evaluate(n=>getComputedStyle(n).opacity),'0');
   const rest=await root.locator(material).evaluate(n=>getComputedStyle(n).filter);
   await page.locator('[data-state="on"]').click();
   assert.equal(await root.locator(on).evaluate(n=>getComputedStyle(n).opacity),'1');assert.equal(await root.locator(off).evaluate(n=>getComputedStyle(n).opacity),'0');
   assert.notEqual(await root.locator(material).evaluate(n=>getComputedStyle(n).filter),rest);
   await page.locator('.close-detail').click();
  }
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('Compact B switches retain real sizes, native keyboard and drag states',async()=>{
  await page.locator('[data-category="toggles"]').click();await galleryReady(page,true);await page.locator('[data-design-filter="B"]').click();await galleryReady(page,true);
  for(const id of ['quiet','porcelain','rail','segment','outline','rocker']){
   const b=page.locator(`[data-part="${id}"] [role="switch"]`);await b.scrollIntoViewIfNeeded();const box=(await b.boundingBox())!;
   assert.ok(box.height>=44&&box.width<=145,id);await b.focus();await page.keyboard.press('ArrowLeft');assert.equal(await b.getAttribute('aria-checked'),'false');
   await page.keyboard.press('Space');assert.equal(await b.getAttribute('aria-checked'),'true');await page.keyboard.press('Enter');assert.equal(await b.getAttribute('aria-checked'),'false');
   await b.scrollIntoViewIfNeeded();await page.waitForTimeout(150);const current=(await b.boundingBox())!;await page.mouse.move(current.x+10,current.y+current.height/2);await page.mouse.down();await page.mouse.move(current.x+current.width-4,current.y+current.height/2,{steps:10});await page.mouse.up();assert.equal(await b.getAttribute('aria-checked'),'true',id+' drag');
   assert.equal(await page.locator('#part-details').getAttribute('open'),null);
  }
  await page.locator('[data-category="blocks"]').click();await galleryReady(page,true);
  const sample=page.locator('[data-part="paper-card"] [data-sample-action]');await sample.click();assert.match(await sample.innerText(),/確認しました/);
  assert.equal(await page.locator('#part-details').getAttribute('open'),null);
  await page.locator('[data-design-filter="all"]').click();await galleryReady(page,true);await page.locator('[data-category="all"]').click();await galleryReady(page,true);
 });
 await run('Toggle and drag do not open details',async()=>{
  const button=page.locator('[data-part="chrome"] [role="switch"]');const before=await button.getAttribute('aria-checked');await button.click();assert.notEqual(await button.getAttribute('aria-checked'),before);
  await page.waitForTimeout(400);const box=(await button.boundingBox())!;
  await page.mouse.move(box.x+40,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+box.width-35,box.y+box.height/2,{steps:12});await page.mouse.up();
  assert.equal(await button.getAttribute('aria-checked'),'true');assert.equal(await page.locator('#part-details').getAttribute('open'),null);
 });
 await page.locator('[data-category="blocks"]').click();await galleryReady(page);await page.locator('[data-open="luminous-frame"]').click();await galleryReady(page,true);
 await run('Detail: code, hierarchical tree, full path, download before copy',async()=>{
  assert.equal(await page.locator('#detail-title').innerText(),'Luminous Frame');await page.locator('[data-file$="/styles.css"]').click();assert.ok((await page.locator('.editor code').innerText()).includes('sop-luminous-frame'));
  assert.ok((await page.locator('.download-file').boundingBox())!.x<(await page.locator('.copy-file').boundingBox())!.x);
  const dir=page.locator('.source-directory[data-directory="luminous-frame/internal"]');await dir.locator(':scope > summary').click();assert.equal(await dir.getAttribute('open'),null);await dir.locator(':scope > summary').click();
  await page.locator('[data-file="luminous-frame/internal/surface-controller.ts"]').click();assert.equal(await page.locator('.current-path').textContent(),'luminous-frame/internal');await page.locator('[data-file$="/styles.css"]').click();
 });
 await page.screenshot({path:path.join(OUT,'detail.png')});
 await run('Copy: success only after write, exact string and visible feedback',async()=>{
  await page.evaluate(()=>{const w=window as unknown as {copied:string};w.copied='';Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{w.copied=text;}}});});
  await page.locator('.copy-file').click();assert.match(await page.locator('.copy-file').innerText(),/コピー済み/);
  const expected=getDelivery(catalog.parts.find(p=>p.id==='luminous-frame')!,'tsx').files.find(f=>f.name.endsWith('/styles.css'))!.code;
  assert.equal(await page.evaluate(()=>(window as unknown as {copied:string}).copied),expected);
 });
 await run('Denied clipboard: manual fallback, no false success, focus restored',async()=>{
  await page.evaluate(()=>{
   Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('Denied by test');}}});
   const doc=document as Document & {originalExecCommand?:typeof document.execCommand};doc.originalExecCommand=document.execCommand;document.execCommand=()=>false;
  });
  await page.locator('.copy-file').click();await page.locator('dialog.manual-copy').waitFor();assert.doesNotMatch(await page.locator('.copy-file').innerText(),/コピー済み/);
  const expected=getDelivery(catalog.parts.find(p=>p.id==='luminous-frame')!,'tsx').files.find(f=>f.name.endsWith('/styles.css'))!.code;
  assert.equal(await page.locator('dialog.manual-copy textarea').inputValue(),expected);await page.locator('dialog.manual-copy button').click();
  assert.ok(await page.locator('.copy-file').evaluate(b=>b===document.activeElement));
  await page.evaluate(()=>{
   const doc=document as Document & {originalExecCommand:typeof document.execCommand};document.execCommand=doc.originalExecCommand;
   Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as unknown as {copied:string}).copied=text;}}});
  });
 });
 await run('Selected source download matches the original file bytes',async()=>{
  const expected=getDelivery(catalog.parts.find(p=>p.id==='luminous-frame')!,'tsx').files.find(f=>f.name.endsWith('/styles.css'))!;
  const pending=page.waitForEvent('download');await page.locator('.download-file').click();const download=await pending;assert.equal(download.suggestedFilename(),'styles.css');assert.equal(fs.readFileSync((await download.path())!,'utf8'),expected.code);
 });
 await run('Focus trap / Escape / restoration to gallery trigger',async()=>{
  for(let i=0;i<45;i++){await page.keyboard.press(i<25?'Tab':'Shift+Tab');assert.ok(await page.evaluate(()=>document.querySelector('#part-details')!.contains(document.activeElement)));}
  await page.keyboard.press('Escape');assert.equal(await page.locator('#part-details').getAttribute('open'),null);assert.equal(await page.evaluate(()=>(document.activeElement as HTMLElement).dataset.open),'luminous-frame');
 });
 await run(`Both layouts: all ${catalog.parts.reduce((n,p)=>n+FORMATS.reduce((k,f)=>k+p.files[f].length,0),0)*2} code previews equal exported sources and selection follows the source identity`,async()=>{
  let count=0;
  // The exhaustive source matrix checks actual rendered DOM, not an export model.
  // Batch DOM clicks within one browser round-trip per part to keep growing CI affordable.
  // Mouse/keyboard/format/layout interactions are also checked separately above and below.
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const part of catalog.parts){await page.locator('#category-jump').selectOption(part.category);await galleryReady(page);await page.locator(`[data-open="${part.id}"]`).click();await galleryReady(page,true);
   const cases=layouts.flatMap(layout=>FORMATS.map(format=>({layout,format,files:getDelivery(part,format,layout).files})));
   const rendered=await page.evaluate(cases=>cases.map(item=>{
    const select=document.querySelector<HTMLSelectElement>('#export-layout')!;select.value=item.layout;select.dispatchEvent(new Event('change',{bubbles:true}));
    document.querySelector<HTMLButtonElement>(`[data-format="${item.format}"]`)!.click();
    return item.names.map(name=>{const b=[...document.querySelectorAll<HTMLButtonElement>('.file-item')].find(b=>b.dataset.file===name);if(!b)throw new Error('Missing source button: '+name);b.click();return [...document.querySelectorAll('.editor .line-code')].map(n=>n.textContent).join('\n');});
   }),cases.map(c=>({layout:c.layout,format:c.format,names:c.files.map(f=>f.name)})));
   for(let c=0;c<cases.length;c++)for(let i=0;i<cases[c].files.length;i++){assert.equal(normalize(rendered[c][i]),normalize(cases[c].files[i].code),`${part.id}/${cases[c].format}/${cases[c].layout}/${i}`);count++;}
   await page.locator('.close-detail').click();console.log('  verified '+part.id+'; '+count+' sources');
  }assert.equal(count,catalog.parts.reduce((n,p)=>n+Object.values(p.files).flat().length*2,0));
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.locator('#category-jump').selectOption('toggles');await galleryReady(page);await page.locator('[data-open="chrome"]').click();await galleryReady(page,true);await page.locator('[data-format="tsx"]').click();await page.locator('#export-layout').selectOption('portable');
  await page.locator('[data-file="chrome-toggle/internal/motion.ts"]').click();await page.locator('#export-layout').selectOption('original');assert.equal(await page.locator('.current-path').textContent(),'src/shared');
  await page.locator('[data-format="jsx"]').click();assert.equal(await page.locator('.current-file').textContent(),'motion.js');await page.locator('#export-layout').selectOption('portable');assert.equal(await page.locator('.current-path').textContent(),'chrome-toggle/internal');await page.locator('.close-detail').click();
 });
 await run('Downloaded ZIP and CLI share exact files, README, prompt, manifest in both layouts and modes',async()=>{
  const part=catalog.parts.find(p=>p.id==='chrome')!;
  await page.locator('[data-open="chrome"]').click();await galleryReady(page,true);await page.locator('[data-format="js"]').click();
  for(const layout of layouts){
   await page.locator('#export-layout').selectOption(layout);await page.locator('[data-detail-tab="prompt"]').click();await page.locator('[data-prompt-mode="full"]').click();
   const prompt=await page.locator('#prompt-text').inputValue();assert.equal(prompt,buildPrompt(part,'js',layout));
   await page.locator('#download-part').click();
   for(const mode of ['source','text']){
    await page.locator(`input[name="package-mode"][value="${mode}"]`).check();const pending=page.waitForEvent('download');await page.locator('.package-save').click();const d=await pending;
    const archive=await JSZip.loadAsync(fs.readFileSync((await d.path())!),{checkCRC32:true});const root=packageRoot(part,'js',layout)+(mode==='text'?'-text':'')+'/';
    for(const f of packageContents(part,'js',layout))assert.equal(await archive.file(root+f.name+(mode==='text'?'.txt':''))!.async('string'),f.code);
    assert.equal(archive.files[root+getDelivery(part,'js',layout).componentRoot+'/']?.dir,true);
    assert.equal(await archive.file(root+'PROMPT.md'+(mode==='text'?'.txt':''))!.async('string'),prompt);
   }
   await page.keyboard.press('Escape');assert.equal(await page.locator('#part-details').getAttribute('open'),'');
  }
  await page.locator('#export-layout').selectOption('portable');await page.keyboard.press('Escape');
 });
 await run('Guide and AI prompt remain copyable in every export format',async()=>{
  await page.locator('[data-open="chrome"]').click();await galleryReady(page,true);
  for(const format of FORMATS){await page.locator(`[data-format="${format}"]`).click();await page.locator('[data-detail-tab="guide"]').click();assert.ok(await page.locator('#copy-example').isVisible());await page.locator('#copy-example').click();assert.match(await page.locator('#copy-example').innerText(),/コピー済み/);
   await page.locator('[data-detail-tab="prompt"]').click();await page.locator('[data-prompt-mode="full"]').click();const full=await page.locator('#prompt-text').inputValue();assert.ok(full.includes('chrome-toggle/internal/'));assert.ok(full.includes('既存ファイル'));assert.ok(full.includes('参照できない場合'));assert.equal(full,buildPrompt(catalog.parts.find(p=>p.id==='chrome')!,format,'portable'));await page.locator('[data-prompt-mode="spec"]').click();assert.ok((await page.locator('#prompt-text').inputValue()).length<full.length);
  }await page.locator('[data-detail-tab="code"]').click();await page.locator('.close-detail').click();
 });
 await run('Mobile 320/390/768: no overflow, usable code and file picker',async()=>{
  for(const width of [320,390,768]){await page.setViewportSize({width,height:844});await page.locator('[data-open="chrome"]').click();await galleryReady(page,true);await page.locator('[data-format="tsx"]').click();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert.ok(await page.locator('.download-file').isVisible());assert.ok((await page.locator('.code-scroll').boundingBox())!.width>190);
   if(width<600){await page.locator('.mobile-file-picker select').selectOption('chrome-toggle/internal/motion.ts');assert.equal(await page.locator('.current-file').textContent(),'motion.ts');}
   if(width===390)await page.screenshot({path:path.join(OUT,'mobile-390.png')});await page.locator('.close-detail').click();
  }
 });
 await run('Disabled and reduced-motion states remain functional',async()=>{
  await page.setViewportSize({width:1200,height:900});await page.locator('[data-open="chrome"]').click();await galleryReady(page,true);await page.locator('#preview-disabled').check();assert.ok(await page.locator('.preview-stage button').isDisabled());await page.locator('#preview-disabled').uncheck();await page.emulateMedia({reducedMotion:'reduce'});await page.locator('[data-state="off"]').click();assert.equal(await page.locator('.preview-stage button').getAttribute('aria-checked'),'false');await page.locator('[data-state="on"]').click();assert.equal(await page.locator('.preview-stage button').evaluate(b=>b.style.getPropertyValue('--p')),'1.00000');await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('.close-detail').click();
 });
 await run('All standalone HTML/CSS/JS previews run without gallery assets',async()=>{
  for(const part of catalog.parts){await load(`/.test-output/exports/${part.id}/preview/index.html`);assert.equal(await page.locator('.demo-root > *').count(),1);
   if(part.category==='toggles'){const b=page.locator('[role="switch"]');const before=await b.getAttribute('aria-checked');await b.click();assert.notEqual(await b.getAttribute('aria-checked'),before);}
  }
 });
 await run('All native JS exports run with their real imports, in both layouts',async()=>{
  for(const part of catalog.parts)for(const layout of layouts){const d=getDelivery(part,'js',layout);const entry=d.files.find(f=>f.name.endsWith('/index.html'))!;await load(`/.test-output/exports/${part.id}/${layout}/js/${entry.name}`);const element=page.locator('.sop-'+part.id).first();await element.waitFor();assert.ok((await element.boundingBox())!.width>0);
   if(part.category==='scrollbars'){const rail=element.locator('.sop-scroll-rail');await rail.waitFor({state:'visible'});await rail.focus();await page.keyboard.press('End');await page.waitForFunction(id=>document.querySelector('.sop-'+id+' .sop-scroll-rail')?.getAttribute('aria-valuenow')==='100',part.id);}
   if(part.category==='toggles'){const before=await element.getAttribute('aria-checked');await element.click();assert.notEqual(await element.getAttribute('aria-checked'),before);}
  }
 });
 // Use real React. In restricted environments the optional browser module must export r=React/e=ReactDOMClient.
 if(!offline||process.env.SOP_REACT_BROWSER_BUNDLE){
  for(const layout of layouts)for(const format of ['tsx','jsx'] as const){
   const prefix=`.test-output/react-${format}-${layout}`;
   const imports=catalog.parts.map((p,i)=>`import Part${i} from '../exports/${p.id}/${layout}/${format}/${getDelivery(p,format,layout).entry}';`).join('\n');
   const source=`import React,{useState} from 'react';import {createRoot} from 'react-dom/client';\n${imports}\nconst parts=[${catalog.parts.map((p,i)=>`{id:${JSON.stringify(p.id)},toggle:${p.category==='toggles'},text:${p.category==='textboxes'},action:${p.category==='buttons'},link:${p.category==='links'},checkbox:${p.category==='checkboxes'},popup:${p.category==='popups'},Component:Part${i}}`).join(',')}];\n`+
    `function Item({item}){const [checked,setChecked]=useState(false);const C=item.Component;return <section data-react-part={item.id}>{item.toggle?<><C checked={checked} onCheckedChange={setChecked} data-variant="controlled" aria-label="controlled"/><C defaultChecked={false} data-variant="uncontrolled" aria-label="uncontrolled"/><C checked={false} onCheckedChange={()=>{}} data-variant="declined" aria-label="declined"/><C disabled aria-label="disabled" data-variant="disabled"/></>:item.checkbox?<C label="Checkbox"/>:item.popup?<C title="Popup preview"><button>Independent child</button></C>:item.text?<C label="Text input"/>:item.action?<C onClick={()=>{}}>Preview action</C>:item.link?<C href="#fixture-destination">Preview link</C>:<C><button>Independent child</button></C>}</section>;}\n`+
    `function App(){const [visible,setVisible]=useState(true);return <><button id="mount-toggle" onClick={()=>setVisible(!visible)}>Mount/unmount</button>{visible&&parts.map(p=><Item key={p.id} item={p}/>)}</>;}\n`+
    `createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);`;
   const entry=prefix+'/main.jsx';write(entry,source);
   if(offline){const extras=new Map<string,string>([[entry,source]]);for(const p of catalog.parts)for(const f of getDelivery(p,format,layout).files)extras.set(`.test-output/exports/${p.id}/${layout}/${format}/${f.name}`,f.code);
    memory.set('/'+prefix+'/test.js',testBundle(entry,extras,"import {r as React,e as ReactDOMClient} from '/runtime.js';"));
   }
   const styleLinks=catalog.parts.map(p=>`<link rel="stylesheet" href="../exports/${p.id}/${layout}/${format}/${getDelivery(p,format,layout).stylesheet}">`).join('');
   write(prefix+'/index.html',`<!doctype html><html><head><meta charset="utf-8">${styleLinks}<style>body{background:#18191a;color:#eee}section{display:flex;gap:40px;margin:30px;min-height:160px}.sop-surface{width:320px;min-height:170px}</style></head><body><div id="root"></div><script type="module" src="./${offline?'test.js':'main.jsx'}"></script></body></html>`);
   await run(`React ${format.toUpperCase()} / ${layout}: all actual exports, controlled/uncontrolled/disabled, cleanup`,async()=>{
    
    await load('/'+prefix+'/index.html');await page.locator('[data-react-part]').first().waitFor();assert.equal(await page.locator('[data-react-part]').count(),catalog.parts.length);
    for(const part of catalog.parts.filter(p=>p.category==='toggles')){const area=page.locator(`[data-react-part="${part.id}"]`);for(const variant of ['controlled','uncontrolled']){const b=area.locator(`[data-variant="${variant}"]`);assert.equal(await b.getAttribute('aria-checked'),'false');await b.click();assert.equal(await b.getAttribute('aria-checked'),'true');}
     const declined=area.locator('[data-variant="declined"]');await declined.click();assert.equal(await declined.getAttribute('aria-checked'),'false');assert.ok(await area.locator('[data-variant="disabled"]').isDisabled());
    }
    const ids=await page.locator('[id]').evaluateAll(nodes=>nodes.map(n=>n.id));assert.equal(ids.length,new Set(ids).size);
    for(let i=0;i<3;i++){await page.locator('#mount-toggle').click();await page.waitForTimeout(100);assert.equal(await page.locator('[data-react-part]').count(),0);assert.equal(await page.evaluate(()=>(window as unknown as {activeRAF:Set<number>}).activeRAF.size),0);await page.locator('#mount-toggle').click();await page.locator('[data-react-part]').first().waitFor();}
   });
  }
 }
 if(!offline){
  await run('Real Vite watcher regenerates catalogue without author-source copies',async()=>{
   await load('/');
   const target=path.join(ROOT,catalog.bases.find(b=>b.endsWith('/chrome'))!,'meta.json');const original=fs.readFileSync(target,'utf8');
   try{const meta=JSON.parse(original) as {tagline:string};meta.tagline='HMR verification marker';fs.writeFileSync(target,JSON.stringify(meta,null,2)+'\n');
    await page.waitForFunction(()=>window.SOP_CATALOG.find(p=>p.id==='chrome')?.tagline==='HMR verification marker');
   }finally{fs.writeFileSync(target,original);}
   await page.waitForFunction(expected=>window.SOP_CATALOG.find(p=>p.id==='chrome')?.tagline===expected,catalog.parts.find(p=>p.id==='chrome')!.tagline);
   assert.equal(fs.existsSync(path.join(ROOT,'packages')),false);
  });
  await run('Real Vite production build works under /STATE-OF-PLAY/',async()=>{
   const vite=await import('vite');await vite.build({root:ROOT,logLevel:'warn'});
   const production=await vite.preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{port:0,host:'127.0.0.1'}});
   try{
    const productionUrl = requireLocalServerUrl(production, 'Vite production preview');
    await page.goto(productionUrl);await galleryReady(page);assert.equal(await page.locator('[data-part]').count(),catalog.parts.filter(p=>p.category==='toggles').length);
    await page.locator('[data-open="chrome"]').click();await galleryReady(page,true);assert.match(await page.locator('.editor code').innerText(),/ChromeToggle/);
   }finally{await new Promise<void>((resolve,reject)=>production.httpServer.close((error?: Error)=>error?reject(error):resolve()));}
  });
 }
 assert.deepEqual(errors,[]);
 console.log(`Browser checks: ${results.length} passed; mode=${offline?'explicit offline adapter (NOT Vite)':'Vite HTTP'}.`);
}finally{
 fs.writeFileSync(path.join(OUT,'browser-results.json'),JSON.stringify({mode:offline?'network-restricted adapter; Vite not executed':'real Vite HTTP',react:offline?(process.env.SOP_REACT_BROWSER_BUNDLE?'real installed browser runtime; production':'not run'):'installed React + development StrictMode',passed:results.length,tests:results,errors},null,2)+'\n');
 await browser?.close();await closeServer?.();
}
