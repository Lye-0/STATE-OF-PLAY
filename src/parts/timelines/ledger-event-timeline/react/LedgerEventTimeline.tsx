'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LedgerEventTimelineProps };
/** 台帳の日時と本文を罫線で整理。 */
export default function LedgerEventTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="ledger-event-timeline" />;
}
