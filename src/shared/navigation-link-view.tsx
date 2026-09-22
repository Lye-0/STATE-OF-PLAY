'use client';
import React, {forwardRef, type AnchorHTMLAttributes, type ReactNode} from 'react';
export interface NavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Supplementary eyebrow/metadata; not a replacement for an informative link label. */
  eyebrow?: ReactNode;
  /** Decorative icon; use text/aria-label for meaningful labels. */
  icon?: ReactNode;
}
/** Native <a>, not a button with window.location. Forward ref supports composition. */
export const NavigationLinkView = forwardRef<HTMLAnchorElement, NavigationLinkProps>(function NavigationLinkView(
  {children, className='', eyebrow, icon, target, rel, ...props}, ref
) {
  const safeRel = target === '_blank' ? [...new Set(`${rel ?? ''} noopener`.trim().split(/\s+/))].join(' ') : rel;
  return <a {...props} ref={ref} target={target} rel={safeRel} className={`sop-link ${className}`}>
    <span className="sop-link-art" aria-hidden="true"><i/><i/><i/><i/></span>
    <span className="sop-link-copy">{eyebrow && <span className="sop-link-eyebrow">{eyebrow}</span>}<span className="sop-link-label">{children}</span></span>
    <span className="sop-link-icon" aria-hidden="true">{icon ?? <svg viewBox="0 0 32 32" fill="none"><path d="M7 25 25 7M9 7h16v16"/></svg>}</span>
    {target === '_blank' && <span className="sop-link-sr">（新しいタブで開きます）</span>}
  </a>;
});
