'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as EtchedLedgerHistoryProps };
/** 細い縦彫りと水平の刻みで、時刻と記録の対応を明確にする。 */
export default function EtchedLedgerHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="etched-ledger-history" />;
}
