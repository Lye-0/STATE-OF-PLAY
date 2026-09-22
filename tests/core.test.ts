import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { buildCatalog, ROOT, FORMATS, mountModule } from '../scripts/catalog.ts';
import { Spring, clamp, isDrag, dragValue, orbitPosition } from '../src/shared/motion.ts';
import { validateArchivePath, validateArchiveEntries, prepareArchive, addArchiveEntries, archiveTree } from '../src/shared/archive.ts';
import { exportCode, transpile } from '../scripts/source-tools.ts';
import { JSZip } from '../scripts/zip.ts';
const before = new Map<string, string>();
function walk(directory: string): string[] { return fs.readdirSync(directory,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(directory,e.name)):[path.join(directory,e.name)]); }
for(const f of walk(path.join(ROOT,'src'))) before.set(f,crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex'));
const data = buildCatalog();
test('catalog retains all original parts, four formats, and nonempty sources',()=>{
 const originals=['chrome','liquid','eclipse','bloom','volt','orbit','reel','fold','prism','signal','original-surface','frosted-glass','machined-panel','luminous-frame','folded-paper','iridescent-surface'];
 for(const id of originals)assert.ok(data.parts.some(p=>p.id===id),id);
 for(const p of data.parts)for(const format of FORMATS)assert.ok(p.files[format].length>0);
 for(const p of data.parts)assert.deepEqual(Object.keys(p.files),FORMATS);
});
test('generation never writes source files, packages, or a registry.generated file',()=>{
 for(const [f,hash] of before)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex'),hash,f);
 assert.equal(fs.existsSync(path.join(ROOT,'packages')),false);
 assert.equal(walk(path.join(ROOT,'src')).length,before.size);
});
test('all authored stylesheet bytes and portable source bytes match their inputs',()=>{
 for(const p of data.parts){
  const css=p.files.ts.find(f=>f.name.endsWith('/styles.css'))!;
  assert.equal(css.code,fs.readFileSync(path.join(ROOT,css.name),'utf8'));
  assert.equal(p.files.tsx.find(f=>f.name===css.name)!.code,css.code);
 }
});
test('TS/TSX and JS/JSX lists have matching paths and generated variants',()=>{
 for(const p of data.parts) for(const [a,b] of [['ts','js'],['tsx','jsx']] as const){
  assert.deepEqual(p.files[a].map(f=>f.name.replace(/\.tsx$/,'.jsx').replace(/\.ts$/,'.js')),p.files[b].map(f=>f.name));
  for(const f of p.files[b]) if(/\.[jt]sx?$/.test(f.name))assert.doesNotThrow(()=>transpile(f.code,f.name));
 }
});
test('all generated native JS / HTML relative imports resolve within their package',()=>{
 for(const p of data.parts)for(const format of FORMATS){
  const names=new Set(p.files[format].map(f=>f.name));
  for(const file of p.files[format]){
   const pattern=/\.html$/.test(file.name)?/\b(?:src|href)=['"](\.\.?\/[^'"]+)['"]/g:/(?:from\s+|import\s*)['"](\.\.?\/[^'"]+)['"]/g;
   for(const match of file.code.matchAll(pattern)){
    const resolved=path.posix.normalize(path.posix.join(path.posix.dirname(file.name),match[1]));
    assert.ok([resolved,...['.ts','.tsx','.js','.jsx','.css'].map(e=>resolved+e)].some(n=>names.has(n)),file.name+' -> '+match[1]);
   }
  }
 }
});
test('all source / review archives retain bytes, CRC and explicit hierarchy',async()=>{
 for(const p of data.parts)for(const f of FORMATS)for(const mode of ['source','text'] as const){
  const entries=prepareArchive([...p.files[f],...Object.entries(p.preview).map(([n,code])=>({name:'preview/'+n,code}))],mode);
  const z=addArchiveEntries(new JSZip(),'part',entries);
  const bytes=await z.generateAsync({type:'nodebuffer',compression:'DEFLATE'});
  const read=await JSZip.loadAsync(bytes,{checkCRC32:true});
  assert.ok(read.files['part/src/'].dir);
  if(p.files[f].some(file=>file.name.startsWith('src/shared/'))) assert.ok(read.files['part/src/shared/'].dir);
  for(const e of entries)assert.equal(await read.file('part/'+e.name)!.async('string'),e.code);
 }
});
for(const name of ['../escape','/absolute','C:/bad','folder\\bad','CON','a/NUL.txt','a/aux.js','a./b','a//b','a/../b','a\u0000.txt'])test(`archive rejects ${JSON.stringify(name)}`,()=>assert.throws(()=>validateArchivePath(name)));
test('archive rejects duplicates and file/directory case conflicts',()=>{
 for(const names of [['a.js','A.js'],['a','a/b.js'],['a/b.js','a'],['A/b.js','a/c.js']])assert.throws(()=>validateArchiveEntries(names.map(name=>({name,code:''}))));
 assert.throws(()=>prepareArchive([{name:'WINDOWS-README.txt',code:''}],'source'));
});
test('tree retains same-named leaves under distinct parents',()=>{
 const tree=archiveTree(['src/a/index.ts','src/b/index.ts']);assert.equal(tree.match(/index.ts/g)?.length,2);
});
test('export fails instead of silently shipping missing dependencies',()=>assert.throws(()=>exportCode("import './missing';",'js','x.js','x.ts',new Map([['x.ts','x.js']]))));
test('new mount map points only at real component initializers',()=>{
 const code=mountModule(data.bases);for(const b of data.bases)assert.ok(code.includes('/'+b+'/vanilla/init.ts'));
});
test('spring settles at both endpoints without invalid timesteps',()=>{
 for(const part of data.parts.filter(p=>p.config)){
  const spring=new Spring(0,part.config!);spring.setTarget(1);
  for(let i=0;i<1200;i++)spring.advance(1/120);
  assert.equal(spring.value,1);assert.ok(spring.settled);spring.setTarget(0);
  for(let i=0;i<1200;i++)spring.advance(1/120);
  assert.equal(spring.value,0);assert.equal(spring.advance(NaN),0);
 }
});
test('gesture thresholds and orbit endpoints remain stable',()=>{
 assert.equal(clamp(2),1);assert.equal(isDrag(3,0),false);assert.equal(isDrag(20,3),true);assert.equal(isDrag(20,30),false);
 assert.equal(dragValue(0,64,128,1),.5);assert.equal(orbitPosition(0).x,44);assert.equal(orbitPosition(1).x,236);
});
test('duplicate demo frames and export inventories are no longer author files',()=>{
 assert.equal(data.bases.some(b=>fs.existsSync(path.join(ROOT,b,'demo'))),false);
 assert.equal(data.bases.some(b=>fs.existsSync(path.join(ROOT,b,'exports.json'))),false);
 for(const p of data.parts) assert.deepEqual(Object.keys(p.preview),['index.html','styles.css','app.js']);
});
