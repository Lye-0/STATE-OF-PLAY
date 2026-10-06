import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CaptionSurfaceProps extends HTMLAttributes<HTMLDivElement> {}
/** 狭いキャプション帯と広い本文を分けた、資料用のカード。 Content and layout remain yours. */
export default function CaptionSurface({children, className = '', ...props}: CaptionSurfaceProps) {
  return <div {...props} className={`sop-surface sop-caption-surface ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
