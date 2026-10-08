'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ConsoleLogTimelineProps };
/** システムの履歴コンソール。時刻と状態を分離した一覧にして、選択した記録を明るい行で強調。 */
export default function ConsoleLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="console-log-timeline" />;
}
