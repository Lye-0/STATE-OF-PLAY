'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RisingDateHistoryProps };
/** 現在の出来事の番号面が一段上がり、時刻と説明の読み順を保つ。 */
export default function RisingDateHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="rising-date-history" />;
}
