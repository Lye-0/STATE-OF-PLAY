import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,buildManifest} from '../src/catalog/delivery.ts';
import {sourceReferences,isLocalReference,resolveLocal} from '../scripts/source-tools.ts';
const {parts}=buildCatalog(),buttons=parts.filter(p=>p.category==='buttons'),links=parts.filter(p=>p.category==='links');
const read=(p:string)=>fs.readFileSync(path.join(ROOT,p),'utf8');
test('24 buttons + 16 navigation links retain the 144 previous parts',()=>{
 assert.equal(buttons.length,24);assert.equal(links.length,16);assert.equal(parts.filter(p=>['toggles','blocks','scrollbars','dropdowns','accordions','textboxes','buttons','links'].includes(p.category)).length,184);
 for(const c of ['toggles','blocks','scrollbars','dropdowns','accordions','textboxes'])assert.equal(parts.filter(p=>p.category===c).length,24);
 assert.equal(buttons.filter(p=>p.designType==='A').length,16);assert.equal(links.filter(p=>p.designType==='A').length,10);
 for(const key of ['name','id','order'] as const)assert.equal(new Set(parts.map(p=>p[key])).size,parts.length);
});
test('different authored skins, with native semantics instead of clickable divs',()=>{
 const styles=[...buttons,...links].map(p=>read(`src/parts/${p.category}/${p.id}/styles.css`));assert.equal(new Set(styles).size,40);
 for(const p of buttons){assert.match(p.markup,/^<button type="button"/);assert.match(p.markup,/sop-action-label/);assert.doesNotMatch(p.markup,/role="switch"|href=/);}
 for(const p of links){assert.match(p.markup,/^<a class=/);assert.match(p.markup,/href="#destination"/);assert.doesNotMatch(p.markup,/role="button"|onclick=/);assert.match(p.preview['index.html'],/id="destination"/);}
});
test('four formats and both layouts retain all dependencies, examples and integration rules',()=>{
 for(const p of [...buttons,...links])for(const format of FORMATS)for(const layout of ['portable','original']as const){const d=getDelivery(p,format,layout),names=new Set(d.files.map(f=>f.name));
  for(const f of d.files)for(const ref of sourceReferences(f.code,f.name).filter(isLocalReference))assert.ok(names.has(resolveLocal(f.name,ref.request,n=>names.has(n))));
  assert.ok(d.files.some(f=>f.group==='example'));const prompt=buildPrompt(p,format,layout);assert.ok(prompt.includes('既存プロジェクト'));assert.ok(prompt.includes(d.entry));assert.ok(prompt.includes('ラベル'));
  assert.equal(JSON.parse(buildManifest(p,format,layout)).entry,d.entry);
 }
});
test('navigation adapter does not replace native href activation or attach event loops',()=>{
 const code=read('src/shared/navigation-link.ts');assert.doesNotMatch(code,/addEventListener|preventDefault|window\.location|setInterval|requestAnimationFrame/);
 const react=read('src/shared/navigation-link-view.tsx');assert.match(react,/forwardRef/);assert.match(react,/href: string/);assert.match(react,/noopener/);assert.doesNotMatch(react,/useEffect|onClick=/);
 for(const p of links)assert.ok(p.prompt.includes('中クリック'));
});
test('buttons have opt-in busy guards and do not start application work by themselves',()=>{
 const code=read('src/shared/action-button.ts');assert.match(code,/capture:true/);assert.match(code,/stopImmediatePropagation/);assert.match(code,/events\.abort/);assert.doesNotMatch(code,/fetch\(|setTimeout|setInterval|requestAnimationFrame/);
 const react=read('src/shared/action-button-view.tsx');for(const word of ['forwardRef',"type='button'",'aria-busy','onClickCapture','stopPropagation'])assert.ok(react.includes(word));
 assert.doesNotMatch(react,/dangerouslySetInnerHTML|window\.location|setTimeout/);
});
test('styles have local scope, motion and forced-colour alternatives, and native focus',()=>{
 for(const name of ['action-button','navigation-link']){const css=read(`src/shared/${name}-base.css`);assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);assert.match(css,/focus-visible/);assert.doesNotMatch(css,/^(?:button|a|body|html)\s*[{,]/m);}
 for(const p of [...buttons,...links])assert.doesNotMatch(getDelivery(p,'js').runtimeFiles.map(f=>f.code).join('\n'),/fetch\(|localStorage|sessionStorage|<canvas|requestAnimationFrame\(/);
});
test('gallery-only demos are not exported as native component runtime',()=>{
 for(const p of [...buttons,...links])for(const f of getDelivery(p,'js').runtimeFiles)assert.ok(!f.name.includes('action-preview'),f.name);
 const gallery=read('src/app/gallery.ts');assert.match(gallery,/action-card/);assert.match(gallery,/link-card/);assert.match(gallery,/cleanup\?\.\(/);
});
test('React wrappers preserve refs/native props and leave content to the consumer',()=>{
 for(const p of [...buttons,...links]){const d=getDelivery(p,'tsx'),entry=d.files.find(f=>f.name===d.entry)!.code;assert.match(entry,/forwardRef/);assert.match(entry,/\.\.\.props/);assert.match(entry,/ref=\{ref\}/);assert.ok(!entry.includes('href="'));assert.ok(!entry.includes('children="'));}
});
