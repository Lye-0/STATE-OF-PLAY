import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-lozenge-transfer-loader');
if(!node)throw new Error('Missing Lozenge Transfer Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
