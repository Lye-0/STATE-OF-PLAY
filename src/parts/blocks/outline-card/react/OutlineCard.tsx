import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface OutlineCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 背景に溶け込む透明な面。細い線だけで情報を区切る。 Content and layout remain yours. */
export default function OutlineCard({children, className = '', ...props}: OutlineCardProps) {
  return <div {...props} className={`sop-surface sop-outline-card ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
