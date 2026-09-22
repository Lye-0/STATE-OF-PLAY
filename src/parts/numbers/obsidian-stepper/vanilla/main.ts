import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Obsidian Stepper root');
const controller = init(element, {onDataChange(value) { console.info('Obsidian Stepper value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
