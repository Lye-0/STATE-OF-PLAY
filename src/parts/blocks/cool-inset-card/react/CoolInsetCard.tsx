import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CoolInsetCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 沈んだ線と穏やかな陰影で境界を示す、寒色の入力領域用カード。 Content and layout remain yours. */
export default function CoolInsetCard({children, className = '', ...props}: CoolInsetCardProps) {
  return <div {...props} className={`sop-surface sop-cool-inset-card ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
