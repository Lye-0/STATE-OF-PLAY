/** Actual React runtime, StrictMode cleanup and hydration for the 66 new skins. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';

const parts=buildCatalog().parts.filter(part=>part.id.startsWith('lgc-'));
assert.equal(parts.length,66);
const fixture=path.join(ROOT,'.test-output','glass-collection-react');fs.mkdirSync(fixture,{recursive:true});
fs.writeFileSync(path.join(fixture,'index.html'),'<!doctype html><html lang="ja"><meta charset="utf-8"><link rel="icon" href="data:,"><body><main id="root"></main><main id="hydrate"></main><script type="module" src="./main.tsx"></script></body></html>');
const imports=parts.map((part,index)=>`import Example${index} from '../../src/parts/${part.category}/${part.id}/react/Example';`).join('\n');
const sections=parts.map((part,index)=>`<section data-react-part=${JSON.stringify(part.id)}><Example${index}/></section>`).join('');
fs.writeFileSync(path.join(fixture,'main.tsx'),`
import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import {renderToString} from 'react-dom/server';
${imports}
function App(){return <>${sections}</>}
let root=createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>);
window.unmountCollection=()=>root.unmount();
window.hydrateCollection=()=>{const target=document.getElementById('hydrate');target.innerHTML=renderToString(<App/>);window.hydratedCollectionRoot=hydrateRoot(target,<React.StrictMode><App/></React.StrictMode>);return target.innerHTML};
`);

const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}}),errors:string[]=[];
 page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
 await page.goto(new URL('.test-output/glass-collection-react/index.html',server.resolvedUrls!.local[0]).href,{waitUntil:'commit',timeout:180000});
 await page.waitForFunction(()=>document.querySelectorAll('#root [data-react-part]').length===66,undefined,{timeout:180000});
 assert.equal(await page.locator('#root .lgc-root').count(),66);
 await page.locator('[data-react-part="lgc-textboxes-lens"] .sop-field-control').fill('ガラスの入力');
 assert.equal(await page.locator('[data-react-part="lgc-textboxes-lens"] .sop-field-control').inputValue(),'ガラスの入力');
 const accordion=page.locator('[data-react-part="lgc-accordions-lens"] .sop-accordion-trigger').first(),before=await accordion.getAttribute('aria-expanded');
 await accordion.click();assert.notEqual(await accordion.getAttribute('aria-expanded'),before);
 await page.evaluate(()=>(window as any).unmountCollection());
 assert.equal(await page.locator('#root [data-react-part]').count(),0);
 assert.equal(await page.locator('[data-lg-resource]').count(),0);
 const markup=await page.evaluate(()=>(window as any).hydrateCollection());
 assert.match(markup,/data-react-part="lgc-ornaments-mist"/);
 await page.waitForFunction(()=>document.querySelectorAll('#hydrate [data-react-part]').length===66);
 await page.locator('#hydrate [data-react-part="lgc-textboxes-lens"] .sop-field-control').fill('再接続');
 assert.equal(await page.locator('#hydrate [data-react-part="lgc-textboxes-lens"] .sop-field-control').inputValue(),'再接続');
 await page.evaluate(()=>(window as any).hydratedCollectionRoot.unmount());
 assert.equal(await page.locator('[data-lg-resource]').count(),0);
 assert.deepEqual(errors,[]);
 console.log('PASS 66 React skins: StrictMode, input/accordion behavior, SSR, hydration and cleanup');
 await page.close();
}finally{await browser.close();await server.close();}
