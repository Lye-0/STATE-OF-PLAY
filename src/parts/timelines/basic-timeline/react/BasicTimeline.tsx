'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BasicTimelineProps };
/** 現在と過去を、明快な一本の線へ。 */
export default function BasicTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="basic-timeline" />;
}
