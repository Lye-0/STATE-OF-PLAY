'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as DottedTimelineProps };
/** 点線と、小さな節点だけで見せる履歴。 */
export default function DottedTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="dotted-timeline" />;
}
