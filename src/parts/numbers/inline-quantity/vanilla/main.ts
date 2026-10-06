import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Inline Quantity root');
const controller = init(element, {onDataChange(value) { console.info('Inline Quantity value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
