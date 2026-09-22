import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-task-check');
if(!root)throw new Error('Missing checkbox root');
const controller=init(root,{onCheckedChange(checked){console.log('checked:',checked);}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
