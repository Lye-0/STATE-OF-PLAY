/** Source export / standalone-part tooling only. The gallery itself is built by Vite. */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { validateArchivePath } from '../src/shared/archive.ts';
import type { Format } from '../src/catalog/types.ts';

export function transpile(code: string, filename: string, module = ts.ModuleKind.ESNext, jsx = ts.JsxEmit.Preserve): string {
  const result = ts.transpileModule(code, { fileName: filename, reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ES2022, module, jsx, esModuleInterop: true, newLine: ts.NewLineKind.LineFeed } });
  const errors = result.diagnostics?.filter(d => d.category === ts.DiagnosticCategory.Error) ?? [];
  if (errors.length) throw new Error(errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')).join('\n'));
  return result.outputText;
}

export function resolveLocal(source: string, request: string, exists: (name: string) => boolean): string {
  const base = path.posix.normalize(path.posix.join(path.posix.dirname(source), request));
  validateArchivePath(base);
  const file = [base, ...['.ts','.tsx','.js','.jsx','.css'].map(ext => base + ext), base + '/index.ts'].find(exists);
  if (!file) throw new Error(`Missing local dependency: ${source} -> ${request}`);
  return file;
}

/** Shared computation is included once in author sources; each export gets its dependency closure. */
export function dependencies(entry: string, read: (name: string) => string, exists: (name: string) => boolean): string[] {
  const seen = new Set<string>();
  const visit = (file: string) => {
    if (seen.has(file)) return;
    seen.add(file);
    if (!/\.[jt]sx?$/.test(file)) return;
    const source = ts.createSourceFile(file, read(file), ts.ScriptTarget.Latest, true);
    source.forEachChild(node => {
      if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
        const request = node.moduleSpecifier.text;
        if (request.startsWith('.')) visit(resolveLocal(file, request, exists));
        else if (!['react','react/jsx-runtime'].includes(request)) throw new Error(`Undeclared external dependency: ${request}`);
      }
    });
  };
  visit(entry);
  return [...seen];
}

/** Rewrites references against their real source locations, never flattens directory paths. */
export function exportCode(code: string, format: Format, name: string, source: string, mapping: Map<string, string>): string {
  validateArchivePath(source); validateArchivePath(name);
  if ((format === 'js' || format === 'jsx') && /\.[jt]sx?$/.test(source)) code = transpile(code, source);
  const reference = (request: string, html: boolean): string => {
    if (!request.startsWith('.')) return request;
    const found = resolveLocal(source, request, key => mapping.has(key));
    let target = mapping.get(found)!;
    if (!html && format !== 'js' && !path.posix.extname(request)) target = target.replace(/\.[jt]sx?$/, '');
    const relative = path.posix.relative(path.posix.dirname(name), target);
    return relative.startsWith('.') ? relative : './' + relative;
  };
  if (/\.[jt]sx?$/.test(name)) code = code.replace(/(from\s+|import\s*)(['"])(\.\.?\/[^'"\n]+)\2/g,
    (_, prefix: string, q: string, request: string) => `${prefix}${q}${reference(request, false)}${q}`);
  if (/\.html$/.test(name)) code = code.replace(/\b(src|href)=(['"])(\.\.?\/[^'"\n]+)\2/g,
    (_, attr: string, q: string, request: string) => `${attr}=${q}${reference(request, true)}${q}`);
  return code;
}

/** Portable part preview, with an in-memory common entry. Not used to bundle the gallery. */
export function bundleDemo(root: string, entry: string, entryCode: string): string {
  const modules = new Map<string, string>();
  const read = (name: string) => name === entry ? entryCode : fs.readFileSync(path.join(root, name), 'utf8');
  const exists = (name: string) => name === entry || fs.existsSync(path.join(root, name));
  const visit = (file: string): string => {
    if (modules.has(file)) return file;
    modules.set(file, '');
    const code = transpile(read(file), file, ts.ModuleKind.CommonJS, ts.JsxEmit.React)
      .replace(/require\((['"])([^'"\n]+)\1\)/g, (_, _quote: string, request: string) => {
        if (!request.startsWith('.')) throw new Error(`Unexpected demo dependency: ${request}`);
        return `require(${JSON.stringify(visit(resolveLocal(file, request, exists)))})`;
      });
    modules.set(file, code);
    return file;
  };
  visit(entry);
  return '/* Portable preview generated from the same component sources. */\n' +
    "(function(){'use strict';const modules={\n" + [...modules].map(([name, code]) => `${JSON.stringify(name)}:function(module,exports,require){\n${code}\n}`).join(',\n') +
    '\n};const cache={};function require(id){if(cache[id])return cache[id].exports;const module=cache[id]={exports:{}};if(!modules[id])throw new Error("Unknown module "+id);modules[id](module,module.exports,require);return module.exports;}require(' + JSON.stringify(entry) + ');})();\n';
}
