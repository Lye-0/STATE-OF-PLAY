/** Native anchors already provide navigation, modifier clicks and the context menu.
 * This optional lifecycle adapter deliberately does not install click handlers. */
export function initNavigationLink(root: HTMLElement) {
  if (!(root instanceof HTMLAnchorElement) || !root.hasAttribute('href')) throw new TypeError('Expected an anchor with href.');
  return { destroy() { /* No timers, listeners or global state to release. */ } };
}
