import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="sliders"]');
if (!element) throw new Error('Missing Transit Range root');
const controller = init(element, {onDataChange(value) { console.info('Transit Range value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
