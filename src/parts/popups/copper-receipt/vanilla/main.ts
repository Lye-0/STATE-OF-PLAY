import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-copper-receipt');
if(!root)throw new Error('Missing popup root');
const controller=init(root,{onClose(reason){console.log('Closed:',reason);}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
