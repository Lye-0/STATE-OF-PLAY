/** WAYFINDER source, prompts and gallery rendering over the repository's real Vite server. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT,buildCatalog,FORMATS} from './historical-catalog.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
import {galleryReady,selectCategory} from './gallery-ready.ts';

const data=buildCatalog();
const targets=data.parts.filter(part=>part.tags.includes('WAYFINDER'));
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});
await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const out=path.join(ROOT,'.test-output/wayfinder-gallery');fs.mkdirSync(out,{recursive:true});
try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}});
 const errors:string[]=[];p.on('pageerror',error=>errors.push(error.message));
 await p.goto(server.resolvedUrls!.local[0]);await galleryReady(p);
 assert.equal(data.parts.length,825);assert.equal(targets.length,23);
 for(const[category,count]of [['breadcrumbs',10],['numbers',13]]as const){
  await selectCategory(p,category);
  await p.locator('[data-design-filter="A"]').click();await galleryReady(p);
  assert.equal(await p.locator('[data-part]').count(),count+1);
  assert.ok(await p.locator('[data-part]').first().locator('.sop-wayfinder').count());
  await p.locator('[data-design-filter="all"]').click();await galleryReady(p);
 }
 console.log('PASS both categories render 23 WAYFINDER A parts in the lazy gallery');

 let bundles=0;
 for(const part of targets)for(const layout of ['portable','original']as const)for(const format of FORMATS){
  const delivery=getDelivery(part,format,layout),files=packageContents(part,format,layout);
  const kind=part.category==='breadcrumbs'?'breadcrumbs':'number';
  assert.ok(delivery.files.some(file=>file.name===delivery.entry));
  assert.ok(files.some(file=>file.name.includes(`/wayfinding/${kind}.ts`)||file.name.includes(`/wayfinding/${kind}.js`)));
  assert.equal(files.find(file=>file.name==='PROMPT.md')?.code,buildPrompt(part,format,layout));
  assert.ok(files.some(file=>file.name==='INTEGRATION.json'));
  assert.ok(delivery.runtimeFiles.every(file=>!file.name.includes('src/app/')));
  bundles++;
 }
 assert.equal(bundles,184);
 console.log('PASS 23 parts × 8 formats/layouts: runtime, usage and AI prompts match the export');

 let displayed=0;
 for(const id of ['blueprint-trail','folio-trail','aurora-stepper','tide-stepper']){
  const part=targets.find(item=>item.id===id)!;
  await selectCategory(p,part.category);
  await p.locator(`[data-open="${id}"]`).click();await galleryReady(p);
  const detail=p.locator('#part-details');
  for(const layout of ['portable','original']as const){
   await detail.locator('#export-layout').selectOption(layout);
   for(const format of FORMATS){
    await detail.locator(`[data-format="${format}"]`).evaluate(element=>(element as HTMLButtonElement).click());
    for(const file of getDelivery(part,format,layout).files){
     await detail.locator(`[data-file="${file.name}"]`).evaluate(element=>(element as HTMLButtonElement).click());
     assert.deepEqual(await detail.locator('.editor .line-code').allTextContents(),file.code.split('\n').map(line=>line||' '),file.name);
     displayed++;
    }
    await detail.locator('[data-detail-tab="prompt"]').evaluate(element=>(element as HTMLButtonElement).click());
    assert.equal(await detail.locator('#prompt-text').inputValue(),buildPrompt(part,format,layout));
    await detail.locator('[data-detail-tab="code"]').evaluate(element=>(element as HTMLButtonElement).click());
   }
  }
  if(id==='blueprint-trail'||id==='aurora-stepper')await p.screenshot({path:path.join(out,id+'.png')});
  await detail.locator('.close-detail').evaluate(element=>(element as HTMLButtonElement).click());
 }
 console.log(`PASS inspector displays ${displayed} real source files and matching prompts across four styles`);
 assert.deepEqual(errors,[]);
 await p.close();
}finally{await browser.close();await server.close();}
