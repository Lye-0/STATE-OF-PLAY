import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-swing-weight-loader');
if(!node)throw new Error('Missing Swing Weight Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
