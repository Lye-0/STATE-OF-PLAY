'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LedgerTimelineProps };
/** 細い罫線と欄外の日付。紙の帳簿を読み進める感触。 */
export default function LedgerTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="ledger-timeline" />;
}
