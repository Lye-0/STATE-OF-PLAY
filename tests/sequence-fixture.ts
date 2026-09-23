/** Synthetic test document using actual author modules. NOT a Vite build. */
import fs from 'node:fs';import path from 'node:path';
import {ROOT} from '../scripts/catalog.ts';import {testBundle} from './offline-fixture.ts';
export function sequenceFixture(){
 const read=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
 const registry=JSON.parse(read('src/catalog/registry.json')) as string[];
 const records=registry.filter(base=>/^src\/parts\/(pagination|badges)\//.test(base)).map(base=>({...JSON.parse(read(base+'/meta.json')),base,markup:read(base+'/markup.html')}));
 const seen=new Set<string>();function css(file:string):string{if(seen.has(file))return '';seen.add(file);return read(file).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,ref:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(file),ref))));}
 const styles=records.map(p=>css(p.base+'/styles.css')).join('\n');
 const source=records.map((p,i)=>`import {init as init${i}} from '/${p.base}/vanilla/init.ts';`).join('\n')+`
const records=${JSON.stringify(records)},mounts=[${records.map((_,i)=>'init'+i).join(',')}];
window.records=records;let controllers=[];
const frames=new Set();window.activeFrames=frames;const request=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window);
window.requestAnimationFrame=fn=>{const id=request(t=>{frames.delete(id);fn(t)});frames.add(id);return id;};window.cancelAnimationFrame=id=>{frames.delete(id);cancel(id);};
window.unmount=()=>{controllers.forEach(c=>c.destroy());controllers=[];document.getElementById('host').replaceChildren();};
window.mount=(ids,options={})=>{window.unmount();for(const id of ids){const index=records.findIndex(p=>p.id===id),p=records[index];if(!p)throw Error('Unknown '+id);const section=document.createElement('section');section.dataset.sample=id;section.innerHTML='<header class="specimen-label"><b>'+p.name+'</b><small>'+p.category.toUpperCase()+' / '+p.designType+'</small></header>'+p.markup;document.getElementById('host').append(section);controllers.push(mounts[index](section.children[1],options));}window.apis=controllers;window.api=controllers[0];};
window.initAt=(id,node,options={})=>{const i=records.findIndex(p=>p.id===id),c=mounts[i](node,options);controllers.push(c);return c;};
window.mount(['aurora-pages']);`;
 const frameCSS=`*{box-sizing:border-box}html{color-scheme:dark}body{margin:0;background:#15191b;color:#e7ebe5;font:13px Arial,sans-serif;padding:26px}#host{width:min(100%,420px);margin:30px auto;min-height:280px}#host>section{margin-bottom:40px}.specimen-label{display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:22px;color:#d9e2de}.specimen-label b{font:21px Georgia,serif}.specimen-label small{font:8px Consolas,monospace;letter-spacing:1px;color:#90a5a0}#outside,#reset{font:11px Arial;background:#20292c;color:#e0e5db;border:1px solid #566563;border-radius:5px;padding:9px 15px}body[data-capture=true] #reset,body[data-capture=true]>#outside{display:none}body[data-capture=true] #host{margin:0 auto;min-height:0}body[data-capture=true] #host>section{margin-bottom:0}`;
 const shell='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SEQUENCE / component fixture</title><link rel="stylesheet" href="./styles.css"></head><body><form><main id="host"></main><button type="reset" id="reset">Reset</button></form><button type="button" id="outside">Outside</button></body></html>';
 const out=path.join(ROOT,'.test-output/sequence');fs.mkdirSync(out,{recursive:true});const entry='.test-output/sequence/fixture.ts';fs.writeFileSync(path.join(ROOT,entry),source);fs.writeFileSync(path.join(out,'styles.css'),styles+'\n'+frameCSS);fs.writeFileSync(path.join(out,'test.html'),shell.replace('</body>','<script type="module" src="./fixture.ts"></script></body>'));
 return {out,records,source,styles:styles+'\n'+frameCSS,shell,bundle:()=>testBundle(entry,new Map([[entry,source]]))};
}
