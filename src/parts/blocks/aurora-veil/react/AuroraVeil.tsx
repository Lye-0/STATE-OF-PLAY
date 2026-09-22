'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface AuroraVeilProps extends HTMLAttributes<HTMLDivElement> {}
/** 極光が遠くを流れる、深い透明感のある展示面。 Content and layout remain yours. */
export default function AuroraVeil({children, className = '', ...props}: AuroraVeilProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: true }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-aurora-veil ${className}`}>
    
    <div className="sop-surface-content">{children}</div>
  </div>;
}
