'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface BlueprintProps extends HTMLAttributes<HTMLDivElement> {}
/** 目盛りとグリッドがアイデアを支える、精密な青図。 Content and layout remain yours. */
export default function Blueprint({children, className = '', ...props}: BlueprintProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-blueprint ${className}`}>
    <i className="bp-cross a" aria-hidden="true"></i><i className="bp-cross b" aria-hidden="true"></i>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
