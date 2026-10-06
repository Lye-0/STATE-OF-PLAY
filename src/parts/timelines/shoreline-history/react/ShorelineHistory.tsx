'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ShorelineHistoryProps };
/** 時刻を細い岸線へ置き、出来事を広い右側の面へつなげる。 */
export default function ShorelineHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="shoreline-history" />;
}
