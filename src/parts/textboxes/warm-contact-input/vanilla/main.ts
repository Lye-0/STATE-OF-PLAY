import {init} from './init';
const root=document.querySelector<HTMLElement>('.sop-warm-contact-input');
if(!root)throw new Error('Missing Warm Contact Input root');
const controller=init(root,{onValueChange(value){
  // Connect to your local state. Do not log passwords or send values without consent.
  void value;
}});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
