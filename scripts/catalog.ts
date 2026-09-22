/** Pure, in-memory catalogue generation. No packages/ tree, no writes under src/. */
import { scrollSampleHTML } from '../src/catalog/scroll-sample.ts';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateArchivePath, validateArchiveEntries } from '../src/shared/archive.ts';
import { layoutMap } from './layout.ts';
import { dependencies, exportCode, bundleDemo, sourceReferences, isLocalReference, resolveLocal } from './source-tools.ts';
import type { Part, SourceFile, Format } from '../src/catalog/types.ts';
export const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const FORMATS: Format[] = ['tsx','jsx','ts','js'];
export interface CatalogBuild { parts: Part[]; bases: string[]; styles: string; }
const html = (value: string) => value.replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]!));

export function buildCatalog(root = ROOT): CatalogBuild {
  const inputCache = new Map<string,string>();
  const read = (name: string): string => { validateArchivePath(name); if (!inputCache.has(name)) inputCache.set(name,fs.readFileSync(path.join(root, name), 'utf8')); return inputCache.get(name)!; };
  const exists = (name: string) => fs.existsSync(path.join(root, name));
  const bases: unknown = JSON.parse(read('src/catalog/registry.json'));
  if (!Array.isArray(bases) || !bases.every((base): base is string => typeof base === 'string' && /^src\/parts\/(toggles|blocks|scrollbars|dropdowns|accordions|textboxes|buttons|links)\/[a-z0-9-]+$/.test(base)))
    throw new Error('registry.json must contain valid component directories.');
  function bundledCSS(source: string, visited = new Set<string>()): string {
    if (visited.has(source)) return '';
    visited.add(source);
    return read(source).replace(/@import\s+["']([^"']+)["']\s*;/g, (_, request: string) =>
      bundledCSS(resolveLocal(source, request, exists), visited));
  }
  const seen = new Set<string>();
  const parts = bases.map(base => {
    const meta = JSON.parse(read(`${base}/meta.json`)) as Omit<Part,'files'|'portableFiles'|'preview'|'markup'|'usage'|'prompt'>;
    if (!/^[a-z][a-z0-9-]*$/.test(meta.id) || seen.has(meta.id)) throw new Error(`Invalid/duplicate part ID: ${meta.id}`);
    if (!['A','B'].includes(meta.designType) || typeof meta.runtime !== 'string') throw new Error(`Invalid design type/runtime: ${base}`);
    if (!['toggles','blocks','scrollbars','dropdowns','accordions','textboxes','buttons','links'].includes(meta.category) || !Number.isFinite(meta.order) || !Array.isArray(meta.props) || !Array.isArray(meta.tags))
      throw new Error(`Invalid metadata: ${base}`);
    if (meta.category === 'toggles' && (!meta.config || typeof meta.initial !== 'boolean')) throw new Error(`Missing toggle configuration: ${base}`);
    if (base.split('/').at(-1) !== meta.id || !/^[A-Z][A-Za-z0-9]*$/.test(meta.componentName)) throw new Error(`Invalid component identity: ${base}`);
    seen.add(meta.id);
    const files = {} as Record<Format, SourceFile[]>;
    const portableFiles = {} as Record<Format, SourceFile[]>;
    for (const format of FORMATS) {
      const react = format === 'tsx' || format === 'jsx';
      const entry = `${base}/${react ? `react/${meta.componentName}.tsx` : 'vanilla/init.ts'}`;
      const examples = react ? [`${base}/react/Example.tsx`, `${base}/markup.html`] : [`${base}/vanilla/main.ts`, `${base}/markup.html`, `${base}/vanilla/index.html`];
      const runtimeSources = new Set([entry, `${base}/styles.css`, `${base}/markup.html`].flatMap(seed => dependencies(seed, read, exists)));
      const seeds = [entry, `${base}/styles.css`, ...examples];
      const closure = [...new Set(seeds.flatMap(seed => dependencies(seed, read, exists)))];
      const exampleOnly = new Set(closure.filter(source => !runtimeSources.has(source)));
      // Preserve entry-first ordering, but resolve dependencies of the examples as well.
      const sources = [...new Set([entry, `${base}/styles.css`, ...closure.filter(f => !examples.includes(f)), ...examples])];
      for (const layout of ['original', 'portable'] as const) {
        const mapping = layoutMap(sources, base, meta.componentName, format, layout, exampleOnly);
        const exported = sources.map(source => {
          const name = mapping.get(source)!;
          const extension = name.split('.').at(-1)!;
          const group: SourceFile['group'] = exampleOnly.has(source) ? 'example' : source.startsWith('src/shared/') ? 'shared' : 'component';
          return { name, sourceName: source, code: exportCode(read(source), format, name, source, mapping),
            language: ({ts:'typescript',js:'javascript',html:'markup'} as Record<string,string>)[extension] ?? extension, group };
        });
        validateArchiveEntries(exported);
        const exportedNames = new Set(exported.map(f=>f.name));
        const runtime = new Set(exported.filter(f=>f.group !== 'example').map(f=>f.name));
        for (const file of exported) for (const ref of sourceReferences(file.code,file.name).filter(isLocalReference)) {
          const target = resolveLocal(file.name,ref.request,name=>exportedNames.has(name));
          if (runtime.has(file.name) && !runtime.has(target)) throw new Error(`Runtime depends on example: ${file.name} -> ${target}`);
          if (layout === 'portable' && runtime.has(file.name) && target.split('/')[0] !== file.name.split('/')[0]) throw new Error(`Runtime escapes component: ${file.name}`);
        }
        (layout === 'original' ? files : portableFiles)[format] = exported;
      }
    }
    const markup = read(`${base}/markup.html`);
    let demoMarkup = markup;
    if (meta.category === 'blocks') demoMarkup = demoMarkup.replace(/<div class="sop-surface-content">[\s\S]*?<\/div>/,
      `<div class="sop-surface-content"><h2>${html(meta.name)}</h2><p>ここに、あなたのコンテンツを。</p><button type="button">サンプルボタン</button></div>`);
    if (meta.category === 'scrollbars') demoMarkup = demoMarkup.replace('<!-- slot: insert your scrollable content -->', scrollSampleHTML(meta));
    const hint = meta.category === 'buttons' ? 'クリックで操作します。保存・送信などの処理は利用先へ接続してください。' : meta.category === 'links' ? 'hrefで実際の移動先へ。下の移動先へリンクできます。' : meta.category === 'textboxes' ? '実際に入力できます。日本語・貼り付け・キーボード操作もそのまま使えます。入力値は保存・送信しません。' : meta.category === 'dropdowns' ? '開いて選ぶ。選択肢・説明・アイコンも差し替えられます。' : meta.category === 'accordions' ? '見出しで開閉。内側のコンテンツも自由に差し替えられます。' : meta.category === 'toggles' ? 'クリック・ドラッグ・キーボードで操作できます。' : meta.category === 'scrollbars' ? 'ホイール・スワイプ・レールのドラッグで読み進められます。' : '中身を自由に入れ替えられる、独立した背景パーツです。';
    const preview = {
      'index.html': `<!doctype html>\n<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${html(meta.name)} — standalone demo</title><link rel="stylesheet" href="./styles.css"></head><body><main><h1>${html(meta.name)} · ${html(meta.version)}</h1><div class="demo-root">${demoMarkup}</div>${meta.category === 'links' ? '<section id="destination" tabindex="-1" style="margin-top:120px;padding:24px;border:1px solid #727d76"><h2>リンク先</h2><p>hrefを目的のページへ変更して使えます。</p></section>' : ''}<p class="hint">${hint}</p></main><script src="./app.js" defer></script></body></html>\n`,
      'styles.css': read('scripts/templates/demo.css') + (meta.category === 'scrollbars' ? read('src/app/scroll-samples.css') : '') + bundledCSS(`${base}/styles.css`),
      'app.js': bundleDemo(root, `${base}/demo/main.ts`, read('scripts/templates/demo-entry.ts.txt'))
    };
    return {...meta, markup, usage: read(`${base}/usage.md`), prompt: read(`${base}/prompt.md`), files, portableFiles, preview};
  }).sort((a, b) => a.order - b.order);
  for (const part of parts) for (const id of part.related) if (!seen.has(id)) throw new Error(`Unknown related part: ${id}`);
  const styleSeen = new Set<string>();
  return {parts, bases, styles: bases.map(base => bundledCSS(`${base}/styles.css`,styleSeen)).join('\n')};
}

export function mountModule(bases: string[]): string {
  return bases.map((base, i) => `import { init as mount${i} } from '/${base}/vanilla/init.ts';`).join('\n') +
    '\nexport const mounts = {\n' + bases.map((base, i) => `${JSON.stringify(base.split('/').at(-1))}: mount${i}`).join(',\n') + '\n};\n';
}
