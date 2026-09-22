'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface NocturneProps extends HTMLAttributes<HTMLDivElement> {}
/** 星図と軌道を細く刻んだ、静かなミッドナイトブルー。 Content and layout remain yours. */
export default function Nocturne({children, className = '', ...props}: NocturneProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: false }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-nocturne ${className}`}>
    <svg className="nc-map" viewBox="0 0 320 300" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth=".5"><circle cx="277" cy="30" r="62"/><circle cx="277" cy="30" r="104"/><circle cx="277" cy="30" r="154"/><circle cx="277" cy="30" r="201"/><path d="M-10 180 70 144 113 174 193 112 251 127 305 58"/></g><g fill="currentColor"><circle cx="70" cy="144" r="2"/><circle cx="113" cy="174" r="1.8"/><circle cx="193" cy="112" r="2"/><circle cx="251" cy="127" r="1.5"/><circle cx="305" cy="58" r="2"/><circle cx="34" cy="90" r="1"/><circle cx="151" cy="44" r="1"/><circle cx="90" cy="52" r="1"/><circle cx="271" cy="223" r="1"/><circle cx="225" cy="244" r="1"/><circle cx="121" cy="266" r="1"/></g></svg>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
