import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Compact Metadata Tags root');
const controller = init(element, {onDataChange(value) { console.info('Compact Metadata Tags value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
