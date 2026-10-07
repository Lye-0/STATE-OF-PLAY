import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Perforated Upload root');
const controller = init(element, {onDataChange(value) { console.info('Perforated Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
