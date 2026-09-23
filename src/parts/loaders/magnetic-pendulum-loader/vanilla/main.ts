import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-magnetic-pendulum-loader');
if(!node)throw new Error('Missing Magnetic Pendulum');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
