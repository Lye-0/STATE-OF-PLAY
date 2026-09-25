import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createRequire}from'node:module';import type{Browser}from'playwright';
import{ROOT,buildCatalog,FORMATS}from'../scripts/catalog.ts';import{offlineFiles}from'./offline-fixture.ts';import{getDelivery,buildPrompt,packageContents}from'../src/catalog/delivery.ts';import{requireLocalServerUrl}from'./vite-url.ts';import{galleryReady,selectCategory}from'./gallery-ready.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
console.log('Building NAVIGATOR gallery');const data=buildCatalog(),offline=process.env.SOP_TEST_MODE==='offline',out=path.join(ROOT,'.test-output/workbench-gallery');fs.mkdirSync(out,{recursive:true});const tests:string[]=[],errors:string[]=[];let browser:Browser|undefined,close:(()=>Promise<void>)|undefined;
async function run(name:string,fn:()=>Promise<void>){await fn();tests.push(name);console.log('PASS '+name);}
try{
 let url='';if(!offline){const{createServer}=await import('vite'),s=await createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await s.listen();url=requireLocalServerUrl(s,'Workbench');close=()=>s.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});const p=await browser.newPage({viewport:{width:1440,height:1040}});p.setDefaultTimeout(20000);p.on('pageerror',e=>errors.push(e.message));
 if(offline){const f=offlineFiles(data);console.log('Compiled source fixture');await p.setContent(f.get('/index.html')!.replace(/<script[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link[^>]*>/g,''));await p.addStyleTag({content:f.get('/test-styles.css')!});for(const vendor of['prism','jszip'])await p.addScriptTag({content:fs.readFileSync(path.join(ROOT,'public/vendor/'+vendor+'.js'),'utf8')});await p.addScriptTag({content:f.get('/test-app.js')!});}else{await p.goto(url,{waitUntil:'domcontentloaded',timeout:120000});await p.waitForFunction(()=>document.documentElement.classList.contains('site-ready'),undefined,{timeout:120000});}await galleryReady(p);
 const d=p.locator('#part-details');
 const open=async(id:string)=>{const part=data.parts.find(x=>x.id===id)!;await selectCategory(p,part.category);await p.locator(`[data-open="${id}"]`).click();await galleryReady(p);return part;};
 const shut=async()=>{await d.locator('.close-detail').evaluate(e=>(e as HTMLButtonElement).click());await d.waitFor({state:'hidden'});};
 await run('825 components and 37 categories retain correct A/B filters for the 88 additions',async()=>{
  assert.equal(data.parts.length,825);
  assert.equal(new Set(data.parts.map(part=>part.category)).size,37);
  for(const [category,total,expressive] of [['searchbars',20,12],['commands',16,10],['contextmenus',16,10],['navigation',20,12],['tables',16,10]] as const){
   await selectCategory(p,category);
   assert.equal(await p.locator('#part-grid [data-part]').count(),total);
   await p.locator('[data-design-filter=A]').click();await galleryReady(p);
   assert.equal(await p.locator('#part-grid [data-part]').count(),expressive);
   await p.locator('[data-design-filter=B]').click();await galleryReady(p);
   assert.equal(await p.locator('#part-grid [data-part]').count(),total-expressive);
   await p.locator('[data-design-filter=all]').click();await galleryReady(p);
  }
 });
 await run('All 16 context menu cards keep their width and show one result after an action',async()=>{
  await selectCategory(p,'contextmenus');
  for(const part of data.parts.filter(x=>x.category==='contextmenus')){
   const card=p.locator(`[data-part="${part.id}"]`),target=card.locator('.wb-context-target');
   await card.scrollIntoViewIfNeeded();
   const before=(await target.boundingBox())!;
   await card.locator('.wb-context-open').click();
   assert.ok(await card.locator('.wb-context-panel').isVisible(),part.id);
   const action=card.locator('.wb-context-panel button[role="menuitem"]:not([aria-haspopup]):not([aria-disabled="true"])').first();
   const label=(await action.locator('strong').textContent())?.trim();assert.ok(label,part.id);
   await action.evaluate(e=>(e as HTMLButtonElement).click());
   assert.ok((await card.locator('.wb-context-result').innerText()).includes(`${label} を選択しました。`),part.id);
   assert.equal(await card.locator('.wb-demo-feedback').count(),0,part.id);
   const after=(await target.boundingBox())!;
   assert.ok(Math.abs(after.width-before.width)<1,`${part.id}: ${before.width} → ${after.width}`);
   if(part.id==='hinge-context'||part.id==='plain-context')await card.screenshot({path:path.join(out,`context-${part.id}-after.png`)});
  }
  await open('hinge-context');
  const detailTarget=d.locator('.wb-context-target'),before=(await detailTarget.boundingBox())!;
  await d.locator('.wb-context-open').click();await d.locator('[data-menu-action="open"]').click();
  assert.match(await d.locator('.wb-context-result').innerText(),/開く を選択しました/);
  assert.equal(await d.locator('.wb-demo-feedback').count(),0);
  assert.ok(Math.abs((await detailTarget.boundingBox())!.width-before.width)<1);
  await d.locator('.live-preview').screenshot({path:path.join(out,'context-detail-after.png')});
  await shut();
 });
 await run('All 20 navigation cards retain their width and active state without extra demo feedback',async()=>{
  await selectCategory(p,'navigation');
  let activated=0;
  for(const part of data.parts.filter(x=>x.category==='navigation')){
   const card=p.locator(`[data-part="${part.id}"]`),root=card.locator('.sop-wb');
   await card.scrollIntoViewIfNeeded();
   const before=(await root.boundingBox())!,url=p.url();
   let link:typeof card|null=null;
   for(const candidate of await card.locator('.wb-nav-desktop a[data-nav]').all()){
    if(!await candidate.isVisible()||await candidate.getAttribute('aria-current')==='page'||await candidate.getAttribute('aria-disabled')==='true')continue;
    if(!link||await candidate.getAttribute('data-nav')==='settings')link=candidate;
   }
   if(link){
    await link.click();activated++;
    assert.equal(await link.getAttribute('aria-current'),'page',part.id);
    assert.equal(p.url(),url,part.id+' stays in gallery');
   }
   assert.equal(await card.locator('.wb-demo-feedback').count(),0,part.id);
   assert.ok(Math.abs((await root.boundingBox())!.width-before.width)<1,part.id);
   if(part.id==='arc-dock'||part.id==='essential-header')await card.screenshot({path:path.join(out,`navigation-${part.id}-after.png`)});
  }
  assert.ok(activated>=16,`Activated ${activated} navigation cards`);
 });
 await run('Other workbench feedback stays below the card without narrowing it',async()=>{
  await selectCategory(p,'searchbars');
  const card=p.locator('[data-part="parallax-search"]'),root=card.locator('.sop-wb');
  await card.scrollIntoViewIfNeeded();
  const before=(await root.boundingBox())!;
  await card.locator('.wb-search-input').fill('design');
  await card.locator('.wb-search-submit').click();
  assert.match(await card.locator('.wb-demo-feedback').innerText(),/検索/);
  assert.ok(Math.abs((await root.boundingBox())!.width-before.width)<1);
 });
 await run('Expanded navigation choices update the current section and close on page scroll',async()=>{
  await selectCategory(p,'navigation');
  for(const id of ['axis-rail-nav','paper-index-nav','ribbon-header']){
   const card=p.locator(`[data-part="${id}"]`),more=card.locator('.wb-nav-desktop [data-nav-group="more"]');
   await card.scrollIntoViewIfNeeded();
   const url=p.url();
   await more.click();
   await card.locator('.wb-nav-flyout [data-nav="settings"]').click();
   assert.equal(await card.locator('.wb-nav-location').innerText(),'設定',id);
   assert.equal(await more.getAttribute('data-current'),'',id);
   assert.match(await more.getAttribute('aria-label')??'',/設定/,id);
   assert.equal(await card.locator('.wb-demo-feedback').count(),0,id);
   assert.equal(p.url(),url,id);
   if(id==='axis-rail-nav'){
    await p.waitForTimeout(550);
    const marker=(await card.locator('.wb-nav-marker').boundingBox())!,button=(await more.boundingBox())!;
    assert.ok(Math.abs(marker.y+marker.height/2-button.y-button.height/2)<4,'selected group marker');
    await card.screenshot({path:path.join(out,'navigation-axis-rail-child-selected.png')});
   }
   await more.click();
   assert.ok(await card.locator('.wb-nav-flyout').isVisible(),id);
   await p.evaluate(()=>window.scrollBy(0,240));
   await p.waitForFunction(identifier=>document.querySelector(`[data-part="${identifier}"] .wb-nav-flyout`)?.getAttribute('hidden')!==null,id);
   assert.equal(await more.getAttribute('aria-expanded'),'false',id);
  }
 });
await run('88 parts and eight exports have entry, internal dependencies, source-backed prompt and integration manifest',async()=>{let count=0;for(const part of data.parts.filter(p=>p.workbench))for(const l of['portable','original']as const)for(const f of FORMATS){const delivery=getDelivery(part,f,l),files=packageContents(part,f,l);assert.ok(delivery.files.some(x=>x.name===delivery.entry));assert.ok(delivery.runtimeFiles.every(x=>!x.name.includes('src/app/')));assert.equal(files.find(x=>x.name==='PROMPT.md')?.code,buildPrompt(part,f,l));assert.ok(files.some(x=>x.name==='INTEGRATION.json'));assert.ok(files.some(x=>/workbench\/(core|base)/.test(x.name)));count++;}assert.equal(count,704);});
 await run('Five inspectors show byte-matching source text and prompts in all formats and layouts',async()=>{let count=0;for(const id of['parallax-search','aperture-command','hinge-context','arc-dock','ledger-table']){const part=await open(id);for(const layout of['portable','original']as const){await d.locator('#export-layout').selectOption(layout);for(const format of FORMATS){await d.locator(`[data-format="${format}"]`).evaluate(e=>(e as HTMLButtonElement).click());for(const file of getDelivery(part,format,layout).files){await d.locator(`[data-file="${file.name}"]`).evaluate(e=>(e as HTMLButtonElement).click());assert.deepEqual(await d.locator('.editor .line-code').allTextContents(),file.code.split('\n').map(x=>x||' '),file.name);count++;}await d.locator('[data-detail-tab=prompt]').evaluate(e=>(e as HTMLButtonElement).click());assert.equal(await d.locator('#prompt-text').inputValue(),buildPrompt(part,format,layout));await d.locator('[data-detail-tab=code]').evaluate(e=>(e as HTMLButtonElement).click());}}await shut();}console.log('Displayed source files:',count);});
 await run('Format changes preserve query; nested palette retains focus and Escape leaves inspector open',async()=>{await open('parallax-search');await d.locator('.wb-search-input').fill('design');await d.locator('[data-format=js]').click();assert.equal(await d.locator('.wb-search-input').inputValue(),'design');await shut();await open('aperture-command');await d.locator('.wb-command-launch').click();await p.keyboard.press('Escape');assert.ok(await d.isVisible());await d.locator('[data-wb-demo=open]').click();for(let i=0;i<12;i++)await p.keyboard.press('Tab');assert.equal(await d.locator('.wb-command-dialog').evaluate(e=>e.contains(document.activeElement)),true);await p.keyboard.press('Escape');await p.screenshot({path:out+'/commands-detail.png'});await shut();});
 await run('Navigation preview keeps the selected destination in the gallery; table preview handles empty, loading and reset',async()=>{await open('paper-index-nav');await d.locator('.wb-nav-desktop [data-nav=projects]').click();assert.ok(await d.isVisible());assert.equal(await d.locator('.wb-nav-desktop [data-nav=projects]').getAttribute('aria-current'),'page');assert.equal(await d.locator('.wb-demo-feedback').count(),0);await shut();await open('ledger-table');await d.locator('[data-wb-state]').selectOption('empty');assert.match(await d.locator('.wb-data-empty').innerText(),/該当/);await d.locator('[data-wb-state]').selectOption('loading');assert.equal(await d.locator('table').getAttribute('aria-busy'),'true');await d.locator('[data-wb-demo=reset]').click();assert.equal(await d.locator('tbody tr').count(),4);await p.screenshot({path:out+'/table-detail.png'});await shut();});
 await run('Narrow inspectors preserve code-copy/file-save and page width at 320, 390 and 768',async()=>{for(const width of[320,390,768]){await p.setViewportSize({width,height:1000});for(const id of['parallax-search','ledger-table','split-gate-nav']){await open(id);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),id+width);await d.locator('.copy-file').scrollIntoViewIfNeeded();assert.ok(await d.locator('.copy-file').isVisible());assert.ok(await d.locator('.download-file').isVisible());if(width===390&&id==='ledger-table')await p.screenshot({path:out+'/mobile-390.png'});await shut();}}});
 assert.deepEqual(errors,[]);console.log('NAVIGATOR gallery '+tests.length+' checks passed');
}finally{fs.writeFileSync(out+'/results.json',JSON.stringify({mode:offline?'real gallery / offline compiled source fixture; NOT Vite':'Vite HTTP',passed:tests.length,tests,errors},null,2)+'\n');await browser?.close();await close?.();}
