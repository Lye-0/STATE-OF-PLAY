'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LoopHistoryTimelineProps };
/** 帯状の履歴見出し。日付の短い帯と本文を二段にし、状態の変化は帯の端で明示する。 */
export default function LoopHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="loop-history-timeline" />;
}
