import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SuspensionSheetProps extends HTMLAttributes<HTMLDivElement> {}
/** 細い吊り線と離れた上端で、紙面が空中に保持される構造をつくる。 Content and layout remain yours. */
export default function SuspensionSheet({children, className = '', ...props}: SuspensionSheetProps) {
  return <div {...props} className={`sop-surface sop-suspension-sheet ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
