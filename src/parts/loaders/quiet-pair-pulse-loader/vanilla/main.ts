import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-quiet-pair-pulse-loader');
if(!node)throw new Error('Missing Quiet Pair Pulse Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
