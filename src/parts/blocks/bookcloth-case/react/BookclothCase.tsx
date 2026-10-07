import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface BookclothCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 布の表紙が本文の下から開き、背と紙束を立体的に分ける。 Content and layout remain yours. */
export default function BookclothCase({children, className = '', ...props}: BookclothCaseProps) {
  return <div {...props} className={`sop-surface sop-bookcloth-case ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
