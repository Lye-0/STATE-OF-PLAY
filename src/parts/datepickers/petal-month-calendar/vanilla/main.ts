import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Petal Month Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Petal Month Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
