/** Lifecycle for decorative, non-interactive motion. No frame loop or global animation registry. */
export interface AmbientOrnamentOptions { paused?: boolean }
export interface AmbientOrnamentController { setPaused(paused: boolean): void; destroy(): void }
export function mountAmbientOrnament(root: HTMLElement, options: AmbientOrnamentOptions = {}): AmbientOrnamentController {
  const view = root.ownerDocument.defaultView;
  if (!view) return {setPaused() {}, destroy() {}};
  const document = root.ownerDocument;
  const reduce = view.matchMedia('(prefers-reduced-motion: reduce)');
  const previous = root.getAttribute('data-ambient-running');
  let paused = !!options.paused, visible = false, destroyed = false;
  const sync = () => {
    if (!destroyed) root.dataset.ambientRunning = String(!paused && visible && !document.hidden && !reduce.matches);
  };
  const observer = new view.IntersectionObserver(entries => {
    visible = entries.some(entry => entry.target === root && entry.isIntersecting);
    sync();
  });
  observer.observe(root);
  document.addEventListener('visibilitychange', sync);
  reduce.addEventListener('change', sync);
  sync();
  return {
    setPaused(value) { paused = value; sync(); },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduce.removeEventListener('change', sync);
      if (previous === null) root.removeAttribute('data-ambient-running');
      else root.setAttribute('data-ambient-running', previous);
    }
  };
}
