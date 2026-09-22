import fs from 'node:fs';
import path from 'node:path';
import { ROOT, buildCatalog, FORMATS } from './catalog.ts';
import { addArchiveEntries, prepareArchive } from '../src/shared/archive.ts';
import { JSZip } from './zip.ts';
const out = path.join(ROOT, 'release/parts');
const {parts} = buildCatalog();
fs.mkdirSync(out, {recursive: true});
for (const part of parts) for (const format of FORMATS) {
  const root = `${part.id}-${format}`;
  const entries = prepareArchive([...part.files[format],
    {name:'README.md',code:part.usage},
    {name:'PROMPT.md',code:part.prompt + '\n\n' + part.files[format].map(f=>`## ${f.name}\n\n\`\`\`${f.language}\n${f.code}\n\`\`\``).join('\n\n')},
    ...Object.entries(part.preview).map(([name,code])=>({name:'preview/'+name,code}))], 'source');
  const zip = addArchiveEntries(new JSZip(), root, entries);
  const bytes = await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE',compressionOptions:{level:6},platform:'DOS'});
  await JSZip.loadAsync(bytes,{checkCRC32:true});
  fs.writeFileSync(path.join(out, `${root}-v${part.version}.zip`), bytes);
}
console.log(`Exported ${parts.length * FORMATS.length} ZIP files to release/parts. No packages/ source copies were created.`);
