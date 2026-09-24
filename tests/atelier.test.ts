/** Art-direction regression checks. No test-only dependencies or visual replacements. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {ROOT} from '../scripts/catalog.ts';
import {dependencies} from '../scripts/source-tools.ts';
const read=(p:string)=>fs.readFileSync(path.join(ROOT,p),'utf8');
const exists=(p:string)=>fs.existsSync(path.join(ROOT,p));
const parts=(JSON.parse(read('src/catalog/registry.json')) as string[]).map(base=>({base,...JSON.parse(read(base+'/meta.json'))}));
const expressive=parts.filter(p=>p.foundation&&p.designType==='A'&&p.category!=='loaders');
const variants=[...new Set<string>(expressive.map(p=>p.foundation.variant))];

// These files deliberately use one rule per selector line; token splitting respects :is()/[]/quotes.
function splitSelectors(value:string):string[]{let quote='',depth=0,start=0;const result:string[]=[];for(let i=0;i<value.length;i++){const c=value[i];if(quote){if(c===quote&&value[i-1]!=='\\')quote='';continue;}if(c==='"'||c==="'"){quote=c;continue;}if(c==='('||c==='[')depth++;if(c===')'||c===']')depth--;if(c===','&&depth===0){result.push(value.slice(start,i).trim());start=i+1;}}result.push(value.slice(start).trim());return result;}

test('Atelier redesign covers all 171 new expressive parts except the existing loaders',()=>{
 assert.equal(parts.filter(p=>!p.tags.includes('KINETIC')&&!p.tags.includes('MOTION STUDIES')).length,747);assert.equal(expressive.length,171);assert.equal(variants.length,16);
 assert.equal(new Set(expressive.map(p=>p.category)).size,12);
 for(const p of expressive){assert.equal(p.version,p.tags.includes('WAYFINDER')?'4.10.0':p.tags.includes('SEQUENCE')?'4.9.0':p.tags.includes('CONTINUUM')?'4.8.0':p.tags.includes('RESONANCE')?'4.7.0':p.category==='sliders'?'4.6.0':'4.1.0');assert.ok(p.tags.includes('Atelier')||p.tags.includes('CONTINUUM')||p.tags.includes('SEQUENCE'));if(p.category==='sliders')assert.ok(p.tags.includes('TRANSFORM'));}
});
test('every redesigned skin includes exactly its matching material and the shared construction stylesheet',()=>{
 for(const p of expressive){const css=read(p.base+'/styles.css');if(p.tags.includes('WAYFINDER')){const closure=dependencies(p.base+'/styles.css',read,exists);assert.ok(closure.includes('src/shared/foundation/wayfinding/'+(p.category==='breadcrumbs'?'breadcrumbs':'number')+'.css'));assert.equal(closure.some(f=>f.includes('/materials/')||f.endsWith('/atelier.css')),false);continue;}if(p.tags.includes('SEQUENCE')){const closure=dependencies(p.base+'/styles.css',read,exists);assert.ok(closure.includes('src/shared/foundation/sequence/style.css'));assert.equal(closure.some(f=>f.includes('/materials/')||f.endsWith('/atelier.css')),false);continue;}if(p.tags.includes('CONTINUUM')){const closure=dependencies(p.base+'/styles.css',read,exists);assert.ok(closure.includes('src/shared/foundation/continuum/style.css'));assert.equal(closure.some(f=>f.includes('/materials/')||f.endsWith('/atelier.css')),false);continue;}if(p.tags.includes('RESONANCE')){const closure=dependencies(p.base+'/styles.css',read,exists);assert.ok(closure.includes('src/shared/foundation/resonance/style.css'));assert.equal(closure.some(f=>f.includes('/materials/')||f.endsWith('/atelier.css')),false);continue;}assert.match(css,/@import "\.\.\/\.\.\/\.\.\/shared\/foundation\/atelier\.css";/);assert.ok(css.includes(`/materials/${p.foundation.variant}.css`));
  const closure=dependencies(p.base+'/styles.css',read,exists);assert.ok(closure.includes('src/shared/foundation/base.css'));assert.ok(closure.includes('src/shared/foundation/atelier.css'));assert.equal(closure.filter(f=>f.includes('/materials/')).length,1);}
});
test('B skins and loaders do not depend on the expressive construction or material sheets',()=>{
 for(const p of parts.filter(p=>p.foundation&&(p.designType==='B'||p.category==='loaders'))){const closure=dependencies(p.base+'/styles.css',read,exists);assert.equal(closure.some(f=>f.includes('/materials/')||f.endsWith('/atelier.css')),false);}
});
test('comma-separated selectors cannot escape their own foundation instance',()=>{
 for(const p of parts.filter(p=>p.foundation)){
  const css=read(p.base+'/styles.css').replace(/\/\*[\s\S]*?\*\//g,'').replace(/@import[^;]*;/g,'');
  for(const match of css.matchAll(/(?:^|[{}])\s*([^{}]+)\{/g)){
   const selector=match[1].trim();if(selector.startsWith('@')||/^(?:from|to|[\d.%\s,]+)$/.test(selector))continue;
   for(const branch of splitSelectors(selector))assert.ok(branch.startsWith('.sop-foundation'),`${p.id}: leaked selector ${branch}`);
  }
 }
});
test('all material families specify shape, light, relief and motion reduction, not only colors',()=>{
 for(const variant of variants){const css=read(`src/shared/foundation/materials/${variant}.css`);for(const token of ['--ad-face:','--ad-radius:','--ad-knob:','--ad-relief:','--ad-motif:','prefers-reduced-motion'])assert.ok(css.includes(token),variant+': '+token);
 assert.doesNotMatch(css,/@import\s+url|https?:\/\/(?!www\.w3\.org)/);}
 const css=read('src/shared/foundation/atelier.css');assert.match(css,/forced-colors/);assert.match(css,/prefers-reduced-motion/);
});
test('artwork is decorative; the native implementations and their type-specific controllers remain the source of behavior',()=>{
 for(const p of expressive){const markup=read(p.base+'/markup.html'),init=read(p.base+'/vanilla/init.ts');assert.match(markup,/sop-foundation/);assert.match(init,/foundation\//);assert.doesNotMatch(init,/innerHTML|requestAnimationFrame|setInterval/);assert.doesNotMatch(markup,/<img|<canvas/);}
});
test('light-theme detached labels have their own material backing',()=>{
 for(const variant of ['folio','botanical','ceramic']){const css=read(`src/shared/foundation/materials/${variant}.css`);assert.ok(css.includes('> .ff-heading'));assert.ok(css.includes('.ff-process-steps'));assert.ok(css.includes('.ff-page-info'));}
});
test('updated reproduction specifications explicitly include the new art-direction dependencies',()=>{
 for(const p of expressive){const prompt=read(p.base+'/prompt.md');if(p.tags.includes('WAYFINDER')){assert.match(prompt,/4\.10\.0/);assert.match(prompt,/wayfinding\//);assert.doesNotMatch(prompt,/atelier\.css/);continue;}if(p.tags.includes('SEQUENCE')){assert.match(prompt,/4\.9/);assert.match(prompt,/sequence\/style\.css/);assert.match(prompt,/sequence\/skin\.ts/);assert.doesNotMatch(prompt,/atelier\.css/);continue;}if(p.tags.includes('CONTINUUM')){assert.match(prompt,/4\.8/);assert.match(prompt,/continuum\/style\.css/);assert.doesNotMatch(prompt,/atelier\.css/);continue;}if(p.tags.includes('RESONANCE')){assert.match(prompt,/4\.7/);assert.match(prompt,/resonance\/style\.css/);assert.match(prompt,/resonance\/art\.ts/);assert.doesNotMatch(prompt,/atelier\.css/);continue;}assert.match(prompt,/4\.1/);assert.match(prompt,/atelier\.css/);assert.ok(prompt.includes(p.foundation.variant+'.css'));}
});
