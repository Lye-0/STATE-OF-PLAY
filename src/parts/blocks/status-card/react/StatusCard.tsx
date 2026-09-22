import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface StatusCardProps extends HTMLAttributes<HTMLDivElement> {}
/** ダークブルーに淡い青緑。状態や進捗をまとめる小さなパネル。 Content and layout remain yours. */
export default function StatusCard({children, className = '', ...props}: StatusCardProps) {
  return <div {...props} className={`sop-surface sop-status-card ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
