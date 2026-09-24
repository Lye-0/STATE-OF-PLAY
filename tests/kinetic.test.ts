import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';
import {ROOT} from '../scripts/catalog.ts';
import {dependencies,transpile} from '../scripts/source-tools.ts';
const read=(f:string)=>fs.readFileSync(path.join(ROOT,f),'utf8');
const exists=(f:string)=>fs.existsSync(path.join(ROOT,f));
const all=(JSON.parse(read('src/catalog/registry.json')) as string[]).map(base=>({base,...JSON.parse(read(base+'/meta.json'))}));
const added=all.filter(p=>p.tags.includes('KINETIC'));
test('KINETIC adds 12 rails and 12 menus while retaining the 659 current baseline IDs',()=>{
 assert.equal(all.length,699);assert.equal(added.length,24);assert.equal(all.filter(p=>!p.tags.includes('KINETIC')&&!p.tags.includes('MOTION STUDIES')).length,659);
 for(const c of ['scrollbars','dropdowns']){assert.equal(added.filter(p=>p.category===c).length,12);assert.equal(all.filter(p=>p.category===c).length,36);}
 assert.equal(new Set(all.map(p=>p.id)).size,699);assert.ok(added.every(p=>p.designType==='A'));
});
test('each new part has distinct art, a precise prompt, a usage example and a controller',()=>{
 assert.equal(new Set(added.map(p=>read(p.base+'/styles.css'))).size,24);
 for(const p of added){assert.match(read(p.base+'/prompt.md'),/既存|利用先/);assert.ok(read(p.base+'/prompt.md').includes(p.description));
  for(const file of ['styles.css','markup.html','prompt.md','usage.md','vanilla/main.ts','vanilla/index.html','react/Example.tsx'])assert.ok(read(p.base+'/'+file).length>60,p.id+file);}
});
test('Vanilla and React dependency closures include the actual Kinetic renderer and resolve',()=>{
 for(const p of added)for(const file of [p.base+'/vanilla/init.ts',p.base+'/react/'+p.componentName+'.tsx']){
  const closure=dependencies(file,read,exists);assert.ok(closure.includes('src/shared/'+(p.category==='scrollbars'?'kinetic-scroll.ts':'kinetic-select.ts')),file);
  for(const f of closure.filter(x=>/\.tsx?$/.test(x)))assert.ok(transpile(read(f),f),f);
 }
});
test('new menus are text-first listboxes with explicit state and no auto-generated initials',()=>{
 for(const p of added.filter(p=>p.category==='dropdowns')){assert.match(read(p.base+'/prompt.md'),/閉じる瞬間/);const s=read(p.base+'/markup.html');assert.match(s,/role="combobox"/);assert.match(s,/role="listbox"/);assert.equal((s.match(/role="option"/g)||[]).length,4);assert.doesNotMatch(s,/sop-select-icon|<canvas|role="menu"/);assert.match(read(p.base+'/react/'+p.componentName+'.tsx'),/autoIcon=\{false\}/);}
});
test('new rails keep native scroll input and use decorative canvases only',()=>{
 for(const p of added.filter(p=>p.category==='scrollbars')){const s=read(p.base+'/markup.html');assert.match(s,/sop-scroll-viewport/);assert.match(s,/role="scrollbar"/);assert.match(s,/<canvas[^>]*aria-hidden="true"/);assert.doesNotMatch(s,/type="range"/);assert.match(s,/slot: insert your scrollable content/);}
 assert.match(read('src/shared/kinetic-scroll.ts'),/createScrollArea\(root,options\)/);
 assert.doesNotMatch(read('src/shared/kinetic-scroll.ts'),/addEventListener\(['"]wheel|setInterval/);
});
test('new skins are scoped and do not import old ornate/refined skin styles',()=>{
 for(const p of added){const s=read(p.base+'/styles.css');assert.ok(s.includes('.sop-'+p.id));assert.doesNotMatch(s,/https?:\/\/|@font-face|sculpted\.css/);}
});
test('presentation cancellation covers timers, observers and animation resources',()=>{
 for(const f of ['kinetic-scroll.ts','kinetic-select.ts']){const s=read('src/shared/'+f);assert.match(s,/cancelAnimationFrame/);assert.match(s,/life.abort/);assert.match(s,/disconnect/);assert.match(s,/prefers-reduced-motion/);assert.match(s,/visibilitychange/);assert.doesNotMatch(s,/setInterval/);}
 const s=read('src/shared/kinetic-select.ts');assert.match(s,/panel.inert=true/);assert.match(s,/aria-hidden/);assert.doesNotMatch(s,/finishClosing|kineticClosing/);assert.match(s,/panel.hidden=true/);assert.doesNotMatch(read('src/shared/kinetic-select.css'),/\[hidden\].*display:block/);assert.match(s,/stopAnimations/);
});
test('gallery can reveal new additions without losing older entries',()=>{
 const s=read('src/app/gallery.ts');assert.match(s,/tags.includes\('KINETIC'\)/);assert.match(s,/const matches = parts.filter\(matchPart\)/);
});
