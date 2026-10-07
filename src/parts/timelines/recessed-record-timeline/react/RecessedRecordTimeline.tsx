'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RecessedRecordTimelineProps };
/** くぼんだ記録面に出来事を収める。 */
export default function RecessedRecordTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="recessed-record-timeline" />;
}
