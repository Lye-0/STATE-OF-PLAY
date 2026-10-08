import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface WovenMatPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 編んだ敷物の左帯と下の房の上に、明るい紙面を少しずらして置く。縦材と横材の交差は紙の外側に見せ、読む面を模様で埋めない。 Content and layout remain yours. */
export default function WovenMatPanel({children, className = '', ...props}: WovenMatPanelProps) {
  return <div {...props} className={`sop-surface sop-woven-mat-panel ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
