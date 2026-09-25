import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-pressure-button');
if(!root)throw new Error('Missing Pressure Button');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
