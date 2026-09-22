import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface PaperCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 文章にもフォームにも使える、ニュートラルな紙のカード。 Content and layout remain yours. */
export default function PaperCard({children, className = '', ...props}: PaperCardProps) {
  return <div {...props} className={`sop-surface sop-paper-card ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
