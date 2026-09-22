import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-underline-link');
if(!root)throw new Error('Missing Underline Link');
const controller=init(root);
// Navigation is native; no preventDefault or window.location handler is necessary.
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
