import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-sliding-windows-loader');
if(!node)throw new Error('Missing Sliding Windows Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
