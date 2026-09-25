import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-flow-tabs');
if(!root)throw new Error('Missing Flow Tabs');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
