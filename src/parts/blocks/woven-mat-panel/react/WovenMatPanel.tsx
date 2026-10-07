import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface WovenMatPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 細い織りの縁と無地の中心で、素材感を本文から離して見せる。 Content and layout remain yours. */
export default function WovenMatPanel({children, className = '', ...props}: WovenMatPanelProps) {
  return <div {...props} className={`sop-surface sop-woven-mat-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
