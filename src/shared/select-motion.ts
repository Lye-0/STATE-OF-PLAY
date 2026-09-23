/** Optional presentation for A selects. Values, focus and scrolling remain with the select controller.
 * The moving plane is a CSS pseudo-element: no DOM nodes are inserted into a React-owned list.
 * It is positioned in the popup's scroll-content coordinates, not viewport coordinates.
 */
export function createSelectMotion(root: HTMLElement, panel: HTMLElement) {
  const life = new AbortController();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let opened = false, dead = false, frame = 0, readyFrame = 0, pickedTimer = 0;
  let target: HTMLElement | null = null;
  let pointer: {x: number; y: number} | null = null;
  const properties = ['--sel-plane-x','--sel-plane-y','--sel-plane-w','--sel-plane-h','--sel-light-x','--sel-light-y','--sel-label-w'];
  const saved = new Map(properties.map(key => [key, panel.style.getPropertyValue(key)]));
  const set = (key: string, value: string) => {
    if (panel.style.getPropertyValue(key) !== value) panel.style.setProperty(key, value);
  };
  function measure() {
    if(frame)cancelAnimationFrame(frame);
    frame = 0;
    if (!opened || dead || !panel.isConnected) return;
    if (!target?.isConnected || !panel.contains(target) || target.hidden || target.getAttribute('aria-disabled') === 'true')
      target = panel.querySelector<HTMLElement>('[role="option"][data-active="true"]:not([aria-disabled="true"])');
    if (!target) { panel.dataset.motionActive = 'false'; return; }
    // offsetTop is unaffected by the popup's entrance animation or page zoom.
    let x = 0, y = 0, element: HTMLElement | null = target;
    while (element && element !== panel) {
      x += element.offsetLeft; y += element.offsetTop;
      element = element.offsetParent as HTMLElement | null;
    }
    // A custom renderOption never changes the listbox's option element/offset parent.
    if (element !== panel) {
      const p = panel.getBoundingClientRect(), t = target.getBoundingClientRect();
      x = t.left - p.left + panel.scrollLeft - panel.clientLeft;
      y = t.top - p.top + panel.scrollTop - panel.clientTop;
    }
    set('--sel-plane-x', `${x}px`); set('--sel-plane-y', `${y}px`);
    set('--sel-plane-w', `${target.offsetWidth}px`); set('--sel-plane-h', `${target.offsetHeight}px`);
    const label = target.querySelector('.sop-select-option-copy b');
    if (label) {
      const range = document.createRange(); range.selectNodeContents(label);
      set('--sel-label-w', `${Math.ceil(range.getBoundingClientRect().width)}px`);
    } else set('--sel-label-w', `${Math.max(40,target.offsetWidth - 40)}px`);
    panel.dataset.motionActive = 'true';
    if (pointer) {
      const rect = panel.getBoundingClientRect();
      set('--sel-light-x', `${Math.max(0, Math.min(100, (pointer.x - rect.left) / Math.max(1,rect.width) * 100))}%`);
      set('--sel-light-y', `${pointer.y - rect.top + panel.scrollTop}px`);
      pointer = null;
    } else if (!panel.matches(':hover')) {
      set('--sel-light-x','50%'); set('--sel-light-y',`${y + target.offsetHeight / 2}px`);
    }
  }
  function schedule() { if (opened && !dead && !frame) frame = requestAnimationFrame(measure); }
  const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
  observer?.observe(panel);
  function observeOptions() {
    if (!observer) return;
    observer.disconnect(); observer.observe(panel);
    panel.querySelectorAll<HTMLElement>('[role="option"]').forEach(item => observer.observe(item));
  }
  const mutation = new MutationObserver(() => { if (opened) { observeOptions(); schedule(); } });
  mutation.observe(panel, {childList:true,subtree:true,characterData:true});
  panel.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    pointer = {x:event.clientX,y:event.clientY}; schedule();
  }, {passive:true,signal:life.signal});
  panel.addEventListener('scroll', schedule, {passive:true,signal:life.signal});
  panel.addEventListener('pointerleave', () => { pointer = null; set('--sel-light-x','50%'); }, {signal:life.signal});
  reduced.addEventListener('change', schedule, {signal:life.signal});
  return {
    open() {
      opened = true; target = null; panel.dataset.motionReady = 'false';
      observeOptions();
      cancelAnimationFrame(readyFrame);
      readyFrame = requestAnimationFrame(() => { readyFrame=0; if(opened&&!dead) panel.dataset.motionReady='true'; });
    },
    highlight(next: HTMLElement | undefined) { target = next ?? null; measure(); },
    refresh: schedule,
    commit() {
      if (dead || reduced.matches) return;
      clearTimeout(pickedTimer); root.dataset.selectCommit = 'true';
      pickedTimer = window.setTimeout(() => { delete root.dataset.selectCommit; }, 280);
    },
    close() {
      opened = false; target = null; pointer = null;
      cancelAnimationFrame(frame); cancelAnimationFrame(readyFrame); frame = readyFrame = 0;
      delete panel.dataset.motionReady; delete panel.dataset.motionActive;
    },
    destroy() {
      dead = true; opened = false; life.abort(); observer?.disconnect(); mutation.disconnect();
      cancelAnimationFrame(frame); cancelAnimationFrame(readyFrame); clearTimeout(pickedTimer);
      delete root.dataset.selectCommit; delete panel.dataset.motionReady; delete panel.dataset.motionActive;
      saved.forEach((value,key) => { if(value)panel.style.setProperty(key,value);else panel.style.removeProperty(key); });
    }
  };
}
