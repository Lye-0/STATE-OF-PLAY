import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="numbers"]');
if (!element) throw new Error('Missing Warm Unit Number root');
const controller = init(element, {onDataChange(value) { console.info('Warm Unit Number value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
