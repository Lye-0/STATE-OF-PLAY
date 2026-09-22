import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {scrollMetrics} from '../src/shared/scroll-metrics.ts';
import {buildCatalog, ROOT, FORMATS} from '../scripts/catalog.ts';
import {getDelivery, packageContents, buildPrompt} from '../src/catalog/delivery.ts';
import {sourceReferences, isLocalReference, resolveLocal} from '../scripts/source-tools.ts';
const catalog=buildCatalog();
const scrollbars=catalog.parts.filter(part=>part.category==='scrollbars');
test('baseline retained: 24 toggles, 24 surfaces, 24 scrollbars, A majority and eight B rails',()=>{
 assert.ok(catalog.parts.length >= 72);
 for(const category of ['toggles','blocks','scrollbars']) assert.equal(catalog.parts.filter(p=>p.category===category).length,24);
 assert.equal(scrollbars.filter(p=>p.designType==='A').length,16);assert.equal(scrollbars.filter(p=>p.designType==='B').length,8);
});
test('thumb is proportional, bounded and reaches both endpoints',()=>{
 for(const viewport of [80,240,800])for(const content of [0,100,300,1000,8000])for(const rail of [0,20,240]) {
  const start=scrollMetrics(viewport,content,rail,0),end=scrollMetrics(viewport,content,rail,999999);
  assert.ok(start.thumbSize>=0&&start.thumbSize<=rail);assert.ok(end.offset>=0&&end.offset<=end.travel);
  if(end.maximum>0)assert.equal(end.progress,1);else assert.equal(end.progress,0);
  assert.equal(start.progress,0);
 }
 assert.equal(scrollMetrics(200,1000,200,400).thumbSize,40);
 assert.equal(scrollMetrics(200,1000,200,400).progress,.5);
});
test('invalid geometry, negative scrolling, tiny containers and no-overflow remain finite',()=>{
 for(const values of [[NaN,Infinity,-1,-100],[0,0,0,0],[100,50,250,100],[100,100000,5,Infinity]]) {
  const m=scrollMetrics(...values as [number,number,number,number]);
  for(const value of Object.values(m))if(typeof value==='number')assert.ok(Number.isFinite(value));
 }
 assert.equal(scrollMetrics(100,50,200,30).overflowing,false);
 assert.equal(scrollMetrics(100,1000,100,-20).position,0);
});
test('all new parts expose real scroll semantics and content slots, not fake range sliders',()=>{
 for(const p of scrollbars) {
  assert.match(p.markup,/role="scrollbar"/);assert.match(p.markup,/role="region"/);assert.match(p.markup,/sop-scroll-content/);
  assert.ok(p.props.some(prop=>prop[0]==='orientation'));assert.ok(p.props.some(prop=>prop[0]==='children'));
  for(const f of FORMATS) {
   const d=getDelivery(p,f);
   assert.ok(d.runtimeFiles.some(file=>file.name.endsWith('/scroll-area.'+(f==='jsx'||f==='js'?'js':'ts'))));
   assert.ok(d.runtimeFiles.some(file=>file.name.endsWith('scrollbar-base.css')));
   assert.ok(d.runtimeFiles.every(file=>!file.code.includes('A STUDY IN SCROLL')));
  }
 }
});
test('both layouts export every CSS/module dependency and an explicit integration manifest',()=>{
 for(const part of scrollbars)for(const format of FORMATS)for(const layout of ['portable','original']as const) {
  const d=getDelivery(part,format,layout), names=new Set(d.files.map(f=>f.name));
  for(const f of d.files)for(const ref of sourceReferences(f.code,f.name).filter(isLocalReference))assert.ok(names.has(resolveLocal(f.name,ref.request,n=>names.has(n))));
  const contents=packageContents(part,format,layout,false);assert.ok(contents.some(file=>file.name==='INTEGRATION.json'));
  assert.match(buildPrompt(part,format,layout,false),/ネイティブ/);assert.match(buildPrompt(part,format,layout,false),/既存プロジェクト/);
 }
});
test('standalone demos include their common CSS inline, without unresolved relative CSS imports',()=>{
 for(const part of scrollbars) {
  assert.doesNotMatch(part.preview['styles.css'],/@import/);
  assert.match(part.preview['styles.css'],/sop-scroll-viewport/);assert.match(part.preview['index.html'],/A STUDY IN SCROLL/);
  assert.match(part.preview['app.js'],/createScrollArea/);
 }
});
test('runtime never intercepts the wheel or adds a continuous animation loop; contains native fallback',()=>{
 const code=fs.readFileSync(path.join(ROOT,'src/shared/scroll-area.ts'),'utf8');
 assert.doesNotMatch(code,/addEventListener\(['"](?:wheel|touchmove)['"]/);
 assert.match(code,/ResizeObserver/);assert.match(code,/MutationObserver/);assert.match(code,/abort\.abort/);assert.match(code,/cancelAnimationFrame/);
 const css=fs.readFileSync(path.join(ROOT,'src/shared/scrollbar-base.css'),'utf8');
 assert.match(css,/forced-colors/);assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/data-enhanced=true/);
});
