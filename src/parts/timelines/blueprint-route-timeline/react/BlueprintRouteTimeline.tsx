'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BlueprintRouteTimelineProps };
/** 青図の経路を時刻から本文へ連続させる。 */
export default function BlueprintRouteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="blueprint-route-timeline" />;
}
