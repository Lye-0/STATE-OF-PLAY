import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-bloom-select');
if(!root)throw new Error('Missing Bloom Select');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
