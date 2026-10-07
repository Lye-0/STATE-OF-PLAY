'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ClearProcessTimelineProps };
/** 工程と状態を細い線で示す。 */
export default function ClearProcessTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="clear-process-timeline" />;
}
