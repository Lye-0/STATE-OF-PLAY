import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-clarity-select');
if(!root)throw new Error('Missing Clarity Select');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
