import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PivotCornerCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 四隅の支点が一枚の浮いた面を支持する展示台。近づくと支点が締まり本文は動かない。 */
export default function PivotCornerCase({children, className = '', ...props}: PivotCornerCaseProps) {
  return <div {...props} className={`sop-surface sop-pivot-corner-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
