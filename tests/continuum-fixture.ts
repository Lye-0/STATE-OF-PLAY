/** Real component fixture; the explicit offline compiler is not a Vite build. */
import fs from 'node:fs';import path from 'node:path';
import {ROOT} from '../scripts/catalog.ts';import {testBundle} from './offline-fixture.ts';
export function continuumFixture(){
 const read=(file:string)=>fs.readFileSync(path.join(ROOT,file),'utf8');
 const registry=JSON.parse(read('src/catalog/registry.json')) as string[];
 const bases=registry.filter(base=>/^src\/parts\/(progress|uploads|datepickers|loaders)\//.test(base));
 const records=bases.map(base=>({...JSON.parse(read(base+'/meta.json')),base,markup:read(base+'/markup.html')}));
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
window.mount(['tide-progress']);`;
 const frameCSS=`*{box-sizing:border-box}html{color-scheme:dark}body{margin:0;background:#111719;color:#e5ece9;font:13px Arial,sans-serif;padding:25px}#host{width:min(100%,420px);margin:25px auto;min-height:280px}#host>section{margin-bottom:38px}.specimen-label{display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:20px;color:#d6e0dd}.specimen-label b{font:17px Georgia,serif}.specimen-label small{font:7px Consolas,monospace;letter-spacing:1px;color:#8faaa3}#outside,#reset{font:11px Arial;background:#202d30;color:#d9e6df;border:1px solid #506361;border-radius:6px;padding:10px 15px}body[data-capture=true] #reset,body[data-capture=true]>#outside{display:none}body[data-capture=true] #host{margin:0 auto;min-height:0}body[data-capture=true] #host>section{margin-bottom:0}`;
 const shell='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CONTINUUM / component fixture</title><link rel="stylesheet" href="./styles.css"></head><body><form><main id="host"></main><button type="reset" id="reset">Reset</button></form><button type="button" id="outside">Outside</button></body></html>';
 const out=path.join(ROOT,'.test-output/continuum');fs.mkdirSync(out,{recursive:true});const entry='.test-output/continuum/fixture.ts';fs.writeFileSync(path.join(ROOT,entry),source);fs.writeFileSync(path.join(out,'styles.css'),styles+'\n'+frameCSS);fs.writeFileSync(path.join(out,'test.html'),shell.replace('</body>','<script type="module" src="./fixture.ts"></script></body>'));
 const bundle=()=>testBundle(entry,new Map([[entry,source]]));
 return {out,records,source,styles:styles+'\n'+frameCSS,shell,bundle};
}
