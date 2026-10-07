import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-small-square-pulse-loader');
if(!node)throw new Error('Missing Small Square Pulse Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
