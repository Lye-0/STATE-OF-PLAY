/** Actual React runtime and hydration smoke test for the eight authored wrappers. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';

const fixture=path.join(ROOT,'.test-output','liquid-glass-react');
fs.mkdirSync(fixture,{recursive:true});
fs.writeFileSync(path.join(fixture,'index.html'),'<!doctype html><html lang="ja"><meta charset="utf-8"><link rel="icon" href="data:,"><body><main id="root"></main><main id="hydrate"></main><script type="module" src="./main.tsx"></script></body></html>');
fs.writeFileSync(path.join(fixture,'main.tsx'),`
import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import {renderToString} from 'react-dom/server';
import Lens from '../../src/parts/toggles/lg-lens-toggle/react/Example';
import Mist from '../../src/parts/toggles/lg-mist-toggle/react/Example';
import Pressure from '../../src/parts/buttons/lg-pressure-button/react/Example';
import Frost from '../../src/parts/buttons/lg-frost-button/react/Example';
import Flow from '../../src/parts/tabs/lg-flow-tabs/react/Example';
import Index from '../../src/parts/tabs/lg-index-tabs/react/Example';
import Bloom from '../../src/parts/dropdowns/lg-bloom-select/react/Example';
import Clarity from '../../src/parts/dropdowns/lg-clarity-select/react/Example';
function App(){return <>
 <section data-react-glass="lens"><Lens/></section><section data-react-glass="mist"><Mist/></section>
 <section data-react-glass="pressure"><Pressure/></section><section data-react-glass="frost"><Frost/></section>
 <section data-react-glass="flow"><Flow/></section><section data-react-glass="index"><Index/></section>
 <section data-react-glass="bloom"><Bloom/></section><section data-react-glass="clarity"><Clarity/></section>
 </>}
let root=createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>);
window.unmountGlassReact=()=>{root.unmount()};
window.hydrateGlassReact=()=>{const target=document.getElementById('hydrate');target.innerHTML=renderToString(<App/>);window.hydratedGlassRoot=hydrateRoot(target,<React.StrictMode><App/></React.StrictMode>);return target.innerHTML};
`);

const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});
await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try{
 const page=await browser.newPage({viewport:{width:1200,height:900}}),errors:string[]=[];
 page.on('pageerror',error=>errors.push(error.message));
 page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
 await page.goto(new URL('.test-output/liquid-glass-react/index.html',server.resolvedUrls!.local[0]).href,{waitUntil:'commit',timeout:180000});
 await page.locator('[data-react-glass]').first().waitFor({timeout:180000});
 assert.equal(await page.locator('#root [data-react-glass]').count(),8);
 for(const id of ['lens','mist']){const control=page.locator(`[data-react-glass="${id}"] [role="switch"]`);await control.click();assert.equal(await control.getAttribute('aria-checked'),'true');}
 for(const id of ['pressure','frost']){const control=page.locator(`[data-react-glass="${id}"] button`).first();await control.click();assert.equal(await control.getAttribute('type'),'button');}
 for(const id of ['flow','index']){const scope=page.locator(`[data-react-glass="${id}"]`);await scope.locator('[role="tab"]').last().click();assert.equal(await scope.locator('[role="tab"][aria-selected="true"]').count(),1);}
 for(const id of ['bloom','clarity']){const scope=page.locator(`[data-react-glass="${id}"]`);await scope.locator('.sop-select-trigger').click();await scope.locator('[role="option"]').nth(1).click();assert.equal(await scope.locator('.sop-select-input').inputValue(),'name');}
 await page.evaluate(()=>(window as any).unmountGlassReact());
 assert.equal(await page.locator('#root [data-react-glass]').count(),0);
 assert.equal(await page.locator('[data-lg-resource]').count(),0);
 const html=await page.evaluate(()=>(window as any).hydrateGlassReact());
 assert.match(html,/data-react-glass="lens"/);
 await page.locator('#hydrate [data-react-glass]').first().waitFor();
 assert.equal(await page.locator('#hydrate [data-react-glass]').count(),8);
 await page.locator('#hydrate [data-react-glass="lens"] [role="switch"]').click();
 assert.equal(await page.locator('#hydrate [data-react-glass="lens"] [role="switch"]').getAttribute('aria-checked'),'true');
 await page.evaluate(()=>(window as any).hydratedGlassRoot.unmount());
 assert.equal(await page.locator('[data-lg-resource]').count(),0);
 assert.deepEqual(errors,[]);
 console.log('PASS actual React StrictMode, eight wrappers, SSR markup, hydration and cleanup');
 await page.close();
}finally{await browser.close();await server.close();}
