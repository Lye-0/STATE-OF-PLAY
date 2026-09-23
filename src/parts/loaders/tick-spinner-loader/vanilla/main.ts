import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-tick-spinner-loader');
if(!node)throw new Error('Missing Tick Spinner');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
