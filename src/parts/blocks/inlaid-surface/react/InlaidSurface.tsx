import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface InlaidSurfaceProps extends HTMLAttributes<HTMLDivElement> {}
/** 寄木の細い帯が角を折れ、中心の内容と分離して縁を走る。 Content and layout remain yours. */
export default function InlaidSurface({children, className = '', ...props}: InlaidSurfaceProps) {
  return <div {...props} className={`sop-surface sop-inlaid-surface ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
