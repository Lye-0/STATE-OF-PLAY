import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="datepickers"]');
if (!element) throw new Error('Missing Stitched Planner root');
const controller = init(element, {onDataChange(value) { console.info('Stitched Planner value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
