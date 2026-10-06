import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-bimetal-loader');
if(!node)throw new Error('Missing Bimetal Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
