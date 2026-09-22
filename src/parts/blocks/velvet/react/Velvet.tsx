'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface VelvetProps extends HTMLAttributes<HTMLDivElement> {}
/** ワイン色の布に光が落ちる。静かで贅沢な一枚。 Content and layout remain yours. */
export default function Velvet({children, className = '', ...props}: VelvetProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-velvet ${className}`}>
    <span className="vv-thread" aria-hidden="true"></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
