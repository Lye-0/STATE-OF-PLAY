'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BookRibbonTimelineProps };
/** 章の始まりを示す記録。日付を栞のような細い札に置き、右の章見出しから詳細を開く。 */
export default function BookRibbonTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="book-ribbon-timeline" />;
}
