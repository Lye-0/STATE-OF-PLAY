import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,buildUsage,packageContents} from '../src/catalog/delivery.ts';
const {parts}=buildCatalog();
const additions=parts.filter(p=>(p.category==='dropdowns'||p.category==='accordions')&&!p.tags.includes('KINETIC')&&!p.tags.includes('GLASS LAB'));
test('six collections retain 48 designed disclosures and add text fields',()=>{
 assert.ok(parts.length>=144);assert.equal(additions.length,48);
 for(const category of ['toggles','blocks','scrollbars','dropdowns','accordions','textboxes'])assert.equal(parts.filter(p=>p.category===category&&!p.tags.includes('KINETIC')&&!p.tags.includes('GLASS LAB')).length,24);
 for(const category of ['dropdowns','accordions']){
  assert.equal(additions.filter(p=>p.category===category&&p.designType==='A').length,16);
  assert.equal(additions.filter(p=>p.category===category&&p.designType==='B').length,8);
 }
 assert.equal(new Set(parts.map(p=>p.id)).size,parts.length);assert.equal(new Set(parts.map(p=>p.name)).size,parts.length);
});
test('dropdowns have designed choice interiors and selection semantics, never action-menu semantics',()=>{
 for(const p of additions.filter(p=>p.category==='dropdowns')){
  assert.match(p.markup,/role="combobox"/);assert.match(p.markup,/role="listbox"/);
  assert.ok((p.markup.match(/role="option"/g)||[]).length>=3);
  for(const token of ['sop-select-option-copy','sop-select-badge','sop-select-check'])assert.ok(p.markup.includes(token),p.id+token);
  // A skins are content-first; icons and heading are intentionally optional. B samples retain both.
  if(p.designType==='B')for(const token of ['sop-select-icon','sop-select-menu-heading'])assert.ok(p.markup.includes(token),p.id+token);
  assert.ok(!p.markup.includes('role="menu"'));
  assert.match(p.prompt,/選択/);
 }
});
test('accordion interiors include designed actual content, and hidden sections are inert',()=>{
 for(const p of additions.filter(p=>p.category==='accordions')){
  assert.equal((p.markup.match(/class="sop-accordion-trigger"/g)||[]).length,3);
  assert.match(p.markup,/aria-expanded="false"/);assert.match(p.markup,/inert/);
  assert.match(p.markup,/sop-panel-|<pre|<p>/);
  assert.ok(p.markup.length>1500,p.id);
 }
});
test('new exports carry common behavior/styles, example content, portable refs and integration prompts in all formats',()=>{
 for(const p of additions)for(const format of FORMATS)for(const layout of ['portable','original']as const){
  const d=getDelivery(p,format,layout),text=d.files.map(f=>f.code).join('\n');
  assert.ok(d.runtimeFiles.some(f=>/controller\.(ts|js)$/.test(f.name)),p.id);
  assert.ok(d.files.some(f=>f.group==='example'));
  assert.match(text,p.category==='dropdowns'?/createSelectController/:/createAccordionController/);
  const prompt=buildPrompt(p,format,layout,true);assert.ok(prompt.includes(p.name));
  assert.ok(buildUsage(p,format,layout).includes(d.entry));
  // React renderers accept supplied content; samples are examples, not unchangeable defaults.
  if(format==='tsx'||format==='jsx')assert.match(text,/items/);
 }
});
test('dropdown and accordion motion is event-driven and respects reduced motion',()=>{
 const acc=fs.readFileSync(path.join(ROOT,'src/shared/accordion-controller.ts'),'utf8');
 assert.doesNotMatch(acc,/setInterval\(|requestAnimationFrame\(/);
 for(const f of ['select-base.css','accordion-base.css'])assert.match(fs.readFileSync(path.join(ROOT,'src/shared',f),'utf8'),/prefers-reduced-motion:reduce/);
 const sel=fs.readFileSync(path.join(ROOT,'src/shared/select-controller.ts'),'utf8');
 assert.match(sel,/opening\?\.abort/);assert.match(sel,/cancelAnimationFrame/);assert.match(sel,/showPopover/);
});

test('native JS examples use HTML stylesheets, not bundler-only CSS module imports',()=>{
 for(const p of additions)for(const layout of ['portable','original']as const){
  const d=getDelivery(p,'js',layout);
  for(const f of d.files.filter(f=>f.name.endsWith('.js')))assert.doesNotMatch(f.code,/import\s+['"][^'"]+\.css['"]/,p.id+' / '+f.name);
 }
});
