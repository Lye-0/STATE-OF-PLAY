import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-quiet-resource-link');
if(!root)throw new Error('Missing Quiet Resource Link');
const controller=init(root);
// Navigation is native; no preventDefault or window.location handler is necessary.
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
