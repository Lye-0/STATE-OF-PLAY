import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-compact-step-pulse-loader');
if(!node)throw new Error('Missing Compact Step Pulse Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
