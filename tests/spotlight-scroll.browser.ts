/** Spotlight's decorative beam must not create a scrollbar on a fitting list. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {kineticFixture} from './kinetic-fixture.ts';
import {requireLocalServerUrl} from './vite-url.ts';

const fixture=kineticFixture();
const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});
await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:process.env.SOP_BROWSER_CHANNEL?{channel:process.env.SOP_BROWSER_CHANNEL}:{}),args:['--no-sandbox']});
try{
 const page=await browser.newPage({viewport:{width:1100,height:850}});
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 const url=new URL('.test-output/kinetic/test.html',requireLocalServerUrl(server,'Spotlight test server'));
 await page.goto(url.href,{waitUntil:'domcontentloaded',timeout:180000});
 await page.addStyleTag({content:fixture.styles});
 await page.waitForFunction(()=>typeof (window as any).mount==='function',undefined,{timeout:180000});
 await page.evaluate(()=>(window as any).mount(['spotlight-menu']));
 const trigger=page.locator('#host .sop-select-trigger'),panel=page.locator('#host .sop-select-popup');
 await trigger.click();await panel.waitFor({state:'visible'});
 const size=()=>panel.evaluate(element=>({scrollHeight:element.scrollHeight,clientHeight:element.clientHeight,scrollTop:element.scrollTop}));
 const initial=await size();assert.ok(initial.scrollHeight<=initial.clientHeight+1,JSON.stringify(initial));
 await panel.locator('[role=option]').last().hover();await page.waitForTimeout(650);
 const last=await size();assert.ok(last.scrollHeight<=last.clientHeight+1,JSON.stringify(last));
 assert.equal(await panel.locator('[data-active="true"]').getAttribute('data-value'),'priority');
 await panel.evaluate(element=>{const row=element.querySelector('[role=option]')!;for(let i=0;i<12;i++){const copy=row.cloneNode(true) as HTMLElement;copy.id='';copy.dataset.value='extra-'+i;copy.dataset.label='追加候補 '+i;element.append(copy);}});
 await page.evaluate(()=>(window as any).api.refresh());
 await trigger.focus();await page.keyboard.press('End');await page.waitForTimeout(650);
 const long=await size();assert.ok(long.scrollHeight>long.clientHeight+1&&long.scrollTop>0,JSON.stringify(long));
 const naturalEnd=await panel.evaluate(element=>{const row=element.querySelector<HTMLElement>('[role=option]:last-child')!;return row.offsetTop+row.offsetHeight+parseFloat(getComputedStyle(element).paddingBottom);});
 assert.ok(long.scrollHeight<=naturalEnd+1,`decorative beam extends the long list: ${long.scrollHeight} > ${naturalEnd}`);
 await page.keyboard.press('Enter');assert.equal(await page.locator('#host .sop-select-input').inputValue(),'extra-11');
 assert.deepEqual(errors,[]);
 console.log('Spotlight scroll browser checks: fitting list, last-row hover, real overflow and selection.');
}finally{await browser.close();await server.close();}
