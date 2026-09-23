import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-helix-thread-loader');
if(!node)throw new Error('Missing Helix Thread');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
