import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-pinwheel-notches-loader');
if(!node)throw new Error('Missing Pinwheel Notches Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
