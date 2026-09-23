import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-mini-bars-loader');
if(!node)throw new Error('Missing Mini Bars');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
