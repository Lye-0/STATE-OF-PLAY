import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-frost-button');
if(!root)throw new Error('Missing Frost Button');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
