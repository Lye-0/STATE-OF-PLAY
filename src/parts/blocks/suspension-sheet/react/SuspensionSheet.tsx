import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SuspensionSheetProps extends HTMLAttributes<HTMLDivElement> {}
/** 四隅の吊り点と下がった面を分け、浮遊する紙の距離を動かす。 Content and layout remain yours. */
export default function SuspensionSheet({children, className = '', ...props}: SuspensionSheetProps) {
  return <div {...props} className={`sop-surface sop-suspension-sheet ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
