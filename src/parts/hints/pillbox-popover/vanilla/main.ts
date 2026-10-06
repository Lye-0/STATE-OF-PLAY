import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="hints"]');
if (!element) throw new Error('Missing Pillbox Popover root');
const controller = init(element, {onDataChange(value) { console.info('Pillbox Popover value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
