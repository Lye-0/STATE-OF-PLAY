import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-iris-bloom-loader');
if(!node)throw new Error('Missing Iris Bloom');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
