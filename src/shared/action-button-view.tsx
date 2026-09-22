'use client';
import React, {forwardRef, type ButtonHTMLAttributes, type ReactNode} from 'react';
export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** While busy, retain focus and block activation. The consumer owns the async operation. */
  loading?: boolean;
  /** Decorative only. Interactive children must not be placed inside a button. */
  icon?: ReactNode;
}
export const ActionButtonView = forwardRef<HTMLButtonElement, ActionButtonProps>(function ActionButtonView(
  {children, className='', loading=false, icon, type='button', onClickCapture, ...props}, ref
) {
  const blocked = loading || props.disabled || props['aria-disabled'] === true || props['aria-disabled'] === 'true';
  return <button {...props} ref={ref} type={type} className={`sop-action ${className}`}
    data-loading={loading ? 'true' : 'false'} aria-busy={loading || undefined}
    aria-disabled={loading ? true : props['aria-disabled']}
    onClickCapture={event => {
      if (blocked) { event.preventDefault(); event.stopPropagation(); return; }
      onClickCapture?.(event);
    }}>
    <span className="sop-action-art" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span>
    <span className="sop-action-label">{children}</span>
    <span className="sop-action-icon" aria-hidden="true">{icon ?? <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>}</span>
    <span className="sop-action-spinner" aria-hidden="true"/>
  </button>;
});
