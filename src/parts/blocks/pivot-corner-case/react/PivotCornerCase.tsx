import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PivotCornerCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 左上の円軸で小さな隅の保持板を回し、下の固定したL字の受けと本文面を支えるケース。本文の背板全体は回さず、隅の板の大きさも内容の高さで変わらない。 Content and layout remain yours. */
export default function PivotCornerCase({children, className = '', ...props}: PivotCornerCaseProps) {
  return <div {...props} className={`sop-surface sop-pivot-corner-case ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
