"use strict";
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'playwright');
const {startServer}=require('../scripts/server.cjs');
const ROOT=path.resolve(__dirname,'..');
const OUT=path.join(ROOT,'.test-output');fs.mkdirSync(OUT,{recursive:true});
const read=n=>fs.readFileSync(path.join(ROOT,n),'utf8');
const offline=process.env.SOP_OFFLINE==='1';
const normalize=s=>s.split('\n').map(l=>l.trimEnd()).join('\n');
(async()=>{
 let server,browser;const results=[];const errors=[];
 async function run(name,fn){await fn();results.push(name);console.log('PASS '+name);}
 try{
  if(!offline)server=await startServer(0);
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const context=await browser.newContext({viewport:{width:1440,height:960},acceptDownloads:true});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  async function load(rel='index.html'){
   if(!offline){await page.goto(`http://127.0.0.1:${server.address().port}/${rel}`);return;}
   // For environments that block local navigation: load the very same files into a test document.
   // This does not change browser/OS policy and is never shipped as a single-file gallery preview.
   const html=read(rel);const dir=path.posix.dirname(rel);
   const scripts=[...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)].map(m=>m[1]);
   const styles=[...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)].map(m=>m[1]);
   await page.setContent(html.replace(/<script\b[^>]*src="[^"]+"[^>]*><\/script>/g,'').replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g,''));
   for(const name of styles)await page.addStyleTag({content:read(path.posix.join(dir,name))});
   for(const name of scripts)await page.addScriptTag({content:read(path.posix.join(dir,name))});
  }
  await load();await page.waitForTimeout(200);
  await run('Gallery: 16 parts, no runtime errors',async()=>{assert.equal(await page.locator('[data-part]').count(),16);assert.deepEqual(errors,[]);});
  await run('Toggle interaction does not open details',async()=>{const b=page.locator('[data-part="chrome"] [role="switch"]');const prev=await b.getAttribute('aria-checked');await b.click();assert.notEqual(await b.getAttribute('aria-checked'),prev);assert.equal(await page.locator('#part-details').getAttribute('open'),null);});
  await page.locator('[data-open="luminous-frame"]').click();
  await run('Detail code workspace, file selector, save left of copy',async()=>{assert.equal(await page.locator('#detail-title').innerText(),'Luminous Frame');await page.locator('[data-file="styles.css"]').click();assert.ok((await page.locator('.editor code').innerText()).includes('sop-luminous-frame'));const a=await page.locator('.download-file').boundingBox(),b=await page.locator('.copy-file').boundingBox();assert.ok(a.x<b.x);});
  await page.screenshot({path:path.join(OUT,'detail.png')});
  await run('Copy success UI reports only successful writes',async()=>{
   await page.evaluate(()=>{window.__copied='';Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async t=>{window.__copied=t;}}});});
   await page.locator('.copy-file').click();assert.ok((await page.locator('.copy-file').innerText()).includes('コピー済み'));assert.ok((await page.evaluate(()=>window.__copied)).includes('sop-luminous-frame'));
  });
  await run('Selected-file download returns exact source',async()=>{
   const item=await page.evaluate(()=>window.SOP_CATALOG.find(p=>p.id==='luminous-frame').files.tsx.find(f=>f.name==='styles.css'));
   const downloadPromise=page.waitForEvent('download');await page.locator('.download-file').click();const download=await downloadPromise;assert.equal(download.suggestedFilename(),'styles.css');assert.equal(fs.readFileSync(await download.path(),'utf8'),item.code);
  });
  await run('Keyboard focus stays inside details and returns to its trigger',async()=>{for(let i=0;i<45;i++){await page.keyboard.press(i%2?'Shift+Tab':'Tab');assert.ok(await page.evaluate(()=>document.querySelector('#part-details').contains(document.activeElement)));}await page.keyboard.press('Escape');assert.equal(await page.locator('#part-details').getAttribute('open'),null);assert.equal(await page.evaluate(()=>document.activeElement.dataset.open),'luminous-frame');});
  await run('All 452 code previews match their source',async()=>{
   let count=0;
   const ids=await page.evaluate(()=>window.SOP_CATALOG.map(p=>p.id));
   for(const id of ids){await page.locator(`[data-open="${id}"]`).click();
    for(const format of ['tsx','jsx','ts','js']){
     await page.locator(`[data-format="${format}"]`).click();
     const checks=await page.evaluate(({id,format})=>{
      const p=window.SOP_CATALOG.find(p=>p.id===id);
      return p.files[format].map(f=>{[...document.querySelectorAll('.file-item')].find(b=>b.dataset.file===f.name).click();const rendered=[...document.querySelectorAll('.editor .line-code')].map(n=>n.textContent).join('\n');return {name:f.name,rendered,code:f.code};});
     },{id,format});
     for(const c of checks){assert.equal(normalize(c.rendered),normalize(c.code),`${id}/${format}/${c.name}`);count++;}
    }await page.locator('.close-detail').click();
   }assert.equal(count,452);
  });
  await run('Source and text ZIPs contain valid, unchanged component files',async()=>{
   await page.locator('[data-open="chrome"]').click();await page.locator('[data-format="js"]').click();await page.locator('#download-part').click();
   for(const mode of ['source','text']){
    await page.locator(`input[name="package-mode"][value="${mode}"]`).check();
    const pending=page.waitForEvent('download');await page.locator('.package-save').click();const d=await pending;const bytes=fs.readFileSync(await d.path());
    const JSZip=require('../vendor/jszip.js');const z=await JSZip.loadAsync(bytes,{checkCRC32:true});const root=`chrome-js${mode==='text'?'-text':''}/`;
    const source=read('packages/chrome/js/init.js');assert.equal(await z.file(root+'init.js'+(mode==='text'?'.txt':'')).async('string'),source);
   }await page.keyboard.press('Escape');await page.keyboard.press('Escape');
  });
  await run('Mobile widths 320/390/768: no page overflow and usable detail actions',async()=>{
   for(const width of [320,390,768]){
    await page.setViewportSize({width,height:844});await page.locator('[data-open="chrome"]').click();
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    assert.ok(await page.locator('.download-file').isVisible());assert.ok((await page.locator('.code-scroll').boundingBox()).width>190);
    if(width===390)await page.screenshot({path:path.join(OUT,'mobile-390.png')});await page.locator('.close-detail').click();
   }
  });
  await run('All 16 separated standalone demos render and operate',async()=>{
   await page.setViewportSize({width:1000,height:800});
   const registry=JSON.parse(read('src/catalog/registry.json'));
   for(const base of registry){const meta=JSON.parse(read(base+'/meta.json'));await load(`packages/${meta.id}/preview/index.html`);assert.equal(await page.locator('.demo-root > *').count(),1);if(meta.category==='toggles'){const b=page.locator('[role="switch"]');const before=await b.getAttribute('aria-checked');await b.click();assert.notEqual(await b.getAttribute('aria-checked'),before);}}
  });
  assert.deepEqual(errors,[]);
  fs.writeFileSync(path.join(OUT,'browser-results.json'),JSON.stringify({mode:offline?'offline DOM injection of real files':'HTTP',passed:results.length,tests:results,errors},null,2)+'\n');
  console.log(`Browser checks: ${results.length} passed (${offline?'offline document':'HTTP'}).`);
 }finally{await browser?.close();if(server)await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
