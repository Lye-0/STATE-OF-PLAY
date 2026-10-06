import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Signal Box Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Signal Box Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
