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

class FixtureRequestError extends Error {
  readonly retryable: boolean;
  constructor(message: string, retryable: boolean) {
    super(message);
    this.retryable = retryable;
  }
}

/** A failed module fetch never executes React, so waiting for DOM alone cannot
 * recover. Reload once for a transient transport failure within the same total
 * deadline; missing files, runtime errors and render timeouts remain failures.
 */
export async function openRenderedFixture(page: Page, url: string, expectedParts: number, timeout = 120000) {
  const deadline = Date.now() + timeout;
  const remaining = () => Math.max(1, deadline - Date.now());
  const diagnostics: string[] = [];
  for (let attempt = 0; attempt < 2; attempt++) {
    let rejectLoad: (error: Error) => void;
    const loadFailure = new Promise<never>((_, reject) => { rejectLoad = reject; });
    const critical = (request: import('playwright').Request) =>
      ['document', 'script', 'stylesheet'].includes(request.resourceType());
    // A previous navigation can emit a late ERR_ABORTED after the retry starts.
    // Only requests issued during this attempt may fail this attempt.
    const requests = new Set<import('playwright').Request>();
    const startedRequest = (request: import('playwright').Request) => {
      if (critical(request)) requests.add(request);
    };
    const failedRequest = (request: import('playwright').Request) => {
      if (!requests.has(request)) return;
      const message = `${request.failure()?.errorText ?? 'Request failed'}: ${request.url()}`;
      diagnostics.push(message);
      rejectLoad(new FixtureRequestError(message, true));
    };
    const failedResponse = (response: import('playwright').Response) => {
      if (!requests.has(response.request()) || response.status() < 400) return;
      const status = response.status();
      const message = `HTTP ${status}: ${response.url()}`;
      diagnostics.push(message);
      rejectLoad(new FixtureRequestError(message, status === 408 || status === 429 || status >= 500));
    };
    const runtimeError = (error: Error) => {
      diagnostics.push(error.message);
      rejectLoad(error);
    };
    const consoleError = (message: import('playwright').ConsoleMessage) => {
      if (message.type() === 'error') diagnostics.push(message.text());
    };
    page.on('request', startedRequest);
    page.on('requestfailed', failedRequest);
    page.on('response', failedResponse);
    page.on('pageerror', runtimeError);
    page.on('console', consoleError);
    try {
      await Promise.race([
        (async () => {
          await page.goto(url, {waitUntil: 'domcontentloaded', timeout: remaining()});
          await page.waitForFunction(count => document.querySelectorAll('[data-part]').length === count,
            expectedParts, {timeout: remaining()});
        })(),
        loadFailure,
      ]);
      return;
    } catch (error) {
      if (error instanceof FixtureRequestError && error.retryable && attempt === 0 && Date.now() < deadline) {
        console.warn(`RETRY fixture after transient request failure: ${error.message}`);
        continue;
      }
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Fixture did not render ${expectedParts} parts: ${url}\n${message}\n${diagnostics.slice(-10).join('\n')}`,
        {cause: error});
    } finally {
      page.off('request', startedRequest);
      page.off('requestfailed', failedRequest);
      page.off('response', failedResponse);
      page.off('pageerror', runtimeError);
      page.off('console', consoleError);
    }
  }
}
