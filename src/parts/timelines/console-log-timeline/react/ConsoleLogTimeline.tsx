'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ConsoleLogTimelineProps };
/** ログの時間を水平に揃え、状態軸を分離。 */
export default function ConsoleLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="console-log-timeline" />;
}
