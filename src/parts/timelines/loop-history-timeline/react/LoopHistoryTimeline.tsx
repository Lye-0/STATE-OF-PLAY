'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LoopHistoryTimelineProps };
/** 背の一本の線から日付札を輪で留める履歴。輪は札の小穴へ接続し、本文の列とは分けて記録同士のつながりを示す。 */
export default function LoopHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="loop-history-timeline" />;
}
