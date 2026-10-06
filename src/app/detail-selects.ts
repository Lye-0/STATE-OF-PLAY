import {createSelectController,type SelectController} from '../shared/select-controller';
import {escapeHTML} from './utils';

/** Inspector-only adapters: retain the select as the settings model, style the entire visible listbox. */
export function detailSelects(dialog:HTMLDialogElement){
 const entries=new Map<HTMLSelectElement,{root:HTMLElement,controller:SelectController}>();
 const life=new AbortController();
 function sync(){
  for(const [select,entry] of entries){
   if(!select.isConnected){entry.controller.destroy();entry.root.remove();entries.delete(select);continue;}
   entry.root.querySelector<HTMLButtonElement>('button')!.disabled=select.disabled;
   if(entry.controller.getValue()!==select.value)entry.controller.setValue(select.value);
  }
 }
 function refresh(){
  sync();
  for(const select of dialog.querySelectorAll<HTMLSelectElement>('select')){
   if(entries.has(select)||select.closest('.preview-stage'))continue;
   const label=select.getAttribute('aria-label')??select.closest('label')?.firstChild?.textContent?.trim()??'選択肢';
   const root=document.createElement('div');root.className='sop-select detail-select';
   root.innerHTML=`<button type="button" class="sop-select-trigger" role="combobox" aria-label="${escapeHTML(label)}" aria-expanded="false"><span class="sop-select-value"></span><span class="sop-select-chevron" aria-hidden="true"></span></button><div class="sop-select-popup detail-select-popup" hidden>${[...select.options].map(o=>`<div role="option" data-value="${escapeHTML(o.value)}" aria-disabled="${o.disabled}">${escapeHTML(o.textContent??'')}</div>`).join('')}</div>`;
   select.hidden=true;select.after(root);
   const controller=createSelectController(root,{value:select.value,onValueChange:value=>{select.value=value;select.dispatchEvent(new Event('change',{bubbles:true}));}});
   entries.set(select,{root,controller});
   select.addEventListener('change',sync,{signal:life.signal});
   // A surrounding label targets the visible combobox rather than its hidden model.
   select.closest('label')?.addEventListener('click',e=>{if(e.target===e.currentTarget)root.querySelector<HTMLButtonElement>('button')!.focus();},{signal:life.signal});
  }
 }
 dialog.addEventListener('click',()=>queueMicrotask(sync),{signal:life.signal});
 return {refresh,destroy(){life.abort();for(const [select,{root,controller}]of entries){controller.destroy();root.remove();select.hidden=false;}entries.clear();}};
}
