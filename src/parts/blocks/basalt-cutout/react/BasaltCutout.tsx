import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface BasaltCutoutProps extends HTMLAttributes<HTMLDivElement> {}
/** 石の切断面と抜けた窓の二層を持つ、非対称の展示台。 Content and layout remain yours. */
export default function BasaltCutout({children, className = '', ...props}: BasaltCutoutProps) {
  return <div {...props} className={`sop-surface sop-basalt-cutout ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
