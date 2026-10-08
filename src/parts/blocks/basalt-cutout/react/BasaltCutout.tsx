import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface BasaltCutoutProps extends HTMLAttributes<HTMLDivElement> {}
/** 左の外周そのものに、長さと傾きが違う非対称な割れ端を持つ玄武岩のパネル。上の薄い切断端と暗い本文面を分け、文字は欠けへ侵入しない固定領域へ置く。 Content and layout remain yours. */
export default function BasaltCutout({children, className = '', ...props}: BasaltCutoutProps) {
  return <div {...props} className={`sop-surface sop-basalt-cutout ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
