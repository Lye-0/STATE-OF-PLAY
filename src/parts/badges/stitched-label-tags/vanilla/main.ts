import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Stitched Label Tags root');
const controller = init(element, {onDataChange(value) { console.info('Stitched Label Tags value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
