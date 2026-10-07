import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ArchivalChannelProps extends HTMLAttributes<HTMLDivElement> {}
/** 余白に一本の深い溝を通し、見出しと本文を軽い紙面へ載せる。 Content and layout remain yours. */
export default function ArchivalChannel({children, className = '', ...props}: ArchivalChannelProps) {
  return <div {...props} className={`sop-surface sop-archival-channel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
