/** Pure, in-memory catalogue generation. No packages/ tree, no writes under src/. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateArchivePath, validateArchiveEntries } from '../src/shared/archive.ts';
import { dependencies, exportCode, bundleDemo } from './source-tools.ts';
import type { Part, SourceFile, Format } from '../src/catalog/types.ts';
export const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const FORMATS: Format[] = ['tsx','jsx','ts','js'];
export interface CatalogBuild { parts: Part[]; bases: string[]; styles: string; }
const html = (value: string) => value.replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]!));

export function buildCatalog(root = ROOT): CatalogBuild {
  const read = (name: string): string => { validateArchivePath(name); return fs.readFileSync(path.join(root, name), 'utf8'); };
  const exists = (name: string) => fs.existsSync(path.join(root, name));
  const bases: unknown = JSON.parse(read('src/catalog/registry.json'));
  if (!Array.isArray(bases) || !bases.every((base): base is string => typeof base === 'string' && /^src\/parts\/(toggles|blocks)\/[a-z0-9-]+$/.test(base)))
    throw new Error('registry.json must contain valid component directories.');
  const seen = new Set<string>();
  const parts = bases.map(base => {
    const meta = JSON.parse(read(`${base}/meta.json`)) as Omit<Part,'files'|'preview'|'markup'|'usage'|'prompt'>;
    if (!/^[a-z][a-z0-9-]*$/.test(meta.id) || seen.has(meta.id)) throw new Error(`Invalid/duplicate part ID: ${meta.id}`);
    if (!['toggles','blocks'].includes(meta.category) || !Number.isFinite(meta.order) || !Array.isArray(meta.props) || !Array.isArray(meta.tags))
      throw new Error(`Invalid metadata: ${base}`);
    if (meta.category === 'toggles' && (!meta.config || typeof meta.initial !== 'boolean')) throw new Error(`Missing toggle configuration: ${base}`);
    seen.add(meta.id);
    const files = {} as Record<Format, SourceFile[]>;
    for (const format of FORMATS) {
      const react = format === 'tsx' || format === 'jsx';
      const entry = `${base}/${react ? `react/${meta.componentName}.tsx` : 'vanilla/init.ts'}`;
      const closure = dependencies(entry, read, exists);
      const examples = react ? [`${base}/react/Example.tsx`, `${base}/markup.html`] : [`${base}/vanilla/main.ts`, `${base}/markup.html`, `${base}/vanilla/index.html`];
      const sources = [...new Set([entry, `${base}/styles.css`, ...closure.filter(f => f !== entry && !f.endsWith('.css')), ...examples])];
      const outputName = (name: string) => (format === 'js' || format === 'jsx') ? name.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js') : name;
      const mapping = new Map(sources.map(source => [source, outputName(source)]));
      files[format] = sources.map(source => {
        const name = mapping.get(source)!;
        const extension = name.split('.').at(-1)!;
        return { name, code: exportCode(read(source), format, name, source, mapping),
          language: ({ts:'typescript',js:'javascript',html:'markup'} as Record<string,string>)[extension] ?? extension,
          group: examples.includes(source) ? 'example' : source.startsWith('src/shared/') ? 'shared' : 'component' };
      });
      validateArchiveEntries(files[format]);
    }
    const markup = read(`${base}/markup.html`);
    let demoMarkup = markup;
    if (meta.category === 'blocks') demoMarkup = demoMarkup.replace('<div class="sop-surface-content">',
      `<div class="sop-surface-content"><h2>${html(meta.name)}</h2><p>ここに、あなたのコンテンツを。</p><button type="button">サンプルボタン</button>`);
    const hint = meta.category === 'toggles' ? 'クリック・ドラッグ・キーボードで操作できます。' : '中身を自由に入れ替えられる、独立した背景パーツです。';
    const preview = {
      'index.html': `<!doctype html>\n<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${html(meta.name)} — standalone demo</title><link rel="stylesheet" href="./styles.css"></head><body><main><h1>${html(meta.name)} · ${html(meta.version)}</h1><div class="demo-root">${demoMarkup}</div><p class="hint">${hint}</p></main><script src="./app.js" defer></script></body></html>\n`,
      'styles.css': read('scripts/templates/demo.css') + read(`${base}/styles.css`),
      'app.js': bundleDemo(root, `${base}/demo/main.ts`, read('scripts/templates/demo-entry.ts.txt'))
    };
    return {...meta, markup, usage: read(`${base}/usage.md`), prompt: read(`${base}/prompt.md`), files, preview};
  }).sort((a, b) => a.order - b.order);
  for (const part of parts) for (const id of part.related) if (!seen.has(id)) throw new Error(`Unknown related part: ${id}`);
  return {parts, bases, styles: bases.map(base => read(`${base}/styles.css`)).join('\n')};
}

export function mountModule(bases: string[]): string {
  return bases.map((base, i) => `import { init as mount${i} } from '/${base}/vanilla/init.ts';`).join('\n') +
    '\nexport const mounts = {\n' + bases.map((base, i) => `${JSON.stringify(base.split('/').at(-1))}: mount${i}`).join(',\n') + '\n};\n';
}
