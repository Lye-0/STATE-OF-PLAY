import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
const out=path.resolve('.test-output/foundation-reset');fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'index.html'),'<form><div id="host"></div></form><script type="module" src="./entry.ts"></script>');
fs.writeFileSync(path.join(out,'entry.ts'),`import {mountSlider} from '../../src/shared/foundation/slider.ts';window.mount=(options={})=>{window.api?.destroy();document.querySelector('#host').innerHTML='';window.api=mountSlider(document.querySelector('#host'),{id:'reset',kind:'sliders',variant:'essential',defaultValue:62,min:0,max:100,step:1,unit:'%',name:'amount'},options)};window.mount();window.ready=true;`);
const server=await createServer({configFile:false,root:process.cwd(),optimizeDeps:{noDiscovery:true},server:{host:'127.0.0.1',port:0,hmr:false,watch:null}});await server.listen();
const browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),headless:true});
try{const page=await browser.newPage();await page.goto(server.resolvedUrls!.local[0]+'.test-output/foundation-reset/index.html');await page.waitForFunction(()=>(window as any).ready);
 const reset=()=>page.evaluate(()=>new Promise<void>(resolve=>{document.querySelector('form')!.reset();setTimeout(resolve,20)}));
 const read=()=>page.evaluate(()=>({data:(window as any).api.getData(),text:document.querySelector('[data-reading]')!.textContent,values:[...document.querySelectorAll<HTMLInputElement>('input[type=range]:not([hidden])')].map(e=>e.value),form:[...new FormData(document.querySelector('form')!).values()]}));
 for(const range of [false,true]){await page.evaluate(range=>{(window as any).mount();(window as any).api.updateFoundation({min:-20,max:80,step:5,range,value:range?[0,60]:40})},range);await reset();const result=await read();assert.deepEqual(result.data,range?[-20,80]:60);assert.deepEqual(result.values,range?['-20','80']:['60']);assert.deepEqual(result.form,result.values);assert.equal(result.text,range?'-20 – 80%':'60%');}
 console.log('PASS changed step and single/dual mode reset keep data, text, native values and FormData identical');
 await page.evaluate(()=>{(window as any).mount({defaultValue:90});(window as any).api.updateFoundation({min:0,max:30,step:3,value:12})});await reset();assert.equal((await read()).data,30);
 await page.evaluate(()=>(window as any).api.updateFoundation({defaultValue:8,value:18}));await reset();assert.equal((await read()).data,9);
 await page.evaluate(()=>(window as any).api.updateFoundation({controlled:true,value:21}));await reset();assert.equal((await read()).data,21);
 await page.evaluate(()=>{(window as any).api.updateFoundation({controlled:false,value:18});document.querySelector('form')!.addEventListener('reset',e=>e.preventDefault(),{once:true})});await reset();assert.equal((await read()).data,18);
 console.log('PASS changed bounds/defaults, controlled values and canceled reset retain their contracts');
 await page.evaluate(()=>{(window as any).api.setData(24);document.querySelector('form')!.reset();(window as any).api.destroy()});await page.waitForTimeout(30);assert.equal(await page.evaluate(()=>(window as any).api.getData()),24);
 console.log('PASS destroy cancels a pending reset');
}finally{await browser.close();await server.close()}
