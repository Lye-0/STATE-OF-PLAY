/** v3.2: quantity, distinct sources, style intent, lightweight delivery and intrinsic state. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { buildCatalog, ROOT, FORMATS } from './historical-catalog.ts';
import { dependencies } from '../scripts/source-tools.ts';
import { getDelivery, buildPrompt, buildManifest } from '../src/catalog/delivery.ts';
const {parts, bases}=buildCatalog();
const basicToggles=['quiet','porcelain','rail','segment','outline','rocker'];
const basicBlocks=['paper-card','slate-card','outline-card','inset-panel','accent-card','soft-tile','editorial-card','status-card'];
const source=(id:string,name:string)=>fs.readFileSync(path.join(ROOT,bases.find(b=>b.endsWith('/'+id))!,name),'utf8');

test('each category includes at least 20 distinct parts, both intentions, with A in the majority',()=>{
 assert.equal(new Set(parts.map(p=>p.id)).size,parts.length);
 assert.equal(new Set(parts.map(p=>p.name)).size,parts.length);
 assert.equal(new Set(parts.map(p=>p.order)).size,parts.length);
 for(const category of ['toggles','blocks']) {
  const group=parts.filter(p=>p.category===category);
  assert.ok(group.length>=20);const a=group.filter(p=>p.designType==='A').length,b=group.filter(p=>p.designType==='B').length;
  assert.ok(a>b&&b>0,category);assert.ok(group.every(p=>p.runtime.length>0));
 }
});

test('each part has independent nonidentical CSS and nonempty reproduction and usage guides',()=>{
 const styles=parts.map(p=>source(p.id,'styles.css'));
 assert.equal(new Set(styles).size,parts.length);
 for(const p of parts){
  assert.ok(source(p.id,'prompt.md').length>250,p.id);
  assert.ok(source(p.id,'usage.md').length>150,p.id);
  const base=bases.find(b=>b.endsWith('/'+p.id))!;
  const scope=dependencies(base+'/styles.css',name=>fs.readFileSync(path.join(ROOT,name),'utf8'),name=>fs.existsSync(path.join(ROOT,name)))
    .some(name=>fs.readFileSync(path.join(ROOT,name),'utf8').includes('.sop-'+p.id));
  assert.ok(scope,p.id);
 }
});

test('new B toggles export only their light event controller, without the animated engine',()=>{
 for(const id of basicToggles){const p=parts.find(p=>p.id===id)!;assert.equal(p.designType,'B');
  for(const format of FORMATS){const d=getDelivery(p,format);const text=d.runtimeFiles.map(f=>f.code).join('\n');
   assert.ok(!d.runtimeFiles.some(f=>/\/(renderer|motion|toggle-controller)\.[jt]s$/.test(f.name)),id+' '+format);
   assert.ok(!/requestAnimationFrame\s*\(|getContext\s*\(|<canvas/.test(text),id);
   assert.ok(d.runtimeFiles.some(f=>/simple-toggle\.[jt]s$/.test(f.name)),id);
  }
  assert.match(p.markup,/role="switch"/);assert.match(p.markup,/type="button"/);
  const css=source(id,'styles.css');assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);
 }
});

test('new B surfaces are content-agnostic CSS containers and have no React effects',()=>{
 for(const id of basicBlocks){const p=parts.find(p=>p.id===id)!;assert.equal(p.designType,'B');
  for(const format of ['tsx','jsx'] as const){const d=getDelivery(p,format);const text=d.runtimeFiles.map(f=>f.code).join('\n');
   assert.ok(!/useEffect|requestAnimationFrame|addEventListener|createSurfaceController/.test(text),id);
   assert.ok(!d.runtimeFiles.some(f=>f.name.includes('/internal/')),id);
   assert.ok(!text.includes('サンプル'));assert.ok(text.includes('children'));
  }
 }
});

test('Liquid, Fold and Prism include intrinsic ON/OFF cues in all three authored representations',()=>{
 for(const [id,on,off] of [['liquid','ON / FLOW','OFF / STILL'],['fold','ON / UNFOLDED','OFF / FOLDED'],['prism','ON / REFRACT','OFF / DORMANT']]){
  const part=parts.find(p=>p.id===id)!;
  for(const format of FORMATS){const files=getDelivery(part,format).files;const code=files.filter(f=>f.name.endsWith('markup.html')||f.name.endsWith(part.componentName+(format==='tsx'?'.tsx':'.jsx'))||f.name.endsWith('/index.html')).map(f=>f.code).join('\n');assert.ok(code.includes(on),id+' '+format);assert.ok(code.includes(off),id+' '+format);}
  assert.ok(source(id,'styles.css').includes('saturate'),id);assert.ok(source(id,'prompt.md').includes('ON'),id);
 }
});

test('expanded catalog exports preserve layout mapping, AI integration rules and entry metadata',()=>{
 for(const p of parts)for(const format of FORMATS)for(const layout of ['portable','original'] as const){const d=getDelivery(p,format,layout);const prompt=buildPrompt(p,format,layout,false);const manifest=JSON.parse(buildManifest(p,format,layout));
  assert.equal(manifest.entry,d.entry);assert.ok(prompt.includes(p.name));assert.ok(prompt.includes('既存'));assert.ok(d.files.every(f=>f.code.length>0));
 }
});

test('sample contents belong only to the gallery and never enter container source',()=>{
 const samples=fs.readFileSync(path.join(ROOT,'src/app/samples.ts'),'utf8');assert.ok(samples.includes('essentialContent'));
 for(const id of basicBlocks){const p=parts.find(p=>p.id===id)!;for(const f of p.files.tsx)assert.ok(!f.code.includes('essentialContent'),f.name);}
});

test('all new CSS has fully substituted scoped selectors, no unexpanded author template markers',()=>{
 for(const p of parts){const css=source(p.id,'styles.css');assert.doesNotMatch(css,/(?:^|[{},\n])\s*S(?=[\s.:\[{,])/m,p.id);assert.doesNotMatch(css,/NaN|undefined/);}
});
