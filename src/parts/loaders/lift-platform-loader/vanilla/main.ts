import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-lift-platform-loader');
if(!node)throw new Error('Missing Lift Platform Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
