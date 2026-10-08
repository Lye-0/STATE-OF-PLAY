import {createServer} from 'vite';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const root='/workspace/STATE-OF-PLAY', out=root+'/docs/design-renewal/batches/B001/captures/reviewer';await fs.mkdir(out,{recursive:true});
const s=await createServer({root,server:{host:'127.0.0.1',port:0,hmr:false}});await s.listen();
const b=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});const p=await b.newPage({viewport:{width:1250,height:1100}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(s.resolvedUrls.local[0]+'docs/design-renewal/batches/B001/snapshot/round-1/index.html');await p.waitForFunction(()=>window.ready);
const results=[];
for(const section of await p.locator('section').all()){
const id=await section.getAttribute('data-part'), button=section.locator('button');
await section.screenshot({path:out+'/'+id+'-off.png'});
if(await button.count()){
const box=await button.boundingBox();const labels=await button.locator('.x-labels').boundingBox();await button.click();const immediate=await button.getAttribute('aria-checked');await p.waitForTimeout(700);await section.screenshot({path:out+'/'+id+'-on.png'});
await button.focus();await p.keyboard.press('Space');const space=await button.getAttribute('aria-checked');await p.keyboard.press('Enter');const enter=await button.getAttribute('aria-checked');
await button.hover();await p.waitForTimeout(130);await p.mouse.move(1,1);await p.waitForTimeout(110);await button.hover();await p.waitForTimeout(700);
results.push({id,immediate,space,enter,box,after:await button.boundingBox(),labels,labelAfter:await button.locator('.x-labels').boundingBox()});
}else{await section.locator('.sop-surface').hover();await p.waitForTimeout(120);await p.mouse.move(1,1);await p.waitForTimeout(100);await section.locator('.sop-surface').hover();await p.waitForTimeout(500);await section.screenshot({path:out+'/'+id+'-hover.png'});}
}
await p.screenshot({path:out+'/all-on.png',fullPage:true});await p.setViewportSize({width:320,height:900});await p.screenshot({path:out+'/narrow.png',fullPage:true});const overflow=await p.evaluate(()=>({client:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
await p.emulateMedia({reducedMotion:'reduce'});for(const btn of await p.locator('button').all())await btn.click();const reduced=await p.locator('button .x-piece').evaluateAll(es=>es.map(e=>getComputedStyle(e).transitionDuration));
await p.emulateMedia({forcedColors:'active'});await p.screenshot({path:out+'/forced.png',fullPage:true});
await fs.writeFile(out+'/checks.json',JSON.stringify({results,overflow,reduced,errors},null,2));
await b.close();await s.close();
