'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StoneMilestoneTimelineProps };
/** 石の道標を連ねる履歴。各出来事の丸い区画に日付を添え、節目の丸印を線でつなぐ。 */
export default function StoneMilestoneTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stone-milestone-timeline" />;
}
