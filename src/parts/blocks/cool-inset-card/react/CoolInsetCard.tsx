import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CoolInsetCardProps extends HTMLAttributes<HTMLDivElement> {}
/** 小さな見出しと凹んだ本文領域で、設定や情報のまとまりを作る寒色のカード。 Content and layout remain yours. */
export default function CoolInsetCard({children, className = '', ...props}: CoolInsetCardProps) {
  return <div {...props} className={`sop-surface sop-cool-inset-card ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
