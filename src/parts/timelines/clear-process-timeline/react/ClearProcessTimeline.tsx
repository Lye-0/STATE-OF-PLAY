'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ClearProcessTimelineProps };
/** 工程番号・日付・状態を揃えて読む履歴。現在の工程を細い側線で示し、展開した説明も同じ欄へ収める。 */
export default function ClearProcessTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="clear-process-timeline" />;
}
