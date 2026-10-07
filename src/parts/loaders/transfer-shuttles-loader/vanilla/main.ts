import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-transfer-shuttles-loader');
if(!node)throw new Error('Missing Transfer Shuttles Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
