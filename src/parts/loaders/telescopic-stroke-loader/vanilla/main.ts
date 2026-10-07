import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-telescopic-stroke-loader');
if(!node)throw new Error('Missing Telescopic Stroke Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
