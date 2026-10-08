import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerracedPaperPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 一枚の本文ページの左下へ、異なる長さの三枚の紙が階段状に開く。読む一枚を固定し、外側の広い段と切り落とした紙の角で、平たい束とは異なる輪郭を作る。 Content and layout remain yours. */
export default function TerracedPaperPanel({children, className = '', ...props}: TerracedPaperPanelProps) {
  return <div {...props} className={`sop-surface sop-terraced-paper-panel ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
