import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Mist Chips root');
const controller = init(element, {onDataChange(value) { console.info('Mist Chips value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
