import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {chromium} from 'playwright';import {createServer} from 'vite';
import {buildCatalog,ROOT} from '../scripts/catalog.ts';import {getDelivery} from '../src/catalog/delivery.ts';import {currentParts} from './gallery-counts.ts';import {lightSelectedContrast} from './light-selected-contrast.ts';
const specs=currentParts().filter(p=>p.tags.includes('EXPANSION-50'));const categories=[...new Set(specs.map(p=>p.category))];const chosen=process.env.SOP_EXPANSION_CATEGORIES?.split(',');
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});const errors:string[]=[];
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0,hmr:false,watch:{ignored:['**/.test-output/**','**/docs/**']}}});await server.listen();
try{
 for(const category of categories.filter(c=>!chosen||chosen.includes(c))){
  const parts=buildCatalog(ROOT,specs.filter(p=>p.category===category).map(p=>p.id),{appearance:false}).parts;
  for(const [format,layout] of [['tsx','portable'],['jsx','original'],['tsx','original'],['jsx','portable']] as const){
   const directory=path.join(ROOT,`.test-output/expansion-50-react/${category}/${format}-${layout}`);fs.mkdirSync(directory,{recursive:true});
   const imports=parts.map((part,i)=>{const d=getDelivery(part,format,layout);for(const f of d.files){const target=path.join(directory,part.id,f.name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,f.code);}return `import C${i} from './${part.id}/${d.entry}';`;}).join('\n');
   fs.writeFileSync(path.join(directory,'entry.jsx'),`import React,{useState} from 'react';import{createRoot}from'react-dom/client';${imports}\nconst entries=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},C:C${i}}`).join(',')}];window.calls=[];window.searchFixtures={};function SearchFixture({id,C}){const[query,setQuery]=useState(''),[label,setLabel]=useState('Search'),[accept,setAccept]=useState(true);window.searchFixtures[id]={setLabel,setAccept};return <C query={query} label={label} onQueryChange={q=>{window.calls.push(q);if(accept)setQuery(q)}}/>}const root=createRoot(document.querySelector('#root'));window.teardown=()=>root.unmount();root.render(<React.StrictMode>{entries.map(({id,C})=><section key={id} data-part={id}>${category==='searchbars'?'<SearchFixture id={id} C={C}/>':'<C/>'}</section>)}</React.StrictMode>);`);
   fs.writeFileSync(path.join(directory,'index.html'),'<html><head><meta charset="utf-8"><link rel="icon" href="data:,"><style>body{background:#222831;color:#eee;padding:12px;margin:0;font:14px Arial}#root>section{display:block;width:min(100%,340px);padding:10px;margin:15px 0;box-sizing:border-box}</style></head><body><div id="root"></div><script type="module" src="./entry.jsx"></script></body></html>');
   const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});page.on('pageerror',e=>errors.push(e.message));
   await page.goto(server.resolvedUrls!.local[0]+path.relative(ROOT,path.join(directory,'index.html')).replaceAll('\\','/'),{timeout:120000});await page.waitForFunction(n=>document.querySelectorAll('[data-part]').length===n,parts.length,{timeout:120000});
   for(const p of parts){const host=page.locator(`[data-part="${p.id}"]`),root=host.locator(`.sop-${p.id}`).first();assert.ok(await root.count(),p.id+' React root');assert.ok((await root.innerHTML()).length>30,p.id+' rendered');
    if(['loaders','ornaments'].includes(category))assert.equal(await root.locator('.x-composition i').count(),6,p.id+' authored artwork');
    if(category==='toggles'){const sw=root;const before=await sw.getAttribute('aria-checked');await sw.click();assert.notEqual(await sw.getAttribute('aria-checked'),before);}
    if(category==='checkboxes'){await root.locator('input').check();assert.ok(await root.locator('input').isChecked());}
    if(category==='searchbars'){
     const input=root.locator('.wb-search-input');await input.fill('native');await input.press('End');await page.keyboard.insertText(' edited');const original=await input.elementHandle();await page.evaluate(id=>(window as any).searchFixtures[id].setLabel('Updated search'),p.id);await page.waitForTimeout(30);assert.equal(await input.evaluate((e,old)=>e===old,original),true,p.id+' connected controlled editor');assert.equal(await input.inputValue(),'native edited');await input.press('Control+z');await page.waitForTimeout(30);assert.equal(await input.inputValue(),'native',p.id+' accepted controlled native undo');await page.evaluate(id=>(window as any).searchFixtures[id].setAccept(false),p.id);await page.waitForTimeout(20);await input.fill('declined');await page.waitForTimeout(30);assert.equal(await input.inputValue(),'native',p.id+' controlled decline');
    }
    if(category==='textboxes'){await root.locator('input:not([type=hidden]),textarea').first().fill('長い日本語の入力を保持します');}
    if(category==='ratings'){await root.locator('input[type=radio]').nth(3).check();assert.match(await root.locator('output').innerText(),/4 \/ 5/);}
    if(category==='sliders'){await root.locator('input[type=range]').first().fill('73');assert.match(await root.locator('[data-reading]').innerText(),/73/);}
   }
   const contrast=await lightSelectedContrast(page,parts.filter(p=>!['tabs','segments'].includes(p.category)).map(p=>p.id));assert.deepEqual(contrast.failures,[]);
   for(const width of [320,390,768]){await page.setViewportSize({width,height:844});const measure=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));assert.ok(measure.scroll<=width+1,category+' '+format+' '+layout+' fits '+width+': '+JSON.stringify(measure));}
   await page.evaluate(()=>(window as any).teardown());assert.equal(await page.locator('[data-part]').count(),0);await page.close();console.log('PASS '+category+' '+parts.length+' React '+format+' '+layout+' strict cleanup, narrow widths, contrast');
  }
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await server.close();}
