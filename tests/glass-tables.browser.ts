import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {preview} from 'vite';import {chromium} from 'playwright';import {ROOT} from '../scripts/catalog.ts';import {selectCategory,galleryReady} from './gallery-ready.ts';
const out=path.join(ROOT,'.test-output/glass-tables');fs.mkdirSync(out,{recursive:true});
const server=await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{host:'127.0.0.1',port:0}}),browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(server.resolvedUrls!.local[0],{waitUntil:'commit'});await page.waitForFunction(()=>document.documentElement.classList.contains('site-ready'));await selectCategory(page,'tables');await galleryReady(page,true);
 for(const width of [1920,1440,1024,768,390,320]){await page.setViewportSize({width,height:1000});for(const id of ['lgc-tables-lens','lgc-tables-mist']){
  const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();const fit=await card.evaluate(el=>{const a=el.querySelector('.lg-demo-scene')!.getBoundingClientRect(),b=el.querySelector('.wb-data-frame')!.getBoundingClientRect();return {x:b.left>=a.left&&b.right<=a.right,y:b.top>=a.top&&b.bottom<=a.bottom,page:document.documentElement.scrollWidth<=innerWidth+2};});assert.ok(Object.values(fit).every(Boolean),`${id} ${width}: ${JSON.stringify(fit)}`);
 }}
 await page.setViewportSize({width:1440,height:1000});
 for(const id of ['lgc-tables-lens','lgc-tables-mist']){
  const card=page.locator(`[data-part="${id}"]`);await card.scrollIntoViewIfNeeded();const row=card.locator('tbody tr').first();await row.hover();await page.waitForTimeout(260);
  assert.notEqual(await row.evaluate(el=>getComputedStyle(el).backgroundColor),'rgba(0, 0, 0, 0)',id+' hover missing');
  assert.ok(await row.locator('td').evaluateAll(cells=>cells.every(c=>getComputedStyle(c).backgroundColor==='rgba(0, 0, 0, 0)')),id+' fixed cells have separate hover paint');
  await page.mouse.move(0,0);await page.waitForTimeout(270);assert.equal(await row.evaluate(el=>getComputedStyle(el).backgroundColor),'rgba(0, 0, 0, 0)');await card.screenshot({path:path.join(out,id+'-gallery.png')});
  await card.locator('.open-part').click();await galleryReady(page,true);const detail=page.locator('#part-details'),root=detail.locator('.preview-stage > .lgc-root'),scroll=root.locator('.wb-table-scroll');await page.emulateMedia({reducedMotion:'reduce'});
  for(const background of ['studio','light']){await detail.locator(`[data-bg="${background}"]`).click();for(const density of [0,50,100])for(const blur of [0,50,100]){
   await detail.locator('#glass-transparency').fill(String(density));await detail.locator('#glass-blur').fill(String(blur));
   for(const position of [0,.5,1]){await scroll.evaluate((el,p)=>el.scrollLeft=(el.scrollWidth-el.clientWidth)*p,position);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
    const check=await root.evaluate(el=>{const heads=[...el.querySelectorAll<HTMLTableCellElement>('thead th')],viewport=el.querySelector('.wb-table-scroll')!.getBoundingClientRect(),header=el.querySelector('thead')!.getBoundingClientRect();const pinned=heads.filter(c=>getComputedStyle(c).position==='sticky'&&getComputedStyle(c).insetInlineStart!=='auto');const edge=Math.max(viewport.left,...pinned.map(c=>c.getBoundingClientRect().right));const visibleStart=(c:HTMLElement)=>{const r=c.getBoundingClientRect(),raw=getComputedStyle(c).clipPath;const v=(raw.match(/[\d.]+/g)??[]).map(Number);const left=v.length===4?v[3]:v.length>=2?v[1]:v[0]??0;return {left:r.left+left,right:r.right};};return{uniform:heads.every(c=>getComputedStyle(c).backgroundColor==='rgba(0, 0, 0, 0)'),covered:header.left<=viewport.left+2&&header.right>=viewport.right-2,clipped:heads.filter(c=>!pinned.includes(c)).every(c=>{const r=visibleStart(c);return r.right-r.left<1||r.left>=edge-1;})};});
    assert.ok(Object.values(check).every(Boolean),`${id} ${background} ${density}/${blur} scroll ${position}: ${JSON.stringify(check)}`);
   }
  }}
  await detail.locator('[data-bg=studio]').click();await detail.locator('#glass-transparency').fill('90');await detail.locator('#glass-blur').fill('0');await detail.locator('.live-preview').screenshot({path:path.join(out,id+'-clear-scrolled.png')});
  await root.locator('[data-sort="size"]').click();await root.locator('input[type=search]').fill('Design');assert.equal(await root.locator('tbody tr[data-row]').count(),1);await root.locator('[data-row-check]').check();await root.locator('input[type=search]').fill('');await root.locator('[data-table-page=next]').click();assert.equal(await root.locator('footer output').textContent(),'2 / 2');await root.locator('[data-resize]').first().press('End');await page.waitForTimeout(40);assert.equal(await root.getAttribute('data-glass-pin-first'),'false');
  await detail.locator('.close-detail').click();await page.emulateMedia({reducedMotion:'no-preference'});console.log('PASS '+id+' bounds, hover, materials, scrolling, sorting, selection and resize');
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await new Promise<void>(r=>server.httpServer.close(()=>r()));}
