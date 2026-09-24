'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as CardTimelineProps };
/** 情報を小さなカードにまとめる。 */
export default function CardTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="card-timeline" />;
}
