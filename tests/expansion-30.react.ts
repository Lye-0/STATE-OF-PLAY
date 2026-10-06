import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {chromium} from 'playwright';import {createServer} from 'vite';
import {buildCatalog,ROOT} from '../scripts/catalog.ts';import {getDelivery} from '../src/catalog/delivery.ts';import {currentParts} from './gallery-counts.ts';import {lightSelectedContrast} from './light-selected-contrast.ts';
const specs=currentParts().filter(part=>part.tags.includes('EXPANSION-30'));
const parts=buildCatalog(ROOT,specs.map(d=>d.id),{appearance:false}).parts;
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});const errors:string[]=[];
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0,watch:{ignored:['**/.test-output/**','**/docs/**']}}});await server.listen();
try{
 for(const [format,layout]of [['tsx','portable'],['jsx','original']] as const){
  const directory=path.join(ROOT,`.test-output/expansion-30-react/${format}-${layout}`);fs.mkdirSync(directory,{recursive:true});
  const imports=parts.map((part,i)=>{const delivery=getDelivery(part,format,layout);for(const f of delivery.files){const target=path.join(directory,part.id,f.name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,f.code);}return `import C${i} from './${part.id}/${delivery.entry}';`;}).join('\n');
  fs.writeFileSync(path.join(directory,'entry.jsx'),`import React from 'react';import{createRoot}from'react-dom/client';${imports}
const entries=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},kind:${JSON.stringify(p.category)},C:C${i}}`).join(',')}];
window.calls=[];const root=createRoot(document.querySelector('#root'));window.teardown=()=>root.unmount();root.render(<React.StrictMode>{entries.map(({id,kind,C})=>{const changed=v=>window.calls.push([id,v]);const events=['toggles','checkboxes'].includes(kind)?{onCheckedChange:changed}:['sliders','numbers','avatars','ratings','colors'].includes(kind)?{onValueChange:changed}:{};const content=kind==='avatars'?{users:[{id:'one',name:'One person'},{id:'two',name:'Second person'}]}:{};return <section key={id} data-part={id}><C {...content} {...events}/></section>;})}</React.StrictMode>);`);
  fs.writeFileSync(path.join(directory,'index.html'),'<html><head><meta charset="utf-8"><link rel="icon" href="data:,"><style>body{background:#1d2225;color:#eef2ec;padding:20px;font:14px Arial}#root>section{display:inline-block;width:330px;vertical-align:top;padding:10px;margin:15px;box-sizing:border-box}</style></head><body><div id="root"></div><script type="module" src="./entry.jsx"></script></body></html>');
  const page=await browser.newPage({viewport:{width:1400,height:1000}});page.on('pageerror',e=>errors.push(e.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto(server.resolvedUrls!.local[0]+path.relative(ROOT,path.join(directory,'index.html')).replaceAll('\\','/'),{timeout:120000});await page.waitForFunction(()=>document.querySelectorAll('[data-part]').length===325,undefined,{timeout:120000});
  for(const part of parts){const host=page.locator(`[data-part="${part.id}"]`);assert.ok(await host.locator(`.sop-${part.id}`).count(),part.id+' React root');assert.ok((await host.locator(`.sop-${part.id}`).innerHTML()).length>30,part.id+' actual markup');if(part.category==='toggles')assert.ok(await host.locator('.switch-art > *').count()>0);}
  for(const [id,kind]of [['shoji-toggle','switch'],['clasp-check','check'],['sail-range','range'],['labeled-quantity','number'],['cutout-portrait','avatar'],['plume-score-rating','rating'],['compact-split-color','color']] as const){
   const host=page.locator(`[data-part="${id}"]`);await host.scrollIntoViewIfNeeded();if(kind==='switch'){const b=host.locator('[role=switch]'),before=await b.getAttribute('aria-checked');await b.click();assert.notEqual(await b.getAttribute('aria-checked'),before);}
   else if(kind==='check'){await host.locator('input[type=checkbox]').check();assert.ok(await host.locator('input[type=checkbox]').isChecked());}
   else if(kind==='range'){await host.locator('input[type=range]').first().fill('78');assert.match(await host.locator('[data-reading]').innerText(),/78/);}
   else if(kind==='number'){const input=host.locator('[data-number]'),before=Number(await input.inputValue());await host.locator('[data-adjust="1"]').click();assert.ok(Number(await input.inputValue())>before);}
   else if(kind==='avatar'){await host.locator('[data-user]').nth(1).click();assert.equal(await host.locator('[data-user]').nth(1).getAttribute('data-selected'),'true');}
   else if(kind==='rating'){await host.locator('input[type=radio]').nth(3).check();assert.match(await host.locator('output').innerText(),/4 \/ 5/);}
   else{const hex=host.locator('[data-hex]');await hex.fill('#AC6499');await hex.press('Enter');assert.equal(await hex.inputValue(),'#AC6499');}
  }
  assert.ok(await page.evaluate(()=>(window as any).calls.length>=5),'real callbacks fire');
  const lightIds=parts.filter(p=>/color-scheme:light|--(?:sg-bg|wb-bg|ff-base):#[c-f][\da-f]{5}/i.test(fs.readFileSync(path.join(ROOT,'src/parts',p.category,p.id,'styles.css'),'utf8'))).map(p=>p.id);const contrast=await lightSelectedContrast(page,lightIds);assert.ok(contrast.checked>=2,'selected light labels are actually checked');assert.deepEqual(contrast.failures,[]);

  await page.addStyleTag({content:'body{padding:12px}#root>section{display:block;width:100%;margin:15px 0;padding:10px}'});
  for(const width of [320,390]){await page.setViewportSize({width,height:844});const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,parts:[...document.querySelectorAll('#root>section')].filter(host=>[host,...host.querySelectorAll('*')].some(el=>{const rect=el.getBoundingClientRect();return rect.width>0&&rect.right>innerWidth+1;})).map(host=>(host as HTMLElement).dataset.part)}));assert.ok(overflow.scroll<=width+1,'all 325 actual React components fit '+width+'px: '+JSON.stringify(overflow));}
  await page.evaluate(()=>(window as any).teardown());assert.equal(await page.locator('[data-part]').count(),0);await page.close();console.log('PASS real React StrictMode mount/unmount 325 parts, representative callbacks, selected light-label contrast and mobile widths: '+format+' '+layout);
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await server.close();}
