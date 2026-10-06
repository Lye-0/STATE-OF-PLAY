'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ChapterRibbonHistoryProps };
/** 時刻を細い下線の章札として置き、本文を長い余白へ続ける。 */
export default function ChapterRibbonHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="chapter-ribbon-history" />;
}
