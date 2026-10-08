'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RailwayLogTimelineProps };
/** 鉄道の運行記録。縦の線と駅の点に日付を揃え、開いた記録は右側の余白へ展開する。 */
export default function RailwayLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="railway-log-timeline" />;
}
