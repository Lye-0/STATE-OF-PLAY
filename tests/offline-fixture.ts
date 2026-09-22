/** Explicit network-restricted test adapter. This is NOT a Vite build or a distributable preview. */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { ROOT, buildCatalog, mountModule, type CatalogBuild } from '../scripts/catalog.ts';
import { resolveLocal, transpile } from '../scripts/source-tools.ts';
export function testBundle(entry: string, extras: Map<string,string> = new Map(), runtimeImport = '', snapshot?: CatalogBuild): string {
 const virtual=new Map<string,string>();
 if (entry === 'src/main.ts') {
  const catalog=snapshot ?? buildCatalog();
  virtual.set('virtual:sop-catalog','export default '+JSON.stringify(catalog.parts)+';');
  virtual.set('virtual:sop-mounts',mountModule(catalog.bases));
  virtual.set('virtual:sop-styles','');
 }
 const modules=new Map<string,string>();
 const exists=(file:string)=>extras.has(file)||fs.existsSync(path.join(ROOT,file));
 const visit=(id:string):string=>{
  if(modules.has(id))return id;
  modules.set(id,'');
  const source=virtual.get(id)??extras.get(id)??fs.readFileSync(path.join(ROOT,id),'utf8');
  const code=transpile(source,id,ts.ModuleKind.CommonJS,ts.JsxEmit.React).replaceAll('__APP_VERSION__',JSON.stringify(JSON.parse(fs.readFileSync(path.join(ROOT,'package.json'),'utf8')).version))
    .replace(/require\((['"])([^'"\n]+)\1\)/g,(_,_q:string,request:string)=>{
     if(request==='react'||request==='react-dom/client')return `require(${JSON.stringify(request)})`;
     if(request.endsWith('.css'))return '{}';
     const dep=request.startsWith('virtual:')?request:request.startsWith('/src/')?request.slice(1):resolveLocal(id,request,exists);
     return `require(${JSON.stringify(visit(dep))})`;
    });
  modules.set(id,code);return id;
 };
 visit(entry);
 return runtimeImport+'\n(()=>{const modules={'+[...modules].map(([id,code])=>`${JSON.stringify(id)}:(module,exports,require)=>{\n${code}\n}`).join(',')+
 '};const cache={};function require(id){'+(runtimeImport?'if(id==="react")return React;if(id==="react-dom/client")return ReactDOMClient;':'')+
 'if(cache[id])return cache[id].exports;const m=cache[id]={exports:{}};modules[id](m,m.exports,require);return m.exports;}require('+JSON.stringify(entry)+');})();';
}
export function offlineFiles(data:CatalogBuild=buildCatalog()): Map<string,string> {
 const files=new Map<string,string>();
 let html=fs.readFileSync(path.join(ROOT,'index.html'),'utf8').replaceAll('%BASE_URL%','/');
 html=html.replace('<script type="module" src="/src/main.ts"></script>','<script src="/test-app.js" defer></script>');
 html=html.replace('</head>','<link rel="stylesheet" href="/test-styles.css"></head>');
 files.set('/index.html',html);files.set('/test-app.js',testBundle('src/main.ts',new Map(),'',data));
 files.set('/test-styles.css',data.styles+'\n'+fs.readFileSync(path.join(ROOT,'src/app/gallery.css'),'utf8')+'\n'+fs.readFileSync(path.join(ROOT,'src/app/scroll-samples.css'),'utf8'));
 return files;
}

/** Resolve only authored local CSS imports for synthetic documents; real HTTP uses the browser. */
export function inlineTestCSS(file: string, read: (path: string) => string, seen = new Set<string>()): string {
 if (seen.has(file)) throw new Error(`Circular CSS import in fixture: ${file}`);
 const next = new Set(seen); next.add(file);
 return read(file).replace(/@import\s+["']([^"']+)["']\s*;/g, (_, request: string) =>
   inlineTestCSS(path.posix.resolve(path.posix.dirname(file), request), read, next));
}
