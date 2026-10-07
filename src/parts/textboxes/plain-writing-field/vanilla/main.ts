import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-plain-writing-field');
if(!root)throw new Error('Missing Plain Writing Field root');
const controller=init(root,{onValueChange(value){
  // Connect to your local state. Do not log passwords or send values without consent.
  void value;
}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
