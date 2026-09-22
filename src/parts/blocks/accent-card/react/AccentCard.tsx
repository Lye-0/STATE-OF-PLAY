import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface AccentCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 左辺の青いラインが、重要な情報を控えめに示す。 Content and layout remain yours. */
export default function AccentCard({children, className = '', ...props}: AccentCardProps) {
  return <div {...props} className={`sop-surface sop-accent-card ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
