'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StoneMilestoneTimelineProps };
/** 時間の礎石から本文が広がる。 */
export default function StoneMilestoneTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stone-milestone-timeline" />;
}
