import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="loaders"]');
if (!element) throw new Error('Missing Ceramic Loader root');
const controller = init(element, {onDataChange(value) { console.info('Ceramic Loader value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
