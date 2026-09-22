import { scrollMetrics } from './scroll-metrics';
export type ScrollOrientation = 'vertical' | 'horizontal';
export interface ScrollAreaOptions {
  orientation?: ScrollOrientation;
  onProgressChange?: (progress: number) => void;
}
export interface ScrollAreaController {
  destroy(): void;
  refresh(): void;
  resize(): void;
  scrollTo(progress: number, behavior?: ScrollBehavior): void;
  getProgress(): number;
  setOrientation(orientation: ScrollOrientation): void;
}
function required<T extends HTMLElement>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Scroll area is missing ${selector}`);
  return element;
}
/** Native overflow is the source of truth. No wheel interception, fake inertia or continuous RAF. */
export function createScrollArea(root: HTMLElement, options: ScrollAreaOptions = {}): ScrollAreaController {
  const viewport = required<HTMLDivElement>(root, ':scope > .sop-scroll-viewport');
  const content = required<HTMLDivElement>(viewport, ':scope > .sop-scroll-content');
  const rail = required<HTMLDivElement>(root, ':scope > .sop-scroll-rail');
  const thumb = required<HTMLDivElement>(rail, ':scope > .sop-scroll-thumb');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const forced = matchMedia('(forced-colors: active)');
  const abort = new AbortController();
  const signal = abort.signal;
  let orientation: ScrollOrientation = options.orientation ?? (root.dataset.orientation === 'horizontal' ? 'horizontal' : 'vertical');
  const previous = { id: viewport.id, orientation: root.dataset.orientation, enhanced: root.dataset.enhanced,
    controls: rail.getAttribute('aria-controls'), tabIndex: rail.tabIndex };
  if (!viewport.id) {
    do { viewport.id = `sop-scroll-${globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2)}`; }
    while (document.getElementById(viewport.id) && document.getElementById(viewport.id) !== viewport);
  }
  rail.setAttribute('aria-controls', viewport.id);
  let destroyed = false, frame = 0, idle = 0, lastProgress = -1;
  let drag: {pointer: number; start: number; position: number} | null = null;
  let geometry = scrollMetrics(0, 0, 0, 0);
  const horizontal = () => orientation === 'horizontal';
  const rtl = () => horizontal() && getComputedStyle(viewport).direction === 'rtl';
  const position = () => horizontal() ? Math.abs(viewport.scrollLeft) : viewport.scrollTop;
  function markActive() {
    root.dataset.scrolling = 'true';
    clearTimeout(idle);
    idle = window.setTimeout(() => { if (!destroyed && !drag) delete root.dataset.scrolling; }, 650);
  }
  function cancelDrag() {
    const pointer = drag?.pointer; drag = null; delete root.dataset.dragging;
    if (pointer !== undefined && rail.hasPointerCapture(pointer)) rail.releasePointerCapture(pointer);
    if (!destroyed) markActive();
  }
  function measure() {
    geometry = scrollMetrics(horizontal() ? viewport.clientWidth : viewport.clientHeight,
      horizontal() ? viewport.scrollWidth : viewport.scrollHeight,
      horizontal() ? (rail.clientWidth || root.clientWidth) : (rail.clientHeight || root.clientHeight), position());
  }
  function render() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (destroyed) return;
    measure();
    const offset = rtl() ? geometry.travel - geometry.offset : geometry.offset;
    root.style.setProperty('--sop-scroll-progress', String(geometry.progress));
    root.style.setProperty('--sop-scroll-percent', `${geometry.progress * 100}%`);
    rail.style.setProperty('--sop-thumb-size', `${geometry.thumbSize}px`);
    rail.style.setProperty('--sop-thumb-offset', `${offset}px`);
    rail.setAttribute('aria-valuenow', String(Math.round(geometry.progress * 100)));
    const available = geometry.overflowing && !forced.matches;
    if (!available && rail.contains(document.activeElement)) viewport.focus({preventScroll: true});
    rail.hidden = !available;
    rail.tabIndex = available ? 0 : -1;
    rail.setAttribute('aria-hidden', String(!available));
    root.dataset.overflow = String(geometry.overflowing);
    if (lastProgress !== geometry.progress) {
      lastProgress = geometry.progress;
      options.onProgressChange?.(geometry.progress);
      root.dispatchEvent(new CustomEvent('sop:scroll', {bubbles: true, detail: {progress: geometry.progress, orientation}}));
    }
  }
  function refresh() { if (!destroyed && !frame) frame = requestAnimationFrame(render); }
  function move(value: number, behavior: ScrollBehavior = 'instant') {
    measure();
    const target = Math.min(geometry.maximum, Math.max(0, value));
    if (horizontal()) viewport.scrollTo({left: rtl() ? -target : target, behavior: reduced.matches ? 'instant' : behavior});
    else viewport.scrollTo({top: target, behavior: reduced.matches ? 'instant' : behavior});
    markActive(); refresh();
  }
  function setOrientation(next: ScrollOrientation) {
    if (destroyed) return;
    cancelDrag(); orientation = next; root.dataset.orientation = next;
    rail.setAttribute('aria-orientation', next);
    viewport.scrollLeft = 0; viewport.scrollTop = 0;
    render();
  }
  function accessibilityMode() {
    cancelDrag();
    root.dataset.enhanced = String(!forced.matches);
    render();
  }
  root.dataset.orientation = orientation;
  rail.setAttribute('aria-orientation', orientation);
  rail.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || forced.matches || !geometry.overflowing) return;
    event.preventDefault(); rail.focus({preventScroll: true}); measure();
    const coordinate = horizontal() ? event.clientX : event.clientY;
    if ((event.target as Element).closest('.sop-scroll-thumb')) {
      drag = {pointer: event.pointerId, start: coordinate, position: position()};
      root.dataset.dragging = 'true'; rail.setPointerCapture(event.pointerId); markActive();
    } else {
      const box = thumb.getBoundingClientRect();
      const after = coordinate > (horizontal() ? box.right : box.bottom);
      const step = (horizontal() ? viewport.clientWidth : viewport.clientHeight) * .9;
      move(position() + (after !== rtl() ? step : -step));
    }
  }, {signal});
  rail.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.pointer) return;
    event.preventDefault(); measure();
    const box = rail.getBoundingClientRect();
    const scaledRail = horizontal() ? box.width : box.height;
    const localRail = horizontal() ? rail.clientWidth : rail.clientHeight;
    const scale = localRail > 0 ? scaledRail / localRail : 1;
    const delta = (horizontal() ? event.clientX : event.clientY) - drag.start;
    if (geometry.travel > 0 && scale > 0) move(drag.position + delta / scale / geometry.travel * geometry.maximum * (rtl() ? -1 : 1));
  }, {signal});
  rail.addEventListener('pointerup', cancelDrag, {signal});
  rail.addEventListener('pointercancel', cancelDrag, {signal});
  rail.addEventListener('lostpointercapture', () => { if (drag) cancelDrag(); }, {signal});
  rail.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || forced.matches) return;
    measure();
    const page = (horizontal() ? viewport.clientWidth : viewport.clientHeight) * .9;
    let target: number | undefined;
    switch (event.key) {
      case 'Home': target = 0; break;
      case 'End': target = geometry.maximum; break;
      case 'PageDown': target = position() + page; break;
      case 'PageUp': target = position() - page; break;
      case ' ': target = position() + (event.shiftKey ? -page : page); break;
      case 'ArrowDown': if (!horizontal()) target = position() + 40; break;
      case 'ArrowUp': if (!horizontal()) target = position() - 40; break;
      case 'ArrowRight': if (horizontal()) target = position() + (rtl() ? -40 : 40); break;
      case 'ArrowLeft': if (horizontal()) target = position() + (rtl() ? 40 : -40); break;
      case 'Escape': if (drag) { event.preventDefault(); event.stopPropagation(); cancelDrag(); } return;
    }
    if (target !== undefined) { event.preventDefault(); move(target); }
  }, {signal});
  viewport.addEventListener('scroll', () => { markActive(); refresh(); }, {passive: true, signal});
  viewport.addEventListener('load', refresh, {capture: true, signal});
  window.addEventListener('resize', refresh, {passive: true, signal});
  forced.addEventListener('change', accessibilityMode, {signal});
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); else cancelDrag(); }, {signal});
  const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(refresh);
  resizeObserver?.observe(viewport); resizeObserver?.observe(content); resizeObserver?.observe(root);
  const mutationObserver = new MutationObserver(refresh);
  mutationObserver.observe(content, {subtree: true, childList: true, characterData: true});
  document.fonts?.ready.then(() => { if (!destroyed) refresh(); });
  accessibilityMode();
  return {refresh, resize: refresh, setOrientation, getProgress: () => {measure(); return geometry.progress;},
    scrollTo: (progress, behavior = 'instant') => { if (destroyed) return; measure(); move(geometry.maximum * (Number.isFinite(progress) ? progress : 0), behavior); },
    destroy() {
      if (destroyed) return;
      destroyed = true; cancelDrag(); abort.abort();
      clearTimeout(idle); cancelAnimationFrame(frame); resizeObserver?.disconnect(); mutationObserver.disconnect();
      delete root.dataset.scrolling; delete root.dataset.dragging; delete root.dataset.overflow;
      if (previous.enhanced === undefined) delete root.dataset.enhanced; else root.dataset.enhanced = previous.enhanced;
      if (previous.orientation === undefined) delete root.dataset.orientation; else root.dataset.orientation = previous.orientation;
      viewport.id = previous.id;
      if (previous.controls === null) rail.removeAttribute('aria-controls'); else rail.setAttribute('aria-controls',previous.controls);
      rail.hidden = true; rail.tabIndex = previous.tabIndex;
      for (const name of ['--sop-scroll-progress','--sop-scroll-percent']) root.style.removeProperty(name);
      rail.style.removeProperty('--sop-thumb-size'); rail.style.removeProperty('--sop-thumb-offset');
    }};
}
