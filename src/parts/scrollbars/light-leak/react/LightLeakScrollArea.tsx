'use client';
import React from 'react';
import { useScrollArea, type ScrollAreaProps } from '../../../../shared/use-scroll-area';
import '../styles.css';
export type { ScrollAreaProps } from '../../../../shared/use-scroll-area';
/** 9pxの軌道に淡い分光が残る。15pxのつまみは滑らかな白い面で、操作中だけ縁の光が広がる。 */
export default function LightLeakScrollArea(props: ScrollAreaProps) {
  const { children, orientation = 'vertical', viewportLabel = 'スクロールする内容', scrollbarLabel = 'コンテンツのスクロール位置', onProgressChange: _onProgressChange, className = '', ...attributes } = props;
  const {root, viewportId} = useScrollArea(props);
  return <div {...attributes} ref={root} className={`sop-scroll-area sop-scroll-sculpted sop-light-leak ${className}`} data-orientation={orientation}>
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
