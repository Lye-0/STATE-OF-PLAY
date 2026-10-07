import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SeamlessSaddleProps extends HTMLAttributes<HTMLDivElement> {}
/** 一方の角を大きく落とし、硬い天板と丸い下端の緊張をつくる。 Content and layout remain yours. */
export default function SeamlessSaddle({children, className = '', ...props}: SeamlessSaddleProps) {
  return <div {...props} className={`sop-surface sop-seamless-saddle ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
