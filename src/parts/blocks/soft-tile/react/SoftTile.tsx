import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SoftTileProps extends HTMLAttributes<HTMLDivElement> {}
/** 淡いセージ色と広めの角丸。親しみやすい情報のまとまり。 Content and layout remain yours. */
export default function SoftTile({children, className = '', ...props}: SoftTileProps) {
  return <div {...props} className={`sop-surface sop-soft-tile ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
