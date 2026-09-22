import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { buildCatalog, ROOT, FORMATS } from '../scripts/catalog.ts';
import { getDelivery, buildUsage, buildPrompt, buildManifest, packageContents, packageRoot, INTEGRATION_RULES } from '../src/catalog/delivery.ts';
import { exportCode, sourceReferences, isLocalReference, resolveLocal, dependencies } from '../scripts/source-tools.ts';
import { layoutMap } from '../scripts/layout.ts';
import { parseExportOptions } from '../scripts/export-parts.ts';
import { addArchiveEntries, prepareArchive } from '../src/shared/archive.ts';
import { JSZip } from '../scripts/zip.ts';
const {parts,bases}=buildCatalog();
const layouts=['portable','original'] as const;

test('portable is default and all deliveries have one valid entry and stylesheet',()=>{
 for(const p of parts)for(const format of FORMATS)for(const layout of layouts){
  const d=getDelivery(p,format,layout);assert.ok(d.files.some(f=>f.name===d.entry));
  assert.equal(d.runtimeFiles.length+d.files.filter(f=>f.group==='example').length,d.files.length);
  assert.ok(d.runtimeFiles.every(f=>f.name.startsWith(d.componentRoot+'/')));
  assert.equal(d.files.length,p.files[format].length);
  if(layout==='portable')assert.ok(d.files.every(f=>!f.name.startsWith('src/')));
 }
 assert.equal(getDelivery(parts[0],'tsx').layout,'portable');
});
test('every runtime reference resolves inside the movable component, never examples or a gallery file',()=>{
 for(const p of parts)for(const format of FORMATS)for(const layout of layouts){
  const d=getDelivery(p,format,layout),names=new Set(d.files.map(f=>f.name)),runtime=new Set(d.runtimeFiles.map(f=>f.name));
  for(const f of d.files) for(const ref of sourceReferences(f.code,f.name).filter(isLocalReference)){
   const target=resolveLocal(f.name,ref.request,n=>names.has(n));
   if(runtime.has(f.name))assert.ok(runtime.has(target),`${f.name} -> ${target}`);
   assert.ok(!target.includes('src/app/'));
   if(format==='js'&&ref.module)assert.ok(/\.js(?:[?#]|$)|\.css(?:[?#]|$)/.test(ref.request),ref.request);
  }
 }
});
test('portable runtime survives relocation into component, feature and monorepo folders',()=>{
 for(const parent of ['src/components/ui','app/widgets','apps/frontend/src/features/settings/ui','別のプロジェクト/部品'])
 for(const p of parts)for(const format of FORMATS){
  const d=getDelivery(p,format),runtime=new Set(d.runtimeFiles.map(f=>`${parent}/${f.name}`));
  for(const file of d.runtimeFiles)for(const r of sourceReferences(file.code,file.name).filter(isLocalReference))
   assert.ok(runtime.has(resolveLocal(`${parent}/${file.name}`,r.request,n=>runtime.has(n))));
 }
});
test('different components keep dedicated internal folders even when helper names coincide',()=>{
 const paths=parts.flatMap(p=>getDelivery(p,'tsx').runtimeFiles.map(f=>f.name));
 assert.equal(paths.length,new Set(paths.map(p=>p.toLowerCase())).size);
 assert.ok(paths.some(p=>p==='chrome-toggle/internal/motion.ts'));
 assert.ok(paths.some(p=>p==='liquid-toggle/internal/motion.ts'));
});
test('both layouts retain exact original CSS and HTML art and map source identity across formats',()=>{
 for(const p of parts) for(const format of FORMATS){
  const a=getDelivery(p,format,'original'),b=getDelivery(p,format,'portable');
  for(const original of a.files){
   const portable=b.files.find(f=>f.sourceName===original.sourceName)!;assert.ok(portable);
   if(/\/(?:styles.css|markup.html)$/.test(original.name))assert.equal(portable.code,fs.readFileSync(path.join(ROOT,original.sourceName),'utf8'));
  }
 }
});
test('all source/review ZIP combinations round-trip with metadata, prompt, dependencies and exact text',async()=>{
 for(const p of parts)for(const format of FORMATS)for(const layout of layouts)for(const mode of ['source','text'] as const){
  const root=packageRoot(p,format,layout),contents=packageContents(p,format,layout),d=getDelivery(p,format,layout);
  const entries=prepareArchive(contents,mode),suffix=mode==='text'?'.txt':'';
  const bytes=await addArchiveEntries(new JSZip(),root,entries).generateAsync({type:'nodebuffer',compression:'DEFLATE'});
  const read=await JSZip.loadAsync(bytes,{checkCRC32:true});
  assert.equal(read.files[`${root}/${d.componentRoot}/`].dir,true);
  for(const f of entries)assert.equal(await read.file(`${root}/${f.name}`)!.async('string'),f.code);
  assert.equal(await read.file(`${root}/PROMPT.md${suffix}`)!.async('string'),buildPrompt(p,format,layout));
  const manifest=JSON.parse(await read.file(`${root}/INTEGRATION.json${suffix}`)!.async('string'));
  assert.equal(manifest.layout,layout);assert.equal(manifest.entry,d.entry);
  assert.deepEqual(manifest.files.map((f:{path:string})=>f.path),d.files.map(f=>f.name));
 }
});
test('UI/CLI share full and spec prompts without stale hierarchy mandates',()=>{
 for(const p of parts)for(const format of FORMATS)for(const layout of layouts){
  const full=buildPrompt(p,format,layout),spec=buildPrompt(p,format,layout,false),d=getDelivery(p,format,layout);
  assert.ok(full.includes(INTEGRATION_RULES));assert.ok(full.includes(d.entry));assert.ok(full.includes(buildUsage(p,format,layout)));
  assert.ok(full.includes(d.files[0].code.trimEnd()));assert.ok(full.length>spec.length);
  assert.ok(!spec.includes('## 正本のソースコード'));
  for(const old of ['src/ の下の構造をまとめて移します','フォルダー階層と相対importを維持して配置してください','階層を崩さずまとめて配置'])assert.ok(!full.includes(old));
  assert.equal(packageContents(p,format,layout,false).find(f=>f.name==='PROMPT.md')!.code,spec);
  assert.equal(packageContents(p,format,layout).find(f=>f.name==='INTEGRATION.json')!.code,buildManifest(p,format,layout));
 }
});
test('syntax-aware rewriting preserves string examples/comments but rewrites imports, types, export and URLs',()=>{
 const source='src/widget.ts',code=`// import './do-not-touch'\nconst s = "import './literal'";\nimport type { X } from './type';\nexport { foo } from './type';\ntype T=import('./type').X;\nconst load=()=>import('./type');\nconst icon=new URL('./icon.svg?raw#mark',import.meta.url);`;
 const map=new Map([['src/widget.ts','widget/entry.ts'],['src/type.ts','widget/internal/type.ts'],['src/icon.svg','widget/assets/icon.svg']]);
 const out=exportCode(code,'ts','widget/entry.ts',source,map);
 assert.ok(out.includes("// import './do-not-touch'"));assert.ok(out.includes(`"import './literal'"`));
 assert.equal(out.match(/\.\/internal\/type/g)?.length,4);assert.ok(out.includes('./assets/icon.svg?raw#mark'));
});
test('CSS references, comments, data URLs, quoted text, @import and HTML tags stay correct',()=>{
 const map=new Map([['src/a/styles.css','widget/styles.css'],['src/a/theme.css','widget/internal/theme.css'],['src/a/pic.svg','widget/assets/pic.svg'],['src/a/index.html','examples/index.html']]);
 const css=`/* url('./not-a-file') */ @import "./theme.css"; .a { content:"url('./literal')"; background:url('./pic.svg#icon'),url(data:image/svg+xml;base64,abc); clip-path:url(#local); }`;
 const out=exportCode(css,'js','widget/styles.css','src/a/styles.css',map);
 assert.ok(out.includes('@import "./internal/theme.css"'));assert.ok(out.includes("url('./assets/pic.svg#icon')"));assert.ok(out.includes("url('./literal')"));assert.ok(out.includes('url(#local)'));
 const html=`<!-- <img src="./missing.svg"> --><link rel="stylesheet" href="./styles.css"><img src='./pic.svg'><style>.x{background:url(./pic.svg)}</style>`;
 const h=exportCode(html,'js','examples/index.html','src/a/index.html',map);
 assert.ok(h.includes('href="../widget/styles.css"'));assert.equal(h.match(/\.\.\/widget\/assets\/pic.svg/g)?.length,2);assert.ok(h.includes('src="./missing.svg"'));
});
test('closure includes example-only imports and cyclic local dependencies exactly once',()=>{
 const map=new Map([['a.ts',"import './b'; export const a=1"],['b.ts',"import './a'; export const b=1"],['example.ts',"import './a'; import './styles.css'"],['styles.css',"@import './theme.css';"],['theme.css','']]);
 assert.deepEqual(new Set(dependencies('example.ts',n=>map.get(n)!,n=>map.has(n))),new Set(map.keys()));
});
test('unresolved imports, aliases, computed imports, unsupported binary assets and invalid layout collisions fail closed',()=>{
 const local=new Map([['x.ts','component/x.ts']]);
 for(const code of ["import './missing'","import '@/lib/x'","import(name)","import.meta.glob('./*.ts')","require('./x')","new URL(name,import.meta.url)"])
  assert.throws(()=>exportCode(code,'ts','component/x.ts','x.ts',local));
 assert.throws(()=>dependencies('pic.png',()=>'',()=>true),/Binary/);
 assert.throws(()=>exportCode('.x{background:url(/global.png)}','js','x.css','x.css',new Map([['x.css','x.css']])));
 const base='src/parts/toggles/demo';
 assert.throws(()=>layoutMap([`${base}/internal/motion.ts`,'src/shared/motion.ts'],base,'DemoToggle','ts','portable'));
 assert.throws(()=>layoutMap([`${base}/react/Example.tsx`,`${base}/examples/Example.tsx`,'src/shared/CON.ts'],base,'DemoToggle','tsx','portable'));
});
test('export CLI selects only requested layouts, format, part and review mode',()=>{
 assert.deepEqual(parseExportOptions([]).layouts,['portable']);
 assert.deepEqual(parseExportOptions(['--layout','all','--format=tsx','--part','chrome','--mode=text']),{layouts:['portable','original'],formats:['tsx'],partId:'chrome',mode:'text'});
 for(const args of [['--layout','flat'],['--mode','bad'],['--part','../x'],['--format','react'],['--unknown','x'],['--layout']])assert.throws(()=>parseExportOptions(args));
});

test('example-only dependency trees stay outside the portable runtime folder',()=>{
 const base='src/parts/toggles/demo';
 const sources=[`${base}/react/DemoToggle.tsx`,`${base}/react/Example.tsx`,`${base}/react/example-helper.ts`,'src/shared/example-only.ts','src/shared/motion.ts'];
 const exampleOnly=new Set([`${base}/react/Example.tsx`,`${base}/react/example-helper.ts`,'src/shared/example-only.ts']);
 const map=layoutMap(sources,base,'DemoToggle','tsx','portable',exampleOnly);
 assert.equal(map.get(`${base}/react/example-helper.ts`),'examples/internal/component/react/example-helper.ts');
 assert.equal(map.get('src/shared/example-only.ts'),'examples/internal/shared/example-only.ts');
 assert.equal(map.get('src/shared/motion.ts'),'demo-toggle/internal/motion.ts');
 const code="import { getExample } from './example-helper'; import { move } from '../../../../shared/motion';";
 const rewritten=exportCode(code,'tsx',map.get(`${base}/react/Example.tsx`)!,`${base}/react/Example.tsx`,map);
 assert.ok(rewritten.includes('./internal/component/react/example-helper'));
 assert.ok(rewritten.includes('../demo-toggle/internal/motion'));
});

test('escaped filenames and SVG references are rewritten without breaking the source syntax',()=>{
 const map=new Map([['src/main.ts','widget/init.ts'],["src/foo's.ts","widget/internal/foo's.ts"],['src/icon.svg','widget/assets/icon.svg'],['src/shapes.svg','widget/internal/shapes.svg']]);
 const code="import './foo\\'s'; const s=\"not an import './foo'\";";
 const result=exportCode(code,'ts','widget/init.ts','src/main.ts',map);
 assert.ok(result.includes("./internal/foo\\'s"));
 assert.equal(sourceReferences(result,'widget/init.ts')[0].request,"./internal/foo's");
 const svg='<svg><use href="./shapes.svg#shape"/><path fill="url(#local)"/></svg>';
 const transformed=exportCode(svg,'js','widget/assets/icon.svg','src/icon.svg',map);
 assert.ok(transformed.includes('../internal/shapes.svg#shape'));assert.ok(transformed.includes('url(#local)'));
});
