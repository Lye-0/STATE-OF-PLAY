import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-paired-crescents-loader');
if(!node)throw new Error('Missing Paired Crescents Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
