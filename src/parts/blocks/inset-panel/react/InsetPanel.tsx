import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface InsetPanelProps extends HTMLAttributes<HTMLDivElement> {}
/** 画面へ少し沈んだ面。補足情報や設定項目のためのコンテナ。 Content and layout remain yours. */
export default function InsetPanel({children, className = '', ...props}: InsetPanelProps) {
  return <div {...props} className={`sop-surface sop-inset-panel ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
