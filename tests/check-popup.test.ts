import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
const catalog=buildCatalog(), parts=catalog.parts.filter(p=>p.category==='checkboxes'||p.category==='popups');
const source=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
test('Checkboxes and popups each have 24 unique skins, 16 expressive and 8 practical',()=>{
 assert.equal(parts.length,48);
 for(const category of ['checkboxes','popups']){const ps=parts.filter(p=>p.category===category);assert.equal(ps.length,24);assert.equal(ps.filter(p=>p.designType==='A').length,16);assert.equal(ps.filter(p=>p.designType==='B').length,8);}
 assert.equal(new Set(catalog.parts.map(p=>p.id)).size,catalog.parts.length);
});
test('checkboxes are native independently selectable inputs with actual labels, not switches',()=>{
 for(const p of parts.filter(p=>p.category==='checkboxes')){assert.match(p.markup,/^<label/);assert.match(p.markup,/<input[^>]+type="checkbox"/);assert.equal((p.markup.match(/type="checkbox"/g)||[]).length,1);assert.match(p.markup,/sop-check-label/);assert.doesNotMatch(p.markup,/role="switch"|contenteditable/);assert.match(p.markup,/sop-check-dash/);}
});
test('popups carry real dialog content, close affordances, labelled headings and native example controls',()=>{
 for(const p of parts.filter(p=>p.category==='popups')){assert.match(p.markup,/<dialog\b/);assert.match(p.markup,/data-popup-title/);assert.match(p.markup,/tabindex="-1"/);assert.match(p.markup,/data-popup-open/);assert.match(p.markup,/data-popup-close="close"/);assert.match(p.markup,/sop-popup-body/);assert.doesNotMatch(p.markup,/<dialog[^>]*\bopen(?:\s|>)/);}
 assert.match(parts.find(p=>p.id==='atelier-palette')!.markup,/type="radio"/);assert.match(parts.find(p=>p.id==='soft-preferences')!.markup,/type="checkbox"/);assert.match(parts.find(p=>p.id==='form-dialog')!.markup,/<input/);
});
test('all 4 formats and 2 layouts carry the new runtime closure and standalone examples',()=>{
 for(const p of parts)for(const f of FORMATS)for(const layout of ['portable','original'] as const){const d=getDelivery(p,f,layout);assert.ok(d.files.some(x=>x.name===d.entry));assert.ok(d.files.some(x=>x.name===d.stylesheet));assert.ok(d.runtimeFiles.length>=2);if(p.category==='popups')assert.ok(d.files.some(x=>x.name.includes('popup-controller')));const prompt=buildPrompt(p,f,layout,false);assert.match(prompt,/既存プロジェクト/);assert.match(prompt,p.category==='popups'?/dialog/:/indeterminate/);}
});
test('reusable React defaults do not bake in display examples or simulated save requests',()=>{
 for(const p of parts){const component=source(`src/parts/${p.category}/${p.id}/react/${p.componentName}.tsx`);assert.match(component,/\.\.\.props/);assert.doesNotMatch(component,/fetch\(|localStorage|ポップアップのデモ|Save the light/);}
 assert.doesNotMatch(source('src/shared/popup-view.tsx'),/dangerouslySetInnerHTML|\.innerHTML\s*=/);
});
test('checkbox interaction does not override Space, forms or use a permanent animation loop',()=>{
 const code=source('src/shared/checkbox-controller.ts');assert.match(code,/indeterminate/);assert.match(code,/defaultPrevented/);assert.match(code,/events\.abort/);assert.doesNotMatch(code,/addEventListener\('keydown'|requestAnimationFrame|setInterval/);
});
test('popup lifecycle maintains top layer, nested focus and shared scroll locking',()=>{
 const code=source('src/shared/popup-controller.ts');assert.match(code,/showModal\(\)/);assert.match(code,/Symbol\.for/);assert.match(code,/closeOnBackdrop/);assert.match(code,/closeOnEscape/);assert.match(code,/event\.stopPropagation/);assert.match(code,/events\.abort/);assert.match(code,/clearTimeout/);assert.doesNotMatch(code,/appendChild\(dialog|append\(dialog|requestAnimationFrame|setInterval/);
});
test('styles accommodate reduced motion, forced colours, disabled and mixed states',()=>{
 for(const f of ['checkbox-base.css','popup-base.css']){const css=source('src/shared/'+f);assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);assert.match(css,/focus-visible/);}
 assert.match(source('src/shared/checkbox-base.css'),/:indeterminate/);assert.match(source('src/shared/checkbox-base.css'),/:disabled/);
});
test('gallery-only thumbnails and status messages are not part of exported popup markup',()=>{
 for(const p of parts.filter(p=>p.category==='popups')){for(const f of FORMATS){const d=getDelivery(p,f,'portable');for(const s of d.files)assert.doesNotMatch(s.code,/mountPopupSample|sop-popup-thumbnail|popup-demo-feedback/);}}
});
