import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface SuspensionSheetProps extends HTMLAttributes<HTMLDivElement> {}
/** 二本の吊り線が上端の小さな留め具へ接続し、切り落とした紙の下端に空間を残す。読む面は固定し、ホバーでは背後の距離だけが変わる。 Content and layout remain yours. */
export default function SuspensionSheet({children, className = '', ...props}: SuspensionSheetProps) {
  return <div {...props} className={`sop-surface sop-suspension-sheet ${className}`}>

    <span className="sop-surface-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
