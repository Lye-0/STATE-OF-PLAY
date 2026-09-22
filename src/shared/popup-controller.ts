/** Modal lifecycle for a single root. Uses the browser top layer, never moves React-owned nodes. */
export type PopupCloseReason = 'close' | 'cancel' | 'confirm' | 'escape' | 'backdrop' | 'form' | 'programmatic';
export interface PopupOptions {
  open?: boolean;
  controlled?: boolean;
  disabled?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: (reason: string) => void;
}
export interface PopupController {
  setOpen(value: boolean): void;
  getOpen(): boolean;
  setDisabled(value: boolean): void;
  updateOptions(options: PopupOptions): void;
  destroy(): void;
}
const lockKey = Symbol.for('state-of-play.popup.scroll-lock.v1');
type Lock = {count: number; previous: string; priority: string};
/** Symbol storage keeps independent exported copies coordinated without a shared package import. */
function lockScroll(document: Document): () => void {
  const owner = document as Document & {[lockKey]?: Lock};
  if (!owner[lockKey]) owner[lockKey] = {count: 0, previous: document.documentElement.style.getPropertyValue('overflow'), priority: document.documentElement.style.getPropertyPriority('overflow')};
  const lock = owner[lockKey]!; lock.count++;
  document.documentElement.style.setProperty('overflow', 'hidden');
  let released = false;
  return () => {
    if (released) return; released = true;
    if (--lock.count === 0) {
      if (document.documentElement.style.overflow === 'hidden') {
        if (lock.previous) document.documentElement.style.setProperty('overflow', lock.previous, lock.priority);
        else document.documentElement.style.removeProperty('overflow');
      }
      delete owner[lockKey];
    }
  };
}
let sequence = 0;
export function createPopupController(root: HTMLElement, initial: PopupOptions = {}): PopupController {
  const dialogElement = root.querySelector<HTMLDialogElement>(':scope > dialog.sop-popup-window');
  const triggerElement = root.querySelector<HTMLButtonElement>(':scope > [data-popup-open]');
  if (!dialogElement || !triggerElement) throw new TypeError('Popup root requires its own dialog and opening button.');
  const dialog: HTMLDialogElement = dialogElement;
  const trigger: HTMLButtonElement = triggerElement;
  const events = new AbortController();
  let options = {...initial}, desired = false, destroyed = false, timer = 0;
  let opener: HTMLElement | null = null, release: (()=>void) | undefined;
  let reason = 'programmatic', wasOutside = false, closing = false;
  const title = dialog.querySelector<HTMLElement>('[data-popup-title]');
  const assigned: HTMLElement[] = [];
  function identity(element: HTMLElement) {
    // Author-provided unique IDs are retained. Repeated markup copies get distinct IDs.
    if (element.id && document.getElementById(element.id) === element) return element.id;
    let id: string; do { id = `sop-popup-${++sequence}`; } while (document.getElementById(id));
    element.id = id; assigned.push(element); return id;
  }
  trigger.setAttribute('aria-controls', identity(dialog));
  trigger.setAttribute('aria-haspopup', 'dialog');
  if (title) dialog.setAttribute('aria-labelledby', identity(title));
  dialog.querySelectorAll<HTMLInputElement>('input[data-popup-radio-group]').forEach(input => {
    if (input.closest('dialog') === dialog) input.name = `${dialog.id}-${input.dataset.popupRadioGroup}`;
  });
  function notify(open: boolean) {
    options.onOpenChange?.(open);
    root.dispatchEvent(new CustomEvent('sop:popup-state', {bubbles: true, detail: {open, reason}}));
  }
  function request(open: boolean, nextReason = 'programmatic') {
    if (destroyed || (open && trigger.disabled)) return;
    reason = nextReason;
    if (!options.controlled) setOpen(open);
    notify(open);
  }
  function restoreFocus() {
    const target = opener?.isConnected && !opener.closest('[inert]') ? opener : trigger;
    if (target.isConnected && !target.matches(':disabled')) target.focus({preventScroll: true});
  }
  function finishClose() {
    timer = 0;
    if (destroyed || desired) return;
    closing = false;
    if (dialog.open) dialog.close(reason);
    release?.(); release = undefined;
    dialog.dataset.popupState = 'closed';
    root.dataset.popupState = 'closed'; trigger.setAttribute('aria-expanded', 'false');
    restoreFocus();
    options.onClose?.(reason);
    root.dispatchEvent(new CustomEvent('sop:popup-close', {bubbles: true, detail: {reason}}));
  }
  function setOpen(value: boolean) {
    if (destroyed) return;
    desired = value;
    clearTimeout(timer); timer = 0;
    if (value) {
      closing = false;
      if (!dialog.open) {
        opener = document.activeElement instanceof HTMLElement ? document.activeElement : trigger;
        dialog.returnValue = '';
        dialog.showModal();
        release ??= lockScroll(document);
        const focus = dialog.querySelector<HTMLElement>('[data-popup-initial-focus]') ?? title ?? dialog;
        focus.focus({preventScroll: true});
      }
      dialog.dataset.popupState = 'open'; root.dataset.popupState = 'open';
      trigger.setAttribute('aria-expanded', 'true');
    } else if (dialog.open) {
      closing = true;
      dialog.dataset.popupState = 'closing'; root.dataset.popupState = 'closing';
      // The top layer, focus containment and scroll lock survive the closing animation.
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) finishClose();
      else timer = window.setTimeout(finishClose, 180);
    }
  }
  trigger.addEventListener('click', () => request(true, 'open'), {signal: events.signal});
  dialog.addEventListener('cancel', event => {
    event.preventDefault(); event.stopPropagation();
    if (options.closeOnEscape !== false) request(false, 'escape');
  }, {signal: events.signal});
  const outside = (event: MouseEvent) => {const r = dialog.getBoundingClientRect(); return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;};
  dialog.addEventListener('pointerdown', event => {wasOutside = event.target === dialog && outside(event);}, {signal: events.signal});
  dialog.addEventListener('click', event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || target.closest('dialog') !== dialog || closing) return;
    const button = target.closest<HTMLButtonElement>('[data-popup-close]');
    if (button && !button.disabled) request(false, button.dataset.popupClose || 'close');
    else if (target === dialog && wasOutside && outside(event) && options.closeOnBackdrop !== false) request(false, 'backdrop');
    wasOutside = false;
  }, {signal: events.signal});
  dialog.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.closest('dialog') !== dialog || form.method.toLowerCase() !== 'dialog') return;
    event.preventDefault();
    request(false, (event.submitter as HTMLButtonElement | null)?.value || 'form');
  }, {signal: events.signal});
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab' || (event.target as Element)?.closest('dialog') !== dialog) return;
    const nodes = [...dialog.querySelectorAll<HTMLElement>('button,input,select,textarea,a[href],[tabindex]')].filter(e => e.tabIndex >= 0 && !e.matches(':disabled') && e.getClientRects().length && !e.closest('[hidden],[inert]') && getComputedStyle(e).visibility !== 'hidden');
    if (!nodes.length) {event.preventDefault(); (title ?? dialog).focus();}
    else if (event.shiftKey && (document.activeElement === nodes[0] || !nodes.includes(document.activeElement as HTMLElement))) {event.preventDefault(); nodes.at(-1)!.focus();}
    else if (!event.shiftKey && document.activeElement === nodes.at(-1)) {event.preventDefault(); nodes[0].focus();}
    // Prevent an underlying inspector's trap from trying to manage this modal.
    event.stopPropagation();
  }, {signal: events.signal});
  dialog.addEventListener('close', () => {
    // The queued native close event may arrive after an immediate reopen.
    if (dialog.open || destroyed) return;
    if (desired) {
      desired = false; closing = false; clearTimeout(timer); timer = 0;
      release?.(); release = undefined;
      root.dataset.popupState = dialog.dataset.popupState = 'closed'; trigger.setAttribute('aria-expanded', 'false');
      reason = dialog.returnValue || 'programmatic'; notify(false); restoreFocus(); options.onClose?.(reason);
    }
  }, {signal: events.signal});
  if (initial.disabled !== undefined) trigger.disabled = initial.disabled;
  root.dataset.popupState = 'closed'; trigger.setAttribute('aria-expanded', 'false');
  if (initial.open) setOpen(true);
  return {
    setOpen, getOpen: () => desired,
    setDisabled(value) { if (!destroyed) trigger.disabled = value; },
    updateOptions(next) { options = {...options, ...next}; },
    destroy() {
      if (destroyed) return;
      const hadFocus = dialog.contains(document.activeElement);
      destroyed = true; events.abort(); clearTimeout(timer);
      if (dialog.open) dialog.close(); release?.(); release = undefined;
      root.dataset.popupState = 'closed'; dialog.dataset.popupState = 'closed'; trigger.setAttribute('aria-expanded', 'false');
      if (hadFocus) restoreFocus();
      assigned.forEach(element => element.removeAttribute('id'));
    }
  };
}
