import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PivotCornerCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 厚い隅の金具だけが角度を変え、内容の平面は静止する。 Content and layout remain yours. */
export default function PivotCornerCase({children, className = '', ...props}: PivotCornerCaseProps) {
  return <div {...props} className={`sop-surface sop-pivot-corner-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
