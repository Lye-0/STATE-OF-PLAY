import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-slim-dash-loader-loader');
if(!node)throw new Error('Missing Slim Dash Loader Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
