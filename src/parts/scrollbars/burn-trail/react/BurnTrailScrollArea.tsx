'use client';
import React from 'react';
import { useKineticScroll, type ScrollAreaProps } from '../../../../shared/use-kinetic-scroll';
import '../styles.css';
export type { ScrollAreaProps } from '../../../../shared/use-kinetic-scroll';
/** 通過した目盛りだけが琥珀色に熱を持ち、青灰色の酸化膜へ静かに冷える。 */
export default function BurnTrailScrollArea(props: ScrollAreaProps) {
  const { children, orientation = 'vertical', viewportLabel = 'スクロールする内容', scrollbarLabel = 'コンテンツのスクロール位置', onProgressChange: _onProgressChange, className = '', ...attributes } = props;
  const {root, viewportId} = useKineticScroll('burn',props);
  return <div {...attributes} ref={root} className={`sop-scroll-area sop-kinetic-scroll sop-burn-trail ${className}`} data-orientation={orientation}>
    <div className="sop-scroll-viewport" id={viewportId} tabIndex={0} role="region" aria-label={viewportLabel}>
      <div className="sop-scroll-content">{children}</div>
    </div>
    <div className="sop-scroll-rail" role="scrollbar" tabIndex={0} aria-label={scrollbarLabel} aria-controls={viewportId} aria-orientation={orientation} aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
      <canvas className="sop-kinetic-canvas" aria-hidden="true" /><span className="sop-scroll-track" aria-hidden="true"><span className="sop-scroll-fill" /></span><span className="sop-scroll-ticks" aria-hidden="true" />
      <div className="sop-scroll-thumb"><span className="sop-scroll-handle" aria-hidden="true"><i className="sop-scroll-grip" /></span></div>
      <span className="sop-scroll-cap" aria-hidden="true" /><span className="sop-scroll-cap" aria-hidden="true" />
    </div>
  </div>;
}
