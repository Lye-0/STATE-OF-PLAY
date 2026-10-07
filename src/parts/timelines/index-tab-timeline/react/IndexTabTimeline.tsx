'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as IndexTabTimelineProps };
/** 索引タブに日付を置き、その下を開く。 */
export default function IndexTabTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="index-tab-timeline" />;
}
