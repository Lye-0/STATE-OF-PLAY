import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="breadcrumbs"]');
if (!element) throw new Error('Missing Archive Route Trail root');
const controller = init(element, {onDataChange(value) { console.info('Archive Route Trail value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
