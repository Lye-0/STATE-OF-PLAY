import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Slotted Time Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Slotted Time Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
