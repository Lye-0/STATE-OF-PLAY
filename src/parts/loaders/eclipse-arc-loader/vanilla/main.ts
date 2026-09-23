import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-eclipse-arc-loader');
if(!node)throw new Error('Missing Eclipse Arc');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
