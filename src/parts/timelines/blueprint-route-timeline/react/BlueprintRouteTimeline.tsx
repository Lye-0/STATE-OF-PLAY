'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BlueprintRouteTimelineProps };
/** 日付を結ぶ折線を細い製図線に整えた履歴。線は本文の外を回り、見出しと内容を先に読める余白を確保する。 */
export default function BlueprintRouteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="blueprint-route-timeline" />;
}
