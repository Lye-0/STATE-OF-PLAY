import {createServer} from 'vite';import {chromium} from 'playwright';import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const root='/workspace/STATE-OF-PLAY',batch=process.argv[2],round=process.argv[3],out=`${root}/docs/design-renewal/batches/${batch}/captures/trails-self-${round}`;await fs.mkdir(out,{recursive:true});
const server=await createServer({root,configFile:false,optimizeDeps:{entries:[],noDiscovery:true},server:{host:'127.0.0.1',port:0,hmr:false,watch:null}});await server.listen();const browser=await chromium.launch({executablePath:'/usr/bin/chromium'}),page=await browser.newPage({viewport:{width:1000,height:900}}),checks=[],errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(server.resolvedUrls.local[0]+`docs/design-renewal/batches/${batch}/snapshot/round-${round}/index.html`);await page.waitForFunction(()=>window.ready);
 for(const section of await page.locator('section').all()){
  const id=await section.getAttribute('data-part'),r=section.locator('[data-foundation=breadcrumbs]');if(!await r.count())continue;
  const call=(name,arg)=>page.evaluate(({id,name,arg})=>window.apis[id][name](arg),{id,name,arg}),panel=r.locator('[data-crumb-menu]'),more=r.locator('[data-crumb-more]'),nav=r.locator('.ff-breadcrumb');
  await r.screenshot({path:out+'/'+id+'-initial.png'});await more.click();await panel.screenshot({path:out+'/'+id+'-expanded.png'});await page.keyboard.press('Escape');
  if(round==='0'||process.env.SOP_CAPTURE_ONLY==='1'){console.log('BASELINE '+id);continue;}
  const items=Array.from({length:7},(_,i)=>({value:'v'+i,label:'階層 '+i,href:'#level-'+i}));await call('updateFoundation',{items});
  assert.equal(await nav.locator('[aria-current=page]').textContent(),'階層 6');assert.equal(await more.getAttribute('aria-expanded'),'false');
  await more.focus();await page.keyboard.press('Enter');assert.equal(await panel.isVisible(),true);assert.equal(await panel.locator('a').count(),4);assert.equal(await panel.locator('a').first().evaluate(e=>e===document.activeElement),true);
  await page.keyboard.press('Escape');assert.equal(await panel.isVisible(),false);assert.equal(await more.evaluate(e=>e===document.activeElement),true);
  await more.click();await panel.locator('a').nth(1).click();assert.ok(page.url().endsWith('#level-2'),id+' trusted menu link navigation');
  await more.click();if(!await panel.isVisible())await more.click();await page.mouse.click(1,1);assert.equal(await panel.isVisible(),false);
  await more.click();await page.locator('h2').first().evaluate(e=>{e.tabIndex=0;e.focus()});await page.waitForTimeout(20);assert.equal(await panel.isVisible(),false);
  await call('updateFoundation',{items:items.map((it,i)=>({...it,disabled:i===2}))});await more.click();assert.equal(await panel.locator('a').nth(1).getAttribute('aria-disabled'),'true');assert.equal(await panel.locator('a').nth(1).getAttribute('href'),null);const u=page.url();await panel.locator('a').nth(1).click({force:true});assert.equal(page.url(),u);await page.keyboard.press('Escape');
  await call('updateFoundation',{disabled:true});assert.equal(await nav.locator('a[href]').count(),0);assert.equal(await more.isDisabled(),true);await more.click({force:true});assert.equal(await panel.isVisible(),false);await call('setDisabled',false);
  await call('updateFoundation',{items:[items[0]]});assert.equal(await more.count(),0);assert.equal(await nav.locator('[aria-current=page]').textContent(),'階層 0');await call('updateFoundation',{items:[]});assert.equal(await nav.locator('li').count(),0);
  await call('updateFoundation',{items:items.slice(0,3)});assert.equal(await more.count(),0);assert.equal(await nav.locator('a').count(),2);await nav.locator('a').nth(1).click();assert.ok(page.url().endsWith('#level-1'));
  const long=items.map((it,i)=>({...it,label:'長い階層 '+i+' Japanese日本語LongUnbrokenLabelWithoutWhitespace'}));await call('updateFoundation',{items:long,label:'現在地を確かめる長い日本語LongUnbrokenHeadingWithoutWhitespace',description:'任意の補足SupplementalInformationWithoutWhitespace'});
  for(const dir of ['ltr','rtl'])for(const width of [320,390,768]){
   await page.setViewportSize({width,height:900});await r.evaluate((e,dir)=>e.dir=dir,dir);await page.evaluate(()=>new Promise(res=>requestAnimationFrame(res)));
   assert.ok(await r.evaluate(e=>e.scrollWidth<=e.clientWidth+1),id+' fits '+width+' '+dir);
   assert.ok(await nav.locator('a').first().evaluate(e=>{const a=e.getBoundingClientRect();return a.width>=27&&a.height>=32}),id+' native link hit');
   await more.click();assert.equal(await panel.isVisible(),true);assert.ok(await panel.evaluate(e=>{const a=e.getBoundingClientRect();return a.left>=0&&a.right<=innerWidth+1&&e.scrollWidth<=e.clientWidth+1}),id+' menu fits '+width+' '+dir);
   await panel.screenshot({path:out+'/'+id+'-menu-'+dir+'-'+width+'.png'});await page.keyboard.press('Escape');await r.screenshot({path:out+'/'+id+'-long-'+dir+'-'+width+'.png'});
   if(dir==='ltr')await r.screenshot({path:out+'/'+id+'-narrow-'+width+'.png'});
  }
  const contrasts=await nav.locator('a:not([aria-disabled=true]),[aria-current=page]').evaluateAll(es=>es.map(e=>{
   const rgb=c=>(c.match(/[\d.]+/g)||[]).slice(0,3).map(Number),lum=c=>rgb(c).map(v=>{const x=v/255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
   let p=e,bg='';while(p){const c=getComputedStyle(p).backgroundColor;if(c!=='rgba(0, 0, 0, 0)'&&c!=='transparent'){bg=c;break}p=p.parentElement}
   const a=lum(getComputedStyle(e).color),b=lum(bg);return {label:e.textContent,ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)};
  }));assert.ok(contrasts.every(c=>c.ratio>=4.5),id+' native text contrast '+JSON.stringify(contrasts));
  const link=nav.locator('a').first(),geometry=()=>link.evaluate(e=>{const a=e.getBoundingClientRect(),range=document.createRange();range.selectNodeContents(e);const g=range.getBoundingClientRect();return {x:a.x,y:a.y,w:a.width,h:a.height,gx:g.x,gy:g.y,font:getComputedStyle(e).font}});await page.mouse.move(1,1);const before=await geometry();await link.hover();assert.deepEqual(await geometry(),before);
  await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});await more.click();assert.equal(await panel.isVisible(),true);assert.equal(await r.evaluate(e=>e.getAnimations({subtree:true}).length),0);await panel.screenshot({path:out+'/'+id+'-forced.png'});await page.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});await call('destroy');assert.equal(await panel.isVisible(),false);assert.equal(await panel.evaluate(e=>e.matches(':popover-open')),false);
  checks.push({id,nativeHierarchy:true,collapse:true,keyboard:true,escapeFocus:true,trustedLink:true,disabledItem:true,outsideFocus:true,outsidePointer:true,disabled:true,emptyAndOne:true,narrow:true,long:true,RTL:true,fixedGlyph:true,forced:true,reduced:true,openCleanup:true});console.log('PASS '+id);
 }
 assert.deepEqual(errors,[]);await fs.writeFile(out+'/checks.json',JSON.stringify({checks,errors},null,2));
}finally{await browser.close();await server.close();}
