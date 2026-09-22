import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="hints"]');
if (!element) throw new Error('Missing Prism Popover root');
const controller = init(element, {onDataChange(value) { console.info('Prism Popover value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
