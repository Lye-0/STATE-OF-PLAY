'use client';
import React from 'react';
import { useKineticScroll, type ScrollAreaProps } from '../../../../shared/use-kinetic-scroll';
import '../styles.css';
export type { ScrollAreaProps } from '../../../../shared/use-kinetic-scroll';
/** 繊維のある二枚の紙がしおりの周囲でめくれ、読み進めた側に細い裂け目が残る。 */
export default function PaperTearScrollArea(props: ScrollAreaProps) {
  const { children, orientation = 'vertical', viewportLabel = 'スクロールする内容', scrollbarLabel = 'コンテンツのスクロール位置', onProgressChange: _onProgressChange, className = '', ...attributes } = props;
  const {root, viewportId} = useKineticScroll('paper',props);
  return <div {...attributes} ref={root} className={`sop-scroll-area sop-kinetic-scroll sop-paper-tear ${className}`} data-orientation={orientation}>
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
