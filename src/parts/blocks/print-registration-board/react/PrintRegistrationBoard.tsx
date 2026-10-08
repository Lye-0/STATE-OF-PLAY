import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PrintRegistrationBoardProps extends HTMLAttributes<HTMLDivElement> {}
/** 欄外の二つの登録ピンに、印刷紙の上端を合わせた見当板。紙の外へ露出した横の基準台と丸いピンを分け、右側の小さな色帯も本文の外へ置く。 Content and layout remain yours. */
export default function PrintRegistrationBoard({children, className = '', ...props}: PrintRegistrationBoardProps) {
  return <div {...props} className={`sop-surface sop-print-registration-board ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
