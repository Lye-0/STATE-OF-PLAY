import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-copper-note');
if(!root)throw new Error('Missing Copper Note root');
const controller=init(root,{onValueChange(value){
  // Connect to your local state. Do not log passwords or send values without consent.
  void value;
}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
