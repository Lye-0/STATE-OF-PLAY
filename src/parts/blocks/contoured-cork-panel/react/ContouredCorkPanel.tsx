import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ContouredCorkPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 粒のあるコルクの外周と切断層で、静かな筆記面を囲む。本文は内側の凹んだ無地の面へ置き、素材の輪郭と読む領域を分ける。 Content and layout remain yours. */
export default function ContouredCorkPanel({children, className = '', ...props}: ContouredCorkPanelProps) {
  return <div {...props} className={`sop-surface sop-contoured-cork-panel ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
