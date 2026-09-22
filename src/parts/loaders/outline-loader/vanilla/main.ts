import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="loaders"]');
if (!element) throw new Error('Missing Outline Loader root');
const controller = init(element, {onDataChange(value) { console.info('Outline Loader value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
