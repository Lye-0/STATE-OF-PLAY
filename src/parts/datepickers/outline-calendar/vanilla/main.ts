import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Outline Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Outline Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
