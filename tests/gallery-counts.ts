/** Exact collection counts for live galleries; historical offline fixtures remain their original cohort. */
import fs from 'node:fs';import path from 'node:path';import type {Page} from 'playwright';
import {ROOT} from '../scripts/catalog.ts';import {selectedCategory} from './gallery-ready.ts';
import type {Part,PartSummary} from '../src/catalog/types.ts';
type AuthoredPart = PartSummary & Pick<Part,'foundation'>;
let authored:AuthoredPart[]|undefined;
export function currentParts():AuthoredPart[]{return authored??=JSON.parse(fs.readFileSync(path.join(ROOT,'src/catalog/registry.json'),'utf8')).map((base:string)=>JSON.parse(fs.readFileSync(path.join(ROOT,base,'meta.json'),'utf8')) as AuthoredPart);}
export async function galleryCount(page:Page,cohort?:readonly PartSummary[]){
 const category=await selectedCategory(page);const active=await page.locator('[data-design-filter][aria-pressed=true]').getAttribute('data-design-filter');
 return (cohort??currentParts()).filter(p=>(!category||category==='all'||p.category===category)&&(!active||active==='all'||p.designType===active)).length;
}
export function libraryCount(cohort?:readonly PartSummary[]){return (cohort??currentParts()).length;}
