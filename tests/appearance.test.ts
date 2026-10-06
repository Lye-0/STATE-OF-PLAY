import test from 'node:test';import assert from 'node:assert/strict';import postcss from 'postcss';import fs from 'node:fs';
import {buildCatalog} from '../scripts/catalog.ts';
import {appearanceCSS,withAppearance} from '../src/catalog/appearance.ts';
import {withGlassTransparency} from '../src/catalog/glass-transparency.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
import type {Part} from '../src/catalog/types.ts';
const parts=buildCatalog().parts;
test('hex-looking SVG paint references are preserved while actual paint colors change',()=>{
 const source:Part={...parts[0],id:'sample',appearance:{fields:[{key:'accent',label:'装飾の色',value:'#ffffff'}],rules:[{selector:'.sop-sample',conditions:[],declarations:[['fill','url(#fff)',false],['color','#fff',false]]}]}};
 const css=appearanceCSS(source,{accent:'#c65eaa'});assert.ok(!css.includes('fill:'));assert.ok(css.includes('color:#c65eaa'));
});
test('curation retains 1120 unique parts and all 70 glass designs with valid related links',()=>{
 assert.equal(parts.length,1120);assert.equal(parts.filter(p=>/^lgc?-/.test(p.id)).length,70);const ids=new Set(parts.map(p=>p.id));assert.equal(ids.size,1120);
 for(const p of parts)for(const id of p.related)assert.ok(ids.has(id),p.id+' -> '+id);
 const dirs=JSON.parse(fs.readFileSync('src/catalog/registry.json','utf8')) as string[];for(const base of dirs)assert.ok(fs.existsSync(base+'/meta.json'));
});
test('material-critical A toggles retain their authored palette; every exposed field changes valid instance-scoped CSS',()=>{
 for(const p of parts){if(p.category==='toggles'&&p.designType==='A'&&!/^lg-/.test(p.id))assert.equal(p.appearance,undefined,p.id);
  if(!p.appearance)continue;assert.ok(p.appearance.fields.length<=2);for(const field of p.appearance.fields){const css=appearanceCSS(p,{[field.key]:'#c65eaa'});assert.ok(css.includes('{'),p.id+' '+field.key);const ast=postcss.parse(css);let count=0;ast.walkRules(rule=>{count++;assert.ok(rule.selector.includes(`.sop-${p.id}`),rule.selector);});assert.ok(count>0,p.id+' '+field.key);}
 }
});
test('adjusted preview, source, prompt and ZIP agree in every format and layout without mutating the catalogue',()=>{
 for(const id of ['quiet-button','paper-card','essential-select','essential-range','fan-spark','aurora-loader','mercury-loader','prism-loader','copper-loader','lg-lens-toggle','lgc-tables-lens']){
  const source=parts.find(p=>p.id===id)!;assert.ok(source.appearance,id);const before=JSON.stringify(source);const adjusted=withGlassTransparency(withAppearance(source,{accent:'#c65eaa',surface:'#243a47'}),75,25);
  for(const format of ['tsx','jsx','ts','js'] as const)for(const layout of ['portable','original'] as const){const d=getDelivery(adjusted,format,layout),css=d.files.find(f=>f.name===d.stylesheet)!.code;assert.match(css,/Detail appearance/);assert.match(buildPrompt(adjusted,format,layout,false),/詳細で調整した配色/);const archive=packageContents(adjusted,format,layout);assert.match(archive.find(f=>f.name==='preview/styles.css')!.code,/Detail appearance/);const manifest=JSON.parse(archive.find(f=>f.name==='INTEGRATION.json')!.code);assert.equal(manifest.appearanceColors.accent,'#c65eaa');if(/^lg/.test(id)){assert.match(css,/--lg-alpha-scale/);assert.equal(manifest.glassTransparency,75);assert.equal(manifest.glassBlur,25);}}
  assert.equal(JSON.stringify(source),before);assert.equal(withAppearance(source,{}),source);
  assert.equal(withAppearance(source,{accent:'</style><script>'}),source);
 }
});
