import {init} from './init';
const root=document.querySelector<HTMLElement>('[data-demo]');
if(root){const api=init(root);window.addEventListener('pagehide',()=>api.destroy(),{once:true});}
