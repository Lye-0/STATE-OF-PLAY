import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PrintRegistrationBoardProps extends HTMLAttributes<HTMLDivElement> {}
/** 印刷版の二つの登録面が逆方向にずれ、中央の文字は固定する。 Content and layout remain yours. */
export default function PrintRegistrationBoard({children, className = '', ...props}: PrintRegistrationBoardProps) {
  return <div {...props} className={`sop-surface sop-print-registration-board ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
