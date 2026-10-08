import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerracedPaperPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 段丘の三層を外周ではなく床面として構成。本文の下に奥行きが見え、層だけが開く。 */
export default function TerracedPaperPanel({children, className = '', ...props}: TerracedPaperPanelProps) {
  return <div {...props} className={`sop-surface sop-terraced-paper-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
