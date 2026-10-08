import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PrintRegistrationBoardProps extends HTMLAttributes<HTMLDivElement> {}
/** 印刷用紙と版の断面を分け、見当の十字を余白に固定する。赤青の文字ずれを使わない。 */
export default function PrintRegistrationBoard({children, className = '', ...props}: PrintRegistrationBoardProps) {
  return <div {...props} className={`sop-surface sop-print-registration-board ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
