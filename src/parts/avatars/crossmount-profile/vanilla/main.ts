import {init} from './init';
const root=document.querySelector<HTMLElement>('[data-demo]');
if(!root)throw new Error('Missing demo root.');
const controller=init(root);
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
