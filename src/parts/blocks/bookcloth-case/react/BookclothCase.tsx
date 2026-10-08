import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface BookclothCaseProps extends HTMLAttributes<HTMLDivElement> {}
/** 左へ開いた布の表紙と、固定した右の本文ページを綴じの関節でつなぐ上製本。紙束は右下に重ね、ホバーでは外側の表紙だけが開く。読む面と文字は移動せず、見出しも暗いインクで統一する。 Content and layout remain yours. */
export default function BookclothCase({children, className = '', ...props}: BookclothCaseProps) {
  return <div {...props} className={`sop-surface sop-bookcloth-case ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
