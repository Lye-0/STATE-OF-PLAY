import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ArchivalChannelProps extends HTMLAttributes<HTMLDivElement> {}
/** 紙束の垂直な切り口を大きい収納口へ通す構造。本文面は固定し、背の開口だけが広がる。 */
export default function ArchivalChannel({children, className = '', ...props}: ArchivalChannelProps) {
  return <div {...props} className={`sop-surface sop-archival-channel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
