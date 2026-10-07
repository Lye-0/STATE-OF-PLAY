import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerracedPaperPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 三段の紙の地形が端から展開し、上段の文字面を保つ。 Content and layout remain yours. */
export default function TerracedPaperPanel({children, className = '', ...props}: TerracedPaperPanelProps) {
  return <div {...props} className={`sop-surface sop-terraced-paper-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
