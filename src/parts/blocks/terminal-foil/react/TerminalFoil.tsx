import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerminalFoilProps extends HTMLAttributes<HTMLDivElement> {}
/** 薄い箔の角度が側面だけで変わる、濃紺の情報面。 Content and layout remain yours. */
export default function TerminalFoil({children, className = '', ...props}: TerminalFoilProps) {
  return <div {...props} className={`sop-surface sop-terminal-foil ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
