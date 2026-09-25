/** Real HTTP checks: development AND production, not the offline adapter. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium, type Page} from 'playwright';
import {createServer, preview} from 'vite';
import {ROOT, buildCatalog} from '../scripts/catalog.ts';
import {readBrowserIndex} from '../scripts/vite-catalog.ts';
import {getDelivery, buildPrompt, packageContents, packageRoot} from '../src/catalog/delivery.ts';
import {unpackCatalog} from '../src/catalog/transport.ts';
import {selectCategory,selectedCategory} from './gallery-ready.ts';
import {JSZip} from '../scripts/zip.ts';
const {index} = readBrowserIndex();
const output=path.join(ROOT,'.test-output/lazy-loading');fs.mkdirSync(output,{recursive:true});
const browser=await chromium.launch({headless:true, ...(process.env.SOP_BROWSER_CHANNEL ? {channel:process.env.SOP_BROWSER_CHANNEL} : {})});
const results: string[]=[];
async function ready(p:Page) { await p.waitForFunction(()=>document.querySelector('#part-grid')?.getAttribute('aria-busy')==='false'); }
async function category(p:Page,id:string) { await selectCategory(p,id); await p.mouse.move(0,0); }
try {
 for (const mode of (process.env.SOP_LAZY_MODE ? [process.env.SOP_LAZY_MODE] : ['development','production'])) {
  const server = mode==='development' ? await createServer({root:ROOT,server:{port:0,host:'127.0.0.1'}}) : await preview({root:ROOT,base:'/STATE-OF-PLAY/',preview:{port:0,host:'127.0.0.1'}});
  if ('listen' in server) await server.listen();
  const url=server.resolvedUrls!.local[0];
  const close=()=> 'listen' in server ? server.close() : new Promise<void>((resolve,reject)=>server.httpServer.close(e=>e?reject(e):resolve()));
  try {
   const context=await browser.newContext({viewport:{width:1440,height:960},reducedMotion:'reduce'});
   const p=await context.newPage();const errors:string[]=[],requests:string[]=[];
   p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>requests.push(r.url()));
   await p.goto(url,{waitUntil:'domcontentloaded',timeout:120000});
   await p.waitForFunction(()=>document.documentElement.classList.contains('site-ready'),undefined,{timeout:120000});
   await ready(p);
   assert.equal(await p.locator('[data-part]').count(),26);
   assert.equal(await selectedCategory(p),'toggles');
   assert.ok(!requests.some(u=>/\.json(?:\?|$)/.test(u)),'no source payload on entry');
   if(mode==='development') assert.ok(!requests.some(u=>/\/src\/parts\//.test(u)&&!u.includes('/toggles/')&&!u.includes('/blocks/original-surface/')),'no unrelated part implementation on entry');
   assert.ok(!requests.some(u=>u.includes('sop-catalog')||u.includes('sop-mounts')||u.includes('sop-styles')),'no legacy full catalogue');
   if(mode==='production') for(const cat of new Set(index.map(x=>x.category))) {
    if(cat==='toggles') continue;
    assert.ok(!requests.some(u=>new RegExp('/'+cat+'-[^/]+\\.js(?:\\?|$)').test(u)), 'no unrelated category chunk: '+cat);
   }
   results.push(mode+': initial 26 toggles only; no delivery payload or full catalogue');
   for (const id of ['loaders','numbers','datepickers','dropdowns']) {
    await category(p,id);assert.equal(await p.locator('[data-part]').count(),index.filter(x=>x.category===id).length);
   }
   const before=requests.length; await category(p,'toggles');await category(p,'loaders');
   assert.equal(requests.length,before,'loaded categories reuse modules');
   await category(p,'all'); assert.equal(await p.locator('[data-part]').count(),24);
   const toggle=p.locator('[data-part="chrome"] [role="switch"]');await toggle.click();const checked=await toggle.getAttribute('aria-checked');
   await p.locator('#load-more').click();await ready(p);assert.equal(await p.locator('[data-part]').count(),48);assert.equal(await toggle.getAttribute('aria-checked'),checked);
   assert.equal(await p.locator('#search-parts,#search-clear').count(),0);
   await category(p,'progress');assert.equal(await p.locator('[data-part]').count(),index.filter(x=>x.category==='progress').length);
   await category(p,'datepickers');assert.equal(await p.locator('[data-part]').count(),index.filter(x=>x.category==='datepickers').length);
   await category(p,'all');assert.equal(await p.locator('[data-part]').count(),24);
   results.push(mode+': category cache, all pagination, retained controls and category selection');
   // Source download happens on detail open and round-trips exactly to the canonical generator.
   const target='chrome';
   const source=buildCatalog(ROOT,[target]).parts[0];
   const responsePromise=p.waitForResponse(r=>r.url().includes(target)&&r.url().includes('.json'));
   await p.locator('[data-open="chrome"]').click();
   const response=await responsePromise;assert.ok(response.ok());
   assert.deepEqual(unpackCatalog(await response.json()),[source]);
   await p.locator('#detail-pane pre code').first().waitFor();
   for(const layout of ['portable','original'] as const)for(const format of ['tsx','jsx','ts','js'] as const){
    await p.locator('#export-layout').selectOption(layout);await p.locator('[data-format="'+format+'"]').click();
    const delivery=getDelivery(source,format,layout);
    assert.ok((await p.locator('#detail-pane').innerText()).includes(delivery.files[0].name.split('/').at(-1)!));
    await p.locator('#tab-prompt').click();assert.equal(await p.locator('#prompt-text').inputValue(),buildPrompt(source,format,layout,true));
    await p.locator('#tab-code').click();
   }
   await p.locator('[data-format="js"]').click();
   for (const layout of ['portable','original'] as const) {
    await p.locator('#export-layout').selectOption(layout);await p.locator('#download-part').click();
    for (const archiveMode of ['source','text']) {
     await p.locator('input[name="package-mode"][value="'+archiveMode+'"]').check();
     const pending=p.waitForEvent('download');await p.locator('.package-save').click();const download=await pending;
     const zip=await JSZip.loadAsync(fs.readFileSync((await download.path())!),{checkCRC32:true});
     const prefix=packageRoot(source,'js',layout)+(archiveMode==='text'?'-text':'')+'/';
     for(const file of packageContents(source,'js',layout))assert.equal(await zip.file(prefix+file.name+(archiveMode==='text'?'.txt':''))!.async('string'),file.code);
    }
    await p.locator('.package-close').click();
   }
   results.push(mode+': downloaded ZIPs match canonical files, guides, prompts and manifest (both layouts/modes)');
   await p.locator('.close-detail').click();
   const deliveries=requests.filter(u=>u.includes('.json')).length;
   await p.locator('[data-open="chrome"]').click();await p.locator('#detail-pane').waitFor();
   assert.equal(requests.filter(u=>u.includes('.json')).length,deliveries);
   await p.locator('#next-part').click();await p.locator('[data-preview-part="liquid"]').waitFor();
   await p.goBack();await p.locator('[data-preview-part="chrome"]').waitFor();
   await p.goForward();await p.locator('[data-preview-part="liquid"]').waitFor();
   await p.locator('.close-detail').click();
   results.push(mode+': exact delivery payload, all 8 layouts/formats, prompts, cache and history');
   // Repeated category entry in both orders detects late CSS causing different styles.
   const ids=[...new Set(index.map(x=>x.category))];const signatures=new Map<string,unknown>();
   const signature=()=>p.locator('.stage-mount').first().evaluate(el=>[el.firstElementChild,...Array.from(el.firstElementChild?.children??[]).slice(0,3)].filter(Boolean).map(node=>{const s=getComputedStyle(node!);return {display:s.display,color:s.color,background:s.backgroundColor,border:s.borderTopWidth,borderColor:s.borderTopColor,font:s.fontFamily};}));
   for(const id of ids){await category(p,id);assert.equal(await p.locator('[data-part]').count(),index.filter(x=>x.category===id).length);signatures.set(id,await signature());}
   for(const id of [...ids].reverse()){await category(p,id);assert.deepEqual(await signature(),signatures.get(id),'style order '+id);}
   assert.deepEqual(errors,[]);
   results.push(mode+': all 37 categories, forward/reverse CSS order, no runtime errors');
   await p.setViewportSize({width:390,height:844});await category(p,'numbers');
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   await p.screenshot({path:path.join(output,mode+'-mobile.png')});
   await context.close();
   // Fresh deep link must select the category, without initializing toggles first.
   const direct=await browser.newPage();await direct.goto(url+'#part=tide-progress');
   await direct.locator('[data-preview-part="tide-progress"]').waitFor();await ready(direct);
   assert.equal(await selectedCategory(direct),'progress');
   await direct.keyboard.press('Escape');assert.equal(await direct.locator('#part-details').evaluate((e:HTMLDialogElement)=>e.open),false);
   await direct.close();results.push(mode+': mobile layout and cold direct detail link');
   // Delay an actual network response; closing must invalidate its eventual completion.
   const race=await browser.newPage();await race.goto(url);await ready(race);
   let release!:()=>void;const gate=new Promise<void>(r=>release=r);
   await race.route(/chrome[^/]*\.json/,async route=>{await gate;await route.continue();});
   await race.locator('[data-open="chrome"]').click();await race.locator('.detail-loading').waitFor();
   await race.keyboard.press('Escape');release();await race.waitForLoadState('networkidle');
   assert.equal(await race.locator('#part-details').evaluate((e:HTMLDialogElement)=>e.open),false);
   await race.close();results.push(mode+': closing while loading does not reopen details');
   const failure=await browser.newPage();await failure.goto(url);await ready(failure);
   let fail=true;await failure.route(/chrome[^/]*\.json/,async route=>{if(fail){fail=false;await route.abort();}else await route.continue();});
   await failure.locator('[data-open="chrome"]').click();await failure.getByRole('button',{name:'再試行',exact:true}).click();
   await failure.locator('[data-preview-part="chrome"]').waitFor();await failure.close();
   results.push(mode+': failed delivery request retries successfully');
   const navigation=await browser.newPage();await navigation.goto(url);await ready(navigation);
   let unblock!:()=>void;const loading=new Promise<void>(r=>unblock=r);
   const categoryPattern=mode==='development'? /sop-category\/numbers/ : /\/numbers-[^/]+\.js/;
   await navigation.route(categoryPattern,async route=>{await loading;await route.continue();});
   await selectCategory(navigation,'numbers',false);
   await selectCategory(navigation,'blocks',false);await ready(navigation);unblock();
   await navigation.waitForLoadState('networkidle');assert.equal(await selectedCategory(navigation),'blocks');
   assert.equal(await navigation.locator('[data-part="original-surface"]').count(),1);
   await navigation.close();results.push(mode+': stale category response cannot replace newer selection');
   const categoryFailure=await browser.newPage();await categoryFailure.goto(url);await ready(categoryFailure);
   let rejectCategory=true;await categoryFailure.route(categoryPattern,async route=>{if(rejectCategory){rejectCategory=false;await route.abort();}else await route.continue();});
   await selectCategory(categoryFailure,'numbers',false);
   await Promise.all([categoryFailure.waitForURL(/category=numbers/),categoryFailure.getByRole('button',{name:'再読み込み',exact:true}).click()]);await ready(categoryFailure);
   assert.equal(await categoryFailure.locator('[data-part]').count(),index.filter(x=>x.category==='numbers').length);await categoryFailure.close();
   results.push(mode+': failed category import reloads with selection retained');
  } finally {await close();}
 }
 fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(results,null,2));
 console.log(results.join('\n'));
} finally {await browser.close();}
