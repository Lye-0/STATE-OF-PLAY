'use client';
import React, { useEffect, useRef, type HTMLAttributes, type CSSProperties } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface ContourProps extends HTMLAttributes<HTMLDivElement> {}
/** 細い線が地形を描く、深い緑の彫刻的なカード。 Content and layout remain yours. */
export default function Contour({children, className = '', ...props}: ContourProps) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => { if (!element.current) return; const c = createSurfaceController(element.current, {tilt: true }); return () => c.destroy(); }, []);
  return <div {...props} ref={element} className={`sop-surface sop-contour ${className}`}>
    <svg className="ct-map" viewBox="0 0 340 300" preserveAspectRatio="none" aria-hidden="true"><path d="M-80 330 C -20 175, 215 300, 340 140 S 390 -80, 170 -80"/><path d="M-72 330 C -9 170, 211 294, 336 135 S 382 -78, 177 -75"/><path d="M-64 330 C 2 165, 207 288, 332 130 S 374 -76, 184 -70"/><path d="M-56 330 C 13 160, 203 282, 328 125 S 366 -74, 191 -65"/><path d="M-48 330 C 24 155, 199 276, 324 120 S 358 -72, 198 -60"/><path d="M-40 330 C 35 150, 195 270, 320 115 S 350 -70, 205 -55"/><path d="M-32 330 C 46 145, 191 264, 316 110 S 342 -68, 212 -50"/><path d="M-24 330 C 57 140, 187 258, 312 105 S 334 -66, 219 -45"/><path d="M-16 330 C 68 135, 183 252, 308 100 S 326 -64, 226 -40"/><path d="M-8 330 C 79 130, 179 246, 304 95 S 318 -62, 233 -35"/><path d="M0 330 C 90 125, 175 240, 300 90 S 310 -60, 240 -30"/><path d="M8 330 C 101 120, 171 234, 296 85 S 302 -58, 247 -25"/><path d="M16 330 C 112 115, 167 228, 292 80 S 294 -56, 254 -20"/><path d="M24 330 C 123 110, 163 222, 288 75 S 286 -54, 261 -15"/><path d="M32 330 C 134 105, 159 216, 284 70 S 278 -52, 268 -10"/><path d="M40 330 C 145 100, 155 210, 280 65 S 270 -50, 275 -5"/><path d="M48 330 C 156 95, 151 204, 276 60 S 262 -48, 282 0"/></svg>
    <div className="sop-surface-content">{children}</div>
  </div>;
}
