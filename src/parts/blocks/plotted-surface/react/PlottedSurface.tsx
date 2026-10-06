import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PlottedSurfaceProps extends HTMLAttributes<HTMLDivElement> {}
/** 横の余白から伸びる括弧が、情報の位置を正確に示す。 Content and layout remain yours. */
export default function PlottedSurface({children, className = '', ...props}: PlottedSurfaceProps) {
  return <div {...props} className={`sop-surface sop-plotted-surface ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
