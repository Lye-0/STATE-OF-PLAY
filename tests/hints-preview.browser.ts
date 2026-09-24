/** Production-build smoke check for every hint, including its first painted frames. */
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {buildCatalog} from '../scripts/catalog.ts';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const url=process.env.SOP_PREVIEW_URL??'http://127.0.0.1:4173/';
const parts=buildCatalog().parts.filter(part=>part.category==='hints');
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const errors:string[]=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',error=>errors.push(error.message));
 await page.goto(url);
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
   const result:{overflowX:string;overflowY:string;horizontalBar:number;verticalBar:number}[]=[];
   for(let frame=0;frame<12;frame++){
    await new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));
    const panel=element as HTMLElement,style=getComputedStyle(panel);
    const borderX=parseFloat(style.borderLeftWidth)+parseFloat(style.borderRightWidth);
    const borderY=parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth);
    result.push({overflowX:style.overflowX,overflowY:style.overflowY,horizontalBar:panel.offsetHeight-panel.clientHeight-borderY,verticalBar:panel.offsetWidth-panel.clientWidth-borderX});
   }
   return result;
  });
  for(const sample of samples){
   assert.equal(sample.overflowX,'hidden',`${part.id}: horizontal overflow`);
   assert.equal(sample.overflowY,'hidden',`${part.id}: vertical overflow`);
   assert.ok(sample.horizontalBar<=1.5&&sample.verticalBar<=1.5,`${part.id}: native scrollbar ${JSON.stringify(sample)}`);
  }
  await page.keyboard.press('Escape');
  await panel.waitFor({state:'hidden'});
 }
 assert.deepEqual(errors,[]);
 console.log(`PASS production Vite build: ${parts.length} hints, 12 opening frames each, no panel scrollbars or page errors`);
} finally {await browser.close();}
