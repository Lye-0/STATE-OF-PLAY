/** B-series switch: CSS transitions, native button semantics, no canvas or RAF loop. */
export interface SimpleToggleConfig { id: string; name: string; initial: boolean; travel: number; }
export interface SimpleToggleOptions {
  checked?: boolean; controlled?: boolean; manageAria?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
export function createSimpleToggleController(button: HTMLButtonElement, config: SimpleToggleConfig, options: SimpleToggleOptions = {}) {
  if (!(button instanceof HTMLButtonElement)) throw new TypeError('A switch button is required.');
  const abort = new AbortController();
  let checked = options.checked ?? config.initial, disposed = false, suppressClick = false;
  let pointer: {id: number; x: number; y: number; value: number; scale: number; dragging: boolean} | null = null;
  const paint = () => { button.style.setProperty('--p', checked ? '1' : '0'); if (options.manageAria !== false) button.setAttribute('aria-checked', String(checked)); };
  function setChecked(value: boolean) { if (disposed) return; checked = !!value; paint(); }
  function cancelInteraction() {
    const id = pointer?.id; pointer = null;
    if (id !== undefined) { try { if (button.hasPointerCapture(id)) button.releasePointerCapture(id); } catch { /* Pointer may already be released. */ } }
    button.removeAttribute('data-dragging'); paint();
  }
  function request(value: boolean) {
    if (disposed || button.disabled) return;
    if (!options.controlled) setChecked(value);
    options.onCheckedChange?.(value);
    button.dispatchEvent(new CustomEvent('sop:change', {bubbles: true, detail: {id: config.id, checked: value}}));
    paint(); // A controlled parent may decline; committed state remains the source of truth.
  }
  button.addEventListener('click', event => {
    if (suppressClick && event.detail !== 0) { suppressClick = false; event.preventDefault(); return; }
    suppressClick = false; request(!checked);
  }, {signal: abort.signal});
  button.addEventListener('keydown', event => {
    if (button.disabled) return;
    if (['ArrowLeft','ArrowDown','Home','ArrowRight','ArrowUp','End'].includes(event.key)) {
      event.preventDefault(); request(['ArrowRight','ArrowUp','End'].includes(event.key));
    } else if (event.key === 'Escape' && pointer) { event.preventDefault(); event.stopPropagation(); cancelInteraction(); }
  }, {signal: abort.signal});
  button.addEventListener('pointerdown', event => {
    if (button.disabled || !event.isPrimary || event.button !== 0 || pointer) return;
    suppressClick = false;
    pointer = {id: event.pointerId, x: event.clientX, y: event.clientY, value: checked ? 1 : 0, scale: button.getBoundingClientRect().width / button.offsetWidth, dragging: false};
    try { button.setPointerCapture(event.pointerId); } catch { /* Older implementations can reject capture. */ }
  }, {signal: abort.signal});
  button.addEventListener('pointermove', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    if (button.disabled) { cancelInteraction(); return; }
    const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
    if (!pointer.dragging && Math.abs(dx) > 7 && Math.abs(dx) > Math.abs(dy) * 1.12) pointer.dragging = true;
    if (!pointer.dragging) return;
    button.setAttribute('data-dragging', '');
    const p = Math.max(0, Math.min(1, pointer.value + dx / (Math.max(1, config.travel) * Math.max(.1, pointer.scale))));
    button.style.setProperty('--p', String(p));
  }, {signal: abort.signal});
  button.addEventListener('pointerup', event => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const dragged = pointer.dragging, p = Number(button.style.getPropertyValue('--p'));
    cancelInteraction();
    if (dragged) { suppressClick = true; request(p >= .5); }
  }, {signal: abort.signal});
  button.addEventListener('pointercancel', cancelInteraction, {signal: abort.signal});
  button.addEventListener('lostpointercapture', () => { if (pointer) cancelInteraction(); }, {signal: abort.signal});
  paint();
  return {setChecked, getChecked: () => checked, cancelInteraction, resize() {}, setPaused(_paused: boolean) {}, destroy() { if (disposed) return; cancelInteraction(); disposed = true; abort.abort(); }};
}
