import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Bridge Control Number root');
const controller = init(element, {onDataChange(value) { console.info('Bridge Control Number value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
