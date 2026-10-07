import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-fine-ring-sequence-loader');
if(!node)throw new Error('Missing Fine Ring Sequence Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
