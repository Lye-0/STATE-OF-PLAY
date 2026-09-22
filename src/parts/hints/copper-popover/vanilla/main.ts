import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="hints"]');
if (!element) throw new Error('Missing Copper Popover root');
const controller = init(element, {onDataChange(value) { console.info('Copper Popover value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
