import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-lgc-loaders-mist');
if(!node)throw new Error('Missing Frost Spinner');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
