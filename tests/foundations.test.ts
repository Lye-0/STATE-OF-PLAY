import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {buildCatalog,ROOT,FORMATS} from '../scripts/catalog.ts';
import {getDelivery,buildPrompt,packageContents} from '../src/catalog/delivery.ts';
import {packCatalog,unpackCatalog} from '../src/catalog/transport.ts';
import {clampStep,numericValue,choiceValue,escape} from '../src/shared/foundation/core.ts';
import {parseDate,dateText,parseTime,validDate} from '../src/shared/foundation/date.ts';
import {pageItems} from '../src/shared/foundation/navigation.ts';
import {accepted} from '../src/shared/foundation/upload.ts';
const catalogue=buildCatalog(),parts=catalogue.parts.filter(p=>!!p.foundation);
const expected={sliders:24,radios:24,comboboxes:24,toasts:24,hints:24,progress:24,loaders:39,uploads:20,datepickers:20,pagination:16,breadcrumbs:16,badges:24,numbers:20};
test('reconstructed collection: 787 authored parts, 36 categories, 299 foundations',()=>{
 assert.equal(catalogue.parts.length,787);assert.equal(new Set(catalogue.parts.map(p=>p.category)).size,36);assert.equal(parts.length,299);
 for(const [category,count] of Object.entries(expected)){const group=parts.filter(p=>p.category===category);assert.equal(group.length,count);assert.equal(group.filter(p=>p.designType==='A').length,category==='loaders'?24:count===24?16:count===20?13:10);}
 assert.equal(parts.filter(p=>p.designType==='A').length,195);assert.equal(parts.filter(p=>p.designType==='B').length,104);
});
test('every foundation has real markup, implementation, use example and prompt in every format/layout',()=>{
 for(const p of parts){assert.match(p.markup,/sop-foundation/);assert.equal(p.foundation!.kind,p.category);assert.ok(p.prompt.length>300);for(const format of FORMATS)for(const layout of ['portable','original']as const){const d=getDelivery(p,format,layout);assert.ok(d.files.some(f=>f.name===d.entry));assert.ok(d.runtimeFiles.every(f=>!f.name.includes('src/app/')));assert.ok(packageContents(p,format,layout).some(f=>f.name==='PROMPT.md'));assert.match(buildPrompt(p,format,layout),/既存プロジェクト/);}}
});
test('all 24 combobox exports and prompts keep scrolling inside the candidate list',()=>{
 const base=fs.readFileSync(path.join(ROOT,'src/shared/foundation/base.css'),'utf8'),resonance=fs.readFileSync(path.join(ROOT,'src/shared/foundation/resonance/style.css'),'utf8');assert.match(base,/ff-floating\.ff-combo-list\{overflow:hidden\}/);assert.match(base,/ff-combo-list>\[data-results\].*overflow-y:auto/);assert.match(resonance,/ff-combo-list \{[\s\S]*?overflow:hidden/);assert.match(resonance,/ff-combo-list > \[data-results\] \{[\s\S]*?overflow-y:auto/);
 for(const part of parts.filter(p=>p.category==='comboboxes')){assert.match(part.prompt,/候補一覧のスクロール/);assert.match(part.usage,/候補一覧のスクロール/);for(const format of FORMATS)for(const layout of ['portable','original']as const){const delivery=getDelivery(part,format,layout);assert.ok(delivery.runtimeFiles.some(file=>file.sourceName.endsWith('/shared/foundation/base.css')));assert.match(buildPrompt(part,format,layout),/候補パネルの外枠はオーバーフローをクリップ/);}}
});
test('catalogue transport round-trips every field without minifying exported code',()=>{
 const packed=packCatalog(catalogue.parts),restored=unpackCatalog(packed);assert.deepEqual(restored,catalogue.parts);
 assert.ok(Buffer.byteLength(JSON.stringify(packed))<catalogue.parts.reduce((sum,p)=>sum+Buffer.byteLength(JSON.stringify(p)),0)*.65);
});
test('transport rejects corrupt schema, negative refs and unknown fragment indices',()=>{
 const packed=packCatalog([parts[0]]);assert.throws(()=>unpackCatalog({...packed,schema:99} as never));
 const bad=structuredClone(packed);bad.parts[0].markup=-1;assert.throws(()=>unpackCatalog(bad));
 const fragment=structuredClone(packed);fragment.texts[fragment.parts[0].markup]=[Number.MAX_SAFE_INTEGER];assert.throws(()=>unpackCatalog(fragment));
});
test('transport retains newline, CRLF, trailing spaces, empty strings and Unicode',()=>{
 const p=structuredClone(parts[0]);for(const sample of ['', '日本語\r\n\t🚀  \n', ' '.repeat(602), ('line\r\n'.repeat(200))]){p.prompt=sample;assert.equal(unpackCatalog(packCatalog([p]))[0].prompt,sample);}
});
test('sliders and numbers clamp to bounds with decimal steps',()=>{
 assert.equal(clampStep(.3,0,1,.1),.3);assert.equal(clampStep(1.86,1,4,.25),1.75);assert.equal(clampStep(999,-10,10,1),10);assert.equal(clampStep(-999,-10,10,1),-10);assert.equal(clampStep(NaN,5,10,1),5);
 assert.deepEqual(numericValue([8,2],{min:0,max:10,range:true,step:1}),[2,8]);assert.equal(numericValue(65,{min:0,max:100,step:10}),70);
});
test('degenerate ranges and bad steps produce finite, ordered values',()=>{
 assert.deepEqual(numericValue([-1,9],{min:4,max:4,range:true,step:0}),[4,4]);assert.ok(Number.isFinite(clampStep(Infinity,1,5,Infinity)));
});
test('choice values filter disabled/missing values and deduplicate multiple selection',()=>{
 const items=[{value:'a',label:'A'},{value:'b',label:'B',disabled:true},{value:'c',label:'C'}];
 assert.equal(choiceValue('b',{items,required:true}),'a');assert.equal(choiceValue('missing',{items}), '');
 assert.deepEqual(choiceValue(['a','a','b','c'],{items,multiple:true}),['a','c']);assert.equal(choiceValue('x',{items:[],required:true}),'');
});
test('date-only values handle leap years without UTC conversion',()=>{
 assert.ok(parseDate('2024-02-29'));assert.equal(parseDate('2025-02-29'),null);assert.equal(parseDate('2026-13-01'),null);assert.equal(parseDate('2026-04-31'),null);
 for(const value of ['2024-02-29','2026-01-01','0099-01-12'])assert.equal(dateText(parseDate(value)!),value);
});
test('date constraints enforce boundaries and callback exclusions',()=>{
 const options={minDate:'2026-09-01',maxDate:'2026-09-30',isDateDisabled:(d:string)=>d==='2026-09-15'};
 assert.equal(validDate('2026-09-01',options),true);assert.equal(validDate('2026-09-30',options),true);assert.equal(validDate('2026-08-31',options),false);assert.equal(validDate('2026-09-15',options),false);
});
test('authored date and time inputs accept local values without an OS picker',()=>{
 assert.equal(parseTime('0735'),'07:35');assert.equal(parseTime('9:05'),'09:05');assert.equal(parseTime('23:59'),'23:59');assert.equal(parseTime('24:00'),null);assert.equal(parseTime('12:60'),null);
 const calendars=parts.filter(part=>part.category==='datepickers');assert.equal(calendars.length,20);
 for(const part of calendars){
  assert.doesNotMatch(part.markup,/type="(?:date|time|datetime-local)"/);
  assert.match(part.markup,/data-time-picker/);
  assert.match(part.prompt,/独自日時UI/);
  assert.match(part.usage,/独自日時UI/);
  assert.match(part.prompt,/期間入力の配置（v4\.12\.2）/);
  assert.match(part.usage,/期間入力の配置（v4\.12\.2）/);
  for(const format of FORMATS)for(const layout of ['portable','original']as const){
   const delivery=getDelivery(part,format,layout);
   assert.ok(delivery.runtimeFiles.some(file=>file.sourceName.endsWith('/shared/foundation/date-ui.ts')));
   const css=delivery.runtimeFiles.find(file=>file.sourceName.endsWith('/shared/foundation/base.css'));
   assert.ok(css&&css.code.includes('container-type:inline-size'),part.id+' '+format+' '+layout+' range CSS');
   const prompt=buildPrompt(part,format,layout,false);
   assert.match(prompt,/ブラウザー標準の日時ピッカーを開きません/);
   assert.match(prompt,/期間入力の配置（v4\.12\.2）/);
  }
 }
});
test('pagination keeps first/last/current pages ordered across 1–200 pages',()=>{
 for(const total of [1,2,7,8,32,200])for(let current=1;current<=total;current++) {const values=pageItems(current,total),numbers=values.filter((v):v is number=>typeof v==='number');assert.equal(numbers[0],1);assert.equal(numbers.at(-1),total);assert.ok(numbers.includes(current));assert.equal(new Set(numbers).size,numbers.length);assert.deepEqual(numbers,[...numbers].sort((a,b)=>a-b));assert.ok(numbers.every(n=>n>=1&&n<=total));}
});
test('file accept validation supports extension, MIME list and wildcards',()=>{
 assert.ok(accepted({name:'PHOTO.PNG',type:'image/png'},'.png'));assert.ok(accepted({name:'a.jpg',type:'image/jpeg'},'image/*'));
 assert.ok(accepted({name:'document.pdf',type:'application/pdf'},'.png, application/pdf'));assert.equal(accepted({name:'x.exe',type:'application/octet-stream'},'image/*,.pdf'),false);assert.ok(accepted({name:'任意.bin',type:''},''));
});
test('strings inserted in HTML cannot become interactive markup',()=>{
 assert.equal(escape('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');assert.equal(escape('A&B'), 'A&amp;B');
});
test('passive visuals use CSS; uploads never contact a server, overlays and object URLs have teardown',()=>{
 const feedback=fs.readFileSync(path.join(ROOT,'src/shared/foundation/feedback.ts'),'utf8');assert.doesNotMatch(feedback,/setInterval\(/);
 const upload=fs.readFileSync(path.join(ROOT,'src/shared/foundation/upload.ts'),'utf8');assert.doesNotMatch(upload,/fetch\(|XMLHttpRequest/);assert.match(upload,/revokeObjectURL/);
 const core=fs.readFileSync(path.join(ROOT,'src/shared/foundation/core.ts'),'utf8');assert.match(core,/AbortController/);assert.match(core,/listeners\.abort/);
 const css=fs.readFileSync(path.join(ROOT,'src/shared/foundation/base.css'),'utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/forced-colors/);
});
test('toast demo triggers stay outside reusable runtime markup',()=>{
 for(const p of parts.filter(p=>p.category==='toasts')) {assert.doesNotMatch(p.markup, /data-notify|onclick=/);assert.match(p.files.tsx.find(f=>f.name.endsWith('/Example.tsx'))!.code,/notify/);}
});

test('TypeScript deliveries use bundler-friendly imports without requiring allowImportingTsExtensions',()=>{
 for(const part of parts)for(const format of ['ts','tsx']as const)for(const f of getDelivery(part,format).runtimeFiles)if(/\.tsx?$/.test(f.name))assert.doesNotMatch(f.code,/(?:from\s+|import\s*)['"]\.[^'"\n]+\.tsx?['"]/);
});
