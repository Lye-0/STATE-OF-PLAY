'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RecessedRecordTimelineProps };
/** 浅い記録槽をつなぐ履歴。本文を明るい小区画へ収め、日付と時間軸を外側に残す。 */
export default function RecessedRecordTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="recessed-record-timeline" />;
}
