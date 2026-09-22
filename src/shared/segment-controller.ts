import {selectionValue, validateSelectionItems, nextSelection} from './selection-model';
import {createSelectionIndicator} from './selection-indicator';
import {selectionIdentity} from './selection-identity';
export interface SegmentOptions {
  value?: string; onValueChange?: (value: string) => void; controlled?: boolean;
  disabled?: boolean; name?: string; orientation?: 'horizontal' | 'vertical';
}
/** Real radios retain form association, reset, validation and native keyboard behavior. */
export function createSegmentController(root: HTMLElement, options: SegmentOptions = {}) {
  const list=root.querySelector<HTMLElement>(':scope > .sop-choice-list');
  if(!list)throw new Error('Missing segment group.');
  const marker=createSelectionIndicator(root),events=new AbortController();
  const autoName=selectionIdentity('segments');
  if(options.orientation)root.dataset.orientation=options.orientation;
  let inputs:HTMLInputElement[]=[],selected=options.value??root.dataset.value??'',disabled=options.disabled??false,destroyed=false;
  let form:HTMLFormElement|null=null;
  const initiallyDisabled=new WeakMap<HTMLInputElement,boolean>();
  const valueItems=()=>inputs.map(input=>({value:input.value,label:input.getAttribute('aria-label')??input.closest('label')?.textContent??'',disabled:initiallyDisabled.get(input)??false}));
  function render() {
    root.dataset.value=selected;root.dataset.disabled=String(disabled);
    for(const input of inputs){input.checked=input.value===selected;input.disabled=disabled||(initiallyDisabled.get(input)??false);const label=input.closest<HTMLElement>('.sop-choice-item');if(label){label.dataset.selected=String(input.checked);label.dataset.disabled=String(input.disabled);}}
    marker.refresh();
  }
  function reset(event: Event) {
    queueMicrotask(()=>{if(destroyed||event.defaultPrevented)return;const next=selectionValue(valueItems(),inputs.find(i=>i.defaultChecked)?.value);if(!options.controlled){selected=next;render();}else render();options.onValueChange?.(next);root.dispatchEvent(new CustomEvent('sop:selection',{bubbles:true,detail:{value:next,kind:'segments',source:'reset'}}));});
  }
  function refresh(){
    if(destroyed)return;
    const hadValue=selected;
    inputs=[...list!.querySelectorAll<HTMLInputElement>(':scope > .sop-choice-item > input[type="radio"]')];
    for(const input of inputs){if(!initiallyDisabled.has(input)||!disabled)initiallyDisabled.set(input,input.disabled);if(options.name!==undefined)input.name=options.name;else if(!input.name)input.name=autoName;}
    validateSelectionItems(valueItems());
    selected=selectionValue(valueItems(),selected||inputs.find(i=>i.checked)?.value);
    const nextForm=inputs[0]?.form??null;
    if(form!==nextForm){form?.removeEventListener('reset',reset);form=nextForm;form?.addEventListener('reset',reset);}
    render();
    if(hadValue&&hadValue!==selected&&root.contains(document.activeElement))inputs.find(i=>i.value===selected)?.focus({preventScroll:true});
  }
  function setValue(value:string){if(!destroyed){selected=selectionValue(valueItems(),value);render();}}
  list.addEventListener('change',event=>{
    const input=event.target;
    if(!(input instanceof HTMLInputElement)||!inputs.includes(input)||input.disabled||event.defaultPrevented)return;
    const next=input.value;
    if(!options.controlled)selected=next;
    render(); // A controlled parent may reject the update; never leave a speculative selection.
    options.onValueChange?.(next);
    root.dispatchEvent(new CustomEvent('sop:selection',{bubbles:true,detail:{value:next,kind:'segments'}}));
  },{signal:events.signal});
  list.addEventListener('keydown',event=>{
    if(event.defaultPrevented||disabled||!['Home','End'].includes(event.key))return;
    const next=nextSelection(valueItems(),selected,event.key==='Home'?'first':'last');
    const target=inputs.find(i=>i.value===next&&!i.disabled);if(!target)return;
    event.preventDefault();target.focus({preventScroll:true});target.click();
  },{signal:events.signal});
  refresh();
  return {getValue:()=>selected,setValue,refresh,setDisabled(value:boolean){disabled=value;render();},setOrientation(value:'horizontal'|'vertical'){root.dataset.orientation=value;marker.refresh();},destroy(){destroyed=true;form?.removeEventListener('reset',reset);events.abort();marker.destroy();}};
}
