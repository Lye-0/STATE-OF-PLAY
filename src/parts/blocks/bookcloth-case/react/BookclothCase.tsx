import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface BookclothCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 布張りの背と紙の断面を分け、内容を一冊の小さな箱として置く。 Content and layout remain yours. */
export default function BookclothCase({children, className = '', ...props}: BookclothCaseProps) {
  return <div {...props} className={`sop-surface sop-bookcloth-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
