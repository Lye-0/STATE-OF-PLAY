import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import {ROOT} from '../scripts/catalog.ts';
import {dependencies} from '../scripts/source-tools.ts';
import {renderDate} from '../src/shared/foundation/date.ts';
const read=(name:string)=>fs.readFileSync(path.join(ROOT,name),'utf8');
const exists=(name:string)=>fs.existsSync(path.join(ROOT,name));
const bases=JSON.parse(read('src/catalog/registry.json')) as string[];
const metas=bases.map(base=>({...JSON.parse(read(base+'/meta.json')),base}));
const added=metas.filter(m=>m.id.startsWith('lgc-'));
const glass=metas.filter(m=>m.id.startsWith('lg-')||m.id.startsWith('lgc-'));
test('v4.16 contains 66 independently named additions and 891 registered parts',()=>{
 assert.equal(bases.length,891);assert.equal(added.length,66);assert.equal(glass.length,74);
 assert.equal(new Set(metas.map(m=>m.id)).size,metas.length);
 assert.equal(new Set(metas.map(m=>m.order)).size,metas.length);
});
test('every one of 37 ordinary categories has exactly one glass A and one glass B',()=>{
 const categories=[...new Set(metas.map(m=>m.category))];assert.equal(categories.length,37);
 for(const category of categories){const group=glass.filter(m=>m.category===category);assert.deepEqual(group.map(m=>m.designType).sort(),['A','B'],category);}
});
test('all new runtime / React / example dependencies exist and are independent of gallery modules',()=>{
 const checked=new Set<string>();
 for(const m of added)for(const entry of ['markup.html','styles.css','vanilla/init.ts','vanilla/index.html',`react/${m.componentName}.tsx`,'react/Example.tsx']){
  for(const f of dependencies(m.base+'/'+entry,read,exists)){
   assert.ok(!f.startsWith('src/app/')&&!f.startsWith('src/catalog/'),f);
   if(/\.tsx?$/.test(f))checked.add(f);
  }
 }
 for(const f of checked){const result=ts.transpileModule(read(f),{fileName:f,reportDiagnostics:true,compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,jsx:ts.JsxEmit.Preserve}});assert.deepEqual(result.diagnostics?.filter(d=>d.category===ts.DiagnosticCategory.Error)??[],[],f);}
});
test('portable skins retain common material, project-aware instructions and local fallback styles',()=>{
 const shared=read('src/shared/liquid-glass/collection.css');
 for(const token of ['prefers-reduced-motion','prefers-reduced-transparency','forced-colors','@supports not','data-lg-appearance'])assert.ok(shared.includes(token),token);
 for(const m of added){assert.match(read(m.base+'/styles.css'),/liquid-glass\/collection\.css/);assert.match(read(m.base+'/markup.html'),/lgc-root/);assert.match(read(m.base+'/prompt.md'),/プロジェクト/);assert.match(read(m.base+'/usage.md'),/data-lg-appearance/);}
});
test('glass samples use ordinary category controls rather than a second GLASS LAB UI',()=>{
 assert.doesNotMatch(read('src/app/liquid-glass-preview.ts'),/createElement\(['"]section|data-glass-setting|<header>/);
 assert.doesNotMatch(read('src/app/gallery.ts'),/const glassShortcut|Liquid Glass \/ 8/);
 assert.doesNotMatch(read('src/app/details.ts'),/mountGlassControls/);
 assert.match(read('src/app/details.ts'),/mountFoundationControls/);
 assert.match(read('src/app/details.ts'),/mountWorkbenchControls/);
 assert.match(read('src/app/details.ts'),/glassScene\(stage,root\)/);
});
test('new date skins use the current calendar markup required by their controller',()=>{
 for(const id of ['lgc-datepickers-lens','lgc-datepickers-mist']){
  const base=`src/parts/datepickers/${id}`,meta=JSON.parse(read(base+'/meta.json'));
  const markup=read(base+'/markup.html');
  assert.ok(markup.includes(renderDate(meta.foundation)),id);
  for(const selector of ['data-calendar-date','data-time-picker','data-time-hours','data-time-minutes'])assert.ok(markup.includes(selector),id+' '+selector);
  assert.doesNotMatch(markup,/type="date"/);
 }
});
