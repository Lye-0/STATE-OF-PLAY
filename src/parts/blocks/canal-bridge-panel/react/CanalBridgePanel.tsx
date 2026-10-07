import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CanalBridgePanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 左右の小さな橋脚から薄い板を渡し、中央を浮かせる。 Content and layout remain yours. */
export default function CanalBridgePanel({children, className = '', ...props}: CanalBridgePanelProps) {
  return <div {...props} className={`sop-surface sop-canal-bridge-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
