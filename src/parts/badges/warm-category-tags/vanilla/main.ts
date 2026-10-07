import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Warm Category Tags root');
const controller = init(element, {onDataChange(value) { console.info('Warm Category Tags value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
