/** Test-only fixture: actual authored markup/styles/controller modules, no gallery dependencies. */
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from '../scripts/catalog.ts';
import {testBundle} from './offline-fixture.ts';
export function unfoldFixture(){
 const read=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
 const bases=(JSON.parse(read('src/catalog/registry.json')) as string[]).filter(b=>b.startsWith('src/parts/accordions/')||b.startsWith('src/parts/textboxes/'));
 const records=bases.map(base=>({...JSON.parse(read(base+'/meta.json')),base,markup:read(base+'/markup.html')})).sort((a,b)=>a.order-b.order);
 const seen=new Set<string>();
 function css(file:string):string{if(seen.has(file))return '';seen.add(file);return read(file).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,rel:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(file),rel))));}
 const styles=records.map(p=>css(p.base+'/styles.css')).join('\n');
 const source=records.map((p,i)=>`import {init as init${i}} from '/${p.base}/vanilla/init.ts';`).join('\n')+`
const records=${JSON.stringify(records)},mounts=[${records.map((_,i)=>'init'+i).join(',')}];
const frames=new Set();window.activeFrames=frames;const request=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window);
window.requestAnimationFrame=fn=>{const n=request(t=>{frames.delete(n);fn(t)});frames.add(n);return n;};window.cancelAnimationFrame=n=>{frames.delete(n);cancel(n)};
let controllers=[];window.unmount=()=>{controllers.forEach(c=>c.destroy());controllers=[];document.getElementById('host').replaceChildren();};
window.mount=(ids,options={})=>{window.unmount();for(const id of ids){const index=records.findIndex(p=>p.id===id),p=records[index],slot=document.createElement('section');slot.dataset.sample=id;slot.innerHTML='<div class="fixture-label">'+p.name+' <small>'+p.motion+'</small></div>'+p.markup;document.getElementById('host').append(slot);controllers.push(mounts[index](slot.children[1],options));}window.apis=controllers;window.api=controllers[0];};window.records=records;window.initAt=(id,node,options={})=>{const i=records.findIndex(r=>r.id===id),c=mounts[i](node,options);controllers.push(c);return c;};
`;
 const out=path.join(ROOT,'.test-output/unfold'),entry='.test-output/unfold/fixture.ts';fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(ROOT,entry),source);
 const frameCSS=`html{color-scheme:dark}*{box-sizing:border-box}body{margin:0;background:#101415;color:#eee;font:14px Arial,sans-serif;padding:26px}#host{width:min(100%,430px);margin:10px auto;min-height:380px}#host>section{margin-bottom:34px}.fixture-label{font:14px Georgia,serif;color:#d7dfd7;margin:0 0 15px;display:flex;justify-content:space-between;align-items:center;gap:12px}.fixture-label small{font:8px Consolas,monospace;letter-spacing:.08em;color:#82938d}#host .sop-textfield{width:100%}#outside,#reset{margin:20px 10px;padding:10px;background:#202928;border:1px solid #54655b;color:#eee}body[data-capture=true]>#outside,body[data-capture=true] #reset{display:none}body[data-capture=true] #host{min-height:0}`;
 const shell='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UNFOLD / RESPONSIVE fixture</title><link rel="stylesheet" href="./styles.css"></head><body><form id="testform"><main id="host"></main><button type="reset" id="reset">Reset</button></form><button id="outside">Outside</button></body></html>';
 fs.writeFileSync(path.join(out,'styles.css'),styles+'\n'+frameCSS);
 fs.writeFileSync(path.join(out,'test.html'),shell.replace('</body>','<script type="module" src="./fixture.ts"></script></body>'));
 const bundle=()=>testBundle(entry,new Map([[entry,source]]));
 return{records,styles:styles+'\n'+frameCSS,source,out,entry,shell,bundle};
}
