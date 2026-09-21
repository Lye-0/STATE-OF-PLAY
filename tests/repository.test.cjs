"use strict";
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = path.resolve(__dirname,'..');
const read = name=>fs.readFileSync(path.join(ROOT,name),'utf8');
const context={window:{}};vm.runInNewContext(read('assets/catalog.js'),context);
const parts=context.window.SOP_CATALOG;
test('catalog contains the existing ten toggles and six blocks',()=>{assert.equal(parts.length,16);assert.equal(parts.filter(p=>p.category==='toggles').length,10);assert.equal(parts.filter(p=>p.category==='blocks').length,6);assert.equal(new Set(parts.map(p=>p.id)).size,16);});
test('all 452 source previews equal their exported files',()=>{let count=0;for(const p of parts)for(const [format,files]of Object.entries(p.files))for(const f of files){assert.equal(read(`packages/${p.id}/${format}/${f.name}`),f.code);count++;}assert.equal(count,452);});
test('all component imports resolve inside hierarchical exported packages',()=>{
  for(const p of parts) for(const [format,files] of Object.entries(p.files)) {
    const names=new Set(files.map(f=>f.name));
    for(const f of files) {
      if(!/\.[jt]sx?$/.test(f.name)) continue;
      for(const m of f.code.matchAll(/(?:from\s+|import\s*)['"](\.[^'"\n]+)['"]/g)) {
        const dep=path.posix.normalize(path.posix.join(path.posix.dirname(f.name),m[1]));
        assert.ok(!dep.startsWith('../'),`${p.id} ${f.name}: escapes package`);
        assert.ok([dep,dep+'.ts',dep+'.tsx',dep+'.js',dep+'.jsx'].some(x=>names.has(x)),`${p.id} ${format}: missing ${dep}`);
        if(format==='js') assert.ok(path.posix.extname(m[1]),`Browser import needs extension: ${dep}`);
      }
    }
  }
});
test('styles in catalog, source and generated gallery stay identical',()=>{const css=read('assets/styles.css');const registry=JSON.parse(read('src/catalog/registry.json'));for(const base of registry){const meta=JSON.parse(read(base+'/meta.json'));const source=read(base+'/styles.css');assert.ok(css.includes(source));assert.equal(parts.find(p=>p.id===meta.id).files.ts.find(f=>f.name.endsWith('/styles.css')).code,source);}});
test('gallery script and vendor references all exist',()=>{const html=read('index.html');for(const m of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g))assert.ok(fs.existsSync(path.join(ROOT,m[1])),m[1]);for(const f of ['app.js','catalog.js','vendor/jszip.js','vendor/prism.js'])new vm.Script(read('assets/'+f));});
test('standalone previews use separated and valid HTML/CSS/JS',()=>{for(const p of parts){const base=`packages/${p.id}/preview/`;assert.ok(read(base+'index.html').includes('./app.js'));assert.ok(read(base+'index.html').includes('./styles.css'));new vm.Script(read(base+'app.js'));assert.ok(!read(base+'index.html').includes('assets/catalog.js'));}});
test('download and copy controls keep requested placement',()=>{const src=read('src/app/code-viewer.js');assert.ok(src.indexOf('class="download-file small-button"')<src.indexOf('class="copy-file small-button"'));assert.ok(!read('src/app/details.js').includes('必要ファイルをコピー'));});
test('no single-file gallery preview is distributed',()=>{assert.ok(!fs.existsSync(path.join(ROOT,'preview.html')));assert.ok(!fs.existsSync(path.join(ROOT,'STATE-OF-PLAY-preview.html')));assert.ok(!read('src/index.html').includes('<style>'));});
test('HTTP server provides JS/CSS with correct content types',async()=>{const {startServer}=require('../scripts/server.cjs');const server=await startServer(0);try{const base=`http://127.0.0.1:${server.address().port}`;for(const [url,type]of [['/','text/html'],['/assets/app.js','text/javascript'],['/assets/styles.css','text/css']]){const response=await fetch(base+url);assert.equal(response.status,200);assert.ok(response.headers.get('content-type').startsWith(type));}assert.equal((await fetch(base+'/.git/config')).status,403);assert.equal((await fetch(base+'/node_modules/x')).status,403);assert.equal((await fetch(base+'/absent-file')).status,404);}finally{await new Promise(r=>server.close(r));}});

test('exports preserve original folders instead of flattening filenames',()=>{
 const registry=JSON.parse(read('src/catalog/registry.json'));
 for(const base of registry){const layout=JSON.parse(read(base+'/exports.json')); for(const entries of Object.values(layout))for(const f of entries)assert.equal(f.name,f.source);}
 for(const p of parts)for(const files of Object.values(p.files))for(const f of files)assert.ok(f.name.startsWith('src/'));
});
test('native HTML imports resolve to actual CSS and main.js',()=>{
 for(const p of parts){const files=p.files.js;const html=files.find(f=>f.name.endsWith('/vanilla/index.html'));assert.ok(html);
  for(const m of html.code.matchAll(/(?:src|href)=["'](\.[^"']+)["']/g)){
   const dep=path.posix.normalize(path.posix.join(path.posix.dirname(html.name),m[1]));
   assert.ok(files.some(f=>f.name===dep),`${p.id}: ${dep}`);assert.ok(!dep.endsWith('.ts'));
  }
 }
});
test('Playwright is pinned to the requested patched version',()=>{
 const pkg=JSON.parse(read('package.json'));assert.equal(pkg.devDependencies.playwright,'1.63.0');
});

test('every part and format archives its full nested source without flattening',async()=>{
 const JSZip=require('../vendor/jszip.js');const {prepareArchive,addArchiveEntries}=require('../src/shared/archive.js');
 for(const p of parts)for(const [format,files]of Object.entries(p.files))for(const mode of ['source','text']){
  const raw=[...files,{name:'README.md',code:p.usage},{name:'PROMPT.md',code:p.prompt},...Object.entries(p.preview).map(([name,code])=>({name:'preview/'+name,code}))];
  const entries=prepareArchive(raw,mode);const root=`${p.id}-${format}${mode==='text'?'-text':''}`;
  const zip=addArchiveEntries(new JSZip(),root,entries);const data=await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE'});
  const restored=await JSZip.loadAsync(data,{checkCRC32:true});
  for(const f of entries)assert.equal(await restored.file(`${root}/${f.name}`).async('string'),f.code,`${p.id}/${format}/${f.name}`);
  assert.ok(restored.files[`${root}/src/parts/${p.category}/${p.id}/`]?.dir);
  assert.ok(restored.files[`${root}/src/shared/`]?.dir);
 }
});
