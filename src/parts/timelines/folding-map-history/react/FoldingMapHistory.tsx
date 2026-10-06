'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as FoldingMapHistoryProps };
/** 時刻を左端の折り目へ沿わせ、内容を段のある地図面へ置く。 */
export default function FoldingMapHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="folding-map-history" />;
}
