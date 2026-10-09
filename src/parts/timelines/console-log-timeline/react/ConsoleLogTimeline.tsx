'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ConsoleLogTimelineProps };
/** 時刻専用の縦列と記録本文を分けたログのタイムライン。各記録は区切られた出力紙として続き、現在の行を時刻欄で示す。 */
export default function ConsoleLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="console-log-timeline" />;
}
