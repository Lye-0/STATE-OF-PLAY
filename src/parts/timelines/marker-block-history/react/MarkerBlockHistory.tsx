'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as MarkerBlockHistoryProps };
/** 現在の記録だけに厚い標識を置き、その他の出来事を細い行に保つ。 */
export default function MarkerBlockHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="marker-block-history" />;
}
