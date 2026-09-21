"use strict";
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const JSZip = require('../vendor/jszip.js');
const {validateArchivePath} = require('../src/shared/archive.js');
const ROOT = path.resolve(__dirname,'..');
const EXCLUDED = new Set(['.git','node_modules','.build','.test-output','release','dist','.DS_Store','Thumbs.db','RELEASE-MANIFEST.json']);
async function pack() {
  const zip = new JSZip(); const entries=[];const names=new Set();
  function walk(dir='') {
    for (const name of fs.readdirSync(path.join(ROOT,dir)).sort()) {
      if (EXCLUDED.has(name) || name === '.env' || name.startsWith('.env.') && name !== '.env.example' || name.endsWith('.log')) continue;
      const rel = dir ? `${dir}/${name}` : name;const file=path.join(ROOT,rel);const stat=fs.lstatSync(file);
      if (stat.isSymbolicLink()) throw new Error(`Symlink excluded from release: ${rel}`);
      if (stat.isDirectory()) {walk(rel);continue;}
      validateArchivePath(rel);
      if (names.has(rel.toLowerCase())) throw new Error(`Case-insensitive collision: ${rel}`);
      names.add(rel.toLowerCase());
      const bytes=fs.readFileSync(file);entries.push({path:rel,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});
      zip.file(`STATE-OF-PLAY/${rel}`,bytes,{date:new Date('2026-09-22T00:00:00Z'),createFolders:false});
    }
  }
  walk();
  const manifest=Buffer.from(JSON.stringify({version:'2.2.0',files:entries},null,2)+'\n');
  zip.file('STATE-OF-PLAY/RELEASE-MANIFEST.json',manifest,{date:new Date('2026-09-22T00:00:00Z'),createFolders:false});
  const data=await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE',compressionOptions:{level:6},platform:'DOS'});
  const verified=await JSZip.loadAsync(data,{checkCRC32:true});
  for (const e of entries) {
    const bytes=await verified.file('STATE-OF-PLAY/'+e.path).async('nodebuffer');
    if (crypto.createHash('sha256').update(bytes).digest('hex')!==e.sha256) throw new Error(`Archive mismatch: ${e.path}`);
  }
  const out=path.join(ROOT,'release','STATE-OF-PLAY-v2.2.0-full-repository.zip');fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,data);
  console.log(`${out}\n${entries.length+1} files / ${data.length} bytes / CRC and SHA-256 verified`);
  return out;
}
if (require.main===module) pack().catch(e=>{console.error(e);process.exitCode=1;});
module.exports={pack};
