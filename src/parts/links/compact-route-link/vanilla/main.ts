import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-compact-route-link');
if(!root)throw new Error('Missing Compact Route Link');
const controller=init(root);
// Navigation is native; no preventDefault or window.location handler is necessary.
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
