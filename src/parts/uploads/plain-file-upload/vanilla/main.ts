import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Plain File Upload root');
const controller = init(element, {onDataChange(value) { console.info('Plain File Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
