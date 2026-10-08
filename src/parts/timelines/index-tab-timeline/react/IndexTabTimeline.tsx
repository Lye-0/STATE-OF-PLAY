'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as IndexTabTimelineProps };
/** 索引を持つ履歴カード。各日の小見出しを本文の上へ載せ、記録を独立したカードとして連ねる。 */
export default function IndexTabTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="index-tab-timeline" />;
}
