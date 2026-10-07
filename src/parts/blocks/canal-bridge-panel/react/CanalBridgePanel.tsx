import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CanalBridgePanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 二つの橋脚と中央の浮いた床を分け、下の流路を見せる。 Content and layout remain yours. */
export default function CanalBridgePanel({children, className = '', ...props}: CanalBridgePanelProps) {
  return <div {...props} className={`sop-surface sop-canal-bridge-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
