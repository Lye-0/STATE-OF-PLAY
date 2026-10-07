import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-column-charge-loader');
if(!node)throw new Error('Missing Column Charge Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
