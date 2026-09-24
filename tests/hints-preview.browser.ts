/** Production-build smoke check for every hint, including its first painted frames. */
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT} from '../scripts/catalog.ts';
import {offlineFiles} from './offline-fixture.ts';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const url=process.env.SOP_PREVIEW_URL??'http://127.0.0.1:4173/';
const offline=process.env.SOP_TEST_MODE==='offline';
const parts=buildCatalog().parts.filter(part=>part.category==='hints');
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const errors:string[]=[];
try {
 const page=await browser.newPage({viewport:{width:980,height:700}});
 page.on('pageerror',error=>errors.push(error.message));
 if(offline){
  const files=offlineFiles(buildCatalog());
  await page.setContent(files.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));
  await page.addStyleTag({content:files.get('/test-styles.css')!});
  for(const vendor of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor',vendor+'.js'),'utf8')});
  await page.addScriptTag({content:files.get('/test-app.js')!});
 } else await page.goto(url);
 await page.locator('[data-category="hints"]').click();
 await page.waitForFunction(count=>document.querySelectorAll('[data-part]').length===count,parts.length);
 for(const part of parts){
  const card=page.locator(`[data-part="${part.id}"]`);
  await card.scrollIntoViewIfNeeded();
  await page.evaluate(()=>new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve()))));
  const trigger=card.locator('[data-hint-trigger]');
  await trigger.hover();
  const panel=card.locator('[data-hint-panel]');
  if(!await panel.isVisible())await trigger.click();
  await panel.waitFor({state:'visible'});
  const samples=await panel.evaluate(async element=>{
   const result:{overflowX:string;overflowY:string;horizontalBar:number;verticalBar:number;gap:number}[]=[];
   const measure=()=>{
    const panel=element as HTMLElement,style=getComputedStyle(panel);
    const anchor=panel.closest('.sop-foundation')!.querySelector<HTMLElement>('[data-hint-trigger]')!,a=anchor.getBoundingClientRect(),b=panel.getBoundingClientRect();
    const borderX=parseFloat(style.borderLeftWidth)+parseFloat(style.borderRightWidth);
    const borderY=parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth);
    return {overflowX:style.overflowX,overflowY:style.overflowY,horizontalBar:panel.offsetHeight-panel.clientHeight-borderY,verticalBar:panel.offsetWidth-panel.clientWidth-borderX,gap:panel.dataset.side==='top'?a.top-b.bottom:b.top-a.bottom};
   };
   for(let frame=0;frame<12;frame++){
    await new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));
    result.push(measure());
   }
   await new Promise(resolve=>setTimeout(resolve,420));
   result.push(measure());
   return result;
  });
  for(const sample of samples){
   assert.equal(sample.overflowX,'hidden',`${part.id}: horizontal overflow`);
   assert.equal(sample.overflowY,'hidden',`${part.id}: vertical overflow`);
   assert.ok(sample.horizontalBar<=1.5&&sample.verticalBar<=1.5,`${part.id}: native scrollbar ${JSON.stringify(sample)}`);
   assert.ok(sample.gap>=6,`${part.id}: panel covers trigger by ${Math.abs(sample.gap)}px`);
  }
  if(['folio-popover','botanical-popover','ceramic-popover'].includes(part.id)){
   const color=await trigger.evaluate(element=>getComputedStyle(element).backgroundColor);
   const rgb=color.match(/\d+(?:\.\d+)?/g)?.slice(0,3).map(Number)??[];
   assert.equal(rgb.length,3,`${part.id}: opaque trigger`);
   assert.ok(rgb.every(channel=>channel<110),`${part.id}: light trigger on hover ${color}`);
  }
  await page.keyboard.press('Escape');
  await panel.waitFor({state:'hidden'});
 }
 assert.deepEqual(errors,[]);
 console.log(`PASS ${offline?'offline gallery':'production Vite build'}: ${parts.length} hints, opening and settled frames, trigger spacing, dark triggers and no page errors`);
} finally {await browser.close();}
