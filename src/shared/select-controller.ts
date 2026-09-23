import {createSelectMotion} from './select-motion';
/** Select-only combobox. Native focus stays on the trigger; no scroll hijacking or polling. */
export interface SelectOptions {
  value?: string;
  controlled?: boolean;
  manageContent?: boolean;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
}
export interface SelectController {
  getValue(): string;
  setValue(value: string): void;
  getOpen(): boolean;
  setOpen(open: boolean): void;
  refresh(): void;
  destroy(): void;
  setPaused(paused: boolean): void;
}
let instance = 0;
export function createSelectController(root: HTMLElement, options: SelectOptions = {}): SelectController {
  const trigger = root.querySelector<HTMLButtonElement>('.sop-select-trigger');
  const popup = root.querySelector<HTMLElement>('.sop-select-popup');
  const field = root.querySelector<HTMLInputElement>('.sop-select-input');
  if (!trigger || !popup) throw new Error('Select requires .sop-select-trigger and .sop-select-popup.');
  const button = trigger, panel = popup;
  const motion = root.classList.contains('sop-select-sculpted') ? createSelectMotion(root, panel) : null;
  const life = new AbortController();
  let opening: AbortController | null = null;
  let open = false, dead = false, active = -1, buffer = '', lastKey = 0, frame = 0;
  let selected = options.value ?? root.dataset.value ?? '';
  const initial = selected;
  let renderedContent: string | undefined;
  const prefix = `sop-select-${++instance}-${Math.random().toString(36).slice(2,8)}`;
  const originalPanelId = panel.id;
  if (!panel.id) panel.id = `${prefix}-listbox`;
  button.setAttribute('aria-controls', panel.id);
  button.setAttribute('aria-haspopup','listbox');
  panel.setAttribute('role','listbox');
  panel.setAttribute('aria-label', button.getAttribute('aria-label') || '選択肢');
  const supportsPopover = typeof panel.showPopover === 'function';
  if (supportsPopover) panel.setAttribute('popover','manual');
  const items = () => [...panel.querySelectorAll<HTMLElement>('[role="option"]')].filter(el => el.closest('.sop-select-popup') === panel);
  const available = () => items().filter(el => el.getAttribute('aria-disabled') !== 'true' && !el.hidden);
  function sync() {
    root.dataset.value = selected;
    button.setAttribute('aria-expanded', String(open));
    root.dataset.open = String(open);
    if (field) { field.value = selected; field.disabled = button.disabled; }
    let chosen: HTMLElement | undefined;
    items().forEach((item, i) => {
      if (!item.id) item.id = `${prefix}-option-${i}`;
      const match = item.dataset.value === selected;
      item.setAttribute('aria-selected', String(match));
      if (match) chosen = item;
    });
    if (options.manageContent !== false) {
      const value = button.querySelector('.sop-select-value');
      const signature = selected + ':' + (chosen?.innerHTML ?? '');
      if (value && renderedContent !== signature) {
        renderedContent = signature;
        if(value instanceof HTMLElement)value.dataset.glyph=chosen?.dataset.glyph??'';
        value.replaceChildren();
        if (chosen) {
          const art = chosen.querySelector('.sop-select-icon');
          const label = chosen.querySelector('.sop-select-option-copy');
          if (art) value.append(art.cloneNode(true));
          if (label) value.append(label.cloneNode(true));
          else value.textContent = chosen.dataset.label || chosen.textContent;
        } else value.textContent = root.dataset.placeholder || '選択してください';
      }
    }
  }
  function position() {
    if (!open || dead) return;
    const r = button.getBoundingClientRect(), vv = window.visualViewport;
    const width = vv?.width ?? window.innerWidth, height = vv?.height ?? window.innerHeight;
    const ox = vv?.offsetLeft ?? 0, oy = vv?.offsetTop ?? 0;
    const padding = 12, gap = 8;
    const desired = Math.min(Math.max(r.width, 264), width - padding * 2);
    const below = oy + height - r.bottom - gap - padding, above = r.top - oy - gap - padding;
    const up = below < 230 && above > below;
    const max = Math.max(60, Math.min(450, up ? above : below));
    Object.assign(panel.style, {position:'fixed',margin:'0',width:`${desired}px`,maxHeight:`${max}px`,left:`${Math.max(ox+padding,Math.min(r.left,ox+width-desired-padding))}px`,right:'auto',bottom:'auto',top:'0px'});
    const actual = panel.getBoundingClientRect().height;
    panel.style.top = `${up ? Math.max(oy+padding,r.top-gap-actual) : r.bottom+gap}px`;
    panel.dataset.side = up ? 'top' : 'bottom';
    motion?.refresh();
    if (r.bottom < oy || r.top > oy+height || !root.isConnected) setOpen(false);
  }
  function schedule() { if (!frame && open) frame = requestAnimationFrame(() => {frame=0;position();}); }
  function highlight(index: number, scroll = true) {
    const enabled = available();
    active = Math.max(0, Math.min(enabled.length-1, index));
    const target = enabled[active];
    for (const item of items()) item.dataset.active = String(item === target && open);
    if (target && open) {
      button.setAttribute('aria-activedescendant',target.id);
      if (scroll) {
        // Scroll the list only; Element.scrollIntoView could also jump the host page.
        const rect = target.getBoundingClientRect(), box = panel.getBoundingClientRect();
        if (rect.top < box.top+8) panel.scrollTop -= box.top+8-rect.top;
        if (rect.bottom > box.bottom-8) panel.scrollTop += rect.bottom-box.bottom+8;
      }
    } else button.removeAttribute('aria-activedescendant');
    motion?.highlight(target);
  }
  function setOpen(next: boolean) {
    if (dead || next === open || (next && (button.disabled || available().length===0))) return;
    if (next) root.ownerDocument.dispatchEvent(new CustomEvent('sop:select-opening',{detail:root}));
    open = next;
    panel.hidden = !open;
    if (open) {
      motion?.open();
      if (supportsPopover) {
        try { panel.showPopover(); } catch { /* Fallback is still a real listbox. */ }
      }
      sync();
      position();
      const index=available().findIndex(item=>item.dataset.value===selected);
      highlight(index<0?0:index);
      opening = new AbortController();
      const signal = opening.signal;
      document.addEventListener('pointerdown', e => {
        if (!e.composedPath().includes(root) && !e.composedPath().includes(panel)) setOpen(false);
      },{capture:true,signal});
      document.addEventListener('focusin', e => {
        if (e.target instanceof Node && !root.contains(e.target)) setOpen(false);
      },{signal});
      window.addEventListener('resize',schedule,{passive:true,signal});
      window.addEventListener('scroll', e => { if (e.target!==panel) schedule(); },{capture:true,passive:true,signal});
      window.visualViewport?.addEventListener('resize',schedule,{passive:true,signal});
      window.visualViewport?.addEventListener('scroll',schedule,{passive:true,signal});
    } else {
      motion?.close();
      opening?.abort(); opening=null;
      cancelAnimationFrame(frame);frame=0;
      if (supportsPopover) {try {panel.hidePopover();}catch{/* Already hidden by UA. */}}
      panel.hidden = true;
      button.removeAttribute('aria-activedescendant');
      for(const item of items()) item.dataset.active='false';
      sync();
    }
    options.onOpenChange?.(open);
    root.dispatchEvent(new CustomEvent('sop:select-open',{bubbles:true,detail:{open}}));
  }
  function setValue(value: string) { if (dead) return; selected=value; sync(); if(open)highlight(available().findIndex(el=>el.dataset.value===value),false); }
  function commit(item?: HTMLElement) {
    if (!item || item.getAttribute('aria-disabled')==='true' || button.disabled) return;
    const value = item.dataset.value ?? '';
    motion?.commit();
    if (!options.controlled) setValue(value);
    options.onValueChange?.(value);
    root.dispatchEvent(new CustomEvent('sop:select',{bubbles:true,detail:{value}}));
    if (field && !options.controlled) field.dispatchEvent(new Event('change',{bubbles:true}));
    setOpen(false);
  }
  button.addEventListener('click',()=>setOpen(!open),{signal:life.signal});
  button.addEventListener('keydown',event=>{
    if(button.disabled || event.isComposing || event.ctrlKey || event.metaKey) return;
    const key=event.key;
    if(key==='Escape'&&open){event.preventDefault();event.stopPropagation();setOpen(false);return;}
    if(key==='Tab'){if(open)commit(available()[active]);return;}
    if(['ArrowDown','ArrowUp','Home','End','PageDown','PageUp'].includes(key)){
      event.preventDefault();const was=open;setOpen(true);
      const length=available().length;
      highlight(key==='Home'?0:key==='End'?length-1:!was?active:active+(key==='ArrowDown'?1:key==='ArrowUp'?-1:key==='PageDown'?5:-5));return;
    }
    if(key==='Enter'||key===' '){event.preventDefault();if(open)commit(available()[active]);else setOpen(true);return;}
    if(key.length===1&&!event.altKey){
      const now=Date.now();buffer=now-lastKey>650?'':buffer;buffer+=key.toLocaleLowerCase();lastKey=now;
      setOpen(true);const all=available();const needle=[...buffer].every(c=>c===buffer[0])?buffer[0]:buffer;
      for(let step=1;step<=all.length;step++){const i=(Math.max(active,0)+step)%all.length;if((all[i].dataset.label||all[i].innerText).trim().toLocaleLowerCase().startsWith(needle)){highlight(i);break;}}
    }
  },{signal:life.signal});
  panel.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')e.preventDefault();},{signal:life.signal});
  panel.addEventListener('pointermove',e=>{const target=e.target instanceof Element?e.target.closest<HTMLElement>('[role="option"]'):null;if(target){const index=available().indexOf(target);if(index>=0)highlight(index,false);}},{signal:life.signal});
  panel.addEventListener('click',e=>{const target=e.target instanceof Element?e.target.closest<HTMLElement>('[role="option"]'):null;if(target&&items().includes(target)){e.stopPropagation();commit(target);button.focus({preventScroll:true});}},{signal:life.signal});
  document.addEventListener('sop:select-opening',e=>{if((e as CustomEvent).detail!==root)setOpen(false);},{signal:life.signal});
  const form=field?.form;
  form?.addEventListener('reset',()=>queueMicrotask(()=>{if(dead)return;if(!options.controlled)setValue(initial);options.onValueChange?.(initial);setOpen(false);}),{signal:life.signal});
  const observer=new MutationObserver(()=>{if(button.disabled)setOpen(false);sync();});
  observer.observe(button,{attributes:true,attributeFilter:['disabled']});
  sync();panel.hidden=true;root.dataset.open='false';
  return {getValue:()=>selected,setValue,getOpen:()=>open,setOpen,
    refresh(){if(dead)return;sync();if(open){if(!available().length)setOpen(false);else{position();highlight(active);}}},
    setPaused(paused){if(paused)setOpen(false);},
    destroy(){if(dead)return;setOpen(false);dead=true;motion?.destroy();life.abort();opening?.abort();observer.disconnect();cancelAnimationFrame(frame);panel.removeAttribute('popover');panel.hidden=true;button.removeAttribute('aria-activedescendant');if(!originalPanelId)panel.removeAttribute('id');}
  };
}
