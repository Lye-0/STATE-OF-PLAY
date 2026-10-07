import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-rolling-diamonds-loader');
if(!node)throw new Error('Missing Rolling Diamonds Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
