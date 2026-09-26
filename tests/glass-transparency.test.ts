import test from 'node:test';
import assert from 'node:assert/strict';
import {buildCatalog} from '../scripts/catalog.ts';
import {withGlassTransparency,glassAlpha,glassBlurScale} from '../src/catalog/glass-transparency.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
const parts=buildCatalog().parts.filter(p=>/^(lg-|lgc-)/.test(p.id));
test('all 70 glass templates export the chosen material without changing the template',()=>{
 assert.equal(parts.length,70);
 for(const part of parts){
  const before=JSON.stringify(part),adjusted=withGlassTransparency(part,80,0);
  for(const format of ['tsx','jsx','ts','js'] as const)for(const layout of ['original','portable'] as const){
   const delivery=getDelivery(adjusted,format,layout);
   const scale=glassAlpha(80).scale;
   assert.ok(delivery.files.find(f=>f.name===delivery.stylesheet)!.code.includes('--lg-alpha-scale:'+scale));
   assert.ok(delivery.files.find(f=>f.name===delivery.stylesheet)!.code.includes('--lg-blur-scale:0'));
   assert.match(buildPrompt(adjusted,format,layout,false),/透明度: 80 \/ 100/);
   const archive=packageContents(adjusted,format,layout);
   assert.ok(archive.find(f=>f.name==='preview/styles.css')!.code.includes('--lg-alpha-scale:'+scale));
   assert.equal(JSON.parse(archive.find(f=>f.name==='INTEGRATION.json')!.code).glassTransparency,80);
   assert.equal(JSON.parse(archive.find(f=>f.name==='INTEGRATION.json')!.code).glassBlur,0);
   assert.match(buildPrompt(adjusted,format,layout,false),/背景のぼかし: 0 \/ 100/);
   const blurOnly=withGlassTransparency(part,50,100),blurDelivery=getDelivery(blurOnly,format,layout);
   assert.ok(blurDelivery.files.find(f=>f.name===blurDelivery.stylesheet)!.code.includes('--lg-blur-scale:2'));
  }
  assert.equal(JSON.stringify(part),before);assert.equal(withGlassTransparency(part,50),part);
 }
});
test('transparency is bounded and finite',()=>{
 assert.deepEqual(glassAlpha(50),{scale:1,lift:0});assert.deepEqual(glassAlpha(100),{scale:.12,lift:0});assert.deepEqual(glassAlpha(-10),{scale:.75,lift:.25});assert.deepEqual(glassAlpha(NaN),{scale:1,lift:0});
 assert.equal(glassBlurScale(0),0);assert.equal(glassBlurScale(50),1);assert.equal(glassBlurScale(150),2);assert.equal(glassBlurScale(NaN),1);
});

test('material mapping keeps every template difference at both slider extremes',()=>{
 for(let value=0;value<=100;value++){const {scale,lift}=glassAlpha(value);const original=[.06,.24,.65,.94],mapped=original.map(a=>a*scale+lift);assert.ok(mapped[0]>0&&mapped.at(-1)!<1);for(let i=1;i<mapped.length;i++){assert.ok(mapped[i]>mapped[i-1]);assert.ok(Math.abs((mapped[i]-mapped[i-1])/(original[i]-original[i-1])-scale)<1e-10);}}
});
