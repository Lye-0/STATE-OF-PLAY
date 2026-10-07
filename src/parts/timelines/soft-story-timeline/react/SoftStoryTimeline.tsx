'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as SoftStoryTimelineProps };
/** 柔らかな区画で出来事を分ける。 */
export default function SoftStoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="soft-story-timeline" />;
}
