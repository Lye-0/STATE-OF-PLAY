'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface ObsidianProps extends HTMLAttributes<HTMLDivElement> {}
/** 黒い石の断面と、隙間にだけ残る銅色の光。 Content and layout remain yours. */
export default function Obsidian({children, className = '', ...props}: ObsidianProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-obsidian ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
