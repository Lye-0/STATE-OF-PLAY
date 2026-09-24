import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from '../scripts/catalog.ts';
import {dependencies,transpile} from '../scripts/source-tools.ts';
const read=(f:string)=>fs.readFileSync(path.join(ROOT,f),'utf8');
const exists=(f:string)=>fs.existsSync(path.join(ROOT,f));
// Historical v4.3 fixtures: new KINETIC designs have their own geometry/animation tests.
const bases=(JSON.parse(read('src/catalog/registry.json')) as string[]).filter(b=>!JSON.parse(read(b+'/meta.json')).tags.some((t:string)=>['KINETIC','MOTION STUDIES'].includes(t)));
const targets=bases.filter(b=>/src\/parts\/(scrollbars|dropdowns)\//.test(b)).map(base=>({base,...JSON.parse(read(base+'/meta.json'))}));
const A=targets.filter(p=>p.designType==='A');
test('refinement keeps 659 current parts; 16 A rails and 16 A selects; stable IDs',()=>{
 assert.equal(bases.length,659);assert.equal(A.length,32);assert.equal(new Set(bases).size,659);
 for(const cat of ['scrollbars','dropdowns'])assert.equal(A.filter(p=>p.category===cat).length,16);
});
test('visible A rails remain 9–12px, handles 15–18px; pointer target is separate',()=>{
 for(const p of A.filter(p=>p.category==='scrollbars')){const s=read(p.base+'/styles.css');const track=Number(s.match(/--sop-scroll-width:(\d+)px/)![1]),thumb=Number(s.match(/--sop-handle-width:(\d+)px/)![1]);assert.ok(track>=9&&track<=12,p.id);assert.ok(thumb>=15&&thumb<=18,p.id);}
 const s=read('src/shared/scrollbar-sculpted.css');assert.match(s,/--sop-scroll-gutter:34px/);assert.match(s,/--sop-scroll-gutter:44px/);
});
test('rail progress is a chosen design mechanism, not imposed on all A rails',()=>{
 const waking=A.filter(p=>p.category==='scrollbars'&&/--rail-wake:\./.test(read(p.base+'/styles.css')));
 assert.equal(waking.length,8);
 assert.match(read('src/shared/scroll-area.ts'),/--sop-scroll-progress/);
 for(const p of waking)assert.match(read(p.base+'/prompt.md'),/履歴|既読/);
});
test('A dropdown defaults have no icon or generated initials; consumers may still supply icons',()=>{
 for(const p of A.filter(p=>p.category==='dropdowns')){
  assert.doesNotMatch(read(p.base+'/markup.html'),/class="sop-select-icon"/);
  assert.match(read(p.base+'/react/'+p.componentName+'.tsx'),/autoIcon=\{false\}/);
  assert.doesNotMatch(read(p.base+'/react/Example.tsx'),/"icon":/);
 }
 const view=read('src/shared/select-view.tsx');assert.match(view,/item.icon \|\| autoIcon/);assert.match(view,/showHeading &&/);assert.match(view,/showHints &&/);
});
test('each portable behavior closure includes real motion helper, and every React source transpiles',()=>{
 for(const p of A.filter(p=>p.category==='dropdowns')){
  for(const file of [p.base+'/vanilla/init.ts',p.base+'/react/'+p.componentName+'.tsx']){
   const closure=dependencies(file,read,exists);assert.ok(closure.includes('src/shared/select-motion.ts'),file);
   for(const f of closure.filter(n=>/\.tsx?$/.test(n)))assert.ok(transpile(read(f),f));
  }
 }
});
test('presentation helper preserves React ownership; scroll coordinates and cleanup are explicit',()=>{
 const s=read('src/shared/select-motion.ts');
 assert.match(s,/offsetTop/);assert.match(s,/scrollTop/);assert.match(s,/ResizeObserver/);
 assert.match(s,/observer\?\.disconnect/);assert.match(s,/mutation.disconnect/);assert.match(s,/life.abort/);assert.match(s,/clearTimeout/);
 assert.doesNotMatch(s,/innerHTML|appendChild|replaceChildren|setInterval/);
 const c=read('src/shared/select-controller.ts');assert.match(c,/classList.contains\('sop-select-sculpted'\)/);assert.match(c,/motion\?\.destroy/);
});
test('per-skin specificity withstands repeated shared imports without altering B styles',()=>{
 for(const p of A){const selector=p.category==='scrollbars'?'.sop-scroll-area.sop-scroll-sculpted.sop-':'.sop-select.sop-select-sculpted.sop-',closure=dependencies(p.base+'/styles.css',read,exists).filter(f=>f.endsWith('.css')).map(read).join('\n');assert.ok(closure.includes(selector+p.id),p.id);}
});
test('text-first, paper-reveal and underline motions are different compositions',()=>{
 const styles=A.filter(p=>p.category==='dropdowns').map(p=>read(p.base+'/styles.css'));
 assert.ok(styles.some(s=>s.includes('sop-menu-folio')));assert.ok(styles.some(s=>s.includes('sop-menu-dissolve')));
 assert.match(read('src/parts/dropdowns/spectrum-select/styles.css'),/--sel-label-w/);
 assert.match(read('src/parts/dropdowns/atelier-select/styles.css'),/clip-path:polygon/);
 const shared=read('src/shared/select-sculpted.css');assert.match(shared,/min-height:46px/);assert.match(shared,/prefers-reduced-motion/);assert.match(shared,/forced-colors/);assert.match(shared,/pointer-events:none/);
});
