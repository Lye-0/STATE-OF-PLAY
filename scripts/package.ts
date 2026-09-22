import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT } from './catalog.ts';
import { validateArchivePath } from '../src/shared/archive.ts';
import { JSZip } from './zip.ts';
// Only author sources and configuration. Never include .git, dependencies, caches or secret files.
const paths = ['src','scripts','tests','docs','public','licenses','.github',
  'index.html','vite.config.ts','tsconfig.json','tsconfig.react.json','tsconfig.tools.json',
  'package.json','package-lock.json','README.md','THIRD-PARTY-NOTICES.md','.gitignore','.gitattributes'];
const {version} = JSON.parse(fs.readFileSync(path.join(ROOT,'package.json'),'utf8')) as {version:string};
const zip = new JSZip();
const root = 'STATE-OF-PLAY';
const manifest: {path:string;bytes:number;sha256:string}[] = [];
async function add(name: string) {
  validateArchivePath(name);
  const full = path.join(ROOT,name);
  const stat = fs.lstatSync(full);
  if (stat.isSymbolicLink()) throw new Error(`Refusing symbolic link: ${name}`);
  if (stat.isDirectory()) {
    zip.folder(root+'/'+name);
    for(const child of fs.readdirSync(full).sort()) {
      if (['.git','node_modules','.test-output','.vite'].includes(child) || /^\.env(?:\.|$)/.test(child)) continue;
      await add(name+'/'+child);
    }
  } else if(stat.isFile()) {
    const bytes = fs.readFileSync(full);
    zip.file(root+'/'+name,bytes,{binary:true,createFolders:true});
    manifest.push({path:name,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});
  }
}
for (const name of paths) if(fs.existsSync(path.join(ROOT,name))) await add(name);
zip.file(root+'/RELEASE-MANIFEST.json',JSON.stringify({version,files:manifest},null,2)+'\n');
const bytes = await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE',compressionOptions:{level:6},platform:'DOS'});
const check = await JSZip.loadAsync(bytes,{checkCRC32:true});
if(Object.values(check.files).filter(f=>!f.dir).length !== manifest.length+1) throw new Error('Archive entry count mismatch.');
for(const file of manifest){
  const actual = await check.file(root+'/'+file.path)!.async('uint8array');
  if(crypto.createHash('sha256').update(actual).digest('hex') !== file.sha256) throw new Error(`Archive content mismatch: ${file.path}`);
}
fs.mkdirSync(path.join(ROOT,'release'),{recursive:true});
const name = `STATE-OF-PLAY-v${version}-full-repository.zip`;
fs.writeFileSync(path.join(ROOT,'release',name),bytes);
console.log(`${name}: ${manifest.length+1} files, ${bytes.length.toLocaleString()} bytes. CRC and SHA-256 verified.`);
