import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Meter Box Stepper root');
const controller = init(element, {onDataChange(value) { console.info('Meter Box Stepper value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
