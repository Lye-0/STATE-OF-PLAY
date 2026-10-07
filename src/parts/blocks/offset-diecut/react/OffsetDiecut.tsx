import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface OffsetDiecutProps extends HTMLAttributes<HTMLDivElement> {}
/** 抜き型の紙と位置のずれた下紙を動かし、角から違う面を露出する。 Content and layout remain yours. */
export default function OffsetDiecut({children, className = '', ...props}: OffsetDiecutProps) {
  return <div {...props} className={`sop-surface sop-offset-diecut ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
