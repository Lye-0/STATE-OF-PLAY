import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lgc-links-mist');
if(!root)throw new Error('Missing Mist Link');
const controller=init(root);
// Navigation is native; no preventDefault or window.location handler is necessary.
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
