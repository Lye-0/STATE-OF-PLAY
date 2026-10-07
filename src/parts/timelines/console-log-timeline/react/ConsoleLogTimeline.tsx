'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ConsoleLogTimelineProps };
/** ログの区画を一つずつ確認する。 */
export default function ConsoleLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="console-log-timeline" />;
}
