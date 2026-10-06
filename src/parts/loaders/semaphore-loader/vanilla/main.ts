import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-semaphore-loader');
if(!node)throw new Error('Missing Semaphore Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
