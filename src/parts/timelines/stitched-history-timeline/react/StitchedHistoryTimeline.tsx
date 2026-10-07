'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StitchedHistoryTimelineProps };
/** 縫い糸に出来事を留める。 */
export default function StitchedHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stitched-history-timeline" />;
}
