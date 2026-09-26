import test from 'node:test';
import assert from 'node:assert/strict';
import {buildCatalog} from '../scripts/catalog.ts';
import {withGlassTransparency,glassDensity,glassBlurScale} from '../src/catalog/glass-transparency.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
const parts=buildCatalog().parts.filter(p=>/^(lg-|lgc-)/.test(p.id));
test('all 70 glass templates export the chosen material without changing the template',()=>{
 assert.equal(parts.length,70);
 for(const part of parts){
  const before=JSON.stringify(part),adjusted=withGlassTransparency(part,80,0);
  for(const format of ['tsx','jsx','ts','js'] as const)for(const layout of ['original','portable'] as const){
   const delivery=getDelivery(adjusted,format,layout);
   const density=part.designType==='A'?'0.328':'0.4';
   assert.ok(delivery.files.find(f=>f.name===delivery.stylesheet)!.code.includes('--lg-density:'+density));
   assert.ok(delivery.files.find(f=>f.name===delivery.stylesheet)!.code.includes('--lg-blur-scale:0'));
   assert.match(buildPrompt(adjusted,format,layout,false),/透明度: 80 \/ 100/);
   const archive=packageContents(adjusted,format,layout);
   assert.ok(archive.find(f=>f.name==='preview/styles.css')!.code.includes('--lg-density:'+density));
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
 assert.equal(glassDensity(50),1);assert.equal(glassDensity(100),0);assert.equal(glassDensity(-10),2);assert.equal(glassDensity(NaN),1);
 assert.equal(glassBlurScale(0),0);assert.equal(glassBlurScale(50),1);assert.equal(glassBlurScale(150),2);assert.equal(glassBlurScale(NaN),1);
});
