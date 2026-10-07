'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LoopHistoryTimelineProps };
/** 丸い留め輪が記録をつなぐ。 */
export default function LoopHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="loop-history-timeline" />;
}
