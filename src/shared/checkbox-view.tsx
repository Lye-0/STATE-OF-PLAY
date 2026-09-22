'use client';
import React, { forwardRef, useId, useRef, useState, useEffect, useLayoutEffect, type InputHTMLAttributes, type ReactNode } from 'react';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children' | 'size'> {
  /** Phrasing content only: do not put links or other interactive controls inside this label. */
  label?: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onIndeterminateChange?: (indeterminate: boolean) => void;
}
const useDOMEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
/** Native input owns editing semantics; React owns the committed checked/mixed state. */
export const CheckboxView = forwardRef<HTMLInputElement, CheckboxProps>(function CheckboxView({
  label = '選択する', description, badge, indeterminate, defaultIndeterminate = false,
  checked, defaultChecked = false, onCheckedChange, onIndeterminateChange, onChange,
  className = '', style, ...attributes
}, forwardedRef) {
  const [internal, setInternal] = useState(defaultChecked);
  const [mixedInternal, setMixedInternal] = useState(defaultIndeterminate);
  const value = checked ?? internal, mixed = indeterminate ?? mixedInternal;
  const input = useRef<HTMLInputElement | null>(null), id = useId();
  const initial = useRef({ checked: defaultChecked, mixed: defaultIndeterminate });
  const latest = useRef({ checked, indeterminate, value, mixed, onCheckedChange, onIndeterminateChange });
  latest.current = { checked, indeterminate, value, mixed, onCheckedChange, onIndeterminateChange };
  useDOMEffect(() => { if (input.current) input.current.indeterminate = mixed; }, [mixed]);
  useEffect(() => {
    const field = input.current, form = field?.form;
    if (!field || !form) return;
    let live = true, resetTimer = 0;
    // Native reset's default action follows event dispatch; a microtask can run too early.
    const reset = (event: Event) => { clearTimeout(resetTimer); resetTimer = window.setTimeout(() => {
      if (!live || event.defaultPrevented) return;
      const s = latest.current;
      if (s.checked === undefined) setInternal(initial.current.checked);
      if (s.indeterminate === undefined) setMixedInternal(initial.current.mixed);
      s.onCheckedChange?.(initial.current.checked);
      s.onIndeterminateChange?.(initial.current.mixed);
      // Native reset changes the DOM even when a controlled parent declines that change.
      field.checked = s.checked === undefined ? initial.current.checked : s.value;
      field.indeterminate = s.indeterminate === undefined ? initial.current.mixed : s.mixed;
    }, 0); };
    form.addEventListener('reset', reset);
    return () => { live = false; clearTimeout(resetTimer); form.removeEventListener('reset', reset); };
  }, [attributes.form]);
  return <label className={`sop-check ${className}`} style={style} data-check-state={mixed ? 'mixed' : value ? 'checked' : 'unchecked'}>
    <input {...attributes} type="checkbox" checked={value}
      aria-describedby={[attributes['aria-describedby'], description ? `${id}-description` : ''].filter(Boolean).join(' ') || undefined}
      ref={node => { input.current = node; if (typeof forwardedRef === 'function') forwardedRef(node); else if (forwardedRef) forwardedRef.current = node; }}
      onChange={event => {
        const next = event.currentTarget.checked;
        if (checked === undefined) setInternal(next);
        if (indeterminate === undefined) setMixedInternal(false);
        onCheckedChange?.(next);
        if (mixed) onIndeterminateChange?.(false);
        onChange?.(event);
        // Native activation clears mixed before change. Restore it only if a controlled parent keeps it.
        queueMicrotask(() => { if (input.current) input.current.indeterminate = latest.current.indeterminate ?? false; });
      }}/>
    <span className="sop-check-box" aria-hidden="true"><i className="sop-check-aura"/><svg className="sop-check-tick" viewBox="0 0 32 32" fill="none"><path d="m8 16 5 5 11-12"/></svg><span className="sop-check-dash"/><i className="sop-check-detail"/></span>
    <span className="sop-check-copy"><span className="sop-check-label">{label}</span>{description && <span id={`${id}-description`} className="sop-check-description">{description}</span>}</span>
    {badge && <span className="sop-check-badge" aria-hidden="true">{badge}</span>}
  </label>;
});
