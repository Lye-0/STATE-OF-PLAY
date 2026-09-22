/** Source export / standalone-part tooling. These parsers never run in the browser. */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { validateArchivePath } from '../src/shared/archive.ts';
import type { Format } from '../src/catalog/types.ts';

const transpileCache = new Map<string,string>();
export function transpile(code: string, filename: string, module = ts.ModuleKind.ESNext, jsx = ts.JsxEmit.Preserve): string {
  const cacheKey = JSON.stringify([filename,module,jsx,code]);
  const cached = transpileCache.get(cacheKey); if (cached !== undefined) return cached;

  const result = ts.transpileModule(code, { fileName: filename, reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ES2022, module, jsx, esModuleInterop: true, newLine: ts.NewLineKind.LineFeed } });
  const errors = result.diagnostics?.filter(d => d.category === ts.DiagnosticCategory.Error) ?? [];
  if (errors.length) throw new Error(errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')).join('\n'));
  if (transpileCache.size >= 4096) transpileCache.delete(transpileCache.keys().next().value!);
  transpileCache.set(cacheKey,result.outputText);
  return result.outputText;
}

export interface Reference { start: number; end: number; request: string; module: boolean; quote?: string; }
const splitSuffix = (request: string) => { const i = request.search(/[?#]/); return i < 0 ? [request, ''] : [request.slice(0, i), request.slice(i)]; };
const externalAsset = (s: string) => !s || /^(?:#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(s);
const textual = /\.(?:[jt]sx?|css|html|svg|json|txt)$/i;

/** Resolve a known local source, including .js specifiers referring to authored TypeScript. */
export function resolveLocal(source: string, request: string, exists: (name: string) => boolean): string {
  const [bare] = splitSuffix(request);
  if (bare.startsWith('/') || bare.includes('\\')) throw new Error(`Non-portable reference: ${source} -> ${request}`);
  const base = path.posix.normalize(path.posix.join(path.posix.dirname(source), bare));
  validateArchivePath(base);
  const candidates = [base, ...['.ts','.tsx','.js','.jsx','.css'].map(ext => base + ext),
    base + '/index.ts', base + '/index.tsx', base + '/index.js'];
  if (/\.[jt]sx?$/.test(base)) candidates.push(base.replace(/\.[jt]sx?$/, '.ts'), base.replace(/\.[jt]sx?$/, '.tsx'));
  const file = candidates.find(exists);
  if (!file) throw new Error(`Missing local dependency: ${source} -> ${request}`);
  return file;
}

/** Only syntactic module references are rewritten, never comments or arbitrary quoted strings. */
function scriptReferences(code: string, filename: string): Reference[] {
  const ast = ts.createSourceFile(filename, code, ts.ScriptTarget.Latest, true);
  const refs: Reference[] = [];
  const literal = (node: ts.Node | undefined, module: boolean, kind: string) => {
    if (!node || (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node)))
      throw new Error(`Cannot safely export computed ${kind}: ${filename}. Use a static literal.`);
    refs.push({start: node.getStart(ast) + 1, end: node.getEnd() - 1, request: node.text, module, quote: code[node.getStart(ast)]});
  };
  const visit = (node: ts.Node) => {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier)
      literal(node.moduleSpecifier, true, 'module reference');
    else if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument))
      literal(node.argument.literal, true, 'type import');
    else if (ts.isImportEqualsDeclaration(node))
      throw new Error(`CommonJS import assignments are not supported by the ESM exporter: ${filename}`);
    else if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword)
      literal(node.arguments[0], true, 'dynamic import');
    else if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'require')
      throw new Error(`CommonJS require is not supported by the ESM exporter: ${filename}`);
    else if (ts.isCallExpression(node) && node.expression.getText(ast).startsWith('import.meta.glob'))
      throw new Error(`import.meta.glob is build-environment specific: ${filename}. Use explicit imports.`);
    else if (ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'URL' &&
      node.arguments?.[1]?.getText(ast) === 'import.meta.url')
      literal(node.arguments[0], false, 'asset URL');
    ts.forEachChild(node, visit);
  };
  visit(ast);
  return refs;
}

/** Small CSS token scanner: skips comments/strings, handles literal url() and @import. */
function cssReferences(code: string): Reference[] {
  const refs: Reference[] = [];
  let i = 0;
  const quotedEnd = (start: number) => { let n = start + 1; while (n < code.length) { if (code[n] === '\\') n += 2; else if (code[n++] === code[start]) return n; } return n; };
  while (i < code.length) {
    if (code.startsWith('/*', i)) { const end = code.indexOf('*/', i + 2); i = end < 0 ? code.length : end + 2; continue; }
    const token = code.slice(i).match(/^(?:url\s*\(\s*|@import\s+)(?=.)/i);
    if (token && (i === 0 || !/[\w-]/.test(code[i-1]))) {
      const isURL = /^url/i.test(token[0]);
      let start = i + token[0].length;
      if (code[start] === '"' || code[start] === "'") {
        const end = quotedEnd(start);
        refs.push({start: start+1, end: end-1, request: code.slice(start+1, end-1), module: false});
        i = end; continue;
      }
      if (isURL) {
        let end = code.indexOf(')', start); if (end < 0) throw new Error('Unclosed CSS url()');
        while (end > start && /\s/.test(code[end-1])) end--;
        refs.push({start, end, request: code.slice(start, end), module: false}); i = end + 1; continue;
      }
      i = start; continue; // @import url(...) is handled on the next iteration.
    }
    if (code[i] === '"' || code[i] === "'") { i = quotedEnd(i); continue; }
    i++;
  }
  return refs;
}

/** HTML links/assets are literal and location based. Unsupported srcset/base fails explicitly. */
function htmlReferences(code: string, filename: string): Reference[] {
  const refs: Reference[] = [];
  const tags = /<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>|<[a-z][^>]*>/gi;
  for (const match of code.matchAll(tags)) {
    const tag = match[0]; if (tag.startsWith('<!--')) continue;
    const opening = tag.slice(0, tag.indexOf('>')+1);
    if (/^<base\b/i.test(opening)) throw new Error(`HTML base is not portable: ${filename}`);
    const attrs = /([^\s=<>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
    for (const attr of opening.matchAll(attrs)) {
      const key = attr[1].toLowerCase(), value = attr[2] ?? attr[3] ?? attr[4];
      const valueStart = match.index! + attr.index! + attr[0].indexOf('=') + 1 + attr[0].slice(attr[0].indexOf('=')+1).search(/\S/) + (attr[2] !== undefined || attr[3] !== undefined ? 1 : 0);
      if (key === 'srcset') throw new Error(`Use explicit src instead of srcset in portable sources: ${filename}`);
      if (['src','href','xlink:href','poster'].includes(key)) refs.push({start:valueStart,end:valueStart+value.length,request:value,module:false});
      if (key === 'style') refs.push(...cssReferences(value).map(r=>({...r,start:r.start+valueStart,end:r.end+valueStart})));
    }
    if (/^<style\b/i.test(tag)) {
      const bodyStart = match.index! + opening.length, body = tag.slice(opening.length, tag.lastIndexOf('</'));
      refs.push(...cssReferences(body).map(r=>({...r,start:r.start+bodyStart,end:r.end+bodyStart})));
    } else if (/^<script\b/i.test(tag) && !/\bsrc\s*=/i.test(opening) && !/type=["']application\//i.test(opening)) {
      const bodyStart = match.index! + opening.length, body = tag.slice(opening.length,tag.lastIndexOf('</'));
      refs.push(...scriptReferences(body, filename+'.js').map(r=>({...r,start:r.start+bodyStart,end:r.end+bodyStart})));
    }
  }
  return refs;
}

export function sourceReferences(code: string, filename: string): Reference[] {
  if (/\.[jt]sx?$/.test(filename)) return scriptReferences(code, filename);
  if (/\.css$/.test(filename)) return cssReferences(code);
  if (/\.(?:html|svg)$/.test(filename)) return htmlReferences(code, filename);
  return [];
}
export function isLocalReference(ref: Reference): boolean {
  if (ref.module) {
    if (ref.request.startsWith('.')) return true;
    if (!['react','react/jsx-runtime','react/jsx-dev-runtime'].includes(ref.request))
      throw new Error(`Undeclared external dependency or alias: ${ref.request}`);
    return false;
  }
  if (externalAsset(ref.request)) return false;
  if (ref.request.startsWith('/')) throw new Error(`Root-relative assets are not portable: ${ref.request}`);
  if (/[\\]/.test(ref.request)) throw new Error(`Escaped asset paths need an explicit portable mapping: ${ref.request}`);
  return true;
}

/** Transitive dependencies of runtime AND example entry points, including CSS and text assets. */
export function dependencies(entry: string, read: (name: string) => string, exists: (name: string) => boolean): string[] {
  const seen = new Set<string>();
  const visit = (file: string) => {
    if (seen.has(file)) return;
    if (!textual.test(file)) throw new Error(`Binary/unsupported asset needs a binary export adapter: ${file}`);
    seen.add(file);
    for (const ref of sourceReferences(read(file), file))
      if (isLocalReference(ref)) visit(resolveLocal(file, ref.request, exists));
  };
  visit(entry);
  return [...seen];
}

/** One source -> target mapping is used for every reference, in either export layout. */
export function exportCode(code: string, format: Format, name: string, source: string, mapping: Map<string, string>): string {
  validateArchivePath(source); validateArchivePath(name);
  if ((format === 'js' || format === 'jsx') && /\.[jt]sx?$/.test(source)) code = transpile(code, source);
  const refs = sourceReferences(code, name).filter(isLocalReference);
  const edits = refs.map(ref => {
    const found = resolveLocal(source, ref.request, key => mapping.has(key));
    let target = mapping.get(found)!;
    // TypeScript / JSX bundlers accept extensionless module paths; native browser JS does not.
    if (ref.module && format !== 'js' && !path.posix.extname(splitSuffix(ref.request)[0])) target = target.replace(/\.[jt]sx?$/, '');
    const relative = path.posix.relative(path.posix.dirname(name), target);
    let value = (relative.startsWith('.') ? relative : './' + relative) + splitSuffix(ref.request)[1];
    if (ref.quote) value = value.replaceAll('\\', '\\\\').replaceAll(ref.quote, '\\'+ref.quote).replaceAll('\n', '\\n').replaceAll('\r', '\\r');
    if (ref.quote === '`') value = value.replaceAll('${', '\\${');
    return {...ref, value};
  });
  for (const edit of edits.sort((a,b)=>b.start-a.start)) code = code.slice(0,edit.start)+edit.value+code.slice(edit.end);
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
