import {createServer} from 'vite';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const root='/workspace/STATE-OF-PLAY',batch=process.argv[2],round=process.argv[3];
const out=`${root}/docs/design-renewal/batches/${batch}/captures/pages-self-${round}`;
await fs.mkdir(out,{recursive:true});
const server=await createServer({root,configFile:false,optimizeDeps:{entries:[],noDiscovery:true},server:{host:'127.0.0.1',port:0,hmr:false,watch:null}});
await server.listen();
const browser=await chromium.launch({executablePath:'/usr/bin/chromium'}),page=await browser.newPage({viewport:{width:1000,height:844}}),errors=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
try {
 await page.goto(server.resolvedUrls.local[0]+`docs/design-renewal/batches/${batch}/snapshot/round-${round}/index.html`);
 await page.waitForFunction(()=>window.ready);
 for(const section of await page.locator('section').all()){
  const id=await section.getAttribute('data-part'),r=section.locator('[data-foundation=pagination]');
  if(!await r.count())continue;
  const call=(name,arg)=>page.evaluate(({id,name,arg})=>window.apis[id][name](arg),{id,name,arg});
  const nav=r.locator('[data-pages]'),current=r.locator('[aria-current=page]');
  await r.screenshot({path:out+'/'+id+'-initial.png'});
  if(round==='0'){console.log('BASELINE '+id);continue;}
  await call('updateFoundation',{totalPages:12,paginationLayout:'anchored'});
  await call('setData',4);
  assert.equal(await current.getAttribute('aria-label'),'ページ 4');
  await nav.locator('[aria-label="次のページ"]').focus();
  await page.keyboard.press('Enter');
  assert.equal(await call('getData'),5);
  assert.equal(await nav.locator('[aria-label="次のページ"]').evaluate(e=>e===document.activeElement),true);
  await page.keyboard.press('Space');assert.equal(await call('getData'),6);
  await nav.locator('[aria-label="ページ 7"]').click();assert.equal(await call('getData'),7);
  for(const n of [1,12]){
   await call('setData',n);
   assert.equal(await nav.locator(`[aria-label="${n===1?'前':'次'}のページ"]`).isDisabled(),true);
   assert.equal(await current.getAttribute('data-page'),String(n));
   await r.screenshot({path:out+'/'+id+'-'+n+'.png'});
  }
  await call('setData',100);assert.equal(await call('getData'),12);
  await call('setData',-3);assert.equal(await call('getData'),1);
  await call('updateFoundation',{totalPages:1});assert.equal(await nav.locator('[data-page]').count(),3);
  assert.equal(await nav.locator('button:disabled').count(),2);
  await call('updateFoundation',{totalPages:12456});await call('setData',6234);
  assert.equal(await current.textContent(),'6234');
  assert.equal(await r.locator('[data-page-info] strong').textContent(),'6234');
  for(const n of [6234,12456])for(const dir of ['ltr','rtl'])for(const width of [320,390,768]){
   await call('setData',n);await r.evaluate((e,dir)=>e.dir=dir,dir);
   await page.setViewportSize({width,height:844});
   await page.evaluate(()=>new Promise(res=>requestAnimationFrame(()=>requestAnimationFrame(res))));
   assert.ok(await r.evaluate(e=>{const a=e.getBoundingClientRect();return e.scrollWidth<=e.clientWidth+1&&a.left>=0&&a.right<=innerWidth+1}),id+' fits '+width);
   assert.ok(await current.evaluate(e=>{const a=e.getBoundingClientRect();return a.width>=27&&a.height>=32}),id+' actual page hit '+width);
   const glyphs=await nav.locator('.ff-page-window :is(button,a)').evaluateAll(es=>es.map(e=>{
    const range=document.createRange();range.selectNodeContents(e);const t=range.getBoundingClientRect(),a=e.getBoundingClientRect(),c=getComputedStyle(e);let left=a.left+parseFloat(c.borderLeftWidth)+parseFloat(c.paddingLeft),right=a.right-parseFloat(c.borderRightWidth)-parseFloat(c.paddingRight);
    if(e.closest('.sop-track-stop-pages')&&e.matches('[aria-current=page]')){const p=getComputedStyle(e,'::before');left=a.left+parseFloat(p.left)+parseFloat(p.borderLeftWidth);right=a.right-parseFloat(p.right)-parseFloat(p.borderRightWidth);}
    return {label:e.textContent,lines:range.getClientRects().length,inside:t.left>=left-.5&&t.right<=right+.5,clearance:Math.min(t.left-left,right-t.right)};
   }));
   assert.ok(glyphs.every(g=>g.lines===1&&g.inside),id+' all numbers single line inside reading faces '+width+' '+dir+' '+n+' '+JSON.stringify(glyphs));
   await r.screenshot({path:out+'/'+id+'-large-'+n+'-'+dir+'-'+width+'.png'});
   if(n===6234&&dir==='ltr')await r.screenshot({path:out+'/'+id+'-narrow-'+width+'.png'});
  }
  await call('updateFoundation',{label:'用途に合わせてページを選ぶ長い日本語LongUnbrokenLatinLabelWithoutSpaces',description:'任意の補足SupplementalInformationWithoutWhitespace',totalPages:12});await call('setData',4);
  await page.setViewportSize({width:320,height:844});
  assert.ok(await r.evaluate(e=>e.scrollWidth<=e.clientWidth+1),id+' long label fits');
  await r.screenshot({path:out+'/'+id+'-long-320.png'});
  await r.evaluate(e=>e.dir='rtl');await r.screenshot({path:out+'/'+id+'-rtl.png'});
  const geometry=()=>current.evaluate(e=>{const a=e.getBoundingClientRect(),b=e.closest('[data-foundation]').getBoundingClientRect(),range=document.createRange();range.selectNodeContents(e);const g=range.getBoundingClientRect();return {x:a.x-b.x,y:a.y-b.y,w:a.width,h:a.height,gx:g.x-a.x,gy:g.y-a.y,gw:g.width,gh:g.height,font:getComputedStyle(e).font}});
  const before=await geometry();await current.hover();await page.mouse.move(1,1);assert.deepEqual(await geometry(),before);await current.hover();assert.deepEqual(await geometry(),before);
  await call('updateFoundation',{readOnly:true});await nav.locator('[aria-label="次のページ"]').click();assert.equal(await call('getData'),4);
  await call('updateFoundation',{readOnly:false,disabled:true});assert.equal(await nav.locator('button:not(:disabled)').count(),0);
  await call('setDisabled',false);
  await page.evaluate(id=>{window.events=[];window.apis[id].updateFoundation({hrefForPage:n=>'#page-'+n,onDataChange:n=>window.events.push(n)})},id);
  const link=nav.locator('[aria-label="ページ 5"]');assert.equal(await link.getAttribute('href'),'#page-5');
  await link.click({modifiers:['Control']});assert.deepEqual(await page.evaluate(()=>window.events),[]);
  await link.click();assert.deepEqual(await page.evaluate(()=>window.events),[5]);assert.equal(await call('getData'),4);
  await call('updateFoundation',{readOnly:true});
  const url=await page.url(),eventCount=await page.evaluate(()=>window.events.length);
  assert.equal(await nav.locator('a[href]').count(),0);assert.equal(await link.getAttribute('aria-disabled'),'true');
  await link.click({force:true});await link.dispatchEvent('click',{ctrlKey:true});
  assert.equal(page.url(),url);assert.equal(await page.evaluate(()=>window.events.length),eventCount);assert.equal(await call('getData'),4);
  await call('updateFoundation',{readOnly:false});
  await call('updateFoundation',{disabled:true});assert.equal(await nav.locator('a[href]').count(),0);
  await call('updateFoundation',{disabled:false,hrefForPage:null});
  await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});
  assert.notEqual(await current.evaluate(e=>getComputedStyle(e).color),await current.evaluate(e=>getComputedStyle(e).backgroundColor));
  assert.equal(await r.evaluate(e=>e.getAnimations({subtree:true}).length),0);
  await r.screenshot({path:out+'/'+id+'-forced.png'});await page.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
  await call('destroy');await nav.locator('[aria-label="次のページ"]').click();assert.equal(await call('getData'),4);
  checks.push({id,keyboard:true,focus:true,ariaCurrent:true,boundaries:true,clamp:true,dynamicTotals:true,largeNumber:true,narrow:true,long:true,rtl:true,fixedGlyph:true,readOnly:true,disabled:true,nativeAnchors:true,modifiedClick:true,forced:true,reduced:true,cleanup:true});console.log('PASS '+id);
 }
 assert.deepEqual(errors,[]);await fs.writeFile(out+'/checks.json',JSON.stringify({checks,errors},null,2));
}finally{await browser.close();await server.close();}
