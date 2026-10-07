'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RailwayLogTimelineProps };
/** 駅の時刻表と展開する記録面。 */
export default function RailwayLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="railway-log-timeline" />;
}
