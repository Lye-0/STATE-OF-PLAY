import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-lens-toggle');
if(!root)throw new Error('Missing Lens Toggle');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
