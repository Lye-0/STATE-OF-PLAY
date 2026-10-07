import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PivotCornerCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 対角の金具が支点を中心に開き、独立した内容面を支持する。 Content and layout remain yours. */
export default function PivotCornerCase({children, className = '', ...props}: PivotCornerCaseProps) {
  return <div {...props} className={`sop-surface sop-pivot-corner-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
