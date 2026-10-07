import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ContouredCorkPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** コルクの島を等高線のようにずらし、明るい内容台を浮かせる。 Content and layout remain yours. */
export default function ContouredCorkPanel({children, className = '', ...props}: ContouredCorkPanelProps) {
  return <div {...props} className={`sop-surface sop-contoured-cork-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
