import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Slate Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Slate Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
