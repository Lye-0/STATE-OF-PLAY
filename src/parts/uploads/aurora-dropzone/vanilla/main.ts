import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Aurora Dropzone root');
const controller = init(element, {onDataChange(value) { console.info('Aurora Dropzone value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
