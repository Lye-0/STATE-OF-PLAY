import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-crossing-pins-loader');
if(!node)throw new Error('Missing Crossing Pins Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
