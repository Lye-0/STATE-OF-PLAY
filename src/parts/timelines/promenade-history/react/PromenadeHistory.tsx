'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as PromenadeHistoryProps };
/** 横へ辿れる年代の面を並べ、出来事の内容を足元へ開く。 */
export default function PromenadeHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="promenade-history" />;
}
