import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import postcss from 'postcss';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
const registry=JSON.parse(fs.readFileSync(path.join(ROOT,'src/catalog/registry.json'),'utf8')) as string[];
const metadata=registry.map(base=>({base,...JSON.parse(fs.readFileSync(path.join(ROOT,base,'meta.json'),'utf8'))}));const added=metadata.filter(p=>p.tags.includes('EXPANSION-30'));
const parts=buildCatalog(ROOT,added.map(p=>p.id)).parts;
test('every category meets the 30-part floor and each intention has at least five designs',()=>{
 const categories=new Set(metadata.map(p=>p.category));assert.equal(categories.size,37);assert.equal(metadata.length,1120);assert.equal(added.length,325);
 for(const category of categories){const rows=metadata.filter(p=>p.category===category);assert.ok(rows.length>=30,category);for(const type of ['A','B'])assert.ok(rows.filter(p=>p.designType===type).length>=5,category+' '+type);}
 const authored=fs.readdirSync(path.join(ROOT,'src/parts')).flatMap(category=>fs.readdirSync(path.join(ROOT,'src/parts',category)).map(id=>'src/parts/'+category+'/'+id));assert.deepEqual([...authored].sort(),[...registry].sort());
});
test('new designs have independent non-color styling and cannot restore deleted near-duplicates',()=>{
 const hashes=new Map<string,string>();for(const m of added){const css=fs.readFileSync(path.join(ROOT,m.base,'styles.css'),'utf8');const ast=postcss.parse(css);assert.ok(css.includes('.sop-'+m.id));assert.ok(css.includes('prefers-reduced-motion'));assert.ok(css.includes('forced-colors'));
  ast.walkComments(n=>{n.remove();});ast.walkAtRules('import',n=>{n.remove();});let body=ast.toString().replaceAll(m.id,'PART').replace(/#[\da-f]{3,8}\b/gi,'COLOR').replace(/\s+/g,'');const hash=crypto.createHash('sha256').update(body).digest('hex');assert.ok(!hashes.has(hash),m.id+' duplicates '+hashes.get(hash));hashes.set(hash,m.id);
 }
 const removed=JSON.parse(fs.readFileSync(path.join(ROOT,'tests/removed-near-duplicates.json'),'utf8')) as string[];for(const id of removed)assert.ok(!metadata.some(m=>m.id===id),id+' restores a previously removed near-duplicate');
});
test('all 325 added designs ship the same source in every format/layout with valid prompts, previews and licenses',()=>{
 for(const part of parts){const original=JSON.stringify(part);for(const format of FORMATS)for(const layout of ['portable','original'] as const){const delivery=getDelivery(part,format,layout);assert.ok(delivery.files.some(f=>f.name===delivery.entry),part.id);assert.ok(delivery.files.some(f=>f.name===delivery.stylesheet),part.id);const content=packageContents(part,format,layout);for(const name of ['PARTS-LICENSE','INTEGRATION.json','PROMPT.md','preview/index.html','preview/styles.css','preview/app.js'])assert.ok(content.some(f=>f.name===name),part.id+' '+name);assert.ok(buildPrompt(part,format,layout).includes(part.description));assert.ok(part.preview["styles.css"].includes('.sop-'+part.id));}
 assert.equal(JSON.stringify(part),original,part.id+' source stays immutable');}
});

