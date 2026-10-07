import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ReadingPlaneProps extends HTMLAttributes<HTMLDivElement> {}
/** 縁を細く抑え、長い文章にも使える明るい基本面。 Content and layout remain yours. */
export default function ReadingPlane({children, className = '', ...props}: ReadingPlaneProps) {
  return <div {...props} className={`sop-surface sop-reading-plane ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
