/** Verify pointer-reactive block surfaces in the actual gallery. */
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {selectCategory} from './gallery-ready.ts';
import {requireLocalServerUrl} from './vite-url.ts';

const ids=['frosted-glass','iridescent-surface','aurora-veil','contour','copper-plate','ripple-glass','velvet','prismatic-edge'];
const server=await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}});
await server.listen();
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:process.env.SOP_BROWSER_CHANNEL?{channel:process.env.SOP_BROWSER_CHANNEL}:{}),args:['--no-sandbox']});
try{
 const page=await browser.newPage({viewport:{width:1100,height:800}});
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 await page.goto(requireLocalServerUrl(server,'Surface motion development server'),{waitUntil:'domcontentloaded',timeout:180000});
 await page.waitForLoadState('networkidle',{timeout:180000});
 await selectCategory(page,'blocks');
 for(const [id,expected]of [['copper-plate',125],['iridescent-surface',128]]as const){
  const surface=page.locator(`[data-part="${id}"] .sop-surface`);await page.mouse.move(1,1);await surface.scrollIntoViewIfNeeded();
  await page.waitForFunction(part=>!document.querySelector(`[data-part="${part}"] .sop-surface`)?.hasAttribute('data-sop-paused'),id);
  const angle=()=>surface.evaluate(el=>Number(/(?:^|,\s*)linear-gradient\(([-\d.]+)deg/.exec(getComputedStyle(el).backgroundImage)?.[1]));
  assert.equal(await angle(),expected,id+' authored resting angle');
  const box=await surface.boundingBox();assert.ok(box);await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.waitForTimeout(90);
  assert.ok(Math.abs(await angle()-expected)<.15,id+' first central hover must not replace the resting gradient angle');
  await page.mouse.move(1,1);await page.waitForTimeout(100);
 }
 for(const [id,selector,read]of [
  ['inlaid-surface','.sop-surface-content','position'],
  ['plotted-surface','.sop-surface','pseudo'],
 ]as const){
  const surface=page.locator(`[data-part="${id}"] .sop-surface`);await page.mouse.move(1,1);await surface.scrollIntoViewIfNeeded();
  const reading=()=>read==='pseudo'?surface.evaluate(el=>Number.parseFloat(getComputedStyle(el,'::before').width)):surface.locator(selector).evaluate(el=>Number.parseFloat(getComputedStyle(el).backgroundPositionX));
  const resting=await reading(),box=await surface.boundingBox();assert.ok(box);await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.waitForTimeout(800);const held=await reading();
  assert.ok(held>resting+1,id+' decoration moves on hover');await page.mouse.move(box.x-25,box.y-25);await page.waitForTimeout(90);const intermediate=await reading();
  assert.ok(intermediate>resting+.1&&intermediate<held-.1,id+' decoration returns gradually: '+[resting,held,intermediate]);await page.waitForTimeout(800);assert.ok(Math.abs(await reading()-resting)<.1,id+' returns to authored position');
 }
 for(const id of ids){
  const card=page.locator(`[data-part="${id}"]`),surface=card.locator('.sop-surface');
  await card.scrollIntoViewIfNeeded();await surface.waitFor({state:'visible'});
  await page.waitForFunction(part=>!document.querySelector(`[data-part="${part}"] .sop-surface`)?.hasAttribute('data-sop-paused'),id);
  const rect=await surface.boundingBox();assert.ok(rect,id);
  await page.mouse.move(rect.x+rect.width*.82,rect.y+rect.height*.25);
  await page.waitForTimeout(550);
  const hovered=Number.parseFloat(await surface.evaluate(element=>element.style.getPropertyValue('--sop-x')));
  await page.mouse.move(rect.x-50,rect.y-50);
  await page.waitForFunction(({part,start})=>{
   const element=document.querySelector<HTMLElement>(`[data-part="${part}"] .sop-surface`);
   const value=Number.parseFloat(element?.style.getPropertyValue('--sop-x')??'');
   return value>55&&value<start-.25;
  },{part:id,start:hovered},{timeout:2500});
  const returning=Number.parseFloat(await surface.evaluate(element=>element.style.getPropertyValue('--sop-x')));
  await page.waitForTimeout(1500);
  const resting=Number.parseFloat(await surface.evaluate(element=>element.style.getPropertyValue('--sop-x')));
  assert.ok(hovered>65,`${id}: pointer light follows hover`);
  assert.ok(returning>52&&returning<hovered,`${id}: pointer light eases out instead of snapping (${hovered} -> ${returning})`);
  assert.ok(Math.abs(resting-50)<1,`${id}: pointer light settles at rest`);
 }
 const frost=page.locator('[data-part="frosted-glass"]');
 assert.equal(await frost.locator('.stage-glow').evaluate(element=>getComputedStyle(element).display),'none');
 assert.equal(await frost.locator('.object-stage').evaluate(element=>getComputedStyle(element,'::before').content),'none');
 assert.equal(await frost.locator('.sop-surface').evaluate(element=>getComputedStyle(element).overflowX),'hidden');
 await page.emulateMedia({reducedMotion:'reduce'});
 const reduced=frost.locator('.sop-surface');await frost.scrollIntoViewIfNeeded();
 const rect=await reduced.boundingBox();assert.ok(rect);
 await page.mouse.move(rect.x+rect.width*.82,rect.y+rect.height*.25);
 await page.waitForTimeout(150);
 assert.equal(await reduced.evaluate(element=>element.style.getPropertyValue('--sop-x')),'50%');
 await page.emulateMedia({reducedMotion:'no-preference'});await selectCategory(page,'links');
 for(const id of ['dipped-label-link','scored-edge-link']){
  const link=page.locator(`[data-part="${id}"] .sop-link`);await page.mouse.move(1,1);await link.scrollIntoViewIfNeeded();
  const read=()=>link.evaluate((element,id)=>{const css=getComputedStyle(element);return id==='dipped-label-link'?Number.parseFloat(css.backgroundPositionX):Number(css.borderBottomColor.match(/[\d.]+/g)?.[0]);},id);
  const rest=await read(),box=await link.boundingBox();assert.ok(box);await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.waitForTimeout(700);const held=await read();assert.ok(held>rest+1,id+' hover changes decoration');
  await page.mouse.move(box.x-20,box.y-20);await page.waitForTimeout(90);const moving=await read();assert.ok(moving>rest+.1&&moving<held-.1,id+' returns gradually');await page.waitForTimeout(700);assert.ok(Math.abs(await read()-rest)<.1,id+' settles');
 }
 assert.deepEqual(errors,[]);
 console.log('Surface motion browser checks: authored entry angles, CSS pattern entry/return, eight gradual pointer returns, two gradual link returns, contained frost light, reduced motion.');
}finally{await browser.close();await server.close();}
