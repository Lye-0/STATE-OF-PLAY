import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SeamlessSaddleProps extends HTMLAttributes<HTMLDivElement> {}
/** 反った革の鞍と平らな内容面を分け、左右の支えが伸びる。 Content and layout remain yours. */
export default function SeamlessSaddle({children, className = '', ...props}: SeamlessSaddleProps) {
  return <div {...props} className={`sop-surface sop-seamless-saddle ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
