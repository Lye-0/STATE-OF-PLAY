/** Historical design-cohort regression tests remain on their original IDs.
 * v4.16 additions are tested independently AND by the full catalogue/delivery tests.
 */
export * from '../scripts/catalog.ts';
import {buildCatalog as buildAll,ROOT} from '../scripts/catalog.ts';
import fs from 'node:fs';import path from 'node:path';
export function historicalBases():string[]{return (JSON.parse(fs.readFileSync(path.join(ROOT,'src/catalog/registry.json'),'utf8')) as string[]).filter(b=>!b.split('/').at(-1)!.startsWith('lgc-'));}
export function buildCatalog(root=ROOT){const all=buildAll(root);return {...all,parts:all.parts.filter(p=>!p.id.startsWith('lgc-')),bases:all.bases.filter(b=>!b.split('/').at(-1)!.startsWith('lgc-'))};}
