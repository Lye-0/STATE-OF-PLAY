import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CompactNotePanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 短い情報をまとめる、横の細い印だけを持つコンパクトな面。 Content and layout remain yours. */
export default function CompactNotePanel({children, className = '', ...props}: CompactNotePanelProps) {
  return <div {...props} className={`sop-surface sop-compact-note-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
