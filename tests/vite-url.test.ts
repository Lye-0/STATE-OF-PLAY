import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { requireLocalServerUrl, type LocalUrlProvider } from './vite-url.ts';

test('Vite URL: a listening server preserves its local URL', () => {
  const server: LocalUrlProvider = { resolvedUrls: { local: ['http://127.0.0.1:4173/'] } };
  assert.equal(requireLocalServerUrl(server), 'http://127.0.0.1:4173/');
});

test('Vite URL: production base path and URL encoding are preserved', () => {
  const url = 'http://127.0.0.1:4173/STATE-OF-PLAY/%E8%A9%A6%E9%A8%93/';
  assert.equal(requireLocalServerUrl({ resolvedUrls: { local: [url] } }), url);
});

test('Vite URL: null fails explicitly instead of bypassing the test', () => {
  assert.throws(() => requireLocalServerUrl({ resolvedUrls: null }, 'Vite production preview'),
    /Vite production preview: no local URL was resolved/);
});

test('Vite URL: an empty local array fails even when a network URL exists', () => {
  const server = { resolvedUrls: { local: [], network: ['http://192.0.2.1:4173/'] } };
  assert.throws(() => requireLocalServerUrl(server), /Ensure the server is listening/);
});

test('Vite URL: empty and whitespace URL values fail explicitly', () => {
  for (const url of ['', '   ']) {
    assert.throws(() => requireLocalServerUrl({ resolvedUrls: { local: [url] } }), /no local URL/);
  }
});

test('Vite URL: the first published local URL is chosen without guessing a port', () => {
  const server = { resolvedUrls: { local: ['http://127.0.0.1:49152/', 'http://localhost:49152/'] } };
  assert.equal(requireLocalServerUrl(server), 'http://127.0.0.1:49152/');
});

test('Vite URL: browser suites do not dereference nullable URLs or suppress their types', () => {
  for (const name of ['browser.ts', 'scrollbars.browser.ts', 'scrollbars.react.ts']) {
    const source = fs.readFileSync(new URL(name, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /resolvedUrls\s*[!.]/, name);
    assert.match(source, /requireLocalServerUrl\(/, name);
    assert.doesNotMatch(source, /@ts-(?:ignore|nocheck)/, name);
  }
});

test('CI runs all verify stages in order and checks types before downloading Chromium', () => {
  const manifest = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { scripts: { verify: string } };
  const workflow = fs.readFileSync(new URL('../.github/workflows/verify.yml', import.meta.url), 'utf8');
  const expected = manifest.scripts.verify.split(' && ');
  const commands = [...workflow.matchAll(/^\s+run: (.+)$/gm)].map(match => match[1]);
  assert.deepEqual(commands.filter(command => expected.includes(command)), expected);
  assert.ok(workflow.indexOf('run: npm run typecheck') < workflow.indexOf('run: npx playwright install'));
});
