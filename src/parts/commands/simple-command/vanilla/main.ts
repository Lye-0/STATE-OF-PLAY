import {init} from './init';
const root=document.querySelector<HTMLElement>('[data-demo]');
if(!root)throw new Error('Missing demo root.');
const api=init(root);
// Wire callbacks to your search/router/backend. This example does not save or send data.
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
