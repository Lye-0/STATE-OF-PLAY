/** A native button with opt-in busy state. Business logic always belongs to the consumer. */
export interface ActionButtonOptions { loading?: boolean; disabled?: boolean; }
export interface ActionButtonController {
  setLoading(value: boolean): void;
  setDisabled(value: boolean): void;
  getLoading(): boolean;
  destroy(): void;
}
export function createActionButton(root: HTMLElement, options: ActionButtonOptions = {}): ActionButtonController {
  if (!(root instanceof HTMLButtonElement)) throw new TypeError('Expected a native button.');
  const initial = { busy: root.getAttribute('aria-busy'), ariaDisabled: root.getAttribute('aria-disabled'), loading: root.getAttribute('data-loading'), disabled: root.disabled };
  const events = new AbortController();
  let loading = options.loading ?? root.getAttribute('aria-busy') === 'true', destroyed = false;
  const originalAriaDisabled = initial.ariaDisabled;
  function sync() {
    root.dataset.loading = String(loading);
    if (loading) { root.setAttribute('aria-busy','true'); root.setAttribute('aria-disabled','true'); }
    else { root.removeAttribute('aria-busy'); if (originalAriaDisabled === null) root.removeAttribute('aria-disabled'); else root.setAttribute('aria-disabled',originalAriaDisabled); }
  }
  // aria-disabled alone is not behavioral. Guard both mouse and native keyboard clicks,
  // including programmatic click(), without reimplementing keyboard activation.
  root.addEventListener('click', event => {
    if (root.disabled || root.matches(':disabled') || root.getAttribute('aria-disabled') === 'true') {
      event.preventDefault(); event.stopImmediatePropagation();
    }
  }, {capture:true, signal:events.signal});
  if (options.disabled !== undefined) root.disabled = options.disabled;
  sync();
  return {
    setLoading(value) { if (!destroyed) { loading = value; sync(); } },
    setDisabled(value) { if (!destroyed) root.disabled = value; },
    getLoading: () => loading,
    destroy() {
      if (destroyed) return; destroyed = true; events.abort();
      for (const [name,value] of [['aria-busy',initial.busy],['aria-disabled',initial.ariaDisabled],['data-loading',initial.loading]] as const) {
        if (value === null) root.removeAttribute(name); else root.setAttribute(name,value);
      }
      root.disabled = initial.disabled;
    }
  };
}
