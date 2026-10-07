import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Bookend Counter root');
const controller = init(element, {onDataChange(value) { console.info('Bookend Counter value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
