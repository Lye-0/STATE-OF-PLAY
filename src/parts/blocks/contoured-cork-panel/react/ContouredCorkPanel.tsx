import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ContouredCorkPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 大きな凹みを一隅に取り、柔らかなコルクの縁で面を受ける。 Content and layout remain yours. */
export default function ContouredCorkPanel({children, className = '', ...props}: ContouredCorkPanelProps) {
  return <div {...props} className={`sop-surface sop-contoured-cork-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
