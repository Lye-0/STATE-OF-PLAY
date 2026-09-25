import {selectionIdentity} from '../src/shared/selection-identity.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';
import {selectionValue,nextSelection,validateSelectionItems} from '../src/shared/selection-model.ts';
import {getDelivery,buildPrompt} from '../src/catalog/delivery.ts';
const catalog=buildCatalog(),parts=catalog.parts.filter(p=>(p.category==='tabs'||p.category==='segments')&&!p.tags.includes('GLASS LAB'));
test('48 new choice components, 24 each, with expressive and essential designs',()=>{
 assert.equal(parts.length,48);
 for(const c of ['tabs','segments']){const group=parts.filter(p=>p.category===c);assert.equal(group.length,24);assert.equal(group.filter(p=>p.designType==='A').length,16);assert.equal(group.filter(p=>p.designType==='B').length,8);}
});
test('all demonstrations have exactly three choices but authored engines have no fixed thirds',()=>{
 for(const p of parts){assert.equal([...p.markup.matchAll(/class="sop-choice-item"/g)].length,3);assert.match(p.markup,p.category==='tabs'?/role="tablist"/:/role="radiogroup"/);assert.doesNotMatch(p.markup,/role="switch"/);}
 for(const f of ['selection-indicator.ts','selection-base.css','selection-model.ts'])assert.doesNotMatch(fs.readFileSync(path.join(ROOT,'src/shared',f),'utf8'),/33\.33|nth-child\(3\)/);
});
test('2/3/4/7/12 options support identity, order changes and disabled skip',()=>{
 for(const n of [2,3,4,7,12]){const items=Array.from({length:n},(_,i)=>({value:'v'+i,label:'項目'+i}));assert.doesNotThrow(()=>validateSelectionItems(items));assert.equal(selectionValue(items,'v1'),'v1');assert.equal(selectionValue([...items].reverse(),'v1'),'v1');assert.equal(nextSelection(items,'v'+(n-1),1),'v0');assert.equal(nextSelection(items,'v0',-1),'v'+(n-1));}
 const items=[{value:'a',label:'a'},{value:'b',label:'b',disabled:true},{value:'c',label:'c'}];assert.equal(nextSelection(items,'a',1),'c');assert.equal(selectionValue(items,'b'),'a');
});
test('empty, all-disabled, removed values and Home/End have defined fallbacks',()=>{
 assert.equal(selectionValue([],''),'');assert.equal(nextSelection([],'',1),'');
 const d=[{value:'a',label:'a',disabled:true}];assert.equal(selectionValue(d,'a'),'');assert.equal(nextSelection(d,'a','last'),'');
 const a=[{value:'a',label:'A'},{value:'c',label:'C'}];assert.equal(selectionValue(a,'removed'),'a');assert.equal(nextSelection(a,'gone',-1),'c');assert.equal(nextSelection(a,'c','first'),'a');
});
test('duplicate or empty values and missing accessible labels are rejected',()=>{
 assert.throws(()=>validateSelectionItems([{value:'a',label:'A'},{value:'a',label:'B'}]));assert.throws(()=>validateSelectionItems([{value:'',label:'A'}]));assert.throws(()=>validateSelectionItems([{value:'a',label:' '} ]));
});
test('new components expose data-driven React APIs and both integration layouts',()=>{
 for(const p of parts)for(const format of FORMATS)for(const layout of ['portable','original']as const){const d=getDelivery(p,format,layout);assert.ok(d.runtimeFiles.length>=4);assert.ok(d.files.some(f=>f.name===d.entry));assert.match(buildPrompt(p,format,layout,false),/2、3、4、5以上/);assert.match(buildPrompt(p,format,layout,false),/既存プロジェクト/);}
});
test('sample content is outside reusable React component defaults',()=>{
 for(const p of parts){const source=fs.readFileSync(path.join(ROOT,`src/parts/${p.category}/${p.id}/react/${p.componentName}.tsx`),'utf8');assert.match(source,/\.\.\.props/);assert.doesNotMatch(source,/choice-1|アイデアをここに/);}
});
test('selection UI updates only on interaction/layout; no interval/Canvas; supports reduced motion and forced colours',()=>{
 for(const file of ['tabs-controller.ts','segment-controller.ts','selection-indicator.ts'])assert.doesNotMatch(fs.readFileSync(path.join(ROOT,'src/shared',file),'utf8'),/setInterval|requestAnimationFrame\(frame\)/);
 const css=fs.readFileSync(path.join(ROOT,'src/shared/selection-base.css'),'utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);assert.match(css,/\[hidden\]/);
});

test('independently exported groups use collision-resistant DOM-safe identities',()=>{
 const names=Array.from({length:1000},(_,i)=>selectionIdentity(i%2?'tabs':'segments'));
 assert.equal(new Set(names).size,names.length);for(const name of names)assert.match(name,/^sop-(tabs|segments)-[a-z0-9-]+$/);
});
