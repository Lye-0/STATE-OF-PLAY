import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="loaders"]');
if (!element) throw new Error('Missing Velvet Loader root');
const controller = init(element, {onDataChange(value) { console.info('Velvet Loader value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
