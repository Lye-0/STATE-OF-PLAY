/** Real scroll/selection geometry, including transient frames and top-layer ownership. */
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {resonanceFixture} from './resonance-fixture.ts';
import {continuumFixture} from './continuum-fixture.ts';
import {ROOT} from '../scripts/catalog.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const offline=process.env.SOP_TEST_MODE==='offline';let close:(()=>Promise<void>)|undefined;
try{
 const feedback=resonanceFixture(),calendar=continuumFixture(),errors:string[]=[];
 let base='';if(!offline){const vite=await import('vite'),server=await vite.createServer({root:ROOT,configFile:false,server:{host:'127.0.0.1',port:0,hmr:false,watch:null},optimizeDeps:{noDiscovery:true}});await server.listen();const {requireLocalServerUrl}=await import('./vite-url.ts');base=requireLocalServerUrl(server,'feedback geometry');close=()=>server.close();}
 const page=await browser.newPage({viewport:{width:980,height:800}});page.on('pageerror',error=>errors.push(error.message));
 async function load(f:ReturnType<typeof resonanceFixture>|ReturnType<typeof continuumFixture>,name:string){
  if(offline){await page.setContent(f.shell.replace(/<link[^>]*>/,''));await page.addStyleTag({content:f.styles});await page.addScriptTag({content:f.bundle()});}
  else await page.goto(new URL(`.test-output/${name}/test.html`,base).href);
  await page.waitForFunction(()=>typeof(window as any).mount==='function');
 }
 await load(feedback,'resonance');
 for(const width of [980,390]){
  await page.setViewportSize({width,height:800});
  for(const part of feedback.records.filter(r=>r.category==='toasts')){
   await page.evaluate(id=>(window as any).mount([id]),part.id);
   const frames=await page.evaluate(async()=>{
    (window as any).api.notify({title:'変更を受け取りました',description:'設定を確認できます。',actionLabel:'閉じる',duration:0});
    const stack=document.querySelector<HTMLElement>('[data-toast-stack]')!,samples:{x:number;y:number;visible:boolean}[]=[];
    const sample=()=>samples.push({x:stack.scrollWidth-stack.clientWidth,y:stack.scrollHeight-stack.clientHeight,visible:!stack.hidden});
    for(let frame=0;frame<28;frame++){await new Promise(requestAnimationFrame);sample();}
    stack.querySelector<HTMLElement>('[data-notice-action]')!.click();
    for(let frame=0;frame<14;frame++){await new Promise(requestAnimationFrame);sample();}
    return samples;
   });
   for(const frame of frames)if(frame.visible){assert.ok(frame.x<=1,`${part.id}/${width}: transient horizontal extent ${frame.x}`);assert.ok(frame.y<=1,`${part.id}/${width}: short notice unexpectedly scrolls ${frame.y}`);}
  }
 }
 console.log('PASS all notification variants: opening/action frames have no accidental horizontal or vertical scrollbars at980/390');
 for(const part of feedback.records.filter(r=>r.category==='toasts')){
  const result=await page.evaluate(id=>{(window as any).mount([id],{maxNotices:8});for(let i=0;i<8;i++)(window as any).api.notify({title:`通知${i+1}`,description:'長い通知の本文です。'.repeat(35),duration:0});const stack=document.querySelector<HTMLElement>('[data-toast-stack]')!;stack.scrollTop=stack.scrollHeight;return {scrollable:stack.scrollHeight>stack.clientHeight,end:Math.abs(stack.scrollTop+stack.clientHeight-stack.scrollHeight)<2};},part.id);
  assert.ok(result.scrollable&&result.end,part.id+': real long-stack scrolling must remain usable');
 }
 console.log('PASS long notification stacks retain scrolling to the last entry');
 // A real pointer focuses an action before activation. Watch page position throughout,
 // including when the opener is only partially visible near the viewport edge.
 for(const part of feedback.records.filter(r=>r.category==='hints')){
  await page.evaluate(id=>{(window as any).mount([id],{interactive:true,label:'補足情報',content:'設定を確認できます。'});document.body.style.minHeight='2200px';scrollTo(0,0);},part.id);
  const trigger=page.locator('[data-hint-trigger]');await trigger.click();
  const panel=page.locator('[data-hint-panel]');await panel.waitFor({state:'visible'});
  const action=panel.locator('[data-hint-action]');
  if(await action.count()){
   // Freeze the relative scroll position after opening: action focus must not scroll it.
   const before=await page.evaluate(()=>scrollY);await action.click();
   assert.equal(await page.evaluate(()=>scrollY),before,part.id+': action changed page position');
   assert.equal(await trigger.getAttribute('aria-expanded'),'false',part.id+': action retained expanded ARIA');
  }
  await page.evaluate(()=>{(window as any).api.hide();scrollTo(0,1800);(window as any).api.show();});
  assert.ok(await panel.isHidden(),part.id+': offscreen owner reopened its panel');
  assert.equal(await trigger.getAttribute('aria-expanded'),'false',part.id+': offscreen API opening lied about ARIA');
 }
 console.log('PASS all interactive hints: native pointer actions preserve page position; offscreen API opening retains collapsed ARIA');
 await load(calendar,'continuum');await page.setViewportSize({width:740,height:850});
 for(const part of calendar.records.filter(r=>r.category==='datepickers')){
  await page.evaluate(id=>{(window as any).mount([id],{value:'2026-09-23'});document.body.style.minHeight='2600px';scrollTo(0,0);},part.id);
  await page.locator('[data-calendar-toggle]').click();const panel=page.locator('[data-calendar]');await panel.waitFor({state:'visible'});
  await panel.evaluate(el=>{el.scrollTop=80;el.dispatchEvent(new Event('scroll'));});assert.ok(await panel.isVisible(),part.id+': internal panel scroll closed its owner');
  await page.evaluate(()=>scrollTo(0,1700));await panel.waitFor({state:'hidden'});
  assert.equal(await page.locator('[data-calendar-toggle]').getAttribute('aria-expanded'),'false',part.id);
  assert.equal(await page.evaluate(()=>scrollY),1700,part.id+': dismissal restored offscreen focus and jumped');
  await page.evaluate(()=>{scrollTo(0,0);const host=document.querySelector<HTMLElement>('#host')!;host.style.height='160px';host.style.overflow='auto';const spacer=document.createElement('div');spacer.style.height='1600px';host.append(spacer);});
  await page.locator('[data-calendar-toggle]').click();await panel.waitFor({state:'visible'});await page.locator('#host').evaluate(el=>{el.scrollTop=1200;});await panel.waitFor({state:'hidden'});
 }
 console.log('PASS every calendar: page/nested owner scrolling dismisses; internal panel scrolling and scroll position remain intact');
 // Top-layer panels escape the clipping ancestors of their DOM owner.
 await page.evaluate(()=>{(window as any).mount(['aurora-calendar'],{value:'2026-09-23'});scrollTo(0,0);const owner=document.createElement('div');owner.style.cssText='position:absolute;top:2000px;width:100px;height:100px;overflow:hidden';const dialog=document.createElement('dialog');dialog.style.cssText='width:520px;max-height:80vh';dialog.append(document.querySelector('#host')!);owner.append(dialog);document.body.append(owner);dialog.showModal();});
 await page.locator('[data-calendar-toggle]').click();await page.locator('[data-calendar]').waitFor({state:'visible'});
 await page.evaluate(()=>document.querySelector('dialog')!.close());
 assert.deepEqual(errors,[]);console.log('PASS a visible calendar inside a modal escapes offscreen ancestor clipping');
}finally{await browser.close();await close?.();}
