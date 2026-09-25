/** Hover return must animate on the actual gallery component, not just on entry. */
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {preview} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {selectCategory} from './gallery-ready.ts';

const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}});
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const page=await browser.newPage({viewport:{width:1440,height:960}});
page.setDefaultTimeout(120000);

try{
  await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit'});
  await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));
  await selectCategory(page,'toggles');
  const lens=page.locator('[data-part="lg-lens-toggle"] .lg-root').first();
  await lens.scrollIntoViewIfNeeded();
  const light=()=>lens.evaluate(el=>parseFloat(el.style.getPropertyValue('--lg-light-x')));
  const rect=await lens.boundingBox();assert.ok(rect);
  await page.mouse.move(0,0);await page.waitForTimeout(350);
  const rest=await light();
  await page.mouse.move(rect.x+rect.width*.75,rect.y+rect.height*.7);
  await page.waitForTimeout(350);const hovered=await light();
  assert.ok(hovered>rest+20,'light should follow the pointer');
  await page.mouse.move(0,0);await page.waitForTimeout(70);
  const returning=await light();
  assert.ok(returning>rest+3&&returning<hovered-3,'light should pass through an intermediate position on leave');
  await page.waitForTimeout(850);assert.ok(Math.abs(await light()-rest)<2,'light should settle at rest');
  await page.mouse.move(rect.x+rect.width*.8,rect.y+rect.height*.65);
  await page.waitForTimeout(100);assert.ok(await light()>rest+3,'re-entry should resume from the current position');
  await page.emulateMedia({reducedMotion:'reduce'});
  assert.ok(Math.abs(await light()-rest)<.1,'reduced motion should reset immediately');
  await page.emulateMedia({reducedMotion:'no-preference'});
  console.log('PASS old glass light follows, returns, re-enters, and respects reduced motion');

  const cases=[
    {category:'buttons',id:'lg-pressure-button',selector:'.lg-button-plane',property:'boxShadow'},
    {category:'buttons',id:'lg-frost-button',selector:'.lg-button-plane',property:'boxShadow'},
    {category:'links',id:'lgc-links-lens',selector:'.sop-link-icon',property:'transform'},
    {category:'radios',id:'lgc-radios-lens',selector:'.ff-choice',property:'transform'},
    {category:'radios',id:'lgc-radios-mist',selector:'.ff-choice',property:'transform'},
    {category:'avatars',id:'lgc-avatars-mist',selector:'.sg-portrait',property:'transform'},
  ] as const;
  for(const test of cases){
    await selectCategory(page,test.category);
    const target=page.locator(`[data-part="${test.id}"] ${test.selector}`).first();await target.scrollIntoViewIfNeeded();
    await page.mouse.move(0,0);await page.waitForTimeout(400);
    const value=()=>target.evaluate((el,property)=>getComputedStyle(el)[property as 'boxShadow'|'transform'],test.property);
    const before=await value();const box=await target.boundingBox();assert.ok(box);
    await page.mouse.move(box.x+box.width*.65,box.y+box.height*.55);
    await page.waitForTimeout(400);const hoveredValue=await value();
    assert.notEqual(hoveredValue,before,`${test.id} should react to hover`);
    await page.mouse.move(0,0);await page.waitForTimeout(40);const returningValue=await value();
    assert.notEqual(returningValue,before,`${test.id} ${test.property} snapped back on leave`);
    assert.notEqual(returningValue,hoveredValue,`${test.id} ${test.property} did not begin returning`);
  }
  console.log('PASS glass button, link, radio, and avatar hover return');

  await selectCategory(page,'ratings');
  for(const id of ['lgc-ratings-lens','lgc-ratings-mist']){
    const unit=page.locator(`[data-part="${id}"] .sg-rating-unit`).last();await unit.scrollIntoViewIfNeeded();
    const star=unit.locator('.sg-rating-star');
    const filter=()=>star.evaluate(el=>getComputedStyle(el).filter);
    await page.mouse.move(0,0);await page.waitForTimeout(450);const before=await filter();
    const box=await unit.boundingBox();assert.ok(box);
    await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.waitForTimeout(450);
    const hoveredFilter=await filter();assert.notEqual(hoveredFilter,before,`${id} should react to hover`);
    await page.mouse.move(0,0);await page.waitForTimeout(40);
    const returningFilter=await filter();assert.notEqual(returningFilter,before,`${id} filter snapped back on leave`);
  }
  console.log('PASS glass rating filter returns smoothly');
} finally {
  await browser.close();
  await new Promise<void>((resolve,reject)=>server.httpServer.close(error=>error?reject(error):resolve()));
}
