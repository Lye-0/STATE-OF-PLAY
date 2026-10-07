import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CaptionBandCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 見出しの下の罫線で内容を区切り、管理画面にも合わせやすくする。 Content and layout remain yours. */
export default function CaptionBandCard({children, className = '', ...props}: CaptionBandCardProps) {
  return <div {...props} className={`sop-surface sop-caption-band-card ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
