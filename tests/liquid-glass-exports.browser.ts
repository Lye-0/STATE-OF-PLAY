/** Native browser ES-module smoke test of the actual JS exports, without the author-source bundler. */
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';import{getDelivery}from'../src/catalog/delivery.ts';import{sourceReferences,isLocalReference,resolveLocal}from'../scripts/source-tools.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const parts=buildCatalog().parts.filter(p=>p.tags.includes('GLASS LAB'));
const packages=parts.flatMap(p=>(['portable','original']as const).map(layout=>{const d=getDelivery(p,'js',layout),files=new Map(d.files.map(f=>[f.name,f]));
 const css=(name:string,seen=new Set<string>()):string=>{if(seen.has(name))return'';seen.add(name);return files.get(name)!.code.replace(/@import\s+["']([^"']+)["']\s*;/g,(_,ref:string)=>css(resolveLocal(name,ref,k=>files.has(k)),seen));};
 return{id:p.id,layout,category:p.category,entry:d.entry,markup:files.get(d.markup)!.code,css:css(d.stylesheet),files:d.runtimeFiles.filter(f=>f.name.endsWith('.js')).map(f=>({name:f.name,code:f.code,refs:sourceReferences(f.code,f.name).filter(isLocalReference).map(r=>({start:r.start,end:r.end,target:resolveLocal(f.name,r.request,k=>files.has(k))}))}))};}));
const out=path.join(ROOT,'.test-output/liquid-glass-exports');fs.mkdirSync(out,{recursive:true});const errors:string[]=[],tests:string[]=[];
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try{
 const p=await browser.newPage({viewport:{width:1000,height:800}});p.on('pageerror',e=>errors.push(e.message));
 await p.setContent('<!doctype html><html lang="ja"><head><meta charset="utf-8"></head><body style="margin:0;padding:30px;background:#163445;color:white"><h1>Export verification</h1><main id="exports"></main></body></html>');
 await p.addStyleTag({content:packages.map(x=>x.css).join('\n')+'\n.export-item{padding:25px;min-height:160px;border:1px solid #abc4;margin:10px 0}'});
 await p.evaluate(async packages=>{
  const apis:any[]=[],urls:string[]=[];(window as any).exportAPIs=apis;(window as any).exportURLs=urls;
  for(const [i,pkg]of packages.entries()){
   const sources=new Map(pkg.files.map(f=>[f.name,f])),loaded=new Map<string,string>(),pending=new Set<string>();
   const moduleURL=(name:string):string=>{if(loaded.has(name))return loaded.get(name)!;if(pending.has(name))throw new Error('Circular export: '+name);pending.add(name);const f=sources.get(name);if(!f)throw new Error('Missing JS export: '+name);let code=f.code;
    for(const ref of [...f.refs].sort((a,b)=>b.start-a.start)){const target=moduleURL(ref.target);code=code.slice(0,ref.start)+target+code.slice(ref.end);}
    const url=URL.createObjectURL(new Blob([code],{type:'text/javascript'}));urls.push(url);loaded.set(name,url);pending.delete(name);return url;};
   const section=document.createElement('section');section.className='export-item';section.dataset.exportIndex=String(i);section.innerHTML=pkg.markup;document.querySelector('#exports')!.append(section);
   const module=await import(moduleURL(pkg.entry));apis.push(module.init(section.firstElementChild,{appearance:'dark'}));
  }
 },packages);
 assert.equal(await p.locator('.export-item').count(),16);tests.push('16 exports initialize using native ES modules and their actual emitted JavaScript');
 for(const [i,pkg]of packages.entries()){
  const root=p.locator(`[data-export-index="${i}"]`);
  if(pkg.category==='toggles'){await root.locator('.lg-toggle').click();assert.equal(await root.locator('.lg-toggle').getAttribute('aria-checked'),'true');}
  if(pkg.category==='tabs'){await root.locator('[data-choice-value="notes"]').click();assert.ok(await root.locator('[data-panel-value="notes"]').isVisible());}
  if(pkg.category==='dropdowns'){await root.locator('.sop-select-trigger').click();await root.locator('[role="option"]').nth(1).click();assert.equal(await root.locator('.sop-select-input').inputValue(),'name');}
  if(pkg.category==='buttons'){await root.locator('.lg-button').click();assert.equal(await root.locator('.lg-button').getAttribute('type'),'button');}
 }
 tests.push('Toggles, tabs, dropdowns and buttons work in both portable and original layouts');
 const ids=await p.locator('[id]').evaluateAll(es=>es.map(e=>e.id));assert.equal(new Set(ids).size,ids.length);tests.push('Independent copied packages do not collide on DOM identifiers');
 await p.evaluate(()=>{for(const c of (window as any).exportAPIs)c.destroy();for(const url of (window as any).exportURLs)URL.revokeObjectURL(url);document.querySelector('#exports')!.replaceChildren();});
 assert.equal(await p.locator('[data-lg-resource]').count(),0);assert.deepEqual(errors,[]);tests.push('Controllers and generated resources clean up without runtime errors');
 console.log('Liquid Glass native exports: '+tests.length+' checks passed / '+packages.length+' packages.');
}finally{await browser.close();fs.writeFileSync(out+'/results.json',JSON.stringify({mode:'Actual Chromium native ES modules. Only local import specifiers rebound to Blob URLs; NOT Vite/HTTP.',tests,passed:tests.length,packages:packages.length,errors},null,2));}
