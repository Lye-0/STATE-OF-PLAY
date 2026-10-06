import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ScallopedFolioProps extends HTMLAttributes<HTMLDivElement> {}
/** 波打つ紙端と縦の綴じ穴が、読み物を一枚の台紙に収める。 Content and layout remain yours. */
export default function ScallopedFolio({children, className = '', ...props}: ScallopedFolioProps) {
  return <div {...props} className={`sop-surface sop-scalloped-folio ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
