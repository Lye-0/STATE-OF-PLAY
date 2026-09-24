'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ActivityTimelineProps };
/** 時刻を控えめにして、出来事を読みやすく。 */
export default function ActivityTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="activity-timeline" />;
}
