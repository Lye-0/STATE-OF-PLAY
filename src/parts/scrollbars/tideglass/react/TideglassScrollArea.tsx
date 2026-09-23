'use client';
import React from 'react';
import { useScrollArea, type ScrollAreaProps } from '../../../../shared/use-scroll-area';
import '../styles.css';
export type { ScrollAreaProps } from '../../../../shared/use-scroll-area';
/** 12pxの透明な水路と17pxの有機的なレンズ面。スクロールした領域に水色が満ち、つまみの縁が静かに光る。 */
export default function TideglassScrollArea(props: ScrollAreaProps) {
  const { children, orientation = 'vertical', viewportLabel = 'スクロールする内容', scrollbarLabel = 'コンテンツのスクロール位置', onProgressChange: _onProgressChange, className = '', ...attributes } = props;
  const {root, viewportId} = useScrollArea(props);
  return <div {...attributes} ref={root} className={`sop-scroll-area sop-scroll-sculpted sop-tideglass ${className}`} data-orientation={orientation}>
    <div className="sop-scroll-viewport" id={viewportId} tabIndex={0} role="region" aria-label={viewportLabel}>
      <div className="sop-scroll-content">{children}</div>
    </div>
    <div className="sop-scroll-rail" role="scrollbar" tabIndex={0} aria-label={scrollbarLabel} aria-controls={viewportId} aria-orientation={orientation} aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
      <span className="sop-scroll-track" aria-hidden="true"><span className="sop-scroll-fill" /></span><span className="sop-scroll-ticks" aria-hidden="true" />
      <div className="sop-scroll-thumb"><span className="sop-scroll-handle" aria-hidden="true"><i className="sop-scroll-grip" /></span></div>
      <span className="sop-scroll-cap" aria-hidden="true" /><span className="sop-scroll-cap" aria-hidden="true" />
    </div>
  </div>;
}
