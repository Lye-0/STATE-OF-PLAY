import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-folding-cube-loader');
if(!node)throw new Error('Missing Folding Cube');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
