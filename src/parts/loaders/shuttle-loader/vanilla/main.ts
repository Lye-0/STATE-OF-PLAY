import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-shuttle-loader');
if(!node)throw new Error('Missing Shuttle Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
