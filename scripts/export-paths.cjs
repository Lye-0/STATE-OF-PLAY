"use strict";
const path = require('node:path');
const {ts, transpile} = require('./compiler.cjs');
const {validateArchivePath} = require('../src/shared/archive.js');

/** Resolve references against the original source path, then point to the exported path.
 * Never flatten the package, and fail a build instead of shipping a missing dependency.
 */
function rewriteReference(request, source, name, mapping, format, html = false) {
  if (!request.startsWith('.')) return request;
  const location = path.posix.normalize(path.posix.join(path.posix.dirname(source), request));
  const candidates = [location, ...['.ts', '.tsx', '.js', '.jsx', '.css'].map(ext => location + ext), location + '/index.ts'];
  const found = candidates.find(file => mapping.has(file));
  if (!found) throw new Error(`Missing package dependency: ${source} -> ${request}`);
  let target = mapping.get(found);
  // Keep extensionless bundler imports, but native JavaScript always needs an extension.
  if (!html && format !== 'js' && !path.posix.extname(request)) target = target.replace(/\.[jt]sx?$/, '');
  let relative = path.posix.relative(path.posix.dirname(name), target);
  if (!relative.startsWith('.')) relative = './' + relative;
  return relative;
}
function exportCode(code, language, format, name, source, mapping) {
  validateArchivePath(source); validateArchivePath(name);
  if ((format === 'js' || format === 'jsx') && /\.[jt]sx?$/.test(source)) {
    code = transpile(code, source, ts.ModuleKind.ESNext, ts.JsxEmit.Preserve);
  }
  if (/\.[jt]sx?$/.test(name)) {
    code = code.replace(/(from\s+|import\s*)(['"])(\.\.?\/[^'"\n]+)\2/g,
      (_, prefix, q, request) => `${prefix}${q}${rewriteReference(request, source, name, mapping, format)}${q}`);
  }
  if (/\.html$/.test(name)) {
    code = code.replace(/\b(src|href)=(['"])(\.\.?\/[^'"\n]+)\2/g,
      (_, attr, q, request) => `${attr}=${q}${rewriteReference(request, source, name, mapping, format, true)}${q}`);
  }
  return code;
}
module.exports = {exportCode, rewriteReference};
