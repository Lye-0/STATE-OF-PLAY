/** Measures real option boxes; supports any count, text length, wrap, orientation and RTL. */
export function createSelectionIndicator(root: HTMLElement) {
  const list = root.querySelector<HTMLElement>(':scope > .sop-choice-list');
  if (!list) throw new Error('Missing .sop-choice-list');
  let frame = 0, destroyed = false;
  const observed = new Set<Element>();
  const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
  function measure() {
    frame = 0;
    if (destroyed) return;
    if (root.classList.contains('sop-tabs')) {
      // Decorative layers can enlarge scrollWidth even when every actual tab fits.
      const tabs = [...list!.querySelectorAll<HTMLElement>(':scope > .sop-choice-item')];
      const overflow = root.dataset.orientation !== 'vertical' && tabs.some(tab => tab.offsetLeft < -1 || tab.offsetLeft + tab.offsetWidth > list!.clientWidth + 1);
      root.dataset.tabOverflow = String(overflow);
      if (!overflow && list!.scrollLeft) list!.scrollLeft = 0;
      if (overflow) {
        // Resizing can hide a committed tab without changing the selection.
        // Prefer the focused tab in manual-activation mode; never scroll the page.
        const focused = document.activeElement as HTMLElement | null;
        const visible = focused?.parentElement === list && focused.classList.contains('sop-choice-item')
          ? focused : list!.querySelector<HTMLElement>(':scope > [data-selected="true"]');
        if (visible) {
          const strip = list!.getBoundingClientRect(), item = visible.getBoundingClientRect();
          const scale = list!.offsetWidth ? strip.width / list!.offsetWidth : 1;
          if (scale > 0) {
            const left = strip.left + list!.clientLeft * scale;
            const right = left + list!.clientWidth * scale;
            const oversized = item.width > right - left;
            const rtl = getComputedStyle(list!).direction === 'rtl';
            const delta = oversized ? (rtl ? item.right - right : item.left - left)
              : item.left < left ? item.left - left : item.right > right ? item.right - right : 0;
            if (Math.abs(delta) > .5) list!.scrollBy({left: delta / scale, behavior: 'instant'});
          }
        }
      }
    }
    const target = list!.querySelector<HTMLElement>(':scope > [data-selected="true"]');
    const marker = list!.querySelector<HTMLElement>(':scope > .sop-choice-marker');
    if (!marker) return;
    marker.hidden = !target;
    if (!target) return;
    // offset coordinates are stable even inside a scrolling container or a scaled preview.
    marker.style.setProperty('--sop-choice-x', `${target.offsetLeft}px`);
    marker.style.setProperty('--sop-choice-y', `${target.offsetTop}px`);
    marker.style.setProperty('--sop-choice-w', `${target.offsetWidth}px`);
    marker.style.setProperty('--sop-choice-h', `${target.offsetHeight}px`);
    root.dataset.indicatorReady = 'true';
  }
  function schedule() { if (!destroyed && !frame) frame = requestAnimationFrame(measure); }
  function refresh() {
    const children = new Set<Element>([list!, ...list!.querySelectorAll(':scope > .sop-choice-item')]);
    for (const child of observed) if (!children.has(child)) { observer?.unobserve(child); observed.delete(child); }
    for (const child of children) if (!observed.has(child)) { observer?.observe(child); observed.add(child); }
    if(frame){cancelAnimationFrame(frame);frame=0;}
    measure();
  }
  window.addEventListener('resize', schedule, {passive: true});
  document.fonts?.ready.then(() => { if (!destroyed) schedule(); });
  refresh();
  return {refresh, measure, destroy() { destroyed = true; cancelAnimationFrame(frame); observer?.disconnect(); observed.clear(); window.removeEventListener('resize', schedule); }};
}
