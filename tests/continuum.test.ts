/** Author-source, native semantics and delivery contracts for v4.8.0. */
import fs from 'node:fs';import path from 'node:path';import test from 'node:test';import assert from 'node:assert/strict';
import {ROOT} from '../scripts/catalog.ts';import {dependencies} from '../scripts/source-tools.ts';
import {progressGeometry,intakeGeometry,MATERIALS,materialOf} from '../src/shared/foundation/continuum/geometry.ts';
import {renderProgress,progressFraction,progressRange} from '../src/shared/foundation/continuum/progress.ts';
import {renderUpload} from '../src/shared/foundation/continuum/upload.ts';import {renderDate} from '../src/shared/foundation/continuum/date.ts';
import {renderLoader,loaderArtwork,LOADER_VARIANTS} from '../src/shared/foundation/continuum/loader.ts';
const read=(p:string)=>fs.readFileSync(path.join(ROOT,p),'utf8'),exists=(p:string)=>fs.existsSync(path.join(ROOT,p));
const parts=(JSON.parse(read('src/catalog/registry.json')) as string[]).map(base=>({...JSON.parse(read(base+'/meta.json')),base}));
const edited=parts.filter(p=>p.tags.includes('CONTINUUM')&&p.category!=='loaders'),added=parts.filter(p=>p.tags.includes('MOTION STUDIES'));
test('CONTINUUM revises 42 A parts, retains old loaders and adds 8 A + 8 B loaders',()=>{
 assert.equal(parts.length,817);assert.equal(new Set(parts.map(p=>p.id)).size,817);assert.equal(new Set(parts.map(p=>p.category)).size,37);
 for(const [cat,count]of Object.entries({progress:16,uploads:13,datepickers:13}))assert.equal(edited.filter(p=>p.category===cat).length,count);
 assert.equal(edited.length,42);assert.ok(edited.every(p=>p.designType==='A'&&p.version==='4.8.0'));
 assert.equal(added.length,16);assert.equal(added.filter(p=>p.designType==='B').length,8);assert.equal(parts.filter(p=>p.category==='loaders').length,39);
 assert.equal(parts.filter(p=>p.category==='loaders'&&!p.tags.includes('MOTION STUDIES')).length,23);
});
test('ranges normalize negative, decimal, missing and degenerate bounds without non-finite numbers',()=>{
 assert.equal(progressFraction(-5,{min:-10,max:10}),.25);assert.equal(progressFraction(.75,{min:0,max:1}),.75);
 assert.equal(progressFraction(-5,{}),0);assert.equal(progressFraction(900,{}),1);assert.equal(progressFraction(Infinity,{}),0);
 assert.deepEqual(progressRange({min:3,max:3}),[3,4]);assert.deepEqual(progressRange({min:10,max:2}),[10,11]);
 for(const o of [{min:NaN,max:Infinity},{min:Number.MAX_VALUE,max:Number.MAX_VALUE},{min:-Number.MAX_VALUE,max:Number.MAX_VALUE}]){const [min,max]=progressRange(o);assert.ok(Number.isFinite(max-min)&&max>min);assert.ok(Number.isFinite(progressFraction(5,o)));}
});
test('16 progressing geometries differ, evolve with value, and remain finite at bounds and invalid values',()=>{
 assert.equal(MATERIALS.length,16);assert.equal(materialOf('unknown'),'aurora');const shapes=new Set<string>();
 for(const m of MATERIALS){const a=progressGeometry(m,0,0,'fixture'),b=progressGeometry(m,1,0,'fixture');assert.notEqual(a,b,m);shapes.add(b);
  for(const v of [-10,0,.5,1,4,Infinity,NaN]){const shape=progressGeometry(m,v,.5,'fixture');assert.doesNotMatch(shape,/NaN|Infinity|<script|foreignObject|tabindex|<text/);assert.match(shape,/aria-hidden="true"/);}
 }
 assert.equal(shapes.size,16);assert.match(progressGeometry('ceramic',1),/r="44"[^>]+stroke-width="6"/);
});
test('SVG paint resources can be local to each mounted instance and neither input nor label is drawn in SVG',()=>{
 const a=progressGeometry('tide',.5,0,'one'),b=progressGeometry('tide',.5,0,'two');assert.notEqual(a,b);assert.match(a,/one-a/);assert.match(b,/two-a/);
 assert.doesNotMatch(read('src/shared/foundation/continuum/art.ts'),/root\.innerHTML\s*=/);assert.match(read('src/shared/foundation/continuum/art.ts'),/uniqueId/);
});
test('unknown progress uses the native indeterminate state; no made-up percentage or success action',()=>{
 const html=renderProgress({value:37,indeterminate:true,label:'進捗'});assert.match(html,/<progress/);assert.doesNotMatch(html,/<progress[^>]*\bvalue=/);
 assert.doesNotMatch(html,/37<small>/);assert.match(read('src/shared/foundation/continuum/progress.ts'),/removeAttribute\('value'\)/);
});
test('uploads open receiving mechanisms only, validate native File objects, and revoke every preview URL',()=>{
 for(const m of MATERIALS.slice(0,13))assert.notEqual(intakeGeometry(m,0),intakeGeometry(m,1,2),m);
 const code=read('src/shared/foundation/continuum/upload.ts');assert.match(code,/instanceof File/);assert.match(code,/revokeObjectURL/);assert.match(code,/new DataTransfer/);assert.match(code,/rows=new Map/);assert.doesNotMatch(code,/fetch\(|XMLHttpRequest|setInterval\(/);
});
test('calendar motion has no access to grid contents, value ownership or keyboard hit targets',()=>{
 const code=read('src/shared/foundation/continuum/calendar-motion.ts');assert.match(code,/\.ct-calendar-sheet/);assert.match(code,/ResizeObserver/);assert.match(code,/\.disconnect\(/);assert.doesNotMatch(code,/grid\.innerHTML\s*=|c\.data\s*=/);
 const html=renderDate({mode:'range',label:'期間'});assert.match(html,/type="text"/);assert.doesNotMatch(html,/type="(?:date|time|datetime-local)"/);assert.match(html,/role="grid"/);assert.match(html,/ct-calendar-envelope" aria-hidden="true"/);assert.match(renderDate({mode:'time',label:'時刻'}),/data-time-picker/);
});
test('new loader artwork has 16 distinct definitions, 8 familiar B designs and paused visibility controls',()=>{
 assert.equal(LOADER_VARIANTS.length,16);assert.equal(new Set(LOADER_VARIANTS.map(v=>loaderArtwork(v))).size,16);
 const code=read('src/shared/foundation/continuum/loader.ts');assert.match(code,/IntersectionObserver/);assert.match(code,/visibilitychange/);assert.match(code,/prefers-reduced-motion/);assert.doesNotMatch(code,/requestAnimationFrame\(|setInterval\(|setTimeout\(/);
 for(const p of added.filter(p=>p.designType==='B'))assert.match(read(p.base+'/styles.css'),/currentColor/);
});
test('authored HTML, React runtime and ordinary initialization use the same source renderers',()=>{
 const renders={progress:renderProgress,uploads:renderUpload,datepickers:renderDate,loaders:renderLoader};
 for(const p of [...edited,...added]){
  const render=renders[p.category as keyof typeof renders],klass=p.category==='loaders'?'sop-motion-loader':'sop-continuum';
  assert.equal(read(p.base+'/markup.html'),`<div class="sop-foundation ${klass} sop-${p.id}" data-foundation="${p.category}" data-variant="${p.foundation.variant}">${render(p.foundation)}</div>\n`);
  assert.match(read(p.base+'/react/'+p.componentName+'.tsx'),/foundation\/continuum\//);assert.match(read(p.base+'/vanilla/init.ts'),/foundation\/continuum\//);
 }
});
test('every changed/new export has dependency-closed runtime and styles, not a gallery-only effect',()=>{
 for(const p of [...edited,...added])for(const start of ['styles.css','vanilla/init.ts','react/'+p.componentName+'.tsx']){
  const closure=dependencies(p.base+'/'+start,read,exists);assert.ok(closure.some(f=>f.includes('/continuum/')));assert.ok(closure.every(f=>exists(f)&&!f.startsWith('src/app/')));
  assert.ok(!closure.some(f=>f.endsWith('/atelier.css')||f.includes('/materials/')));
 }
});
test('copyable prompts include adaptation, actual state and motion files, not obsolete material dependencies',()=>{
 for(const p of [...edited,...added]){const prompt=read(p.base+'/prompt.md');assert.match(prompt,/4\.8\.0/);assert.match(prompt,/continuum/);assert.match(prompt,/利用先|既存/);assert.doesNotMatch(prompt,/atelier\.css/);assert.ok(read(p.base+'/usage.md').length>250);}
});
test('CSS scopes every active skin and supplies a static reduced/forced-colors presentation',()=>{
 for(const file of ['style.css','loaders.css']){const css=read('src/shared/foundation/continuum/'+file);assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);assert.doesNotMatch(css,/@import\s+url|url\(https?:/);}
 const css=read('src/shared/foundation/continuum/loaders.css');assert.match(css,/animation-play-state:paused/);assert.match(css,/ct-loader-status/);
});
test('all external strings in initial renderers are escaped instead of becoming executable HTML',()=>{
 for(const render of [renderProgress,renderUpload,renderDate,renderLoader]){const html=render({label:'<img onerror=x>',description:'A & <script>x</script>',placeholder:'<b>unsafe</b>',content:'<svg onload=x>'});assert.doesNotMatch(html,/<img|<script>|onerror="|<b>unsafe/);assert.match(html,/&lt;/);}
});
