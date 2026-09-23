import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-line-sweep-loader');
if(!node)throw new Error('Missing Line Sweep');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
