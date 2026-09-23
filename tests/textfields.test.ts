import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,buildUsage} from '../src/catalog/delivery.ts';
const {parts}=buildCatalog(),fields=parts.filter(p=>p.category==='textboxes');
test('24 actual text fields join the five previous collections, with A16 and B8',()=>{
 assert.ok(parts.length>=144);assert.equal(fields.length,24);
 assert.equal(fields.filter(p=>p.designType==='A').length,16);assert.equal(fields.filter(p=>p.designType==='B').length,8);
 for(const c of ['toggles','blocks','scrollbars','dropdowns','accordions'])assert.equal(parts.filter(p=>p.category===c&&!p.tags.includes('KINETIC')).length,24);
 assert.equal(new Set(parts.map(p=>p.id)).size,parts.length);assert.equal(new Set(parts.map(p=>p.order)).size,parts.length);
 assert.equal(new Set(fields.map(p=>fs.readFileSync(path.join(ROOT,'src/parts/textboxes',p.id,'styles.css'),'utf8'))).size,24);
});
test('every text field uses a native input/textarea, a label and empty feedback/counter regions',()=>{
 for(const p of fields){assert.match(p.markup,/<(?:input|textarea)[^>]+class="sop-field-control"/);assert.match(p.markup,/<label class="sop-field-label"/);assert.match(p.markup,/aria-label=/);assert.match(p.markup,/sop-field-validation/);assert.match(p.markup,/aria-live="polite"/);assert.doesNotMatch(p.markup,/contenteditable/);assert.match(p.markup,/name="/);}
 assert.ok(fields.filter(p=>p.markup.includes('<textarea')).length>=6);
 assert.equal(fields.filter(p=>p.markup.includes('type="password"')).length,2);
});
test('text field exports include portable input handling and styles in all 192 layouts/formats',()=>{
 for(const p of fields)for(const format of FORMATS)for(const layout of ['portable','original']as const){
  const d=getDelivery(p,format,layout);assert.ok(d.runtimeFiles.some(f=>/text-field\.(?:ts|js)$/.test(f.name)));assert.ok(d.runtimeFiles.some(f=>f.name.endsWith('text-field-base.css')));
  assert.ok(d.files.some(f=>f.group==='example'));assert.ok(buildUsage(p,format,layout).includes(d.entry));
  const prompt=buildPrompt(p,format,layout);assert.ok(prompt.includes('IME'));assert.ok(prompt.includes('既存プロジェクト'));assert.ok(prompt.includes('readOnly'));
  assert.doesNotMatch(d.runtimeFiles.map(f=>f.code).join('\n'),/localStorage\.setItem|sessionStorage\.setItem|fetch\(|XMLHttpRequest|requestAnimationFrame\(/);
 }
});
test('input enhancement does not intercept editing keys, paste, or composition values',()=>{
 const source=fs.readFileSync(path.join(ROOT,'src/shared/text-field.ts'),'utf8');
 assert.doesNotMatch(source,/addEventListener\(['"](?:keydown|keypress|beforeinput|paste)['"]/);
 assert.doesNotMatch(source,/innerHTML\s*=|\.value\s*=\s*.*\.(?:slice|trim|toUpperCase)/);
 for(const token of ['compositionstart','compositionend','disconnect','removeEventListener'])assert.ok(source.includes(token),token);
 assert.match(source,/field\.form/);assert.match(source,/field\.setCustomValidity/);
});
test('React input API stays content-agnostic and forwards native attributes/change events',()=>{
 const source=fs.readFileSync(path.join(ROOT,'src/shared/text-field-view.tsx'),'utf8');
 for(const token of ['defaultValue','onValueChange','onChange','name','autoComplete','inputRef','useId','textarea','setError'])assert.ok(source.includes(token));
 for(const p of fields){const d=getDelivery(p,'tsx');const entry=d.runtimeFiles.find(f=>f.name===d.entry)!;assert.ok(!entry.code.includes('placeholder='));assert.ok(!entry.code.includes('label='));}
 assert.ok(!source.includes('dangerouslySetInnerHTML'));
});
test('field styles keep legible native sizes, independent action buttons and accessible motion/colour alternatives',()=>{
 const css=fs.readFileSync(path.join(ROOT,'src/shared/text-field-base.css'),'utf8');
 for(const token of ['font-size:16px','prefers-reduced-motion','forced-colors','focus-visible','[hidden]','data-readonly','data-disabled','data-invalid','::selection',':autofill'])assert.ok(css.includes(token),token);
 assert.ok(!/^(?:input|textarea|button)\s*[{,]/m.test(css));
 for(const p of fields){const css=fs.readFileSync(path.join(ROOT,'src/parts/textboxes',p.id,'styles.css'),'utf8');assert.ok(css.includes('.sop-textfield.sop-'+p.id));}
});
test('gallery has a dedicated text field category and state/readonly/disabled controls',()=>{
 const gallery=fs.readFileSync(path.join(ROOT,'src/app/gallery.ts'),'utf8');assert.match(gallery,/textbox-card/);assert.match(gallery,/sop:field-state/);
 const controls=fs.readFileSync(path.join(ROOT,'src/app/textfield-preview.ts'),'utf8');for(const token of ['data-field-disabled','data-field-readonly','data-field-status','data-field-reset','setError'])assert.ok(controls.includes(token));
});
