import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Ceramic Dropzone root');
const controller = init(element, {onDataChange(value) { console.info('Ceramic Dropzone value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
