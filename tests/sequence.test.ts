import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {ROOT} from '../scripts/catalog.ts';
import {dependencies} from '../scripts/source-tools.ts';
import {pageState,renderPagination} from '../src/shared/foundation/sequence/pagination.ts';
import {tagChoices,tagValue,renderBadges} from '../src/shared/foundation/sequence/badges.ts';
import {pageItems} from '../src/shared/foundation/navigation.ts';
import {SEQUENCE_MATERIALS,sequenceSkin,materialOf} from '../src/shared/foundation/sequence/skin.ts';
const read=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
const exists=(file:string)=>fs.existsSync(path.join(ROOT,file));
const parts=(JSON.parse(read('src/catalog/registry.json')) as string[]).map(base=>({base,...JSON.parse(read(base+'/meta.json'))}));
const targets=parts.filter(p=>p.tags.includes('SEQUENCE'));

test('SEQUENCE updates only 10 expressive paginations and 16 expressive tag components',()=>{
 assert.equal(parts.length,699);assert.equal(targets.length,26);
 assert.equal(targets.filter(p=>p.category==='pagination').length,10);
 assert.equal(targets.filter(p=>p.category==='badges').length,16);
 for(const p of targets){assert.equal(p.designType,'A');assert.equal(p.version,'4.9.0');assert.ok(SEQUENCE_MATERIALS.includes(p.foundation.variant));}
 assert.equal(parts.filter(p=>p.category==='loaders').length,39);
});
test('pagination normalizes non-finite values, negative bounds, decimals and a single page',()=>{
 assert.deepEqual(pageState(Infinity,20),{page:1,total:20});assert.deepEqual(pageState(5,NaN),{page:1,total:1});assert.deepEqual(pageState(-5,-10),{page:1,total:1});assert.deepEqual(pageState(5.7,9.9),{page:5,total:9});assert.deepEqual(pageState(3000,12),{page:12,total:12});assert.deepEqual(pageState(null,1),{page:1,total:1});assert.deepEqual(pageState(10,Infinity),{page:1,total:1});
});
test('page keys have a bounded, strictly ordered window at every edge and large totals',()=>{
 for(const total of [1,2,5,8,12,10000,Number.MAX_SAFE_INTEGER])for(const value of [1,2,3,7,total-1,total]){
  const s=pageState(value,total),items=pageItems(s.page,s.total),numbers=items.filter((v):v is number=>typeof v==='number');
  assert.equal(numbers[0],1);assert.equal(numbers.at(-1),total);assert.ok(numbers.includes(s.page));assert.equal(new Set(numbers).size,numbers.length);assert.ok(numbers.every((v,i)=>v>=1&&v<=total&&(i===0||v>numbers[i-1])));assert.ok(items.length<=9);
 }
});
test('tag values are stable unique keys and unknown selections are discarded',()=>{
 const items=[{value:'one',label:'One'},{value:'one',label:'Duplicate'},{value:'two',label:'Two',disabled:true},{value:'',label:'Empty key is valid'}];
 assert.deepEqual(tagChoices(items).map(x=>x.label),['One','Two','Empty key is valid']);
 assert.deepEqual(tagValue(['one','missing','one',''],tagChoices(items)),['one','']);assert.deepEqual(tagValue(null,items),[]);
});
test('each material changes its actual geometry on interaction without text or interactive artwork',()=>{
 const shapes=new Set<string>();for(const material of SEQUENCE_MATERIALS){const rest=sequenceSkin(material,0,0,0,'test'),moving=sequenceSkin(material,1,1,1,'test');assert.notEqual(rest,moving,material);shapes.add(rest);assert.match(rest,/<svg/);assert.doesNotMatch(rest,/<(?:text|input|button|a|script|foreignObject)\b|tabindex|onclick/);assert.doesNotMatch(moving,/NaN|Infinity|undefined/);}
 assert.equal(shapes.size,16);assert.equal(materialOf('unknown'),'aurora');
});
test('all SVG resources are namespaced and hostile IDs cannot inject attributes',()=>{
 for(const material of SEQUENCE_MATERIALS){const svg=sequenceSkin(material,NaN,Infinity,-Infinity,'bad" onload="alert(1)');assert.doesNotMatch(svg,/onload="|NaN|Infinity|<script/);const ids=[...svg.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);for(const m of svg.matchAll(/url\(#([^)]+)\)/g))assert.ok(ids.includes(m[1]));}
});
test('renderers escape host labels and do not assume decorative leading icons',()=>{
 const opts={label:'<img src=x>',description:'a&b'};
 for(const html of [renderBadges(opts),renderPagination(opts)]){assert.doesNotMatch(html,/<img/);assert.match(html,/&lt;img/);assert.match(html,/a&amp;b/);}
 for(const p of targets.filter(p=>p.category==='badges')){assert.ok(p.foundation.items.every((i:{icon?:string})=>i.icon===undefined));}
});
test('new React and Vanilla entries carry the full sequence controller and material graph',()=>{
 for(const p of targets){const css=dependencies(p.base+'/styles.css',read,exists),vanilla=dependencies(p.base+'/vanilla/init.ts',read,exists),react=dependencies(`${p.base}/react/${p.componentName}.tsx`,read,exists);
  assert.ok(css.includes('src/shared/foundation/sequence/style.css'));assert.equal(css.some(f=>/materials\/|atelier\.css/.test(f)),false);
  for(const closure of [vanilla,react])for(const suffix of ['sequence/skin.ts','sequence/motion.ts'])assert.ok(closure.some(f=>f.endsWith(suffix)),p.id+suffix);
 }
});
test('legacy effects exclude new instances without changing other styles',()=>{
 for(const file of ['src/shared/foundation/atelier.css',...SEQUENCE_MATERIALS.map(v=>`src/shared/foundation/materials/${v}.css`)]){
  const css=read(file);assert.match(css,/:not\(\.sop-continuum,\.sop-resonance,\.sop-sequence\)/);
 }
 const css=read('src/shared/foundation/sequence/style.css');assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);assert.match(css,/aria-current/);assert.match(css,/focus-visible/);
});
test('copied design specs and integration guides document the real modules and ownership',()=>{
 for(const p of targets){const prompt=read(p.base+'/prompt.md'),usage=read(p.base+'/usage.md');assert.match(prompt,/4\.9\.0/);assert.match(prompt,/sequence\/skin\.ts/);assert.match(prompt,/sequence\/style\.css/);assert.doesNotMatch(prompt,/atelier\.css|materials\//);assert.match(usage,/onDataChange/);assert.match(usage,/destroy/);if(p.category==='badges')assert.match(usage,/onAction/);else assert.match(usage,/hrefForPage/);}
});
test('presentation uses stable keyed controls and only clones decoration on removal',()=>{
 const p=read('src/shared/foundation/sequence/pagination.ts'),b=read('src/shared/foundation/sequence/badges.ts'),m=read('src/shared/foundation/sequence/motion.ts');
 assert.match(p,/Map<string,HTMLElement>/);assert.doesNotMatch(p,/nav\.innerHTML\s*=/);
 assert.match(b,/input\.type='checkbox'/);assert.match(b,/record\.remove\.type='button'/);assert.match(m,/\.sq-skin/);assert.doesNotMatch(m,/cloneNode/);assert.match(m,/ResizeObserver/);assert.match(m,/\.disconnect\(/);
});
