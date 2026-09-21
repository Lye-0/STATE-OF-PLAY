'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const JSZip=require('../vendor/jszip.js');
const {pack}=require('../scripts/package.cjs');
test('whole repository ZIP preserves directories, empty folders and duplicate leaf names',async()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'sop-pack-'));
 const sourceRoot=path.join(temp,'source');fs.mkdirSync(sourceRoot);
 const put=(name,text)=>{const file=path.join(sourceRoot,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,text);};
 try{
  put('package.json','{"version":"2.3.0"}');put('src/parts/a/index.js','part');put('src/shared/index.js','shared');
  put('.git/config','not for distribution');put('.env','secret');put('.env.example','example');put('node_modules/x.js','exclude');
  fs.mkdirSync(path.join(sourceRoot,'src/empty/deeper'),{recursive:true});
  const outputPath=path.join(temp,'result.zip');await pack({sourceRoot,outputPath});
  const zip=await JSZip.loadAsync(fs.readFileSync(outputPath),{checkCRC32:true});
  assert.ok(zip.files['STATE-OF-PLAY/']?.dir);assert.ok(zip.files['STATE-OF-PLAY/src/empty/deeper/']?.dir);
  assert.equal(await zip.file('STATE-OF-PLAY/src/parts/a/index.js').async('string'),'part');
  assert.equal(await zip.file('STATE-OF-PLAY/src/shared/index.js').async('string'),'shared');
  assert.ok(!Object.keys(zip.files).some(n=>n.includes('/.git/')||n.endsWith('/.env')||n.includes('/node_modules/')));
  assert.ok(zip.file('STATE-OF-PLAY/.env.example'));
  assert.equal(fs.readFileSync(path.join(sourceRoot,'.git/config'),'utf8'),'not for distribution');
  const manifest=JSON.parse(await zip.file('STATE-OF-PLAY/RELEASE-MANIFEST.json').async('string'));
  assert.equal(manifest.version,'2.3.0');assert.ok(manifest.directories.includes('src/empty/deeper/'));
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
