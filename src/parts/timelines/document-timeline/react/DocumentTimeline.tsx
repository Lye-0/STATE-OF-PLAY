'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as DocumentTimelineProps };
/** 薄い資料が一枚ずつ持ち上がり、経緯を読み進められる。 */
export default function DocumentTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="document-timeline" />;
}
