import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Open Week Calendar root');
const controller = init(element, {onDataChange(value) { console.info('Open Week Calendar value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
