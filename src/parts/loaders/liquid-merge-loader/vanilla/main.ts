import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-liquid-merge-loader');
if(!node)throw new Error('Missing Liquid Merge');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
