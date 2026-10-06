import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="progress"]');
if (!element) throw new Error('Missing Ladder Progress root');
const controller = init(element, {onDataChange(value) { console.info('Ladder Progress value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
