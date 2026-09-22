/** Disclosure controller. Each heading is a native button; nested components keep their own events. */
export interface AccordionOptions {
  expanded?: readonly string[];
  multiple?: boolean;
  collapsible?: boolean;
  controlled?: boolean;
  onExpandedChange?: (values: string[]) => void;
}
export interface AccordionController {
  getExpanded(): string[];
  setExpanded(values: readonly string[]): void;
  expandAll(): void;
  collapseAll(): void;
  refresh(): void;
  destroy(): void;
}
let instance=0;
export function createAccordionController(root:HTMLElement, options:AccordionOptions={}):AccordionController {
  const life=new AbortController(),prefix=`sop-accordion-${++instance}-${Math.random().toString(36).slice(2,7)}`;
  let dead=false,expanded=new Set(options.expanded??[...root.querySelectorAll<HTMLElement>('.sop-accordion-item[data-open="true"]')].filter(e=>e.closest('[data-sop-accordion]')===root).map(e=>e.dataset.value!));
  root.dataset.sopAccordion='';
  const items=()=>[...root.querySelectorAll<HTMLElement>('.sop-accordion-item')].filter(e=>e.closest('[data-sop-accordion]')===root);
  const trigger=(item:HTMLElement)=>item.querySelector<HTMLButtonElement>('.sop-accordion-trigger')!;
  const multiple=()=>options.multiple??root.dataset.multiple==='true';
  const collapsible=()=>options.collapsible!==false;
  function normalize(values:readonly string[]){const keys=new Set(items().map(e=>e.dataset.value));const valid=[...new Set(values)].filter(v=>keys.has(v));return new Set(multiple()?valid:valid.slice(0,1));}
  function sync(){
    const all=items();expanded=normalize([...expanded]);
    all.forEach((item,i)=>{
      const b=trigger(item),panel=item.querySelector<HTMLElement>('.sop-accordion-panel');if(!b||!panel)return;
      b.id ||= `${prefix}-heading-${i}`;panel.id ||= `${prefix}-panel-${i}`;
      const active=expanded.has(item.dataset.value!);
      b.setAttribute('aria-controls',panel.id);b.setAttribute('aria-expanded',String(active));
      b.setAttribute('aria-disabled',String(b.disabled||(!collapsible()&&active&&expanded.size===1)));
      panel.setAttribute('aria-labelledby',b.id);panel.setAttribute('aria-hidden',String(!active));
      panel.inert=!active;
      item.dataset.open=String(active);
      // Focus must never remain inside a panel that just became inert.
      if(!active&&panel.contains(document.activeElement))b.focus({preventScroll:true});
    });
  }
  function request(values:readonly string[]){
    if(dead)return;const next=[...normalize(values)];
    if(!options.controlled){expanded=new Set(next);sync();}
    options.onExpandedChange?.(next);
    root.dispatchEvent(new CustomEvent('sop:accordion',{bubbles:true,detail:{expanded:next}}));
  }
  function setExpanded(values:readonly string[]){if(dead)return;expanded=normalize(values);sync();}
  root.addEventListener('click',event=>{
    const b=event.target instanceof Element?event.target.closest<HTMLButtonElement>('.sop-accordion-trigger'):null;
    const item=b?.closest<HTMLElement>('.sop-accordion-item');
    if(!b||!item||item.closest('[data-sop-accordion]')!==root||b.disabled)return;
    const key=item.dataset.value!;
    if(expanded.has(key)){if(!collapsible()&&expanded.size===1)return;request([...expanded].filter(v=>v!==key));}
    else request(multiple()?[...expanded,key]:[key]);
  },{signal:life.signal});
  root.addEventListener('keydown',event=>{
    const b=event.target instanceof Element?event.target.closest<HTMLButtonElement>('.sop-accordion-trigger'):null;
    if(!b||b.closest('[data-sop-accordion]')!==root)return;
    const buttons=items().map(trigger).filter(b=>b&&!b.disabled),index=buttons.indexOf(b);
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();event.stopPropagation();
    const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;
    buttons[next]?.focus();
  },{signal:life.signal});
  sync();
  return {getExpanded:()=>[...expanded],setExpanded,refresh(){if(!dead)sync();},
    expandAll(){request(items().filter(i=>!trigger(i).disabled).map(i=>i.dataset.value!));},
    collapseAll(){if(collapsible())request([]);},
    destroy(){if(dead)return;dead=true;life.abort();}
  };
}
