'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface PrismaticEdgeProps extends HTMLAttributes<HTMLDivElement> {}
/** 暗い面の四隅に、偏光した光が薄く重なる。 Content and layout remain yours. */
export default function PrismaticEdge({children, className = '', ...props}: PrismaticEdgeProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-prismatic-edge ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
