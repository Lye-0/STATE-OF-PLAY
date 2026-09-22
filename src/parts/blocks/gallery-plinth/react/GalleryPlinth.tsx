'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface GalleryPlinthProps extends HTMLAttributes<HTMLDivElement> {}
/** 白いマットと浮いた内枠。中身を主役にする小さな展示台。 Content and layout remain yours. */
export default function GalleryPlinth({children, className = '', ...props}: GalleryPlinthProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-gallery-plinth ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
