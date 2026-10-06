import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Appointment Card Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Appointment Card Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
