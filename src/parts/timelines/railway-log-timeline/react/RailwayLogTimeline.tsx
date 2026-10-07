'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RailwayLogTimelineProps };
/** 駅と路線で進行の節目を読む。 */
export default function RailwayLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="railway-log-timeline" />;
}
