import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Outline Document Upload root');
const controller = init(element, {onDataChange(value) { console.info('Outline Document Upload value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
