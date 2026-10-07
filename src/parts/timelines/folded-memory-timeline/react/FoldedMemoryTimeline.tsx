'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as FoldedMemoryTimelineProps };
/** 折り目のある記憶札と本文。 */
export default function FoldedMemoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="folded-memory-timeline" />;
}
