"use strict";
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const JSZip = require('../vendor/jszip.js');
const {validateArchivePath, validateArchiveEntries} = require('../src/shared/archive.js');
const ROOT = path.resolve(__dirname, '..');
const EXCLUDED = new Set(['.git', 'node_modules', '.build', '.test-output', 'release', 'dist', '.DS_Store', 'Thumbs.db', 'RELEASE-MANIFEST.json']);
const FIXED_DATE = new Date('2026-09-22T00:00:00Z');
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

/** Package a complete work tree. Preserve directory entries (including empty folders).
 * .git and machine-local data are never copied or changed by this function.
 */
async function pack({sourceRoot = ROOT, outputPath} = {}) {
  const version = JSON.parse(fs.readFileSync(path.join(sourceRoot, 'package.json'), 'utf8')).version;
  if (!/^\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?$/.test(version)) throw new Error('Invalid release version');
  const zip = new JSZip(), entries = [], directories = [], names = new Set();
  zip.file('STATE-OF-PLAY/', null, {dir: true, date: FIXED_DATE, createFolders: false});
  function walk(dir = '') {
    for (const name of fs.readdirSync(path.join(sourceRoot, dir)).sort()) {
      if (EXCLUDED.has(name) || name === '.env' || name.startsWith('.env.') && name !== '.env.example' || name.endsWith('.log')) continue;
      const rel = dir ? `${dir}/${name}` : name;
      validateArchivePath(rel);
      const key = rel.toLowerCase();
      if (names.has(key)) throw new Error(`Case-insensitive collision: ${rel}`);
      names.add(key);
      const file = path.join(sourceRoot, rel), stat = fs.lstatSync(file);
      if (stat.isSymbolicLink()) throw new Error(`Symlink excluded from release: ${rel}`);
      if (stat.isDirectory()) {
        directories.push(rel + '/');
        zip.file(`STATE-OF-PLAY/${rel}/`, null, {dir: true, date: FIXED_DATE, createFolders: false});
        walk(rel);
        continue;
      }
      if (!stat.isFile()) throw new Error(`Unsupported entry: ${rel}`);
      const bytes = fs.readFileSync(file);
      entries.push({path: rel, bytes: bytes.length, sha256: sha256(bytes)});
      zip.file(`STATE-OF-PLAY/${rel}`, bytes, {date: FIXED_DATE, createFolders: false});
    }
  }
  walk();
  validateArchiveEntries(entries.map(e => ({name: e.path})));
  const manifest = Buffer.from(JSON.stringify({version, layout: 'preserve-relative-paths-v2', directories, files: entries}, null, 2) + '\n');
  zip.file('STATE-OF-PLAY/RELEASE-MANIFEST.json', manifest, {date: FIXED_DATE, createFolders: false});
  const data = await zip.generateAsync({type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: {level: 6}, platform: 'DOS'});
  const verified = await JSZip.loadAsync(data, {checkCRC32: true});
  for (const e of entries) {
    const bytes = await verified.file('STATE-OF-PLAY/' + e.path).async('nodebuffer');
    if (sha256(bytes) !== e.sha256) throw new Error(`Archive mismatch: ${e.path}`);
  }
  for (const dir of directories) {
    if (!verified.files['STATE-OF-PLAY/' + dir]?.dir) throw new Error(`Missing directory entry: ${dir}`);
  }
  const out = outputPath || path.join(sourceRoot, 'release', `STATE-OF-PLAY-v${version}-full-repository.zip`);
  fs.mkdirSync(path.dirname(out), {recursive: true}); fs.writeFileSync(out, data);
  console.log(`${out}\n${entries.length + 1} files / ${directories.length + 1} directories / ${data.length} bytes / CRC and SHA-256 verified`);
  return out;
}
if (require.main === module) pack().catch(e => {console.error(e); process.exitCode = 1;});
module.exports = {pack};
