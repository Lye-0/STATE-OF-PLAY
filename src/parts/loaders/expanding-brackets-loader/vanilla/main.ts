import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-expanding-brackets-loader');
if(!node)throw new Error('Missing Expanding Brackets Loader');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
