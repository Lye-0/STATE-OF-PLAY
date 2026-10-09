import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CompactNotePanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 短い側見出しと本文を二列にまとめるコンパクトな補足面。狭幅では縦に並べ、読み幅を保つ。 Content and layout remain yours. */
export default function CompactNotePanel({children, className = '', ...props}: CompactNotePanelProps) {
  return <div {...props} className={`sop-surface sop-compact-note-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
