import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-folding-checkpoints-loader');
if(!node)throw new Error('Missing Folding Checkpoints Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
