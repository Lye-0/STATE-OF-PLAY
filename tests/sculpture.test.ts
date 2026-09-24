/** v4.2: opt-in artwork only. Controller semantics and B variants remain shared/unmodified. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { ROOT } from '../scripts/catalog.ts';
import { dependencies } from '../scripts/source-tools.ts';
const read=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
const exists=(file:string)=>fs.existsSync(path.join(ROOT,file));
interface Skin {base:string;id:string;name:string;category:string;designType:string;componentName:string;version:string;description:string;}
// Historical v4.3 fixtures: new KINETIC designs have their own geometry/animation tests.
const bases=(JSON.parse(read('src/catalog/registry.json')) as string[]).filter(b=>!JSON.parse(read(b+'/meta.json')).tags.some((t:string)=>['KINETIC','MOTION STUDIES'].includes(t)));
const skins:Skin[]=bases.filter(b=>/^src\/parts\/(scrollbars|dropdowns)\//.test(b)).map(base=>({base,...JSON.parse(read(base+'/meta.json'))}));
const expressive=skins.filter(p=>p.designType==='A');
const marker=(p:Skin)=>p.category==='scrollbars'?'sop-scroll-sculpted':'sop-select-sculpted';
const sheet=(p:Skin)=>p.category==='scrollbars'?'scrollbar-sculpted.css':'select-sculpted.css';
const skinCSS=(p:Skin)=>read(p.id==='aurora-select'?'src/shared/aurora-select.css':p.base+'/styles.css');
function selectors(text:string):string[]{let depth=0,quote='',start=0;const values:string[]=[];for(let i=0;i<text.length;i++){const c=text[i];if(quote){if(c===quote&&text[i-1]!=='\\')quote='';continue;}if(c==='"'||c==="'"){quote=c;continue;}if(c==='('||c==='[')depth++;if(c===')'||c===']')depth--;if(c===','&&!depth){values.push(text.slice(start,i).trim());start=i+1;}}values.push(text.slice(start).trim());return values;}

test('32 redesigned A skins retain 48 total scroll/select skins and 747 current catalogue entries',()=>{
 assert.equal(bases.length,747);assert.equal(skins.length,48);assert.equal(expressive.length,32);
 for(const category of ['scrollbars','dropdowns']){assert.equal(expressive.filter(p=>p.category===category).length,16);assert.equal(skins.filter(p=>p.category===category&&p.designType==='B').length,8);}
 for(const p of expressive)assert.equal(p.version,'3.0.0',p.id);
});
test('shared sculpture is explicitly opted into in both Vanilla and React markup',()=>{
 for(const p of skins){for(const file of [p.base+'/markup.html',p.base+'/react/'+p.componentName+'.tsx']){
  assert.equal(read(file).includes(marker(p)),p.designType==='A',file);
 }}
});
test('all export dependency closures include both the sculpted skin and its original behavioral base',()=>{
 for(const p of expressive){const closure=dependencies(p.base+'/styles.css',read,exists);
  assert.ok(closure.includes('src/shared/'+sheet(p)),p.id);
  assert.ok(closure.includes('src/shared/'+(p.category==='scrollbars'?'scrollbar-base.css':'select-base.css')),p.id);
 }
 for(const p of skins.filter(p=>p.designType==='B')){const closure=dependencies(p.base+'/styles.css',read,exists);assert.equal(closure.some(s=>s.endsWith('-sculpted.css')),false,p.id);}
});
test('reproduction CSS is current, not a conflicting specification appended to the previous skin',()=>{
 for(const p of expressive){const prompt=read(p.base+'/prompt.md');const blocks=[...prompt.matchAll(/```css\n([\s\S]*?)\n```/g)];if(p.id==='aurora-select'){assert.equal(blocks.length,0,p.id);assert.match(prompt,/shared\/aurora-select\.css/);assert.equal(read(p.base+'/styles.css').trim(),'@import "../../../shared/aurora-select.css";');}else{assert.equal(blocks.length,1,p.id);assert.equal(blocks[0][1],read(p.base+'/styles.css').trim(),p.id);}assert.ok(prompt.includes(p.description));assert.ok(prompt.includes(sheet(p)));assert.ok(prompt.includes('v4.3.0'));assert.match(prompt,/プロジェクト/);assert.match(prompt,/強制|forced-colors/);assert.match(prompt,/reduced-motion/);}
});
test('every selector branch is scoped to its specific skin, including comma-separated selectors',()=>{
 for(const p of expressive){const css=read(p.base+'/styles.css').replace(/\/\*[\s\S]*?\*\//g,'').replace(/@import[^;]*;/g,'');for(const m of css.matchAll(/(?:^|[{}])\s*([^{}]+)\{/g)){const rule=m[1].trim();if(rule.startsWith('@')||/^(?:from|to|[\d.%\s,]+)$/.test(rule))continue;for(const branch of selectors(rule))assert.ok(branch.includes('.sop-'+p.id),p.id+': '+branch);}}
});
test('decorative geometry has motion reduction, forced-color fallbacks, and no external graphics',()=>{
 for(const file of ['scrollbar-sculpted.css','select-sculpted.css']){const css=read('src/shared/'+file);assert.match(css,/pointer-events:\s*none/);assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);assert.doesNotMatch(css,/https?:|@font-face/);}
 for(const p of expressive){assert.doesNotMatch(read(p.base+'/styles.css'),/https?:|@font-face/);assert.doesNotMatch(read(p.base+'/markup.html'),/<canvas|<img/);assert.doesNotMatch(read(p.base+'/vanilla/init.ts'),/setInterval|requestAnimationFrame|innerHTML/);}
});
test('paper/paint/glass families are distinct structures, not a family of color-only overrides',()=>{
 const full=expressive.map(skinCSS);assert.equal(new Set(full).size,32);
 for(const p of expressive){const css=skinCSS(p);assert.match(css,/box-shadow/,p.id);assert.match(css,/::before|::after/,p.id);assert.match(css,/gradient/,p.id);}
 assert.match(read('src/parts/dropdowns/atelier-select/styles.css'),/clip-path:polygon/);
 assert.match(read('src/parts/scrollbars/vernier/styles.css'),/repeating-linear-gradient/);
});
