/** Enhances a real input/textarea. Native editing, IME, selection, undo and form behaviour remain intact. */
export type TextControl = HTMLInputElement | HTMLTextAreaElement;
export interface TextFieldOptions {
  value?: string;
  onValueChange?: (value: string) => void;
  /** React owns its own IDs, committed value and button actions. */
  manageIds?: boolean;
  manageActions?: boolean;
  error?: string;
  validateOnBlur?: boolean;
}
export interface TextFieldController {
  getValue(): string;
  setValue(value: string): void;
  setError(message: string): void;
  focus(): void;
  refresh(): void;
  destroy(): void;
}
/** Use a real native input event so framework change handlers see clear-button edits too. */
export function replaceTextValue(field: TextControl, value: string): void {
  if (field.disabled || field.readOnly) return;
  const prototype = field instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  Object.getOwnPropertyDescriptor(prototype, 'value')!.set!.call(field, value);
  field.dispatchEvent(new Event('input', {bubbles: true, composed: true}));
}
let sequence = 0;
export function createTextField(root: HTMLElement, options: TextFieldOptions = {}): TextFieldController {
  const control = root.querySelector<TextControl>('.sop-field-control');
  if (!(control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement)) throw new Error('Text field requires a native input or textarea.');
  const field = control;
  const label = root.querySelector<HTMLLabelElement>('.sop-field-label');
  const help = root.querySelector<HTMLElement>('.sop-field-help');
  const feedback = root.querySelector<HTMLElement>('.sop-field-validation');
  const count = root.querySelector<HTMLElement>('.sop-field-counter');
  const clear = root.querySelector<HTMLButtonElement>('.sop-field-clear');
  const reveal = root.querySelector<HTMLButtonElement>('.sop-field-reveal');
  const life = new AbortController();
  const originalHeight = field.style.height, originalOverflow = field.style.overflowY;
  const originalCustomError = field.validity.customError ? field.validationMessage : '';
  const originalAriaInvalid = field.getAttribute('aria-invalid');
  const baseDescribedBy = field.getAttribute('aria-describedby') ?? '';
  let dead = false, composing = false, touched = false, pending = false, customError = options.error ?? originalCustomError;
  let form: HTMLFormElement | null = null, lastWidth = -1;
  let revealActive = false;
  // Author markup has no fixed IDs; each mounted instance receives local accessible relationships.
  if (options.manageIds !== false) {
    if (!field.id) field.id = `sop-field-${++sequence}-${Math.random().toString(36).slice(2, 7)}`;
    if (label) label.htmlFor = field.id;
    if (help && !help.id) help.id = field.id + '-help';
    if (feedback && !feedback.id) feedback.id = field.id + '-feedback';
    const ids = [...new Set([baseDescribedBy, help?.id, feedback?.id].filter(Boolean))];
    field.setAttribute('aria-describedby', ids.join(' '));
  }
  if (options.value !== undefined) field.value = options.value;
  function grow() {
    if (!(field instanceof HTMLTextAreaElement) || root.dataset.autoGrow !== 'true' || !field.clientWidth) return;
    const style = getComputedStyle(field);
    const max = parseFloat(style.getPropertyValue('--sop-field-max-height')) || 280;
    const min = parseFloat(style.minHeight) || 112;
    field.style.height = '0px';
    const desired = field.scrollHeight + parseFloat(style.borderTopWidth || '0') + parseFloat(style.borderBottomWidth || '0');
    field.style.height = Math.max(min, Math.min(max, desired)) + 'px';
    field.style.overflowY = desired > max ? 'auto' : 'hidden';
  }
  function showValidation() {
    const suppliedInvalid = options.manageIds === false ? root.dataset.externalInvalid : originalAriaInvalid;
    const external = Boolean(suppliedInvalid && suppliedInvalid !== 'false');
    const nativeInvalid = touched && !field.validity.valid && !field.disabled && !field.readOnly;
    const invalid = Boolean(customError) || nativeInvalid || external;
    root.dataset.invalid = String(invalid);
    field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    if (feedback) {
      const message = customError || (nativeInvalid ? field.validationMessage : '');
      if (feedback.textContent !== message) feedback.textContent = message;
      feedback.hidden = !message;
    }
  }
  function onReset(event: Event) {
    queueMicrotask(() => {
      if (dead || event.defaultPrevented) return;
      touched = false; composing = false;
      if (reveal && options.manageActions !== false && field instanceof HTMLInputElement && revealActive) { field.type = 'password'; revealActive = false; }
      refresh();
    });
  }
  function refresh() {
    if (dead) return;
    root.dataset.filled = String(field.value.length > 0);
    root.dataset.disabled = String(field.disabled);
    root.dataset.readonly = String(field.readOnly);
    root.dataset.composing = String(composing);
    root.dataset.multiline = String(field instanceof HTMLTextAreaElement);
    const length = field.value.length, max = field.maxLength;
    if (count) {
      const text = max >= 0 ? `${length} / ${max}` : String(length);
      if (count.textContent !== text) count.textContent = text;
    }
    if (clear) { clear.hidden = root.dataset.clearable !== 'true' || !length; clear.disabled = field.disabled || field.readOnly || composing; }
    if (reveal) {
      reveal.disabled = field.disabled || field.readOnly || composing;
      const showing = field instanceof HTMLInputElement && field.type !== 'password';
      reveal.setAttribute('aria-pressed', String(showing));
      reveal.setAttribute('aria-label', showing ? 'パスワードを隠す' : 'パスワードを表示');
    }
    if (form !== field.form) { form?.removeEventListener('reset', onReset); form = field.form; form?.addEventListener('reset', onReset); }
    showValidation(); grow();
  }
  function later() {
    if (pending || dead) return;
    pending = true;
    queueMicrotask(() => { pending = false; if (!dead) refresh(); });
  }
  const announceState = () => root.dispatchEvent(new CustomEvent('sop:field-state', {bubbles: true, detail: {filled: Boolean(field.value), composing, focused: document.activeElement === field}}));
  field.addEventListener('input', () => { refresh(); later(); options.onValueChange?.(field.value); announceState(); }, {signal: life.signal});
  field.addEventListener('change', refresh, {signal: life.signal});
  field.addEventListener('compositionstart', () => { composing = true; refresh(); announceState(); }, {signal: life.signal});
  field.addEventListener('compositionend', () => { composing = false; refresh(); later(); announceState(); }, {signal: life.signal});
  field.addEventListener('focus', announceState, {signal: life.signal});
  field.addEventListener('blur', () => { if (options.validateOnBlur || root.dataset.validate === 'blur') touched = true; refresh(); announceState(); }, {signal: life.signal});
  field.addEventListener('invalid', () => { touched = true; refresh(); }, {signal: life.signal});
  if (options.manageActions !== false) {
    clear?.addEventListener('click', () => { if (composing) return; replaceTextValue(field, ''); field.focus({preventScroll: true}); refresh(); }, {signal: life.signal});
    reveal?.addEventListener('click', () => {
      if (!(field instanceof HTMLInputElement) || field.disabled || field.readOnly || composing) return;
      const start = field.selectionStart, end = field.selectionEnd;
      revealActive = field.type === 'password'; field.type = revealActive ? 'text' : 'password';
      field.focus({preventScroll: true}); if (start !== null && end !== null) field.setSelectionRange(start, end);
      refresh();
    }, {signal: life.signal});
  }
  const observer = new MutationObserver(later);
  observer.observe(field, {attributes: true, attributeFilter: ['disabled','readonly','type','maxlength','required','pattern','minlength','form']});
  const resize = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(entries => {
    const width = entries[0]?.contentRect.width ?? 0;
    if (width !== lastWidth) { lastWidth = width; later(); }
  });
  resize?.observe(root);
  if (customError) field.setCustomValidity(customError);
  refresh(); later();
  return {
    getValue: () => field.value,
    // Explicit external update, deliberately no synthetic user-input/change event.
    setValue(value) { if (dead) return; field.value = String(value); refresh(); },
    setError(message) { if (dead) return; customError = message; field.setCustomValidity(message); refresh(); },
    focus() { if (!dead) field.focus({preventScroll: true}); },
    refresh,
    destroy() {
      if (dead) return;
      dead = true; life.abort(); observer.disconnect(); resize?.disconnect(); form?.removeEventListener('reset', onReset);
      field.style.height = originalHeight; field.style.overflowY = originalOverflow;
      field.setCustomValidity(originalCustomError);
      if (originalAriaInvalid === null) field.removeAttribute('aria-invalid'); else field.setAttribute('aria-invalid', originalAriaInvalid);
      if (revealActive && field instanceof HTMLInputElement) field.type = 'password';
    }
  };
}
