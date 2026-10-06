import {init} from './init';
const element = document.querySelector<HTMLElement>('[data-foundation="uploads"]');
if (!element) throw new Error('Missing Mail Slot Dropzone root');
const controller = init(element, {onDataChange(value) { console.info('Mail Slot Dropzone value:', value); }});
window.addEventListener('pagehide',()=>controller.destroy(),{once:true});
