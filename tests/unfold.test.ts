import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';
import {ROOT} from '../scripts/catalog.ts';
import {dependencies,transpile} from '../scripts/source-tools.ts';
const read=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
const exists=(file:string)=>fs.existsSync(path.join(ROOT,file));
const parts=(JSON.parse(read('src/catalog/registry.json')) as string[]).map(base=>({base,...JSON.parse(read(base+'/meta.json'))}));
const acc=parts.filter(p=>p.tags.includes('UNFOLD')),fields=parts.filter(p=>p.tags.includes('RESPONSIVE'));
test('selective revision: sixteen A accordions and six A text fields, no deleted or new IDs',()=>{
 assert.equal(parts.length,807);assert.equal(acc.length,16);assert.equal(fields.length,6);
 assert.ok(acc.every(p=>p.category==='accordions'&&p.designType==='A'));
 assert.ok(fields.every(p=>p.category==='textboxes'&&p.designType==='A'));
 assert.equal(parts.filter(p=>p.category==='textboxes'&&!p.tags.includes('RESPONSIVE')).length,18);
});
test('all sixteen accordion materials have distinct local shapes and decorative, noninteractive layers',()=>{
 const signatures=new Set<string>();
 for(const p of acc){const css=read(p.base+'/styles.css'),markup=read(p.base+'/markup.html');
  signatures.add(css);assert.match(css,/unfold-accordion\.css/);assert.ok(css.includes('.sop-'+p.id));
  assert.equal((markup.match(/class="sop-unfold-scene" aria-hidden="true"/g)||[]).length,3);
  assert.match(markup,/aria-expanded=/);assert.match(markup,/inert/);assert.match(read(p.base+'/prompt.md'),/本文を作り直さず/);
 }
 assert.equal(signatures.size,16);
});
test('React and Vanilla closures include the same material engine and keep stable core APIs',()=>{
 for(const p of [...acc,...fields])for(const entry of [p.base+'/vanilla/init.ts',p.base+'/react/'+p.componentName+'.tsx']){
  const files=dependencies(entry,read,exists);
  assert.ok(files.includes('src/shared/'+(p.category==='accordions'?'unfold-accordion.ts':'responsive-field.ts')),entry);
  assert.ok(files.includes('src/shared/'+(p.category==='accordions'?'accordion-controller.ts':'text-field.ts')),entry);
  for(const f of files.filter(f=>/\.tsx?$/.test(f)))assert.ok(transpile(read(f),f));
 }
});
test('field effects neither inspect text nor intercept native editing or send content',()=>{
 const s=read('src/shared/responsive-field.ts');
 assert.doesNotMatch(s,/\.value\b|selectionStart|setSelectionRange|preventDefault|stopPropagation|setInterval|fetch\(|localStorage|XMLHttpRequest/);
 for(const e of ['compositionstart','compositionend','isComposing','readOnly','disabled'])assert.ok(s.includes(e));
 assert.match(read('src/shared/responsive-field.css'),/transform:none!important;filter:none!important;transition:none!important/);
});
test('presentation cleanup covers observers, page visibility, preferences and animation frames',()=>{
 for(const f of ['unfold-accordion.ts','responsive-field.ts']){const s=read('src/shared/'+f);
  for(const token of ['cancelAnimationFrame','life.abort()','observer.disconnect()','prefers-reduced-motion','visibilitychange','isConnected'])assert.ok(s.includes(token),f+token);
  assert.doesNotMatch(s,/setInterval/);
 }
});
test('native cores remain semantic, while optional presentation refs/layers never enter input attributes',()=>{
 const a=read('src/shared/accordion-view.tsx'),f=read('src/shared/text-field-view.tsx');
 assert.match(a,/rootRef,motionLayer,\.\.\.attributes/);assert.match(a,/\{motionLayer\}<Heading/);
 assert.match(f,/inputRef, rootRef, className/);assert.match(f,/TextFieldProps & \{rootRef\?/);
 assert.match(read('src/shared/accordion-controller.ts'),/panel.inert=!active/);
});
test('new styles retain readable, reduced-motion and forced-colors fallbacks',()=>{
 for(const f of ['unfold-accordion.css','responsive-field.css']){const s=read('src/shared/'+f);assert.match(s,/prefers-reduced-motion/);assert.match(s,/forced-colors/);}
 for(const p of fields){const s=read(p.base+'/styles.css');assert.ok(s.includes('.sop-textfield.sop-'+p.id));assert.match(s,/data-invalid/);}
});
test('shared view adapters retain runtime parameters and do not include showcase samples',()=>{
 const a=read('src/shared/unfold-accordion-view.tsx'),f=read('src/shared/responsive-field-view.tsx');
 assert.match(a,/\.\.\.props/);assert.match(f,/\.\.\.props/);assert.doesNotMatch(a+f,/sample|placeholder=/);
 assert.ok(parts.filter(p=>p.category==='accordions'&&p.designType==='B').every(p=>!read(p.base+'/react/'+p.componentName+'.tsx').includes('UnfoldAccordionView')));
});
