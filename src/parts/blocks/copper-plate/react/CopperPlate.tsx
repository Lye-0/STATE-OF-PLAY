'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface CopperPlateProps extends HTMLAttributes<HTMLDivElement> {}
/** 細かな研磨痕と角の留め具。温かい金属の一枚板。 Content and layout remain yours. */
export default function CopperPlate({children, className = '', ...props}: CopperPlateProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-copper-plate ${className}`}>
    <i className="cp-pin p1" aria-hidden="true"></i><i className="cp-pin p2" aria-hidden="true"></i><i className="cp-pin p3" aria-hidden="true"></i><i className="cp-pin p4" aria-hidden="true"></i>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
