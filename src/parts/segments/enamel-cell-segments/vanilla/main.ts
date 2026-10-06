import {init} from './init';
const root=document.querySelector<HTMLElement>('[data-selection-kind]');
if(!root)throw new Error('Missing component root');
const controller=init(root,{onValueChange(value){console.log('Selection:',value);}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
