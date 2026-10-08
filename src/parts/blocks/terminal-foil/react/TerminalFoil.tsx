import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerminalFoilProps extends HTMLAttributes<HTMLDivElement> {}
/** 左に巻き断面を露出した金属箔が、マットな本文の平面へ広がる。右上の自由端は薄く巻き返し、ホバーではこの端だけが反る。石の切れ角や太い金属枠を使わない。 Content and layout remain yours. */
export default function TerminalFoil({children, className = '', ...props}: TerminalFoilProps) {
  return <div {...props} className={`sop-surface sop-terminal-foil ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
