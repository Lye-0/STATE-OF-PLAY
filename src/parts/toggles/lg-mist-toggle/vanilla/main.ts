import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-mist-toggle');
if(!root)throw new Error('Missing Mist Toggle');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
