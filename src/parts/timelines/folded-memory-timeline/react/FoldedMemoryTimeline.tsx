'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as FoldedMemoryTimelineProps };
/** 折った紙片に出来事を残す。 */
export default function FoldedMemoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="folded-memory-timeline" />;
}
