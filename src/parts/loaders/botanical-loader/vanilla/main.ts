import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="loaders"]');
if (!element) throw new Error('Missing Botanical Loader root');
const controller = init(element, {onDataChange(value) { console.info('Botanical Loader value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
