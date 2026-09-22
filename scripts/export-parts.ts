/** Opt-in release export. Shares the exact browser/UI package generator. */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, buildCatalog, FORMATS } from './catalog.ts';
import { isLayout, type Layout, type Format } from '../src/catalog/types.ts';
import { packageContents, packageRoot } from '../src/catalog/delivery.ts';
import { addArchiveEntries, prepareArchive, type ArchiveMode } from '../src/shared/archive.ts';
import { JSZip } from './zip.ts';
export function parseExportOptions(args: string[]) {
  let layouts: Layout[] = ['portable']; let mode: ArchiveMode = 'source';
  let partId: string | undefined; let formats: Format[] = FORMATS;
  for (let i=0;i<args.length;i++) {
    const [flag, inline] = args[i].split('=');
    const value = inline ?? args[++i];
    if (flag==='--layout' && (isLayout(value)||value==='all')) layouts=value==='all'?['portable','original']:[value];
    else if (flag==='--mode' && (value==='source'||value==='text')) mode=value;
    else if (flag==='--part' && value && /^[a-z0-9-]+$/.test(value)) partId=value;
    else if (flag==='--format' && FORMATS.includes(value as Format)) formats=[value as Format];
    else throw new Error(`Invalid export option: ${flag} ${value ?? ''}. Use --layout portable|original|all --mode source|text --part <id> --format tsx|jsx|ts|js`);
  }
  return {layouts,mode,partId,formats};
}
export async function exportParts(args = process.argv.slice(2)) {
  const {layouts,mode,partId,formats}=parseExportOptions(args);
  const {parts}=buildCatalog();
  const selected=partId?parts.filter(p=>p.id===partId):parts;
  if (!selected.length) throw new Error(`Unknown part: ${partId}`);
  const out=path.join(ROOT,'release/parts'); fs.mkdirSync(out,{recursive:true});
  let count=0;
  for(const part of selected) for(const format of formats) for(const layout of layouts) {
    const root=packageRoot(part,format,layout)+(mode==='text'?'-text':'');
    const entries=prepareArchive(packageContents(part,format,layout),mode);
    const bytes=await addArchiveEntries(new JSZip(),root,entries).generateAsync({type:'nodebuffer',compression:'DEFLATE',compressionOptions:{level:6},platform:'DOS'});
    const read=await JSZip.loadAsync(bytes,{checkCRC32:true});
    for(const entry of entries) if(await read.file(root+'/'+entry.name)!.async('string')!==entry.code) throw new Error(`ZIP mismatch: ${entry.name}`);
    fs.writeFileSync(path.join(out,`${root}-v${part.version}.zip`),bytes); count++;
  }
  console.log(`Exported ${count} ZIPs to release/parts (${layouts.join(', ')}, ${mode}). No packages/ copies created.`);
}
if (process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) await exportParts();
