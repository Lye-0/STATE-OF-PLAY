import path from 'node:path';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {reactOptimizeDependencies} from '../scripts/vite-dependencies.ts';

/** Export fixtures are written after startup, so Vite cannot discover all their
 * dependencies by scanning index.html. Optimize the complete React dependency
 * set before serving them; late discovery would invalidate already loaded URLs
 * with "504 Outdated Optimize Dep" and reload live test state.
 */
export function createComponentServer(suite: string) {
  return createServer({
    root: ROOT,
    configFile: false,
    cacheDir: path.join(ROOT, '.test-output', suite, 'vite-cache'),
    optimizeDeps: {
      entries: [],
      noDiscovery: true,
      include: reactOptimizeDependencies,
    },
    server: {host: '127.0.0.1', port: 0, hmr: false, watch: null},
  });
}
