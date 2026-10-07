'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StoneMilestoneTimelineProps };
/** 石標のような節目を並べる。 */
export default function StoneMilestoneTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stone-milestone-timeline" />;
}
