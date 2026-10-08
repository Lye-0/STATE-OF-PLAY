import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerminalFoilProps extends HTMLAttributes<HTMLDivElement> {}
/** 一枚の折り曲げたアルミ板。厚い端面と薄い本文面を分け、光だけが折り目を渡る。 */
export default function TerminalFoil({children, className = '', ...props}: TerminalFoilProps) {
  return <div {...props} className={`sop-surface sop-terminal-foil ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
