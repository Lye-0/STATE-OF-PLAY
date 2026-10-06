import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface KilnSurfaceProps extends HTMLAttributes<HTMLDivElement> {}
/** 焼き物の厚い口縁と釉薬の溜まりが、内容を囲む浅い器になる。 Content and layout remain yours. */
export default function KilnSurface({children, className = '', ...props}: KilnSurfaceProps) {
  return <div {...props} className={`sop-surface sop-kiln-surface ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
