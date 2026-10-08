import {createServer} from 'vite';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const root='/workspace/STATE-OF-PLAY',batch=process.argv[2],round=process.argv[3];
const out=`${root}/docs/design-renewal/batches/${batch}/captures/uploads-self-${round}`;
await fs.mkdir(out,{recursive:true});
const server=await createServer({root,configFile:false,optimizeDeps:{entries:[],noDiscovery:true},server:{host:'127.0.0.1',port:0,hmr:false,watch:null}});
await server.listen();
const browser=await chromium.launch({executablePath:'/usr/bin/chromium'}),page=await browser.newPage({viewport:{width:1000,height:1000}}),errors=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
try {
 await page.goto(server.resolvedUrls.local[0]+`docs/design-renewal/batches/${batch}/snapshot/round-${round}/index.html`);
 await page.waitForFunction(()=>window.ready);
 for(const section of await page.locator('section').all()) {
  const id=await section.getAttribute('data-part'),r=section.locator('[data-foundation=uploads]');if(!await r.count())continue;
  const input=r.locator('[data-upload]'),zone=r.locator('[data-drop]'),files=r.locator('[data-upload-files]'),error=r.locator('[data-upload-error]');
  await r.screenshot({path:out+'/'+id+'-initial.png'});
  if(round==='0'){console.log('BASELINE '+id);continue}
  await r.evaluate(e=>{const form=document.createElement('form');form.style.width='100%';form.style.minWidth='0';e.before(form);form.append(e)});
  await page.evaluate(async id=>{window.apis[id].destroy();const m=await import(new URL('./exports/'+id+'/'+id+'/init.js',location.href).href);window.apis[id]=m.init(document.querySelector('[data-part="'+id+'"] [data-foundation]'),{name:'assets',required:true});window.urlEvents={created:[],revoked:[]};const create=URL.createObjectURL.bind(URL),revoke=URL.revokeObjectURL.bind(URL);URL.createObjectURL=f=>{const u=create(f);window.urlEvents.created.push(u);return u};URL.revokeObjectURL=u=>{window.urlEvents.revoked.push(u);revoke(u)}},id);
  const call=(name,arg)=>page.evaluate(({id,name,arg})=>window.apis[id][name](arg),{id,name,arg});
  const selected=()=>input.evaluate(e=>Array.from(e.files).map(f=>f.name));
  assert.equal(await input.evaluate(e=>e.checkValidity()),false);
  await input.focus();const chooser=page.waitForEvent('filechooser');await input.press('Enter');await (await chooser).setFiles([{name:'notes.txt',mimeType:'text/plain',buffer:Buffer.from('native file')},{name:'sheet.pdf',mimeType:'application/pdf',buffer:Buffer.from('pdf') }]);
  assert.deepEqual(await selected(),['notes.txt','sheet.pdf']);assert.equal(await input.evaluate(e=>e.checkValidity()),true);
  assert.deepEqual(await r.evaluate(e=>new FormData(e.closest('form')).getAll('assets').map(f=>f.name)),['notes.txt','sheet.pdf']);
  await input.setInputFiles({name:'invalid.exe',mimeType:'application/octet-stream',buffer:Buffer.from('invalid')});assert.deepEqual(await selected(),['notes.txt','sheet.pdf']);assert.match(await error.textContent(),/形式/);
  await call('updateFoundation',{maxBytes:2});await input.setInputFiles({name:'large.txt',mimeType:'text/plain',buffer:Buffer.from('too large')});assert.match(await error.textContent(),/サイズ/);
  await call('updateFoundation',{maxBytes:10485760,maxFiles:2});await input.setInputFiles({name:'third.txt',mimeType:'text/plain',buffer:Buffer.from('third')});assert.match(await error.textContent(),/2ファイル/);assert.equal(await files.locator('li').count(),2);
  await files.locator('[data-file-remove]').first().click();assert.deepEqual(await selected(),['sheet.pdf']);assert.equal(await input.evaluate(e=>e===document.activeElement),true);
  await r.evaluate(e=>e.closest('form').reset());await page.waitForFunction(id=>document.querySelector('[data-part="'+id+'"] [data-upload]').files.length===0,id);assert.equal(await files.locator('li').count(),0);assert.equal(await error.textContent(),'');
  await call('updateFoundation',{maxFiles:4,required:false});
  await zone.evaluate(e=>{const dt=new DataTransfer();dt.items.add(new File(['drop'],'dropped.txt',{type:'text/plain',lastModified:10}));e.dispatchEvent(new DragEvent('dragenter',{bubbles:true,dataTransfer:dt}));e.dispatchEvent(new DragEvent('dragenter',{bubbles:true,dataTransfer:dt}));e.dispatchEvent(new DragEvent('dragleave',{bubbles:true,dataTransfer:dt}));window.dragStill=e.dataset.dragging;e.dispatchEvent(new DragEvent('drop',{bubbles:true,dataTransfer:dt}));e.dispatchEvent(new DragEvent('drop',{bubbles:true,dataTransfer:dt}))});
  assert.equal(await page.evaluate(()=>window.dragStill),'true');assert.equal(await zone.getAttribute('data-dragging'),'false');assert.deepEqual(await selected(),['dropped.txt']);
  await call('updateFoundation',{readOnly:true});assert.equal(await input.isDisabled(),true);assert.equal(await files.locator('button').isDisabled(),true);
  await zone.evaluate(e=>{const dt=new DataTransfer();dt.items.add(new File(['x'],'readonly.txt',{type:'text/plain'}));e.dispatchEvent(new DragEvent('drop',{bubbles:true,dataTransfer:dt}))});assert.deepEqual(await selected(),['dropped.txt']);
  await call('updateFoundation',{readOnly:false,disabled:true});assert.equal(await input.isDisabled(),true);await call('setDisabled',false);
  await call('updateFoundation',{multiple:false});await input.setInputFiles({name:'single.txt',mimeType:'text/plain',buffer:Buffer.from('one')});assert.deepEqual(await selected(),['single.txt']);
  await call('updateFoundation',{multiple:true,label:'長い日本語のファイル選択LongUnbrokenLatinHeadingWithoutWhitespace',description:'補足説明も長いSupplementalInformationWithoutWhitespace'});
  await input.setInputFiles({name:'日本語の非常に長いファイル名LongUnbrokenLatinFileNameWithoutWhitespaceAndWithoutExtensionSpacing.txt',mimeType:'text/plain',buffer:Buffer.from('long')});
  for(const width of[320,390,768]){await page.setViewportSize({width,height:844});await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));const fit=await r.evaluate(e=>{const a=e.getBoundingClientRect();return {scroll:e.scrollWidth,client:e.clientWidth,left:a.left,right:a.right,children:Array.from(e.querySelectorAll('*')).filter(x=>x.scrollWidth>x.clientWidth+1).map(x=>({tag:x.tagName,cls:x.className,w:x.clientWidth,scroll:x.scrollWidth}))}});assert.ok(fit.scroll<=fit.client+1&&fit.left>=0&&fit.right<=width+1,id+' fits '+width+' '+JSON.stringify(fit));assert.ok(await files.locator('li>span:nth-child(2)').evaluateAll(es=>es.every(e=>{const box=e.getBoundingClientRect();return Array.from(e.querySelectorAll('strong,small')).every(t=>{const range=document.createRange();range.selectNodeContents(t);return Array.from(range.getClientRects()).every(a=>a.left>=box.left-.5&&a.right<=box.right+.5)})})),id+' all filename and metadata glyphs fit '+width);await r.screenshot({path:out+'/'+id+'-narrow-'+width+'.png'})}
  await r.evaluate(e=>e.dir='rtl');await r.screenshot({path:out+'/'+id+'-rtl.png'});
  const geometry=()=>zone.locator('strong').evaluate(e=>{const a=e.getBoundingClientRect(),b=e.closest('[data-drop]').getBoundingClientRect();return{x:a.x-b.x,y:a.y-b.y,w:a.width,h:a.height,font:getComputedStyle(e).font}});const stable=await geometry();await input.hover();await page.waitForTimeout(400);assert.deepEqual(await geometry(),stable);await zone.evaluate(e=>e.dataset.dragging='true');await page.waitForTimeout(400);assert.deepEqual(await geometry(),stable);await zone.evaluate(e=>e.dataset.dragging='false');await page.mouse.move(1,1);assert.deepEqual(await geometry(),stable);
  await page.emulateMedia({forcedColors:'active',reducedMotion:'reduce'});assert.notEqual(await zone.locator('strong').evaluate(e=>getComputedStyle(e).color),await zone.evaluate(e=>getComputedStyle(e).backgroundColor));assert.equal(await r.evaluate(e=>e.getAnimations({subtree:true}).length),0);await r.screenshot({path:out+'/'+id+'-forced.png'});await page.emulateMedia({forcedColors:'none',reducedMotion:'no-preference'});
  const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6ZmkAAAAASUVORK5CYII=','base64');await input.setInputFiles({name:'tiny.png',mimeType:'image/png',buffer:png});assert.ok(await files.locator('img').count());await r.screenshot({path:out+'/'+id+'-selected.png'});
  await call('destroy');assert.equal(await r.getAttribute('data-foundation-mounted'),null);assert.ok(await page.evaluate(()=>window.urlEvents.created.every(u=>window.urlEvents.revoked.includes(u))));
  const count=await files.locator('li').count();await input.setInputFiles({name:'after.txt',mimeType:'text/plain',buffer:Buffer.from('after')});assert.equal(await files.locator('li').count(),count);
  checks.push({id,nativeKeyboardChooser:true,formData:true,required:true,accept:true,size:true,maxFiles:true,removeFocus:true,reset:true,dragDepth:true,drop:true,dedup:true,readOnly:true,disabled:true,singleMultiple:true,longNarrow:true,rtl:true,fixedText:true,forced:true,reduced:true,objectURLCleanup:true,destroy:true});console.log('PASS '+id);
 }
 assert.deepEqual(errors,[]);await fs.writeFile(out+'/checks.json',JSON.stringify({checks,errors},null,2));
}finally{await browser.close();await server.close()}
