'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as HingedRecordHistoryProps };
/** 時刻の小窓を支点に、記録の内容が右へ開く。 */
export default function HingedRecordHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="hinged-record-history" />;
}
