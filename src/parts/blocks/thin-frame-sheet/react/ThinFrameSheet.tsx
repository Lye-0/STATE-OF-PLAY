import React, { type HTMLAttributes, type CSSProperties } from 'react';
import '../styles.css';
export interface ThinFrameSheetProps extends HTMLAttributes<HTMLDivElement> {}
/** 透明な余白と外枠だけで情報を区切る、背景を選びにくいシート。 Content and layout remain yours. */
export default function ThinFrameSheet({children, className = '', ...props}: ThinFrameSheetProps) {
  return <div {...props} className={`sop-surface sop-thin-frame-sheet ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
