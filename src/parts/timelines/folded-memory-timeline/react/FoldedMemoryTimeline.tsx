'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as FoldedMemoryTimelineProps };
/** 折り畳む記録票。日付を紙の上部へ移し、出来事ごとに一枚の折り返しを持たせる。 */
export default function FoldedMemoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="folded-memory-timeline" />;
}
