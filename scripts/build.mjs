/** Copy just the static website; no installation or bundler is needed. */
import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const path of ['index.html', 'css', 'js', 'assets', '.nojekyll']) await cp(resolve(root, path), resolve(out, path), { recursive: true });
console.log('Static site built in dist/.');
