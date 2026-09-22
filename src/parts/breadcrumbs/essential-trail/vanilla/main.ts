import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="breadcrumbs"]');
if (!element) throw new Error('Missing Essential Trail root');
const controller = init(element, {onDataChange(value) { console.info('Essential Trail value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
