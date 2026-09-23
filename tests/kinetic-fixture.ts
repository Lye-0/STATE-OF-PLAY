/** Browser fixture for real exported controllers. This file is not shipped in part packages. */
import fs from 'node:fs';import path from 'node:path';
import type {Part} from '../src/catalog/types.ts';
import {ROOT} from '../scripts/catalog.ts';
import {testBundle} from './offline-fixture.ts';
import {scrollSampleHTML} from '../src/catalog/scroll-sample.ts';
export function kineticFixture(){
 const read=(f:string)=>fs.readFileSync(path.join(ROOT,f),'utf8');
 const bases=JSON.parse(read('src/catalog/registry.json')) as string[];
 const records=bases.map(base=>({...JSON.parse(read(base+'/meta.json')),base}) as Part&{base:string}).filter(p=>p.tags.includes('KINETIC')).map(p=>({...p,markup:read(p.base+'/markup.html').replace('<!-- slot: insert your scrollable content -->',scrollSampleHTML(p))}));
 const seen=new Set<string>();
 function css(f:string):string{if(seen.has(f))return '';seen.add(f);return read(f).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,rel:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(f),rel))));}
 const source=records.map((p,i)=>`import {init as init${i}} from '/${p.base}/vanilla/init.ts';`).join('\n')+`\nconst records=${JSON.stringify(records)};const mounts=[${records.map((_,i)=>'init'+i).join(',')}];\n`+`
const active=new Set();window.activeFrames=active;const native=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window);window.requestAnimationFrame=cb=>{const id=native(t=>{active.delete(id);cb(t)});active.add(id);return id};window.cancelAnimationFrame=id=>{active.delete(id);cancel(id)};
let controllers=[];window.unmount=()=>{controllers.forEach(c=>c.destroy());controllers=[];document.getElementById('host').replaceChildren();};
window.mount=(ids)=>{window.unmount();ids.forEach(id=>{const i=records.findIndex(p=>p.id===id),part=records[i],slot=document.createElement('section');slot.innerHTML=part.markup;document.getElementById('host').append(slot);const api=mounts[i](slot.firstElementChild);controllers.push(api);});window.apis=controllers;window.api=controllers[0];};window.records=records;`;
 const styles=records.map(p=>css(p.base+'/styles.css')).join('\n')+'\n'+read('src/app/scroll-samples.css')+`\nhtml{color-scheme:dark}body{margin:0;padding:24px;background:#171b1e;color:#e6eee7;font:14px Arial,sans-serif}*{box-sizing:border-box}#host{max-width:400px;margin:30px auto;min-height:420px}#host>section{margin-bottom:30px}.sop-scroll-area{height:300px}.sop-select{max-width:100%}#outside{margin-top:30px}`;
 const entry='.test-output/kinetic/fixture.ts',out=path.join(ROOT,'.test-output/kinetic');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(ROOT,entry),source);
 const shell='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Kinetic tests</title></head><body><form id="form"><main id="host"></main><button id="reset" type="reset">Reset</button></form><button id="outside">Outside</button></body></html>';
 fs.writeFileSync(path.join(out,'test.html'),shell.replace('</body>','<script type="module" src="./fixture.ts"></script></body>'));
 return{records,styles,source,entry,shell,out,bundle:()=>testBundle(entry,new Map([[entry,source]]))};
}
