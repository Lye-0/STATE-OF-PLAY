'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as PaperTimelineProps };
/** 明るい画面に置ける、シンプルな履歴。 */
export default function PaperTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="paper-timeline" />;
}
