import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-narrow-gate-link');
if(!root)throw new Error('Missing Narrow Gate Link');
const controller=init(root);
// Navigation is native; no preventDefault or window.location handler is necessary.
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
