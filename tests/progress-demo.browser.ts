/** Gallery demo playback for every progress design. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});
await server.listen();
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});page.setDefaultTimeout(45000);const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(server.resolvedUrls!.local[0],{waitUntil:'domcontentloaded',timeout:60000});
 const ready=()=>page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');await ready();
 await page.locator('[data-category="progress"]').click();await ready();
 assert.equal(await page.locator('[data-part]').count(),24);assert.equal(await page.locator('#toggle-controls').isVisible(),false);assert.equal(await page.locator('#progress-controls').isVisible(),true);
 const button=page.locator('#progress-demo'),items=page.locator('[data-part] [data-progress]');assert.equal(await items.count(),24);assert.equal(await button.innerText(),'デモ再生');assert.equal(await button.getAttribute('aria-pressed'),'false');
 const readValues=()=>items.evaluateAll(es=>es.map(el=>(el as HTMLProgressElement).value));const phases=[0,20,40,60,80,100,80,60,40,20];
 await button.click();assert.equal(await button.getAttribute('aria-pressed'),'true');assert.equal(await button.innerText(),'デモ停止');
 const first=await readValues();assert.deepEqual(first,Array.from({length:24},(_,i)=>phases[i%phases.length]));
 await page.waitForFunction(()=>document.querySelector<HTMLProgressElement>('[data-part] [data-progress]')!.value!==0,null,{timeout:3000});
 const advanced=await readValues(),phase=Array.from({length:phases.length},(_,n)=>n).find(n=>advanced.every((v,i)=>v===phases[(i+n)%phases.length]));assert.ok(phase&&phase>0,'all 24 indicators advance together through the loop');
 await button.click();assert.equal(await button.getAttribute('aria-pressed'),'false');assert.equal(await button.innerText(),'デモ再生');const stopped=await readValues();await page.waitForTimeout(600);assert.deepEqual(await readValues(),stopped,'stop freezes all progress values');
 await button.click();await page.locator('[data-part="aurora-progress"] [data-demo-progress="15"]').click();assert.equal(await button.getAttribute('aria-pressed'),'false','manual interaction stops the demo');assert.equal((await readValues())[0],15,'manual value change remains applied');
 await button.click();await page.locator('[data-category="toggles"]').click();await ready();assert.equal(await button.getAttribute('aria-pressed'),'false','category switch stops the demo');assert.equal(await page.locator('#progress-controls').isVisible(),false);assert.equal(await page.locator('#toggle-controls').isVisible(),true);assert.deepEqual(errors,[]);
 console.log('Progress demo checks: all 24 indicators, cyclic values, stop, manual interaction and category switch passed.');
}finally{await browser.close();await server.close();}
