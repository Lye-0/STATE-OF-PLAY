'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StrataTimelineProps };
/** 断面の重なりが一枚ずつずれ、履歴の層を見せる。 */
export default function StrataTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="strata-timeline" />;
}
