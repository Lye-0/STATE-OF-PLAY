import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {createServer} from 'vite';
import {buildCatalog,ROOT} from '../../../scripts/catalog.ts';
import {getDelivery} from '../../../src/catalog/delivery.ts';
const batch=process.argv[2],work=path.join(ROOT,'docs/design-renewal');
const rows=JSON.parse(fs.readFileSync(work+'/targets.json','utf8')).filter((r:any)=>r.batch===batch&&r.category==='pagination');
const parts=buildCatalog(ROOT,rows.map((r:any)=>r.id),{appearance:false}).parts;
assert.ok(parts.length);
const server=await createServer({root:ROOT,cacheDir:path.join(work,'batches',batch,'exports','vite-cache-pages'),configFile:false,optimizeDeps:{entries:[],noDiscovery:true,include:['react','react-dom/client','react/jsx-dev-runtime']},server:{host:'127.0.0.1',port:0,hmr:false,watch:null}});
await server.listen();
const browser=await chromium.launch({executablePath:'/usr/bin/chromium'}),errors:string[]=[];
try{
 for(const [format,layout] of [['tsx','portable'],['jsx','portable'],['tsx','original'],['jsx','original']] as const){
  const out=path.join(work,'batches',batch,'exports','react-pages',format+'-'+layout);
  fs.mkdirSync(out,{recursive:true});let imports='';
  for(const [part,i] of parts.map((p,i)=>[p,i] as const)){
   const delivery=getDelivery(part,format,layout);
   for(const f of delivery.files){const q=path.join(out,part.id,f.name);fs.mkdirSync(path.dirname(q),{recursive:true});fs.writeFileSync(q,f.code)}
   imports+=`import C${i} from './${part.id}/${delivery.entry}';\n`;
  }
  fs.writeFileSync(out+'/entry.jsx',`import React,{useState}from'react';import{createRoot}from'react-dom/client';${imports}
window.refs={};window.controllers={};window.events=[];
const entries=[${parts.map((p,i)=>`{id:${JSON.stringify(p.id)},C:C${i}}`).join(',')}];
function Fixture({id,C}){const[value,setValue]=useState(4),[reject,setReject]=useState(false),[disabled,setDisabled]=useState(false),[readOnly,setReadOnly]=useState(false),[long,setLong]=useState(false),[total,setTotal]=useState(12),[links,setLinks]=useState(false);return <section data-part={id}>
<button data-reject onClick={()=>setReject(!reject)}>親の拒否</button><button data-disable onClick={()=>setDisabled(!disabled)}>無効</button><button data-readonly onClick={()=>setReadOnly(!readOnly)}>読取</button><button data-long onClick={()=>setLong(!long)}>長文</button><button data-large onClick={()=>{setTotal(12456);setValue(6234)}}>大きい番号</button><button data-large-end onClick={()=>setValue(12456)}>末頁</button><button data-one onClick={()=>{setTotal(1);setValue(1)}}>一頁</button><button data-reset onClick={()=>{setTotal(12);setValue(4)}}>元へ</button><button data-links onClick={()=>setLinks(!links)}>リンク</button>
<div data-case="controlled"><C value={value} totalPages={total} paginationLayout="anchored" onValueChange={v=>{window.events.push({id,value:v});if(!reject)setValue(v)}} hrefForPage={links?n=>'#page-'+n:undefined} disabled={disabled} readOnly={readOnly} label={long?'用途に合わせてページを選ぶ長い日本語LongUnbrokenLatinLabelWithoutSpaces':'コレクションをめくる'} description={long?'任意の補足SupplementalInformationWithoutWhitespace':''} ref={e=>window.refs[id]=e}/></div>
<div data-case="uncontrolled"><C defaultValue={2} totalPages={12} paginationLayout="anchored" label="独立したページ" controllerRef={e=>window.controllers[id]=e}/></div></section>}
const root=createRoot(document.querySelector('#root'));window.teardown=()=>root.unmount();root.render(<React.StrictMode>{entries.map(e=><Fixture key={e.id} {...e}/>)}</React.StrictMode>);`);
  fs.writeFileSync(out+'/index.html','<!doctype html><html lang="ja"><meta charset="utf-8"><link rel="icon" href="data:,"><style>*{box-sizing:border-box}body{padding:18px;margin:0;background:#181d23;color:white;font:14px Arial}section[data-part]{max-width:410px;margin:32px 0}</style><div id="root"></div><script type="module" src="./entry.jsx"></script>');
  const page=await browser.newPage({viewport:{width:390,height:844}});
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(server.resolvedUrls!.local[0]+path.relative(ROOT,out+'/index.html'));
  await page.waitForFunction(n=>document.querySelectorAll('[data-part]').length===n,parts.length);
  for(const part of parts){
   const h=page.locator(`[data-part="${part.id}"]`),c=h.locator('[data-case=controlled]'),u=h.locator('[data-case=uncontrolled]'),r=c.locator('[data-foundation]'),nav=r.locator('[data-pages]'),current=r.locator('[aria-current=page]');
   await nav.locator('[aria-label="次のページ"]').focus();await page.keyboard.press('Enter');assert.equal(await current.getAttribute('data-page'),'5');
   assert.equal(await nav.locator('[aria-label="次のページ"]').evaluate(e=>e===document.activeElement),true);
   assert.equal(await u.locator('[aria-current=page]').getAttribute('data-page'),'2');
   await h.locator('[data-reject]').click();await nav.locator('[aria-label="次のページ"]').click();assert.equal(await current.getAttribute('data-page'),'5');
   await h.locator('[data-reject]').click();await h.locator('[data-readonly]').click();await nav.locator('[aria-label="次のページ"]').click();assert.equal(await current.getAttribute('data-page'),'5');await h.locator('[data-readonly]').click();
   await h.locator('[data-disable]').click();assert.equal(await nav.locator('button:not(:disabled)').count(),0);await h.locator('[data-disable]').click();
   await page.evaluate(id=>(window as any).controllers[id].setData(9),part.id);assert.equal(await u.locator('[aria-current=page]').getAttribute('data-page'),'9');assert.equal(await current.getAttribute('data-page'),'5');
   await h.locator('[data-one]').click();assert.equal(await nav.locator('[data-page]').count(),3);assert.equal(await nav.locator('button:disabled').count(),2);
   await h.locator('[data-large]').click();assert.equal(await current.textContent(),'6234');assert.equal(await r.locator('[data-page-info] strong').textContent(),'6234');
   await h.locator('[data-long]').click();await r.evaluate(e=>e.dir='rtl');
   for(const end of [false,true]){
    if(end)await h.locator('[data-large-end]').click();
    for(const dir of ['ltr','rtl'])for(const width of [320,390,768]){
     await r.evaluate((e,dir)=>e.dir=dir,dir);await page.setViewportSize({width,height:844});await page.evaluate(()=>new Promise<void>(res=>requestAnimationFrame(()=>requestAnimationFrame(()=>res()))));
     assert.ok(await r.evaluate(e=>{const a=e.getBoundingClientRect();return e.scrollWidth<=e.clientWidth+1&&a.left>=0&&a.right<=innerWidth+1}),part.id+' fits '+width);
     assert.ok(await current.evaluate(e=>{const a=e.getBoundingClientRect();return a.width>=27&&a.height>=32}),part.id+' page hit '+width);
     const glyphs=await nav.locator('.ff-page-window :is(button,a)').evaluateAll(es=>es.map(e=>{
      const range=document.createRange();range.selectNodeContents(e);const t=range.getBoundingClientRect(),a=e.getBoundingClientRect(),c=getComputedStyle(e);let left=a.left+parseFloat(c.borderLeftWidth)+parseFloat(c.paddingLeft),right=a.right-parseFloat(c.borderRightWidth)-parseFloat(c.paddingRight);
      if(e.closest('.sop-track-stop-pages')&&e.matches('[aria-current=page]')){const p=getComputedStyle(e,'::before');left=a.left+parseFloat(p.left)+parseFloat(p.borderLeftWidth);right=a.right-parseFloat(p.right)-parseFloat(p.borderRightWidth);}
      return {label:e.textContent,lines:range.getClientRects().length,inside:t.left>=left-.5&&t.right<=right+.5};
     }));assert.ok(glyphs.every(g=>g.lines===1&&g.inside),part.id+' all page glyphs '+width+' '+dir+' end='+end+' '+JSON.stringify(glyphs));
    }
   }
   await h.locator('[data-reset]').click();await h.locator('[data-links]').click();
   const link=nav.locator('[aria-label="ページ 5"]');assert.equal(await link.getAttribute('href'),'#page-5');
   const count=await page.evaluate(()=>(window as any).events.length);await link.click({modifiers:['Control']});assert.equal(await page.evaluate(()=>(window as any).events.length),count);
   await h.locator('[data-readonly]').click();
   const readOnlyURL=page.url(),readOnlyEvents=await page.evaluate(()=>(window as any).events.length);
   assert.equal(await nav.locator('a[href]').count(),0);assert.equal(await link.getAttribute('aria-disabled'),'true');
   await link.click({force:true});await link.dispatchEvent('click',{ctrlKey:true});
   assert.equal(page.url(),readOnlyURL);assert.equal(await page.evaluate(()=>(window as any).events.length),readOnlyEvents);assert.equal(await current.getAttribute('data-page'),'4');
   await h.locator('[data-readonly]').click();
   await h.locator('[data-disable]').click();assert.equal(await nav.locator('a[href]').count(),0);await h.locator('[data-disable]').click();await h.locator('[data-links]').click();
   await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});
   assert.notEqual(await current.evaluate(e=>getComputedStyle(e).color),await current.evaluate(e=>getComputedStyle(e).backgroundColor));assert.equal(await r.evaluate(e=>e.getAnimations({subtree:true}).length),0);
   await page.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
  }
  await page.evaluate(()=>(window as any).teardown());assert.equal(await page.locator('[data-part]').count(),0);
  assert.equal(await page.evaluate(()=>Object.values((window as any).refs).every(v=>v===null)),true);assert.equal(await page.evaluate(()=>Object.values((window as any).controllers).every(v=>v===null)),true);
  await page.close();console.log('PASS '+parts.length+' pages React '+format+' '+layout+' actual keyboard/focus/ARIA/accepted-rejected/independent state/readonly/disabled/dynamic totals/large page numbers/long320390768/RTL/hits/native links/modified click/forced/reduced/refs/StrictMode cleanup');
 }
 assert.deepEqual(errors,[]);
}finally{await browser.close();await server.close();}
