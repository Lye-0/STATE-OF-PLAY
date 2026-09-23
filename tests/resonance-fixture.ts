/** Standalone authored parts. The offline adapter never masquerades as a Vite build. */
import fs from 'node:fs';import path from 'node:path';import {ROOT} from '../scripts/catalog.ts';import {testBundle} from './offline-fixture.ts';
export function resonanceFixture(){
 const read=(p:string)=>fs.readFileSync(path.join(ROOT,p),'utf8');
 const bases=(JSON.parse(read('src/catalog/registry.json')) as string[]).filter(p=>/^src\/parts\/(radios|comboboxes|toasts|hints)\//.test(p));
 const records=bases.map(base=>({...JSON.parse(read(base+'/meta.json')),base,markup:read(base+'/markup.html')}));
 const seen=new Set<string>();function css(p:string):string{if(seen.has(p))return'';seen.add(p);return read(p).replace(/@import\s+["']([^"']+)["']\s*;/g,(_,r:string)=>css(path.posix.normalize(path.posix.join(path.posix.dirname(p),r))));}
 const styles=records.map(p=>css(p.base+'/styles.css')).join('\n');
 const source=records.map((p,i)=>`import {init as init${i}} from '/${p.base}/vanilla/init.ts';`).join('\n')+`
 const records=${JSON.stringify(records)},mounts=[${records.map((_,i)=>'init'+i).join(',')}];window.records=records;
 const frames=new Set();window.activeFrames=frames;const request=requestAnimationFrame.bind(window),cancel=cancelAnimationFrame.bind(window);
 window.requestAnimationFrame=fn=>{const id=request(t=>{frames.delete(id);fn(t)});frames.add(id);return id;};window.cancelAnimationFrame=id=>{frames.delete(id);cancel(id);};
 let controllers=[];window.unmount=()=>{controllers.forEach(c=>c.destroy());controllers=[];document.getElementById('host').replaceChildren();};
 window.mount=(ids,options={})=>{window.unmount();for(const id of ids){const idx=records.findIndex(p=>p.id===id),p=records[idx],section=document.createElement('section');section.dataset.sample=id;section.innerHTML='<header class="specimen-label"><b>'+p.name+'</b><small>'+p.category.toUpperCase()+' / A</small></header>'+p.markup;document.getElementById('host').append(section);controllers.push(mounts[idx](section.children[1],options));}window.apis=controllers;window.api=controllers[0];};
 window.initAt=(id,node,options={})=>{const index=records.findIndex(p=>p.id===id),c=mounts[index](node,options);controllers.push(c);return c;};
 `;
 const frameCSS=`*{box-sizing:border-box}html{color-scheme:dark}body{margin:0;background:#131617;color:#eee;font:13px Arial,sans-serif;padding:24px}#host{width:min(100%,440px);margin:12px auto;min-height:260px}#host>section{margin:0 0 36px}.specimen-label{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:0 0 16px;color:#d6e1d8}.specimen-label b{font:16px Georgia,serif}.specimen-label small{font:8px Consolas,monospace;letter-spacing:1px;color:#829d92}#outside,#reset{padding:10px 18px;color:#ddd;background:#18282c;border:1px solid #465c57;margin:15px}body[data-capture=true]>#outside,body[data-capture=true] #reset{display:none}body[data-capture=true]{padding:26px}body[data-capture=true] #host{min-height:0}`;
 const shell='<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RESONANCE — actual component fixtures</title><link rel="stylesheet" href="./styles.css"></head><body><form><main id="host"></main><button id="reset" type="reset">Reset</button></form><button id="outside">Outside</button></body></html>';
 const out=path.join(ROOT,'.test-output/resonance');fs.mkdirSync(out,{recursive:true});const entry='.test-output/resonance/fixture.ts';fs.writeFileSync(path.join(ROOT,entry),source);fs.writeFileSync(path.join(out,'styles.css'),styles+'\n'+frameCSS);fs.writeFileSync(path.join(out,'test.html'),shell.replace('</body>','<script type="module" src="./fixture.ts"></script></body>'));
 const bundle=()=>testBundle(entry,new Map([[entry,source]]));return{out,entry,records,source,styles:styles+'\n'+frameCSS,shell,bundle};
}
