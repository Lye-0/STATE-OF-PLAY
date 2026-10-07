'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LedgerEventTimelineProps };
/** 台帳の時刻と出来事を同じ水平罫で綴じる。 */
export default function LedgerEventTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="ledger-event-timeline" />;
}
