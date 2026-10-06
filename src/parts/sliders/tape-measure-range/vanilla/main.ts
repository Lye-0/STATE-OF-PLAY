import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="sliders"]');
if (!element) throw new Error('Missing Tape Measure Range root');
const controller = init(element, {onDataChange(value) { console.info('Tape Measure Range value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
