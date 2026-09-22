import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Inset Stepper root');
const controller = init(element, {onDataChange(value) { console.info('Inset Stepper value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
