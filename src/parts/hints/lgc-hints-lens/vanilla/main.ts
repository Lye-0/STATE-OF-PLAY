import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="hints"]');
if (!element) throw new Error('Missing Lens Hint root');
const controller = init(element, {onDataChange(value) { console.info('Lens Hint value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
