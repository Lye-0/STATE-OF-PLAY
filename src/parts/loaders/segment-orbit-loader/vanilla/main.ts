import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-segment-orbit-loader');
if(!node)throw new Error('Missing Segment Orbit Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
