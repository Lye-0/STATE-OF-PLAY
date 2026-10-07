import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Ribbon Count Number root');
const controller = init(element, {onDataChange(value) { console.info('Ribbon Count Number value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
