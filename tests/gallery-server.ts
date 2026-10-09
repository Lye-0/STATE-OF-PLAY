import path from 'node:path';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';

/** Static interaction runs use the real app config/catalogue, but each suite
 * owns its optimizer cache and cannot hot-reload midway through an interaction.
 * The real watcher regression in browser.ts intentionally uses its own server.
 */
export function createGalleryTestServer(suite: string) {
  return createServer({
    root: ROOT,
    cacheDir: path.join(ROOT, '.test-output', suite, 'vite-cache', String(process.pid)),
    // App config already includes every bare React entry point. Avoid scanning
    // all catalogue modules and saved HTML reports on a cold test startup.
    optimizeDeps: {entries: [], noDiscovery: true},
    server: {host: '127.0.0.1', port: 0, hmr: false, watch: null},
  });
}
