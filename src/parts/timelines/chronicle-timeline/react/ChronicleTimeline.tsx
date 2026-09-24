'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ChronicleTimelineProps };
/** 大きな日付と細い境界線で、出来事の重さを作り分ける。 */
export default function ChronicleTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="chronicle-timeline" />;
}
