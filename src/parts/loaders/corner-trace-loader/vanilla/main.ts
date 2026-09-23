import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-corner-trace-loader');
if(!node)throw new Error('Missing Corner Trace');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
