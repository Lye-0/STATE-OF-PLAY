import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Slate Stepper root');
const controller = init(element, {onDataChange(value) { console.info('Slate Stepper value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
