import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-arc-spinner-loader');
if(!node)throw new Error('Missing Arc Spinner');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
