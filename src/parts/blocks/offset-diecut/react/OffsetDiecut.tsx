import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface OffsetDiecutProps extends HTMLAttributes<HTMLDivElement> {}
/** ずれた二枚の抜き型が、角の隙間から異なる紙の厚みを見せる。 Content and layout remain yours. */
export default function OffsetDiecut({children, className = '', ...props}: OffsetDiecutProps) {
  return <div {...props} className={`sop-surface sop-offset-diecut ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
