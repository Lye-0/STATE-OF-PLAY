import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-compact-select');
if(!root)throw new Error('Missing select root');
const controller=init(root,{onValueChange(value){console.log('選択値:',value);}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
