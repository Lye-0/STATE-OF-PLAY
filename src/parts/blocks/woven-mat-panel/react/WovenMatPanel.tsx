import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface WovenMatPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 編み込んだ二方向の端を引き、文字面を固定したまま交差を緩める。 Content and layout remain yours. */
export default function WovenMatPanel({children, className = '', ...props}: WovenMatPanelProps) {
  return <div {...props} className={`sop-surface sop-woven-mat-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
