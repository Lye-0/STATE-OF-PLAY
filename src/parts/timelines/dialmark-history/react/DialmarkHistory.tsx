'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as DialmarkHistoryProps };
/** 大きな時刻の印と小さな状態文字を分離し、日付を軸に記録を読む。 */
export default function DialmarkHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="dialmark-history" />;
}
