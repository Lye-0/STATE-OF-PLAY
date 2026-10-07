import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CovedCeramicPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** くぼみの底に内容面を置き、縁から内側へ反射が回る。 Content and layout remain yours. */
export default function CovedCeramicPanel({children, className = '', ...props}: CovedCeramicPanelProps) {
  return <div {...props} className={`sop-surface sop-coved-ceramic-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
