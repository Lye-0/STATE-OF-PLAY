import {init} from './init';
const node=document.querySelector<HTMLElement>('.sop-paper-carousel-loader');
if(!node)throw new Error('Missing Paper Carousel');
const api=init(node);
window.addEventListener('pagehide',()=>api.destroy(),{once:true});
