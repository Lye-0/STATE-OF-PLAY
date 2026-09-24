/** Independent interaction utilities. No gallery imports and no external runtime dependencies. */
export interface WorkbenchAPI<O, S extends object> {
  update(options: Partial<O>): void;
  getState(): S;
  reset(): void;
  destroy(): void;
  setPaused(paused: boolean): void;
  open?(): void;
  close?(): void;
}
export function bridge<O, S extends object>(api: WorkbenchAPI<O,S>) {
  return Object.assign(api, {
    updateWorkbench: (options: Record<string,unknown>) => api.update(options as Partial<O>),
    getWorkbench: () => api.getState() as Record<string,unknown>,
    resetWorkbench: () => api.reset(),
    openWorkbench: () => api.open?.(), closeWorkbench: () => api.close?.(),
  });
}
export const escape = (value: unknown): string => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export const clamp = (n: number, min: number, max: number) => Math.min(max,Math.max(min,Number.isFinite(n)?n:min));
export const normalize = (s: string) => s.normalize('NFKC').toLocaleLowerCase().trim();
export function safeHref(value: string | undefined): string {
  if (!value || /[\u0000-\u0020\\]/.test(value) || /^(?:javascript|data|vbscript):/i.test(value)) return '';
  if (/^(?:https?:|mailto:|tel:|\/|\.\.?\/|#|\?)/i.test(value)) return value;
  return /^[\w~-]+(?:[./?&#=%+~-][\w./?&#=%+~-]*)?$/.test(value) ? value : '';
}
export function unique<T extends {id:string}>(items: readonly T[]): T[] {
  const ids = new Set<string>();
  return items.map(item => { if (!item || !item.id?.trim() || ids.has(item.id)) throw new TypeError('Every item requires a unique nonempty id.'); ids.add(item.id); return item; });
}
let serial = 0;
// Also unique across separately copied portable packages, not only one shared bundle.
const identityNamespace=typeof crypto!=='undefined'&&typeof crypto.randomUUID==='function'?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10);
export const identity = (prefix='wb') => `${prefix}-${identityNamespace}-${++serial}`;
export function seed<O>(root: HTMLElement, supplied: O): O {
  let saved: object = {};
  try { const value = JSON.parse(root.dataset.wbConfig ?? '{}'); if (value && typeof value==='object' && !Array.isArray(value)) saved = value; } catch { /* Demo attributes are optional. */ }
  return {...saved,...supplied};
}
export function owned(root: HTMLElement): HTMLElement {
  const host = root.querySelector<HTMLElement>(':scope > [data-wb-owned]');
  if (!host) throw new Error('Workbench component needs a data-wb-owned child.');
  return host;
}
export const emit = (root: HTMLElement, detail: object) => root.dispatchEvent(new CustomEvent('sop:workbench-change',{bubbles:true,detail}));
export function shell(kind: string, skin: string, body: string, options: object={}) {
  return `<div class="sop-wb sop-${escape(skin)}" data-wb-kind="${escape(kind)}" data-wb-config="${escape(JSON.stringify(options))}"><div data-wb-owned>${body}</div></div>`;
}
export const icons = {
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
  chevron:'<path d="m9 5 7 7-7 7"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  command:'<path d="M9 9h6v6H9zM9 9H6a3 3 0 1 1 3-3v3Zm6 0V6a3 3 0 1 1 3 3h-3Zm0 6h3a3 3 0 1 1-3 3v-3Zm-6 0v3a3 3 0 1 1-3-3h3Z"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  filter:'<path d="M4 7h16M7 12h10M10 17h4"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="12" r="2"/>',
  folder:'<path d="M3 6h7l2 3h9v11H3z"/>',
  file:'<path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6"/>',
  copy:'<path d="M8 8h12v13H8zM4 16H3V3h12v2"/>',
  settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/>',
  trash:'<path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7"/>',
  home:'<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-8h6v8"/>',
  grid:'<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  sort:'<path d="M8 3v18m-4-4 4 4 4-4M16 21V3m-4 4 4-4 4 4"/>',
} as const;
export type IconName = keyof typeof icons;
export const icon = (name: string | undefined) => name && name in icons ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name as IconName]}</svg>` : '';
export const art = (name='surface') => `<span class="wb-art wb-art-${name}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>`;
/** Only decoration animates. Cleanup is explicit; there is no permanent RAF loop. */
export function lifecycle(root: HTMLElement) {
  const abort = new AbortController(), cleanups: (()=>void)[] = [];
  let dead=false,paused=false,visible=true;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{ root.dataset.wbReduced=String(reduced.matches); root.style.setProperty('--wb-play',paused||!visible||document.hidden||reduced.matches?'paused':'running'); };
  const io=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;sync();}):undefined;
  io?.observe(root);
  reduced.addEventListener('change',sync,{signal:abort.signal});
  document.addEventListener('visibilitychange',sync,{signal:abort.signal});sync();
  return { signal:abort.signal, get dead(){return dead;}, get reduced(){return reduced.matches;},
    cleanup(fn:()=>void){cleanups.push(fn);},
    setPaused(value:boolean){paused=value;sync();},
    pulse(name='change') { root.dataset.wbPulse=name; if(reduced.matches||paused||document.hidden)return; root.querySelectorAll<HTMLElement>('.wb-art').forEach(e=>{ e.getAnimations().forEach(a=>a.cancel()); e.animate([{opacity:.25,filter:'brightness(.9)'},{opacity:1,filter:'brightness(1.4)',offset:.3},{opacity:1,filter:'brightness(1)'}],{duration:520,easing:'cubic-bezier(.16,1,.3,1)'}); }); },
    destroy(){if(dead)return;dead=true;abort.abort();io?.disconnect();cleanups.reverse().forEach(fn=>fn());root.getAnimations({subtree:true}).forEach(a=>a.cancel());},
  };
}
export function listenReset(root:HTMLElement,signal:AbortSignal,reset:()=>void){root.closest('form')?.addEventListener('reset',e=>queueMicrotask(()=>{if(!e.defaultPrevented&&!signal.aborted)reset();}),{signal});}
export function positionPanel(panel: HTMLElement, rect: {left:number;top:number;bottom:number;width:number}, point=false) {
  const margin=10, maxWidth=Math.max(100,window.innerWidth-margin*2);
  panel.style.maxWidth=maxWidth+'px'; panel.style.maxHeight=Math.max(120,window.innerHeight-margin*2)+'px';
  const w=Math.min(panel.offsetWidth,maxWidth),h=panel.offsetHeight;
  const top=rect.bottom+6+h>window.innerHeight-margin?Math.max(margin,rect.top-h-6):rect.bottom+6;
  panel.style.left=clamp(rect.left,margin,window.innerWidth-w-margin)+'px';
  panel.style.top=clamp(point?rect.top:top,margin,Math.max(margin,window.innerHeight-h-margin))+'px';
  panel.dataset.side=top<rect.top?'above':'below';
}
export function showPanel(panel: HTMLElement){panel.hidden=false;if(typeof panel.showPopover==='function'){if(!panel.matches(':popover-open'))panel.showPopover();}else panel.dataset.fallback='true';}
export function hidePanel(panel: HTMLElement){if(typeof panel.hidePopover==='function'&&panel.matches(':popover-open'))panel.hidePopover();panel.hidden=true;}
export function focusables(root: HTMLElement) {return [...root.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex="0"]')].filter(el=>!el.closest('[hidden],[inert]')&&el.getClientRects().length>0);}
export function trapModal(dialog:HTMLDialogElement,signal:AbortSignal){dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const list=focusables(dialog),first=list[0],last=list.at(-1);if(!first){event.preventDefault();dialog.focus();return;}const active=document.activeElement;if(event.shiftKey&&(active===first||!dialog.contains(active))){event.preventDefault();last?.focus();}else if(!event.shiftKey&&(active===last||!dialog.contains(active))){event.preventDefault();first.focus();}},{signal});}
const scrollLocks = new WeakMap<Document,{count:number;overflow:string}>();
export function lockScroll(doc:Document){let state=scrollLocks.get(doc);if(!state){state={count:0,overflow:doc.documentElement.style.overflow};scrollLocks.set(doc,state);}if(state.count++===0)doc.documentElement.style.overflow='hidden';let released=false;return ()=>{if(released)return;released=true;if(--state!.count===0){doc.documentElement.style.overflow=state!.overflow;scrollLocks.delete(doc);}};}
export function parseConfig<O extends object>(root:HTMLElement,provided:O,defaults:O){return {...defaults,...seed(root,provided)};}
