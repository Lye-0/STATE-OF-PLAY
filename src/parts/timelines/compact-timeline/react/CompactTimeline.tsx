'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as CompactTimelineProps };
/** 一覧の密度を上げた、短い履歴。 */
export default function CompactTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="compact-timeline" />;
}
