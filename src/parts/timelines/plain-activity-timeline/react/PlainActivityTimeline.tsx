'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as PlainActivityTimelineProps };
/** 操作履歴を読みやすく並べる。 */
export default function PlainActivityTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="plain-activity-timeline" />;
}
