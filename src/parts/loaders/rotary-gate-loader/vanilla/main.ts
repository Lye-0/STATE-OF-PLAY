import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-rotary-gate-loader');
if(!node)throw new Error('Missing Rotary Gate Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
