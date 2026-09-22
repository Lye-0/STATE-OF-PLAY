import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Velvet Stepper root');
const controller = init(element, {onDataChange(value) { console.info('Velvet Stepper value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
