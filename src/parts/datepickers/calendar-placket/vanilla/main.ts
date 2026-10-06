import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Calendar Placket root');
const controller = init(element, {onDataChange(value) { console.info('Calendar Placket value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
