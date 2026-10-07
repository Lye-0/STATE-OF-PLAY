import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-tailored-edge-link');
if(!root)throw new Error('Missing Tailored Edge Link');
const controller=init(root);
// Navigation is native; no preventDefault or window.location handler is necessary.
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
