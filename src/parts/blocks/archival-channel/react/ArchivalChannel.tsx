import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ArchivalChannelProps extends HTMLAttributes<HTMLDivElement> {}
/** 溝を走る仕切りが余白を開き、見出しを格納庫の中に見せる。 Content and layout remain yours. */
export default function ArchivalChannel({children, className = '', ...props}: ArchivalChannelProps) {
  return <div {...props} className={`sop-surface sop-archival-channel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
