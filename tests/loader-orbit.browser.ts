/** Real Vite and browser check for a seamless square orbit and truthful exports. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT,buildCatalog,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
import {readBrowserIndex} from '../scripts/vite-catalog.ts';

const index=readBrowserIndex().index;
assert.equal(index.length,817);
assert.equal(index.filter(p=>p.category==='loaders').length,39);
assert.ok(!index.some(p=>p.id==='paper-loader'));
const {parts}=buildCatalog(ROOT,['nixie-loader','ceramic-loader']);
const orbitRule='sop-ff-offset-square-spin';
for(const part of parts)for(const format of FORMATS)for(const layout of ['portable','original'] as const){
 const delivery=getDelivery(part,format,layout);
 const source=delivery.files.find(f=>f.sourceName===`src/parts/loaders/${part.id}/styles.css`);
 const shared=delivery.files.find(f=>f.sourceName==='src/shared/foundation/base.css');
 assert.ok(source,`${part.id}/${format}/${layout}: component CSS exists`);
 assert.ok(shared,`${part.id}/${format}/${layout}: shared CSS exists`);
 assert.ok(source.code.includes(orbitRule),`${part.id}/${format}/${layout}: component CSS`);
 assert.ok(shared.code.includes('@keyframes '+orbitRule),`${part.id}/${format}/${layout}: shared CSS`);
 for(const includeCode of [true,false]){
  const prompt=buildPrompt(part,format,layout,includeCode);
  assert.ok(prompt.includes('45度から405度'),`${part.id}/${format}/${layout}: prompt`);
  const packaged=packageContents(part,format,layout,includeCode);
  assert.equal(packaged.find(f=>f.name==='PROMPT.md')?.code,prompt);
  assert.equal(packaged.find(f=>f.name===source.name)?.code,source.code);
  assert.equal(packaged.find(f=>f.name===shared.name)?.code,shared.code);
 }
}
console.log('PASS 2 loaders × 4 formats × 2 layouts: source, shared CSS, full/spec prompt and ZIP agree; Paper removed');
const server=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
try {
 const page=await browser.newPage({viewport:{width:1440,height:960}}),errors:string[]=[];
 page.on('pageerror',error=>errors.push(error.message));await page.goto(server.resolvedUrls!.local[0]);
 await page.locator('[data-category="loaders"]').click();
 await page.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false');
 assert.equal(await page.locator('[data-part]').count(),39);
 assert.equal(await page.locator('[data-part="paper-loader"]').count(),0);
 assert.equal(await page.locator('#library-total').innerText(),'817');
 for(const id of ['nixie-loader','ceramic-loader']){
  const result=await page.locator(`[data-part="${id}"] .ff-orbit.o2`).evaluate(el=>{
   const animation=el.getAnimations().find(a=>(a as CSSAnimation).animationName==='sop-ff-offset-square-spin');
   if(!animation)throw Error('Missing dedicated square animation');
   animation.pause();
   const angle=(time:number)=>{animation.currentTime=time;const m=new DOMMatrixReadOnly(getComputedStyle(el).transform);return Math.atan2(m.b,m.a)*180/Math.PI;};
   const before=angle(2299),after=angle(2301);animation.play();
   const delta=((after-before+540)%360)-180;
   return {before,after,delta};
  });
  assert.ok(Math.abs(result.delta)<2,`${id}: orbit jumps ${result.delta} degrees at iteration boundary`);
  await page.locator(`[data-open="${id}"]`).click();
  await page.locator(`#part-details [data-preview-part="${id}"]`).waitFor();
  const details=page.locator('#part-details');
  await details.locator('[data-file*="styles.css"]').first().click();
  await details.locator('#tab-prompt').click();
  assert.ok((await details.locator('#prompt-text').inputValue()).includes('45度から405度'));
  await details.locator('[data-prompt-mode="spec"]').click();
  assert.ok((await details.locator('#prompt-text').inputValue()).includes('45度から405度'));
  await details.locator('.close-detail').click();
  console.log(`PASS ${id}: orbit boundary delta ${result.delta.toFixed(2)}°; inspector and prompts updated`);
 }
 assert.deepEqual(errors,[]);
 await page.close();
}finally{await browser.close();await server.close();}
