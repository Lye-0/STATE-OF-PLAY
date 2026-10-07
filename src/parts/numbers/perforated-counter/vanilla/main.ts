import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Perforated Counter root');
const controller = init(element, {onDataChange(value) { console.info('Perforated Counter value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
