'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as CompactLogTimelineProps };
/** 短い履歴を密度よく表示する。 */
export default function CompactLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="compact-log-timeline" />;
}
