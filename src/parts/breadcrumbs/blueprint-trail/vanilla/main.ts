import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="breadcrumbs"]');
if (!element) throw new Error('Missing Blueprint Trail root');
const controller = init(element, {onDataChange(value) { console.info('Blueprint Trail value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
