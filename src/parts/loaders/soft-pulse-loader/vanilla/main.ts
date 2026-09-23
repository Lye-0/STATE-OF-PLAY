import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-soft-pulse-loader');
if(!node)throw new Error('Missing Soft Pulse');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
