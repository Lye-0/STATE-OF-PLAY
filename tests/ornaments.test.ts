import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {ROOT,FORMATS,buildCatalog} from './historical-catalog.ts';
import {buildPrompt,getDelivery,packageContents} from '../src/catalog/delivery.ts';

const catalogue=buildCatalog();
const ornaments=catalogue.parts.filter(part=>part.category==='ornaments');

test('ORNAMENTS retains 20 originals and adds 10 A designs without restoring retired parts',()=>{
 assert.equal(catalogue.parts.length,825);
 assert.equal(new Set(catalogue.parts.map(part=>part.category)).size,37);
 assert.equal(ornaments.length,30);
 assert.equal(ornaments.filter(part=>part.designType==='A').length,22);
 assert.equal(ornaments.filter(part=>part.designType==='B').length,8);
 assert.equal(new Set(ornaments.map(part=>part.id)).size,30);
 assert.equal(new Set(ornaments.map(part=>part.order)).size,30);
 assert.equal(ornaments.filter(part=>part.version==='4.14.0').length,9);
 assert.equal(ornaments.filter(part=>part.version==='4.14.2').length,1);
 assert.ok(ornaments.some(part=>part.id==='hero-asterisk'));
 assert.ok(!ornaments.some(part=>part.id==='stitch-comet'));
 assert.ok(!catalogue.parts.some(part=>part.id==='paper-loader'));
});

test('every ornament ships its real code, usage and prompt in each export format and layout',()=>{
 for(const part of ornaments){
  assert.match(part.markup,/class="sop-ornament/);
  assert.match(part.markup,/aria-hidden="true"/);
  assert.match(part.usage,/setPaused/);
  assert.match(part.prompt,/data-paused/);
  const stylesheet=fs.readFileSync(path.join(ROOT,`src/parts/ornaments/${part.id}/styles.css`),'utf8');
  assert.match(stylesheet,/prefers-reduced-motion/);
  assert.match(stylesheet,/data-paused="true"/);
  for(const format of FORMATS)for(const layout of ['portable','original'] as const){
   const delivery=getDelivery(part,format,layout),files=packageContents(part,format,layout);
   assert.ok(delivery.files.some(file=>file.name===delivery.entry),part.id);
   assert.ok(delivery.runtimeFiles.some(file=>file.name.endsWith('styles.css')),part.id);
   assert.equal(files.find(file=>file.name==='PROMPT.md')?.code,buildPrompt(part,format,layout),part.id);
  }
 }
});

test('all Vanilla ornament controllers expose paused state and clean it on destroy',async()=>{
 for(const part of ornaments){
  const url=pathToFileURL(path.join(ROOT,`src/parts/ornaments/${part.id}/vanilla/init.ts`)).href;
  const {init}=await import(url) as {init:(element:HTMLElement,options:{paused:boolean})=>{setPaused:(paused:boolean)=>void;destroy:()=>void}};
  const element={dataset:{}} as unknown as HTMLElement;
  const controller=init(element,{paused:true});
  assert.equal(element.dataset.paused,'true',part.id);
  controller.setPaused(false);
  assert.equal(element.dataset.paused,'false',part.id);
  controller.destroy();
  assert.equal(element.dataset.paused,undefined,part.id);
 }
});

test('two orbiting ornaments distribute continuous hover motion',()=>{
 for(const id of ['signal-orbit','tide-knot']){
  const part=ornaments.find(item=>item.id===id)!;
  assert.match(part.prompt,/ホバーの連続性（v4\.14\.1）/);
  assert.match(part.usage,/v4\.14\.1 \/ 動き/);
  assert.doesNotMatch(fs.readFileSync(path.join(ROOT,'src/parts/ornaments',id,'styles.css'),'utf8'),/:hover[^\n]*animation-duration/);
 }
});

test('Hero Asterisk distributes the same decorative mark and timing as the site hero',()=>{
 const part=ornaments.find(item=>item.id==='hero-asterisk')!;
 const site=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
 const gallery=fs.readFileSync(path.join(ROOT,'src/app/gallery.css'),'utf8');
 assert.match(site,/class="hero-asterisk" aria-hidden="true">✳</);
 assert.match(gallery,/\.hero-title:hover \.hero-asterisk\{transform:rotate\(180deg\)\}/);
 assert.match(part.markup,/class="hero-asterisk-mark">✳/);
 assert.match(fs.readFileSync(path.join(ROOT,'src/parts/ornaments/hero-asterisk/styles.css'),'utf8'),/transition:transform 1\.4s cubic-bezier\(\.16,1,\.3,1\)/);
 assert.match(fs.readFileSync(path.join(ROOT,'src/parts/ornaments/hero-asterisk/react/HeroAsterisk.tsx'),'utf8'),/hero-asterisk-mark/);
 assert.match(part.prompt,/data-paused/);
});
