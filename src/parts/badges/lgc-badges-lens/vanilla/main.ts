import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="badges"]');
if (!element) throw new Error('Missing Glass Tokens root');
const controller = init(element, {onDataChange(value) { console.info('Glass Tokens value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
