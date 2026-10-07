import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Letterpress Month root');
const controller = init(element, {onDataChange(value) { console.info('Letterpress Month value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
