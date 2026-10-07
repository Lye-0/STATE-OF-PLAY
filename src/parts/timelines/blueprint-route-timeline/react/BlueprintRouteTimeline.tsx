'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BlueprintRouteTimelineProps };
/** 図面の注記線で工程を示す。 */
export default function BlueprintRouteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="blueprint-route-timeline" />;
}
