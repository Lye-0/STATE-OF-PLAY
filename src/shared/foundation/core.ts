/** Framework-neutral values, lifecycle and escaping for portable foundation parts. */
export type FoundationKind = 'sliders' | 'radios' | 'comboboxes' | 'toasts' | 'hints' | 'progress' | 'loaders' | 'uploads' | 'datepickers' | 'pagination' | 'breadcrumbs' | 'badges' | 'numbers';
export type FoundationValue = number | string | string[] | number[] | File[] | null;
export interface Choice { value: string; label: string; description?: string; badge?: string; icon?: string; disabled?: boolean; href?: string; }
export interface Notice { title: string; description?: string; tone?: 'info' | 'success' | 'warning' | 'error'; duration?: number; actionLabel?: string; onAction?: () => void; }
export interface FoundationOptions {
  value?: FoundationValue; defaultValue?: FoundationValue; controlled?: boolean;
  onDataChange?: (value: FoundationValue) => void; onAction?: (value?: string) => void;
  label?: string; description?: string; name?: string; disabled?: boolean; readOnly?: boolean; required?: boolean;
  min?: number; max?: number; step?: number; unit?: string; range?: boolean;
  items?: readonly Choice[]; multiple?: boolean; placeholder?: string; loading?: boolean; error?: string;
  interactive?: boolean; content?: string; placement?: 'top' | 'bottom';
  indeterminate?: boolean; paused?: boolean; totalPages?: number; hrefForPage?: (page: number) => string;
  accept?: string; maxFiles?: number; maxBytes?: number;
  mode?: 'date' | 'range' | 'datetime' | 'time'; minDate?: string; maxDate?: string; isDateDisabled?: (date: string) => boolean;
  duration?: number; maxNotices?: number; removable?: boolean; selectable?: boolean;
}
export interface FoundationConfig extends FoundationOptions { id: string; kind: FoundationKind; variant: string; }
export interface FoundationController {
  getData(): FoundationValue; setData(value: FoundationValue): void; updateFoundation(options: FoundationOptions): void;
  setDisabled(disabled: boolean): void; setPaused(paused: boolean): void; focus(): void; destroy(): void;
  show?: () => void; hide?: () => void; notify?: (notice: Notice) => string; dismiss?: (id?: string) => void;
}
export const escape = (value: unknown): string => String(value ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]!));
export const svg = (name = 'spark'): string => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${({spark:'<path d="M12 2l2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z"/>',check:'<path d="m5 12 4 4L19 6"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',chevron:'<path d="m8 5 7 7-7 7"/>',down:'<path d="m6 9 6 6 6-6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4m8-4v4"/>',file:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h4M9 13h6m-6 4h6"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',home:'<path d="m3 11 9-8 9 8M6 9v12h12V9m-8 12v-7h4v7"/>'} as Record<string,string>)[name] ?? '<circle cx="12" cy="12" r="8"/>'}</svg>`;
export const q = <T extends Element = HTMLElement>(root: ParentNode, selector: string): T => { const found = root.querySelector<T>(selector); if (!found) throw new Error(`Missing foundation element: ${selector}`); return found; };
let sequence = 0;
// Independent portable copies must not emit duplicate SVG, input or listbox IDs.
const idScope = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
export const uniqueId = (prefix = 'sop-foundation'): string => `${prefix}-${idScope}-${++sequence}`;
export function clampStep(value: number, min = 0, max = 100, step = 1): number {
  const lo = Number.isFinite(min) ? min : 0, hi = Math.max(lo, Number.isFinite(max) ? max : 100), increment = step > 0 && Number.isFinite(step) ? step : 1;
  const n = Number.isFinite(value) ? value : lo;
  return Number(Math.min(hi, Math.max(lo, lo + Math.round((n - lo) / increment) * increment)).toFixed(10));
}
export function bounds(o: FoundationOptions): [number,number,number] { const min=Number.isFinite(o.min)?o.min!:0; return [min, Math.max(min,Number.isFinite(o.max)?o.max!:100),o.step && o.step>0?o.step:1]; }
export const asStrings = (value: FoundationValue): string[] => Array.isArray(value) ? value.filter((x): x is string => typeof x==='string') : typeof value==='string' && value ? [value] : [];
export function numericValue(value: FoundationValue, options: FoundationOptions): FoundationValue {
  const [min,max,step]=bounds(options);
  if (options.range) { const values=Array.isArray(value)?value:[min,max]; const a=clampStep(Number(values[0]),min,max,step),b=clampStep(Number(values[1]),min,max,step); return [Math.min(a,b),Math.max(a,b)]; }
  return clampStep(Number(value ?? min),min,max,step);
}
export function choiceValue(value: FoundationValue, options: FoundationOptions): FoundationValue {
  const enabled=(options.items ?? []).filter(i=>!i.disabled).map(i=>i.value), valid=asStrings(value).filter(v=>enabled.includes(v));
  return options.multiple ? [...new Set(valid)] : valid[0] ?? (options.required ? enabled[0] ?? '' : '');
}
export interface Core extends FoundationController {
  root: HTMLElement; config: FoundationConfig; options: FoundationOptions; data: FoundationValue; dead: boolean;
  sync: (reason: 'initial'|'value'|'options'|'reset') => void; send(value: FoundationValue): void;
  on<T extends EventTarget>(target:T,type:string,handler:EventListenerOrEventListenerObject,options?:AddEventListenerOptions):void;
  cleanup(fn:()=>void):void;
}
export function createCore(root: HTMLElement, config: FoundationConfig, options: FoundationOptions, normalize: (v: FoundationValue,o:FoundationOptions)=>FoundationValue = v=>v): Core {
  const events=new AbortController(), cleanups:(()=>void)[]=[];
  const merged={...config,...options}; let initial=normalize(options.defaultValue ?? config.defaultValue ?? options.value ?? null,merged);
  const c:Core={root, config, options:merged, data:normalize(options.value ?? initial,merged), dead:false, sync:()=>{},
    getData(){return Array.isArray(c.data)?c.data.slice() as FoundationValue:c.data;},
    setData(value){if(c.dead)return;c.data=normalize(value,c.options);c.sync('value');},
    updateFoundation(next){if(c.dead)return; c.options={...c.options,...next}; if('defaultValue' in next)initial=normalize(next.defaultValue ?? null,c.options); c.data=normalize('value' in next?next.value ?? null:c.data,c.options); c.sync('options');},
    send(value){if(c.dead||c.options.disabled||c.options.readOnly)return;const next=normalize(value,c.options);if(!c.options.controlled)c.data=next;c.options.onDataChange?.(Array.isArray(next)?next.slice() as FoundationValue:next);root.dispatchEvent(new CustomEvent('sop:foundation-change',{bubbles:true,detail:{value:next,kind:config.kind}})); c.sync('value');},
    setDisabled(disabled){c.updateFoundation({disabled});},setPaused(paused){c.updateFoundation({paused});},
    focus(){root.querySelector<HTMLElement>('input:not([type="hidden"]),button,a[href],[tabindex="0"]')?.focus();},
    on(target,type,handler,opts={}){target.addEventListener(type,handler,{...opts,signal:events.signal});},cleanup(fn){cleanups.push(fn);},
    destroy(){if(c.dead)return;c.dead=true;events.abort();for(const fn of cleanups.splice(0))fn();root.removeAttribute('data-foundation-mounted');}
  };
  root.dataset.foundationMounted='true';
  const form=root.closest('form');let resetTimer=0;if(form)c.on(form,'reset',event=>{clearTimeout(resetTimer);resetTimer=window.setTimeout(()=>{if(c.dead||event.defaultPrevented)return;if(!c.options.controlled)c.data=initial;c.sync('reset');},0);});c.cleanup(()=>clearTimeout(resetTimer));
  return c;
}
export function heading(o: FoundationOptions): string { return `<div class="ff-heading"><span data-ff-label>${escape(o.label ?? 'Your next detail')}</span><span class="ff-eyebrow" aria-hidden="true">STATE / PLAY</span></div><p class="ff-description" data-ff-description>${escape(o.description)}</p>`; }
export function syncHeading(c:Core):void {const title=c.root.querySelector('[data-ff-label]');if(title)title.textContent=c.options.label??'';const desc=c.root.querySelector('[data-ff-description]');if(desc)desc.textContent=c.options.description??'';c.root.dataset.disabled=String(!!c.options.disabled);c.root.dataset.paused=String(!!c.options.paused);}
export function setName(input:HTMLInputElement,o:FoundationOptions,index?:number):void { if(o.name)input.name=index===undefined?o.name:`${o.name}[${index}]`;else input.removeAttribute('name'); input.disabled=!!o.disabled;input.required=!!o.required; }
/** Top-layer panel with a fallback. It stays a descendant of the part for style and lifecycle isolation. */
export function makeOverlay(c:Core, panel:HTMLElement, trigger:HTMLElement, placement:'top'|'bottom'='bottom', anchor:HTMLElement=trigger) {
  const listeners=new AbortController();let opened=false;panel.setAttribute('popover','manual');panel.hidden=true;
  function position(){if(!opened)return; const r=anchor.getBoundingClientRect(),v=window.visualViewport;
    const vw=v?.width??window.innerWidth, vh=v?.height??window.innerHeight,offsetX=v?.offsetLeft??0,offsetY=v?.offsetTop??0;
    panel.style.width=Math.min(Math.max(r.width,240),vw-24)+'px';panel.style.maxHeight=Math.max(96,vh-32)+'px';
    const h=panel.getBoundingClientRect().height, spaceBelow=offsetY+vh-r.bottom-12;
    const above=placement==='top'?r.top-offsetY>=h+10:spaceBelow<h&&r.top-offsetY>spaceBelow;
    const left=Math.max(offsetX+12,Math.min(r.left,offsetX+vw-panel.offsetWidth-12));
    panel.style.left=left+'px';panel.style.top=(above?Math.max(offsetY+12,r.top-h-8):Math.max(offsetY+12,Math.min(r.bottom+8,offsetY+vh-h-12)))+'px';panel.dataset.side=above?'top':'bottom';
  }
  const show=()=>{if(c.dead||c.options.disabled)return;panel.hidden=false;opened=true;try{panel.showPopover();}catch{/* Older browsers render the same positioned panel. */}position();trigger.setAttribute('aria-expanded','true');};
  const hide=()=>{if(!opened)return;try{panel.hidePopover();}catch{}opened=false;panel.hidden=true;trigger.setAttribute('aria-expanded','false');};
  window.addEventListener('resize',position,{passive:true,signal:listeners.signal});document.addEventListener('scroll',position,{passive:true,capture:true,signal:listeners.signal});
  if(window.visualViewport){window.visualViewport.addEventListener('resize',position,{passive:true,signal:listeners.signal});window.visualViewport.addEventListener('scroll',position,{passive:true,signal:listeners.signal});}
  const destroy=()=>{hide();listeners.abort();};c.cleanup(destroy);return {show,hide,position,destroy,get open(){return opened;}};
}
