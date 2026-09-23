import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-orbit-dot-loader');
if(!node)throw new Error('Missing Orbit Dot');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
