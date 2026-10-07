import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerminalFoilProps extends HTMLAttributes<HTMLDivElement> {}
/** 薄い金属の折返しが上下から離れ、発光に頼らず反射面を見せる。 Content and layout remain yours. */
export default function TerminalFoil({children, className = '', ...props}: TerminalFoilProps) {
  return <div {...props} className={`sop-surface sop-terminal-foil ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
