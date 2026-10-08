'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StitchedHistoryTimelineProps };
/** 縫い綴じた活動記録。縦の糸と個別の布札を使い、長い本文は札の下へ自然に展開する。 */
export default function StitchedHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stitched-history-timeline" />;
}
