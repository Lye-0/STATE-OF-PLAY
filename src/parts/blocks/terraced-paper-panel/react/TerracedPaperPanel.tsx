import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface TerracedPaperPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 階段状の紙の端を外周に重ね、中央の読み面を一段持ち上げる。 Content and layout remain yours. */
export default function TerracedPaperPanel({children, className = '', ...props}: TerracedPaperPanelProps) {
  return <div {...props} className={`sop-surface sop-terraced-paper-panel ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
