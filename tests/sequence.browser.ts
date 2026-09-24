/** Native control regressions on real Chromium. Offline mode explicitly bypasses Vite. */
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createRequire} from 'node:module';
import type {Browser} from 'playwright';import {sequenceFixture} from './sequence-fixture.ts';import {ROOT} from '../scripts/catalog.ts';import {requireLocalServerUrl} from './vite-url.ts';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH??'playwright') as typeof import('playwright');
const f=sequenceFixture(),targets=f.records.filter(p=>p.tags.includes('SEQUENCE')),offline=process.env.SOP_TEST_MODE==='offline';
const results:string[]=[],errors:string[]=[];let browser:Browser|undefined,close:(()=>Promise<void>)|undefined;
async function run(name:string,test:()=>Promise<void>){if(process.env.SOP_SEQUENCE_FILTER&&!new RegExp(process.env.SOP_SEQUENCE_FILTER).test(name))return;await test();results.push(name);console.log('PASS '+name);}
try{
 let url='';if(!offline){const vite=await import('vite'),server=await vite.createServer({root:ROOT,server:{host:'127.0.0.1',port:0}});await server.listen();url=requireLocalServerUrl(server,'SEQUENCE');close=()=>server.close();}
 browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const p=await browser.newPage({viewport:{width:740,height:960}});p.setDefaultTimeout(6000);p.on('pageerror',e=>errors.push(e.message));
 if(offline){await p.setContent(f.shell.replace(/<link[^>]*>/,''));await p.addStyleTag({content:f.styles});await p.addScriptTag({content:f.bundle()});}else await p.goto(new URL('.test-output/sequence/test.html',url).href);
 await p.waitForFunction(()=>typeof(window as any).mount==='function');
 const mount=async(ids:string|string[],options={})=>p.evaluate(({ids,options})=>(window as any).mount(typeof ids==='string'?[ids]:ids,options),{ids,options});
 const update=async(options:Record<string,unknown>)=>p.evaluate(o=>(window as any).api.updateFoundation(o),options);
 const data=async()=>p.evaluate(()=>(window as any).api.getData());
 const settle=async()=>p.waitForFunction(()=>(window as any).activeFrames.size===0,{},{timeout:4500});
 const items=[{value:'one',label:'Design',badge:'8'},{value:'two',label:'Motion',badge:'4'},{value:'three',label:'Ready'},{value:'locked',label:'Locked',disabled:true}];
 await run('10 pagination materials move the selected surface while native keys and committed page update immediately',async()=>{
  for(const item of targets.filter(x=>x.category==='pagination')){await mount(item.id,{value:4,totalPages:12});await p.waitForTimeout(40);await settle();const before=await p.locator('.sq-page-indicator .sq-skin').innerHTML();
   await p.locator('[data-sq-key="p5"]').click();const response=await p.locator('.sq-page-indicator .sq-skin').innerHTML();assert.notEqual(response,before,item.id);assert.equal(await data(),5,item.id);assert.equal(await p.locator('[aria-current="page"]').getAttribute('data-page'),'5');assert.equal(await p.locator('[data-sq-page]').innerText(),'05');assert.equal(await p.locator('[data-sq-key="p5"]').evaluate(e=>e===document.activeElement),true);const bounds=await p.locator('[data-sq-key="p5"]').boundingBox();await p.waitForTimeout(90);const during=await p.locator('[data-sq-key="p5"]').boundingBox();assert.ok(bounds&&during&&Math.abs(bounds.x-during.x)<.5&&Math.abs(bounds.width-during.width)<.5);
   await settle();
  }
 });
 await run('pagination keeps focused keys, uses a bounded range, clamps totals and disables boundary navigation',async()=>{
  await mount('folio-pages',{value:4,totalPages:12});await p.locator('[data-sq-key="next"]').focus();await p.keyboard.press('Enter');assert.equal(await data(),5);assert.equal(await p.locator('[data-sq-key="next"]').evaluate(e=>e===document.activeElement),true);
  await p.evaluate(()=>{(window as any).savedKey=document.querySelector('[data-sq-key="next"]');(window as any).api.updateFoundation({totalPages:10000});});assert.equal(await p.locator('[data-sq-key="next"]').evaluate(e=>e===(window as any).savedKey),true);assert.ok(await p.locator('.sq-page-list [data-page]').count()<=7);
  await p.evaluate(()=>(window as any).api.setData(10000));assert.ok(await p.locator('[data-sq-key="next"]').isDisabled());await update({totalPages:1});assert.equal(await data(),1);assert.ok(await p.locator('[data-sq-key="prev"]').isDisabled());assert.ok(await p.locator('[data-sq-key="next"]').isDisabled());assert.equal(await p.locator('[aria-current]').count(),1);
 });
 await run('native pagination anchors retain URLs and modifier behavior; ordinary callbacks do not fake navigation success',async()=>{
  await mount('blueprint-pages',{value:4});await p.evaluate(()=>{const w=window as any;w.changes=[];w.api.updateFoundation({hrefForPage:(n:number)=>`/library?page=${n}&filter=active`,onDataChange:(n:number)=>w.changes.push(n)});});
  assert.equal(await p.locator('[data-sq-key="p5"]').getAttribute('href'),'/library?page=5&filter=active');
  const verdict=await p.locator('[data-sq-key="p5"]').evaluate(el=>{const prevented:boolean[]=[];const root=el.closest('.sop-sequence')!;root.addEventListener('click',e=>{prevented.push(e.defaultPrevented);e.preventDefault();});for(const extras of [{ctrlKey:true},{metaKey:true},{shiftKey:true},{altKey:true},{}])el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,...extras}));return {prevented,changes:(window as any).changes,value:(window as any).api.getData()};});
  assert.deepEqual(verdict,{prevented:[false,false,false,false,false],changes:[5],value:4});await update({disabled:true});assert.equal(await p.locator('a[href]').count(),0);await update({disabled:false,readOnly:true});assert.equal(await p.locator('a[href]').count(),0);
 });
 await run('controlled pagination can decline or accept updates with no animated phantom selection',async()=>{
  await mount('prism-pages',{value:4,controlled:true});await p.locator('[data-sq-key="p5"]').click();assert.equal(await data(),4);assert.equal(await p.locator('[aria-current]').getAttribute('data-page'),'4');
  await p.evaluate(()=>{const w=window as any;w.api.updateFoundation({onDataChange:(v:number)=>w.api.setData(v)});});await p.locator('[data-sq-key="p5"]').click();assert.equal(await data(),5);await settle();
 });
 await run('pagination handles RTL, rapid jumps and resize with the indicator on the real current key',async()=>{
  await mount('mercury-pages',{value:4,totalPages:100});await p.locator('.sop-sequence').evaluate(e=>e.setAttribute('dir','rtl'));
  for(const n of [1,100,3,40,99,5])await p.evaluate(n=>(window as any).api.setData(n),n);await settle();await p.setViewportSize({width:390,height:844});await p.waitForTimeout(80);await settle();
  const a=await p.locator('[aria-current]').boundingBox(),b=await p.locator('.sq-page-indicator').boundingBox();assert.ok(a&&b);assert.ok(Math.abs((a.x+a.width/2)-(b.x+b.width/2))<=2);await p.setViewportSize({width:740,height:960});
 });
 await run('all 16 tag materials change geometry on hover without default symbols or moving labels',async()=>{
  for(const item of targets.filter(x=>x.category==='badges')){await p.mouse.move(0,0);await mount(item.id,{items,selectable:true,removable:true,value:[],name:'filters'});await settle();const chip=p.locator('[data-tag-key="one"]');const before=await chip.locator('.sq-skin').innerHTML();const box=await chip.locator('.sq-chip-text').boundingBox();await chip.hover();await p.waitForTimeout(130);assert.notEqual(await chip.locator('.sq-skin').innerHTML(),before,item.id);assert.deepEqual(await chip.locator('.sq-chip-text').boundingBox(),box,item.id);assert.equal(await chip.locator('.sq-chip-copy > svg').count(),0);}
 });
 await run('native tag selection preserves the input instance, form values, read-only state and keyboard operation',async()=>{
  await mount('aurora-tags',{items,selectable:true,removable:true,value:[],name:'filters'});const input=p.locator('[data-tag-select="one"]');await input.evaluate(e=>(window as any).savedInput=e);await input.focus();await p.keyboard.press('Space');assert.deepEqual(await data(),['one']);assert.equal(await input.evaluate(e=>e===(window as any).savedInput&&e===document.activeElement),true);assert.deepEqual(await p.locator('form').evaluate((e:HTMLFormElement)=>new FormData(e).getAll('filters')),['one']);
  await update({readOnly:true});await p.keyboard.press('Space');assert.deepEqual(await data(),['one']);assert.deepEqual(await p.locator('form').evaluate((e:HTMLFormElement)=>new FormData(e).getAll('filters')),['one']);assert.ok(await p.locator('[data-tag-remove="one"]').isDisabled());await update({readOnly:false});assert.ok(await p.locator('[data-tag-select="locked"]').isDisabled());
 });
 await run('tag removal affects only that tag, removes its form input immediately and transfers focus predictably',async()=>{
  await mount('folio-tags',{items,selectable:true,removable:true,value:['one','two'],name:'filters'});await p.locator('[data-tag-remove="one"]').focus();await p.keyboard.press('Enter');assert.deepEqual(await data(),['two']);assert.equal(await p.locator('[data-tag-key="one"]').count(),0);assert.equal(await p.locator('[data-tag-remove="two"]').evaluate(e=>e===document.activeElement),true);assert.deepEqual(await p.locator('form').evaluate((e:HTMLFormElement)=>new FormData(e).getAll('filters')),['two']);assert.equal(await p.locator('.sq-removal-echo input,.sq-removal-echo button').count(),0);await p.waitForTimeout(450);assert.equal(await p.locator('.sq-removal-echo').count(),0);
 });
 await run('controlled tags separate selection from items and preserve a deletion rejected by the parent',async()=>{
  await mount('mercury-tags',{items,selectable:true,removable:true,value:['one'],controlled:true});await p.locator('[data-tag-select="two"]').click();assert.deepEqual(await data(),['one']);assert.equal(await p.locator('[data-tag-select="two"]').isChecked(),false);
  await p.evaluate(()=>{(window as any).actions=[];(window as any).api.updateFoundation({onAction:(v:string)=>(window as any).actions.push(v)});});await p.locator('[data-tag-remove="one"]').click();assert.equal(await p.locator('[data-tag-key]').count(),4);assert.deepEqual(await p.evaluate(()=>(window as any).actions),['one']);
  await update({items:items.slice(1),value:['two']});assert.equal(await p.locator('[data-tag-key="one"]').count(),0);assert.deepEqual(await data(),['two']);
 });
 await run('tag reset, empty state, reordered items, duplicate keys and mode changes work without stale nodes',async()=>{
  await mount('prism-tags',{items,selectable:true,removable:true,defaultValue:['one']});await p.locator('[data-tag-remove="one"]').click();await p.locator('#reset').click();await p.waitForTimeout(40);assert.equal(await p.locator('[data-tag-key]').count(),4);assert.deepEqual(await data(),['one']);
  await update({items:[items[1],items[0],items[1]],value:['two'],selectable:false,removable:false});assert.deepEqual(await p.locator('[data-tag-key]').evaluateAll(es=>es.map(e=>(e as HTMLElement).dataset.tagKey)),['two','one']);assert.equal(await p.locator('.sq-chip input,.sq-chip button').count(),0);
  await update({selectable:true,removable:true});assert.equal(await p.locator('.sq-chip input').count(),2);await update({items:[],value:[]});assert.equal(await p.locator('[data-tag-key]').count(),0);assert.match(await p.locator('[data-tags-hint]').innerText(),/ありません/);
 });
 await run('optional icon/count remain optional, content is escaped and nested controls are not generated',async()=>{
  await mount('ceramic-tags',{items:[{value:'x',label:'<img src=x>',icon:'check',badge:'12'}],selectable:true,removable:true});assert.equal(await p.locator('.sq-chip-copy > svg').count(),1);assert.equal(await p.locator('.sq-chip img').count(),0);assert.equal(await p.locator('.sq-chip-text').innerText(),'<img src=x>');assert.equal(await p.locator('.sq-chip-count').innerText(),'12');assert.equal(await p.locator('label button,button button').count(),0);
  await update({items:[{value:'x',label:'Plain'}]});assert.equal(await p.locator('.sq-chip-copy > svg').count(),0);assert.ok(await p.locator('.sq-chip-count').isHidden());
 });
 await run('all layouts support 320/390/768, long Japanese text, large page totals and long removable tags',async()=>{
  await p.emulateMedia({reducedMotion:'reduce'});for(const width of [320,390,768]){await p.setViewportSize({width,height:1000});for(const item of targets){await mount(item.id,{label:'利用先の長い日本語の見出しを配置して確認します',description:'選択中の情報が見え、必要な操作が収まります。',totalPages:100000,value:item.category==='pagination'?50000:[],items:[{value:'one',label:'表示領域が小さい場合にも使える長い日本語ラベル',badge:'1234'},{value:'two',label:'SuperLongUnbrokenIdentifierThatMustWrapWithoutOverflow'}],selectable:true,removable:true});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),item.id+':'+width);if(item.category==='badges'){const root=await p.locator('.sop-sequence').boundingBox();for(const box of await p.locator('[data-tag-key]').evaluateAll(es=>es.map(e=>({left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right}))))assert.ok(root&&box.left>=root.x-1&&box.right<=root.x+root.width+1,item.id);}}}
  await p.setViewportSize({width:740,height:960});await p.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('reduced motion and forced colors keep selection and text while motion stops',async()=>{
  await p.emulateMedia({reducedMotion:'reduce'});for(const item of targets){await mount(item.id,{value:item.category==='pagination'?4:[],items,selectable:true,removable:true});if(item.category==='pagination')await p.locator('[data-sq-key="p5"]').click();else await p.locator('[data-tag-select="one"]').click();await p.waitForTimeout(20);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,item.id);}
  await p.emulateMedia({reducedMotion:'reduce',forcedColors:'active'});await mount('folio-pages',{value:4});assert.ok(await p.locator('[aria-current]').isVisible());assert.ok(await p.locator('.sq-page-indicator').isHidden());await mount('ceramic-tags',{items,selectable:true,value:['one']});assert.ok(await p.locator('[data-tag-select="one"]').isChecked());assert.ok(await p.locator('.sq-skin').first().isHidden());await p.emulateMedia({reducedMotion:'no-preference',forcedColors:'none'});
 });
 await run('frame scheduling settles on its own and teardown cancels all decorative echoes and observers',async()=>{
  for(const item of targets){await mount(item.id,{items,selectable:true,removable:true,value:item.category==='pagination'?4:['one']});if(item.category==='pagination')await p.locator('[data-sq-key="p5"]').click();else{await p.locator('[data-tag-key="one"]').hover();await p.locator('[data-tag-remove="one"]').click();}await p.evaluate(()=>(window as any).unmount());await p.waitForTimeout(15);assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0,item.id);assert.equal(await p.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,item.id);}
  await mount('tide-tags',{items,selectable:true});await p.locator('[data-tag-key="one"]').hover();await settle();assert.equal(await p.evaluate(()=>(window as any).activeFrames.size),0);
 });
 await run('all 26 component styles remain identical when mixed with the complete 699-part stylesheet',async()=>{
  await p.emulateMedia({reducedMotion:'reduce'});const capture=async()=>{const result:Record<string,unknown>={};for(const item of targets){await p.mouse.move(0,0);await mount(item.id,{items,selectable:true,removable:true,value:item.category==='pagination'?4:['one']});await p.waitForTimeout(20);result[item.id]=await p.locator('.sop-sequence,.sq-pager,.sq-page-key,.sq-chip,.sq-chip-copy,.sq-chip-count,.sq-chip-remove').evaluateAll(es=>es.map(e=>{const c=getComputedStyle(e);return Object.fromEntries(['color','background','font-size','padding','border','width','height','transform','position'].map(k=>[k,c.getPropertyValue(k)]));}));}return result;};
  const before=await capture(),seen=new Set<string>();function css(file:string):string{if(seen.has(file))return '';seen.add(file);return fs.readFileSync(path.join(ROOT,file),'utf8').replace(/@import\s+["']([^"']+)["']\s*;/g,(_,ref:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(file),ref))));}
  const registry=JSON.parse(fs.readFileSync(path.join(ROOT,'src/catalog/registry.json'),'utf8')) as string[];await p.addStyleTag({content:registry.map(base=>css(base+'/styles.css')).join('\n')});assert.deepEqual(await capture(),before);await p.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('native B pagination and tags still operate with the new styles present',async()=>{
  const pages=f.records.find(x=>x.category==='pagination'&&x.designType==='B')!,tags=f.records.find(x=>x.category==='badges'&&x.designType==='B')!;await mount(pages.id,{value:4});await p.locator('[data-page="5"]').first().click();assert.equal(await data(),5);await mount(tags.id,{items,selectable:true,removable:true,value:[]});await p.locator('[data-tag-select="one"]').click();assert.deepEqual(await data(),['one']);await p.locator('[data-tag-remove="one"]').click();assert.equal(await p.locator('[data-tag-select="one"]').count(),0);
 });
 await run('capture real components with their final values',async()=>{
  await mount(['folio-pages','prism-tags'],{value:4});await p.waitForTimeout(500);await p.screenshot({path:path.join(f.out,'pagination-tags.png'),fullPage:true});await p.setViewportSize({width:390,height:844});await mount(['mercury-pages','aurora-tags'],{selectable:true});await p.waitForTimeout(450);await p.screenshot({path:path.join(f.out,'mobile-390.png'),fullPage:true});
 });
 assert.deepEqual(errors,[]);console.log(`SEQUENCE ${results.length} browser checks passed (${offline?'real Chromium / explicit offline fixture, NOT Vite':'Vite HTTP'}).`);
}finally{fs.writeFileSync(path.join(f.out,'browser-results.json'),JSON.stringify({mode:offline?'real Chromium / explicit offline fixture; not Vite':'real Vite HTTP',passed:results.length,tests:results,errors},null,2)+'\n');await browser?.close();await close?.();}
