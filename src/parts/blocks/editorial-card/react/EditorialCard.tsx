import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface EditorialCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 直線と余白を大切にした、編集的な白いカード。 Content and layout remain yours. */
export default function EditorialCard({children, className = '', ...props}: EditorialCardProps) {
  return <div {...props} className={`sop-surface sop-editorial-card ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
