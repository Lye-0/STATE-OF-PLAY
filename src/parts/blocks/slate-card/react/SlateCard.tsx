import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SlateCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 落ち着いたスレート色。数値と文章をすっきりまとめる。 Content and layout remain yours. */
export default function SlateCard({children, className = '', ...props}: SlateCardProps) {
  return <div {...props} className={`sop-surface sop-slate-card ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
