import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Stepped Date Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Stepped Date Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
