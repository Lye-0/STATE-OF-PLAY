import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-copper-ledger-accordion');
if(!root)throw new Error('Missing accordion root');
const controller=init(root,{onExpandedChange(values){console.log('展開中:',values);}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
