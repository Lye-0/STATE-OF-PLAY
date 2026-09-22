import {packCatalog} from '../src/catalog/transport.ts';
import path from 'node:path';
import type { Plugin, ViteDevServer, HmrContext } from 'vite';
import { ROOT, buildCatalog, mountModule, type CatalogBuild } from './catalog.ts';

/** The catalogue lives in Vite's module graph; only dist/ is emitted during a build. */
export function catalogPlugin(root = ROOT): Plugin {
  let cache: CatalogBuild | undefined;
  const names = ['virtual:sop-catalog', 'virtual:sop-mounts', 'virtual:sop-styles'];
  const snapshot = () => cache ??= buildCatalog(root);
  const relevant = (file: string) => /^(src\/(parts|shared|catalog)\/|scripts\/templates\/)/.test(path.relative(root, file).split(path.sep).join('/'));
  return {
    name: 'state-of-play-catalog',
    enforce: 'pre',
    buildStart() { cache = undefined; },
    resolveId(id: string) { if (names.includes(id)) return '\0' + id; },
    load(id: string) {
      if (!names.some(name => id === '\0' + name)) return;
      const data = snapshot();
      if (id.endsWith('sop-catalog')) return "import {unpackCatalog} from '/src/catalog/transport.ts';export default unpackCatalog(" + JSON.stringify(packCatalog(data.parts)).replaceAll('<', '\\u003c') + ');';
      if (id.endsWith('sop-mounts')) return mountModule(data.bases);
      return data.bases.map(base => `import '/${base}/styles.css';`).join('\n');
    },
    configureServer(server: ViteDevServer) {
      server.watcher.add(['src/parts', 'src/shared', 'src/catalog', 'scripts/templates'].map(p => path.join(root, p)));
      const reload = (file: string) => {
        if (!relevant(file)) return;
        cache = undefined;
        for (const name of names) {
          const mod = server.moduleGraph.getModuleById('\0' + name);
          if (mod) server.moduleGraph.invalidateModule(mod);
        }
        server.ws.send({type:'full-reload'});
      };
      server.watcher.on('add', reload).on('unlink', reload);
      server.httpServer?.once('close', () => { server.watcher.off('add', reload).off('unlink', reload); });
    },
    async handleHotUpdate(context: HmrContext) {
      if (!relevant(context.file)) return;
      await context.read(); // Wait for the editor to finish writing before rebuilding the snapshot.
      cache = undefined;
      for (const name of names) {
        const mod = context.server.moduleGraph.getModuleById('\0' + name);
        if (mod) context.server.moduleGraph.invalidateModule(mod);
      }
      context.server.ws.send({type:'full-reload'});
      return [];
    }
  };
}
