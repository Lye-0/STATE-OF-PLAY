'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LetterpressHistoryTimelineProps };
/** 連続した受領記録。日付と本文を一枚の長い控えに載せ、出来事の境目だけミシン目を使う。 */
export default function LetterpressHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="letterpress-history-timeline" />;
}
