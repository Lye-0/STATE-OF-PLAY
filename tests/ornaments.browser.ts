import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {ROOT,buildCatalog} from '../scripts/catalog.ts';
import {offlineFiles} from './offline-fixture.ts';
import {galleryReady,selectCategory} from './gallery-ready.ts';

const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const data=buildCatalog(),files=offlineFiles(data),output=path.join(ROOT,'.test-output/ornaments');
fs.mkdirSync(output,{recursive:true});
const errors:string[]=[],passed:string[]=[];
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
async function check(name:string,run:()=>Promise<void>){await run();passed.push(name);console.log('PASS '+name);}
try{
 const page=await browser.newPage({viewport:{width:1440,height:1040}});
 page.on('pageerror',error=>errors.push(error.message));
 await page.setContent(files.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));
 await page.addStyleTag({content:files.get('/test-styles.css')!});
 for(const vendor of ['prism','jszip'])await page.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor/'+vendor+'.js'),'utf8')});
 await page.addScriptTag({content:files.get('/test-app.js')!});
 await galleryReady(page);
 await check('ornament category shows 20 original parts with 12 A and 8 B designs',async()=>{
  await selectCategory(page,'ornaments');await galleryReady(page,true);
  assert.equal(await page.locator('#category-jump [data-value="ornaments"]').count(),1);
  assert.equal(await page.locator('#part-grid [data-part]').count(),20);
  assert.equal(await page.locator('#library-total').innerText(),'807');
  assert.equal(await page.locator('#library-collections').innerText(),'37');
  for(const [filter,count]of [['A',12],['B',8],['all',20]] as const){await page.locator(`[data-design-filter="${filter}"]`).click();await galleryReady(page,true);assert.equal(await page.locator('#part-grid [data-part]').count(),count);}
 });
 await check('all ornaments render as decorative objects and support paused/reduced motion',async()=>{
  for(const part of data.parts.filter(part=>part.category==='ornaments')){
   const card=page.locator(`[data-part="${part.id}"]`),root=card.locator('.sop-ornament');
   assert.equal(await root.count(),1,part.id);
   assert.equal(await root.getAttribute('data-paused'),'false',part.id);
   assert.equal(await root.locator('.or-stage').getAttribute('aria-hidden'),'true',part.id);
  }
  const burst=page.locator('[data-part="asterism-burst"] .sop-ornament');
  await burst.evaluate(element=>element.setAttribute('data-paused','true'));
  assert.equal(await burst.locator('.ob-burst').evaluate(element=>getComputedStyle(element).animationPlayState),'paused');
  await burst.evaluate(element=>element.setAttribute('data-paused','false'));
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const part of data.parts.filter(part=>part.category==='ornaments')){
   const active=await page.locator(`[data-part="${part.id}"] .sop-ornament`).evaluate(element=>[...element.querySelectorAll('.or-stage, .or-stage *')].filter(node=>getComputedStyle(node).animationName!=='none').length);
   assert.equal(active,0,part.id+' reduced motion');
  }
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await check('detail inspector presents ornament category, source and AI prompt for A and B designs',async()=>{
  for(const id of ['asterism-burst','quiet-divider']){
   await page.locator(`[data-open="${id}"]`).click();await galleryReady(page,true);
   const details=page.locator('#part-details');
   assert.ok(await details.isVisible());
   assert.ok(await details.locator('.ornament-preview .sop-ornament').isVisible());
   assert.equal(await details.locator('#detail-state').innerText(),'AMBIENT');
   assert.match(await details.locator('.detail-breadcrumb').innerText(),/ORNAMENTS/);
   assert.match(await details.locator('.surface-note').innerText(),/意味を持たない装飾/);
   assert.match(await details.locator('.part-facts').innerText(),/Ornament \/ 装飾/);
   await details.locator('[data-detail-tab="prompt"]').click();
   assert.match(await details.locator('#prompt-text').inputValue(),/data-paused/);
   if(id==='asterism-burst')await details.locator('.ornament-preview').screenshot({path:path.join(output,'asterism-detail.png')});
   await details.locator('.close-detail').click();
  }
 });
 await check('narrow ornament cards keep the page within the viewport',async()=>{
  await page.setViewportSize({width:320,height:900});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));
  await page.locator('[data-part="asterism-burst"]').screenshot({path:path.join(output,'asterism-mobile.png')});
 });
 assert.deepEqual(errors,[]);
 console.log(`ORNAMENTS gallery ${passed.length} checks passed`);
}finally{fs.writeFileSync(path.join(output,'results.json'),JSON.stringify({passed,errors},null,2)+'\n');await browser.close();}
