'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ArchiveSpineTimelineProps };
/** 記録の背骨と水平な日付札。 */
export default function ArchiveSpineTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="archive-spine-timeline" />;
}
