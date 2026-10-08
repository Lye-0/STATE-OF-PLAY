import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ContouredCorkPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 左右で異なる丸みと薄い切断端を持つコルクの面。小さな孔は端部だけに残し、本文は落ち着いた無地の領域へ置く。 Content and layout remain yours. */
export default function ContouredCorkPanel({children, className = '', ...props}: ContouredCorkPanelProps) {
  return <div {...props} className={`sop-surface sop-contoured-cork-panel ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
