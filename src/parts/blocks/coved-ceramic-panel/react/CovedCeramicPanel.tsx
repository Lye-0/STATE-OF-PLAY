import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CovedCeramicPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 曲面の隅と平らな中央を分け、文字の背後に静かな陶器の面を置く。 Content and layout remain yours. */
export default function CovedCeramicPanel({children, className = '', ...props}: CovedCeramicPanelProps) {
  return <div {...props} className={`sop-surface sop-coved-ceramic-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
