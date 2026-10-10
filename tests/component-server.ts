import path from 'node:path';
import {createServer} from 'vite';
import {ROOT} from '../scripts/catalog.ts';
import {reactOptimizeDependencies} from '../scripts/vite-dependencies.ts';
import type {Page} from 'playwright';

/** Cold Vite transforms belong to startup, not the short interaction deadline.
 * DOMContentLoaded alone does not prove the fixture module has initialized.
 */
export async function openComponentFixture(page: Page, url: string) {
  await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 120000});
  await page.waitForFunction(() => typeof (window as unknown as {mount?: unknown}).mount === 'function', undefined, {timeout: 120000});
}

/** Export fixtures are written after startup, so Vite cannot discover all their
 * dependencies by scanning index.html. Optimize the complete React dependency
 * set before serving them; late discovery would invalidate already loaded URLs
 * with "504 Outdated Optimize Dep" and reload live test state.
 */
export function createComponentServer(suite: string) {
  return createServer({
    root: ROOT,
    configFile: false,
    // Missing fixture assets must return 404, rather than falling back to the
    // gallery entry whose virtual catalogue plugin is intentionally absent.
    appType: 'mpa',
    cacheDir: path.join(ROOT, '.test-output', suite, 'vite-cache'),
    optimizeDeps: {
      entries: [],
      noDiscovery: true,
      include: reactOptimizeDependencies,
    },
    server: {host: '127.0.0.1', port: 0, hmr: false, watch: null},
  });
}
