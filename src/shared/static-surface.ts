/** A CSS-only surface needs no event listeners. init is provided for API consistency, but optional. */
export function createStaticSurface(element: HTMLElement) {
  if (!(element instanceof HTMLElement)) throw new TypeError('A surface element is required.');
  return {destroy() {}, setPaused(_paused: boolean) {}};
}
