import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface CanalBridgePanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 二つの橋脚が読み取る天板を支え、下に水路の空間を残す橋のパネル。本文は天板に固定し、水面の細い反射だけが広がる。 Content and layout remain yours. */
export default function CanalBridgePanel({children, className = '', ...props}: CanalBridgePanelProps) {
  return <div {...props} className={`sop-surface sop-canal-bridge-panel ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
