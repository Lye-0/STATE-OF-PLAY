'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LoopHistoryTimelineProps };
/** 輪で綴じた履歴のページを順に読む。 */
export default function LoopHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="loop-history-timeline" />;
}
