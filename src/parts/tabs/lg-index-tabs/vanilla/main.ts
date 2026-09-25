import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-lg-index-tabs');
if(!root)throw new Error('Missing Index Tabs');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
