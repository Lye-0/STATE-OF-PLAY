import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-counterflow-lines-loader');
if(!node)throw new Error('Missing Counterflow Lines Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
