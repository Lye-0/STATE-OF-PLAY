'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RecessedRecordTimelineProps };
/** 浅い溝の中に日時を置く。 */
export default function RecessedRecordTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="recessed-record-timeline" />;
}
