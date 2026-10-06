import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface VellumPocketProps extends HTMLAttributes<HTMLDivElement> {}
/** 半透明の封筒の口が上辺に重なり、内容を安全に見せる。 Content and layout remain yours. */
export default function VellumPocket({children, className = '', ...props}: VellumPocketProps) {
  return <div {...props} className={`sop-surface sop-vellum-pocket ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
