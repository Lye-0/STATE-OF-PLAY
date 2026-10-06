'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as MarginIndexHistoryProps };
/** 広い余白の小番号と、直線の記録面を資料のように並べる。 */
export default function MarginIndexHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="margin-index-history" />;
}
