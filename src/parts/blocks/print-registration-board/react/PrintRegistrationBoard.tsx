import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PrintRegistrationBoardProps extends HTMLAttributes<HTMLDivElement> {}
/** 紙面の四隅だけを合わせる見当線で、内容を版面として見せる。 Content and layout remain yours. */
export default function PrintRegistrationBoard({children, className = '', ...props}: PrintRegistrationBoardProps) {
  return <div {...props} className={`sop-surface sop-print-registration-board ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
