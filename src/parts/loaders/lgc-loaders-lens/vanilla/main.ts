import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-lgc-loaders-lens');
if(!node)throw new Error('Missing Glass Droplets');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
