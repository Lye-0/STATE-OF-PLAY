import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-three-dots-loader');
if(!node)throw new Error('Missing Three Dots');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
