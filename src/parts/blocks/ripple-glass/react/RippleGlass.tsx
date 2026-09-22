'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface RippleGlassProps extends HTMLAttributes<HTMLDivElement> {}
/** 水面の輪郭がゆるやかに重なる、青い透明体。 Content and layout remain yours. */
export default function RippleGlass({children, className = '', ...props}: RippleGlassProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: true }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-ripple-glass ${className}`}>
    <span className="rp-rings" aria-hidden="true"><i className="rp-ring" style={{"--i": "0"} as CSSProperties}></i><i className="rp-ring" style={{"--i": "1"} as CSSProperties}></i><i className="rp-ring" style={{"--i": "2"} as CSSProperties}></i><i className="rp-ring" style={{"--i": "3"} as CSSProperties}></i><i className="rp-ring" style={{"--i": "4"} as CSSProperties}></i></span>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
