import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-orbital-loom-loader');
if(!node)throw new Error('Missing Orbital Loom');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
