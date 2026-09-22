/** Native checkbox enhancement. Never intercepts Space, label clicks, validation or FormData. */
export interface CheckboxOptions {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onIndeterminateChange?: (indeterminate: boolean) => void;
}
export interface CheckboxController {
  getChecked(): boolean;
  setChecked(value: boolean): void;
  getIndeterminate(): boolean;
  setIndeterminate(value: boolean): void;
  setDisabled(value: boolean): void;
  refresh(): void;
  destroy(): void;
}
let instance = 0;
export function createCheckboxController(root: HTMLElement, options: CheckboxOptions = {}): CheckboxController {
  const input = root.querySelector<HTMLInputElement>(':scope > input[type="checkbox"]');
  if (!input) throw new TypeError('A checkbox root with its own native input is required.');
  const description = root.querySelector<HTMLElement>(':scope > .sop-check-copy > .sop-check-description');
  const events = new AbortController();
  let destroyed = false, resetTimer = 0;
  const previousDescription = input.getAttribute('aria-describedby');
  let assignedId = '';
  const previousId = description?.getAttribute('id');
  if (description) {
    do { assignedId = `sop-check-description-${++instance}`; } while (document.getElementById(assignedId));
    description.id = assignedId;
    input.setAttribute('aria-describedby', [previousDescription, assignedId].filter(Boolean).join(' '));
  }
  if (options.checked !== undefined) input.checked = input.defaultChecked = options.checked;
  if (options.disabled !== undefined) input.disabled = options.disabled;
  const initialMixed = options.indeterminate ?? root.dataset.indeterminate === 'true';
  input.indeterminate = initialMixed;
  const sync = () => {
    if (destroyed) return;
    root.dataset.checkState = input.indeterminate ? 'mixed' : input.checked ? 'checked' : 'unchecked';
    root.dispatchEvent(new CustomEvent('sop:checkbox-state', {
      bubbles: true, detail: { checked: input.checked, indeterminate: input.indeterminate }
    }));
  };
  input.addEventListener('change', () => {
    if (destroyed) return;
    // The browser itself clears indeterminate on activation.
    options.onCheckedChange?.(input.checked);
    options.onIndeterminateChange?.(input.indeterminate);
    sync();
  }, { signal: events.signal });
  const owner = input.form;
  // Read values after the browser's default reset action, not during its event dispatch.
  owner?.addEventListener('reset', event => { clearTimeout(resetTimer); resetTimer = window.setTimeout(() => {
    if (destroyed || event.defaultPrevented) return;
    input.indeterminate = initialMixed;
    options.onCheckedChange?.(input.checked);
    options.onIndeterminateChange?.(input.indeterminate);
    sync();
  }, 0); }, { signal: events.signal });
  sync();
  return {
    getChecked: () => input.checked,
    setChecked(value) { if (!destroyed) { input.checked = value; sync(); } },
    getIndeterminate: () => input.indeterminate,
    setIndeterminate(value) { if (!destroyed) { input.indeterminate = value; sync(); } },
    setDisabled(value) { if (!destroyed) { input.disabled = value; sync(); } },
    refresh: sync,
    destroy() {
      if (destroyed) return;
      destroyed = true; events.abort(); clearTimeout(resetTimer);
      if (assignedId && description?.id === assignedId) { if (previousId) description.id = previousId; else description.removeAttribute('id'); }
      if (previousDescription === null) input.removeAttribute('aria-describedby');
      else input.setAttribute('aria-describedby', previousDescription);
    }
  };
}
