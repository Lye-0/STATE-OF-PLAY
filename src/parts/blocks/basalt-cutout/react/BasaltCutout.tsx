import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface BasaltCutoutProps extends HTMLAttributes<HTMLDivElement> {}
/** 暗い石の外縁に切り込みを作り、明るい内容面をはめ込む。 Content and layout remain yours. */
export default function BasaltCutout({children, className = '', ...props}: BasaltCutoutProps) {
  return <div {...props} className={`sop-surface sop-basalt-cutout ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
