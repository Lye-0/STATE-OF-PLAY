/** Historical regression cohorts retain their original, curated IDs.
 * New designs are verified by expansion-30, expansion-50 and full catalogue/delivery tests. */
export * from '../scripts/catalog.ts';
import {buildCatalog as buildAll,ROOT} from '../scripts/catalog.ts';
import fs from 'node:fs';import path from 'node:path';
export function historicalBases(root=ROOT):string[]{return (JSON.parse(fs.readFileSync(path.join(root,'src/catalog/registry.json'),'utf8')) as string[]).filter(base=>!base.split('/').at(-1)!.startsWith('lgc-')&&!JSON.parse(fs.readFileSync(path.join(root,base,'meta.json'),'utf8')).tags.some((tag:string)=>tag==='EXPANSION-30'||tag==='EXPANSION-50'));}
export function buildCatalog(root=ROOT){const bases=historicalBases(root);const ids=bases.map(b=>b.split('/').at(-1)!);const all=buildAll(root,ids,{appearance:false});return {...all,bases};}
