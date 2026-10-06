import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-kinetic-abacus-loader');
if(!node)throw new Error('Missing Kinetic Abacus Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
