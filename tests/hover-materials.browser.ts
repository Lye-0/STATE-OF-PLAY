/** Material state regressions found by the independent EXPANSION-50 review. */
import assert from 'node:assert/strict';
import {chromium, type Locator} from 'playwright';
import {createGalleryTestServer} from './gallery-server.ts';
import {galleryReady} from './gallery-ready.ts';
import {paintedTextContrast} from './painted-text-contrast.ts';
const server=await createGalleryTestServer('hover-materials');await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1000,height:900},reducedMotion:'reduce'});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
async function category(name:string){await page.goto(server.resolvedUrls!.local[0]+'?category='+name);await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));await galleryReady(page)}
async function contrast(target:Locator){const values=await paintedTextContrast(page,target);assert.ok(values.length);for(const value of values)assert.ok(value.ratio>=4.5,`${value.text}: ${value.ratio.toFixed(2)}:1`)}
try{
 await category('dropdowns');const select=page.locator('[data-part="outline-row-select"]');await select.locator('.sop-select-trigger').click();const option=select.locator('.sop-select-option').last();await option.hover();await contrast(option.locator('.sop-select-option-copy'));await page.mouse.move(0,0);await contrast(option.locator('.sop-select-option-copy'));await page.keyboard.press('Escape');console.log('PASS dark select active/hover text remains readable after pointer exit');
 await category('segments');const segments=page.locator('[data-part="ivory-notch-segments"]');const item=segments.locator('.sop-choice-item').first();await item.hover();await contrast(item.locator('.sop-choice-label'));await item.click();await contrast(item.locator('.sop-choice-label'));await page.setViewportSize({width:320,height:900});await segments.scrollIntoViewIfNeeded();const widths=await segments.locator('.sop-choice-item').evaluateAll(es=>es.map(e=>e.getBoundingClientRect().width));assert.equal(widths.length,3);assert.ok(Math.max(...widths)-Math.min(...widths)<1,'Three equally weighted narrow choices');console.log('PASS notch segments retain readable states and equal narrow option widths');
 await page.setViewportSize({width:1000,height:900});await category('breadcrumbs');const crumbs=page.locator('[data-part="station-label-trail"]');await crumbs.locator('.ff-crumb-more').click();const link=crumbs.locator('.ff-crumb-menu a').last();await link.hover();await contrast(link);console.log('PASS opened breadcrumb hover remains readable');
 await category('blocks');const vellum=page.locator('.sop-vellum-accordion-case').first();await vellum.hover();assert.equal(await vellum.evaluate(e=>getComputedStyle(e,'::after').transform),'none','Paper borders remain aligned');const diecut=page.locator('.sop-offset-diecut').first();await diecut.hover();assert.equal(await diecut.evaluate(e=>getComputedStyle(e).boxShadow),'none','No rectangular shadow behind a cut silhouette');console.log('PASS paper materials preserve their authored contours on hover');
 await category('links');await page.emulateMedia({reducedMotion:'no-preference'});
 for(const id of ['editorial-inline-link','quiet-resource-link','clear-destination-link','compact-route-link','reading-next-link']){
  const root=page.locator('.sop-'+id).first(),icon=root.locator('.sop-link-icon');await root.scrollIntoViewIfNeeded();await page.mouse.move(0,0);const before=await root.boundingBox();await root.hover();const style=await icon.evaluate(e=>{const s=getComputedStyle(e);return{properties:s.transitionProperty.split(',').map(x=>x.trim()),duration:s.transitionDuration}});assert.ok(style.properties.includes('translate')||style.properties.includes('all'),id+' interpolates its actual movement property');assert.notEqual(style.duration,'0s');await page.mouse.move(0,0);await root.hover();const after=await root.boundingBox();assert.ok(before&&after);assert.ok(Math.abs(before.width-after.width)<.5&&Math.abs(before.height-after.height)<.5,id+' stable interactive bounds');
 }
 console.log('PASS five inline link arrows interpolate translate in both directions with stable bounds');assert.deepEqual(errors,[]);
}finally{await browser.close();await server.close()}
