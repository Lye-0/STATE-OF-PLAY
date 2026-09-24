/** Shared lifecycle for the six Signature collections. No gallery dependency. */
export interface SignatureAPI<O, S extends object> {
  update(options: Partial<O>): void;
  getState(): S;
  reset(): void;
  destroy(): void;
  setPaused(paused: boolean): void;
}
export function bridge<O, S extends object>(api: SignatureAPI<O, S>) {
  return Object.assign(api, {
    updateSignature: (settings: Record<string, unknown>) => api.update(settings as Partial<O>),
    getSignature: () => api.getState() as Record<string, unknown>,
    resetSignature: () => api.reset(),
  });
}
export const escape = (value: unknown): string => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, Number.isFinite(n) ? n : lo));
export const integer = (value: unknown, fallback: number, min: number, max: number) => clamp(Math.round(typeof value === 'number' ? value : fallback), min, max);
export function safeURL(value: string | undefined, image = false): string {
  if (!value || /[\u0000-\u0020]/.test(value)) return '';
  if (/^(?:https?:|\.\.?\/|\/|#)/i.test(value)) return value;
  if (image && /^data:image\/(?:png|jpeg|webp|gif);base64,/i.test(value)) return value;
  if (!image && /^(?:mailto:|tel:)/i.test(value)) return value;
  return /^[\w-]+(?:[./][\w.-]+)*$/.test(value) ? value : '';
}
let instance = 0;
export function identity(prefix = 'sg') { return `${prefix}-${++instance}`; }
export function seed<O>(root: HTMLElement, options: O): O {
  let parsed: Partial<O> = {};
  try { const raw = JSON.parse(root.dataset.sgConfig ?? '{}'); if (raw && typeof raw === 'object' && !Array.isArray(raw)) parsed = raw; } catch { /* No demo configuration is required. */ }
  return {...parsed, ...options};
}
export function owned(root: HTMLElement): HTMLElement {
  const element = root.querySelector<HTMLElement>(':scope > [data-sg-owned]');
  if (!element) throw new Error('Signature component requires its data-sg-owned element.');
  return element;
}
export function announce(root: HTMLElement, state: object) {
  root.dispatchEvent(new CustomEvent('sop:signature-change', {bubbles:true, detail: state}));
}
export function pulse(root: HTMLElement, name = 'select') {
  root.dataset.sgMotion = name;
  root.getAnimations({subtree:true}).filter(a => (a as CSSAnimation).animationName?.startsWith('sg-once-')).forEach(a => { a.cancel(); a.play(); });
}
export function shell(kind: string, skin: string, body: string, options: object = {}, content = '') {
  return `<div class="sop-sig sop-${escape(skin)}" data-sg-kind="${escape(kind)}" data-sg-config="${escape(JSON.stringify(options))}"><div data-sg-owned>${body}</div><div data-sg-slot>${content}</div></div>`;
}
export function lifecycle(root: HTMLElement) {
  const events = new AbortController();
  let dead = false, manual = false, visible = true;
  const query = matchMedia('(prefers-reduced-motion: reduce)');
  function sync() {
    const paused = manual || !visible || document.hidden || query.matches;
    root.style.setProperty('--sg-play', paused ? 'paused' : 'running');
    root.dataset.sgReduced = String(query.matches);
  }
  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? true; sync(); }) : undefined;
  observer?.observe(root);
  document.addEventListener('visibilitychange', sync, {signal:events.signal});
  query.addEventListener('change', sync, {signal:events.signal}); sync();
  return {
    signal: events.signal,
    get dead() { return dead; },
    setPaused(value: boolean) { manual = value; sync(); },
    destroy() { if(dead)return;dead=true;events.abort();observer?.disconnect();root.querySelector<HTMLElement>(':scope > [data-sg-owned]')?.getAnimations({subtree:true}).forEach(a=>a.cancel()); },
  };
}
export function listenReset(root: HTMLElement, signal: AbortSignal, reset: () => void) {
  // The form reset default action happens after the reset event; do not replace input DOM before it.
  root.closest('form')?.addEventListener('reset', event => { queueMicrotask(() => { if(!event.defaultPrevented && !signal.aborted) reset(); }); }, {signal});
}
export function uniqueItems<T extends {id: string}>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter(item => {
    if (!item || typeof item.id !== 'string' || !item.id.trim() || seen.has(item.id)) throw new Error('Each item needs a unique, nonempty id.');
    seen.add(item.id); return true;
  });
}
export const checkSVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const arrowSVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
