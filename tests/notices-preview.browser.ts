/** Production-build smoke check: the displayed A notice and delivered notification share their design. */
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {buildCatalog} from '../scripts/catalog.ts';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const url=process.env.SOP_PREVIEW_URL??'http://127.0.0.1:4173/';
const parts=buildCatalog().parts.filter(part=>part.category==='toasts'&&part.designType==='A');
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const errors:string[]=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',error=>errors.push(error.message));
 await page.goto(url);
 await page.locator('[data-category="toasts"]').click();
 await page.waitForFunction(()=>document.querySelectorAll('[data-part]').length===24);
 for(const part of parts){
  const card=page.locator(`[data-part="${part.id}"]`);
  await card.scrollIntoViewIfNeeded();
  const sample=card.locator('.ff-notice-sample');
  assert.equal(await sample.locator(':scope > .rs-notice-art').count(),1,`${part.id}: static artwork`);
  await card.locator('[data-notify]').click();
  const live=card.locator('.ff-toast-stack > .ff-notice');
  await live.waitFor({state:'visible'});
  assert.equal(await live.locator(':scope > .rs-notice-art').count(),1,`${part.id}: delivered artwork`);
  assert.equal(await live.locator(':scope > .rs-scene').count(),0,`${part.id}: shared selection artwork`);
  const appearance=await card.evaluate(element=>{
   const staticNotice=element.querySelector<HTMLElement>('.ff-notice-sample')!,liveNotice=element.querySelector<HTMLElement>('.ff-toast-stack > .ff-notice')!;
   const a=getComputedStyle(staticNotice),b=getComputedStyle(liveNotice);
   return {staticBackground:a.backgroundImage,liveBackground:b.backgroundImage,staticRadius:a.borderRadius,liveRadius:b.borderRadius};
  });
  assert.equal(appearance.staticBackground,appearance.liveBackground,`${part.id}: gallery vs live background`);
  assert.equal(appearance.staticRadius,appearance.liveRadius,`${part.id}: gallery vs live outline`);
  await live.locator('[data-notice-close]').click();
  await live.waitFor({state:'hidden'});
 }
 await page.setViewportSize({width:320,height:900});
 for(const id of ['mercury-notice','folio-notice','ceramic-notice','contour-notice']){
  const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();await card.locator('[data-notify]').click();
  const live=card.locator('.ff-toast-stack > .ff-notice');await live.waitFor({state:'visible'});
  const bounds=await live.boundingBox();assert.ok(bounds&&bounds.x>=-1&&bounds.x+bounds.width<=321,`${id}: mobile bounds`);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),`${id}: horizontal page overflow`);
  await live.locator('[data-notice-close]').click();await live.waitFor({state:'hidden'});
 }
 assert.deepEqual(errors,[]);
 console.log(`PASS production Vite build: ${parts.length} A notices, matching static/live design, mobile bounds and no page errors`);
} finally {await browser.close();}
