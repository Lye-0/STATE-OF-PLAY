'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LedgerEventTimelineProps };
/** 帳簿の出来事欄。日付と本文の列を固定し、横罫と縦の余白線で記録の対応を明瞭にする。 */
export default function LedgerEventTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="ledger-event-timeline" />;
}
