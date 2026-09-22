import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="sliders"]');
if (!element) throw new Error('Missing Velvet Range root');
const controller = init(element, {onDataChange(value) { console.info('Velvet Range value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
