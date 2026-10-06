'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as SummaryRowHistoryProps };
/** 時刻・見出し・状態を三列に揃え、必要な記録だけを開いて読む。 */
export default function SummaryRowHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="summary-row-history" />;
}
