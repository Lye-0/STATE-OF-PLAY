import {packCatalog} from '../src/catalog/transport.ts';
import path from 'node:path';
import fs from 'node:fs';
import type {Plugin, ViteDevServer, HmrContext} from 'vite';
import {ROOT, buildCatalog, mountModule, type CatalogBuild} from './catalog.ts';
import type {PartSummary, PartPreview} from '../src/catalog/types.ts';

/** Registry remains the single authoring boundary, including externally supplied patches. */
export function readBrowserIndex(root = ROOT): {bases: string[]; index: PartSummary[]; records: Omit<PartPreview, 'markup'>[]} {
  const bases = JSON.parse(fs.readFileSync(path.join(root, 'src/catalog/registry.json'), 'utf8')) as string[];
  const seen = new Set<string>();
  const records = bases.map(base => {
    if (!/^src\/parts\/[a-z]+\/[a-z0-9-]+$/.test(base)) throw new Error('Invalid component path: '+base);
    const part = JSON.parse(fs.readFileSync(path.join(root, base, 'meta.json'), 'utf8')) as Omit<PartPreview, 'markup'>;
    if (part.id !== base.split('/').at(-1) || part.category !== base.split('/')[2] || seen.has(part.id)) throw new Error('Invalid component identity: '+base);
    seen.add(part.id); return part;
  }).sort((a,b) => a.order - b.order);
  for (const part of records) for (const id of part.related) if (!seen.has(id)) throw new Error('Unknown related part: '+id);
  const index = records.map(({id,name,category,order,description,material,designType,tags,initial,config,tagline}) => ({id,name,category,order,description,material,designType,tags,initial,config,tagline}));
  return {bases, index, records};
}

export function catalogPlugin(root = ROOT): Plugin {
  let listing: ReturnType<typeof readBrowserIndex> | undefined;
  let legacy: CatalogBuild | undefined;
  const details = new Map<string, string>();
  let production = false;
  let baseUrl = '/';
  const snapshot = () => listing ??= readBrowserIndex(root);
  const endpoint = '__sop/parts/';
  const payload = (id: string) => {
    if (!snapshot().index.some(p => p.id === id)) throw new Error('Unknown part: '+id);
    let result = details.get(id);
    if (!result) { result = JSON.stringify(packCatalog(buildCatalog(root, [id]).parts)); details.set(id,result); }
    return result;
  };
  const relevant = (file: string) => /^(src\/(parts|shared|catalog)\/|scripts\/)/.test(path.relative(root,file).split(path.sep).join('/'));
  const invalidate = () => { listing = undefined; legacy = undefined; details.clear(); };
  const reload = (server: ViteDevServer, file: string) => {
    if (!relevant(file)) return;
    invalidate();
    for (const mod of server.moduleGraph.idToModuleMap.values()) if (mod.id?.startsWith('\0virtual:sop-')) server.moduleGraph.invalidateModule(mod);
    server.ws.send({type:'full-reload'});
  };
  return {
    name:'state-of-play-catalog', enforce:'pre',
    configResolved(config) { production = config.command === 'build'; baseUrl = config.base; },
    buildStart() { invalidate(); },
    resolveId(id) { if (/^virtual:sop-(browser|category\/[a-z]+|catalog|mounts|styles)$/.test(id)) return '\0'+id; },
    load(id) {
      if (!id.startsWith('\0virtual:sop-')) return;
      const {index,bases,records} = snapshot();
      if (id === '\0virtual:sop-browser') {
        const categories = [...new Set(index.map(p=>p.category))];
        const urls = index.map(part => {
          const url = production
            ? 'import.meta.ROLLUP_FILE_URL_'+this.emitFile({type:'asset',name:part.id+'.json',source:payload(part.id)})
            : JSON.stringify(baseUrl+endpoint+part.id+'.json');
          // Release the large per-part text after emission; never send it in the initial JS.
          if (production) details.delete(part.id);
          return JSON.stringify(part.id)+':'+url;
        });
        return 'export const index='+JSON.stringify(index).replaceAll('<','\\u003c')+';\nexport const categoryLoaders={'+categories.map(c=>JSON.stringify(c)+':()=>import('+JSON.stringify('virtual:sop-category/'+c)+')').join(',')+'};\nexport const partUrls={'+urls.join(',')+'};export async function fetchPartPayload(id){const response=await fetch(partUrls[id]);if(!response.ok)throw new Error("Part download failed: "+response.status);return response.json();}';
      }
      if (id.startsWith('\0virtual:sop-category/')) {
        const category = id.slice(id.lastIndexOf('/')+1);
        const selected = bases.filter(b=>b.split('/')[2]===category);
        if (!selected.length) throw new Error('Unknown category: '+category);
        const parts = records.filter(p=>p.category===category).map(p=>({...p,markup:fs.readFileSync(path.join(root,'src/parts',category,p.id,'markup.html'),'utf8')}));
        const styles = selected.map(b=>`import '/${b}/styles.css';`);
        if (category === 'toggles') styles.unshift("import '/src/parts/blocks/original-surface/styles.css';");
        return styles.join('\n')+'\n'+mountModule(selected)+'\nexport const parts='+JSON.stringify(parts).replaceAll('<','\\u003c')+';';
      }
      // Compatibility for the CLI/offline fixtures; the normal browser never imports these.
      const data = legacy ??= buildCatalog(root);
      if (id.endsWith('sop-catalog')) return "import {unpackCatalog} from '/src/catalog/transport.ts';export default unpackCatalog("+JSON.stringify(packCatalog(data.parts)).replaceAll('<','\\u003c')+');';
      if (id.endsWith('sop-mounts')) return mountModule(data.bases);
      return data.bases.map(b=>`import '/${b}/styles.css';`).join('\n');
    },
    configureServer(server) {
      server.middlewares.use((req,res,next) => {
        const pathname = (req.url ?? '').split('?')[0];
        const prefix = baseUrl+endpoint;
        if (!pathname.startsWith(prefix)) return next();
        const name = pathname.slice(prefix.length);
        if (!/^[a-z0-9-]+\.json$/.test(name)) { res.statusCode=404; res.end(); return; }
        try { const json=payload(name.slice(0,-5)); res.setHeader('Content-Type','application/json; charset=utf-8'); res.setHeader('Cache-Control','no-cache'); res.end(json); }
        catch(error) { res.statusCode=500; res.end(JSON.stringify({error:'Unable to build part'})); server.config.logger.error(String(error)); }
      });
      server.watcher.add(['src/parts','src/shared','src/catalog','scripts'].map(p=>path.join(root,p)));
      const change = (file:string) => reload(server,file);
      server.watcher.on('add',change).on('unlink',change);
      server.httpServer?.once('close',()=>{server.watcher.off('add',change).off('unlink',change);});
    },
    async handleHotUpdate(context: HmrContext) { if (!relevant(context.file)) return; await context.read(); reload(context.server,context.file); return []; }
  };
}
