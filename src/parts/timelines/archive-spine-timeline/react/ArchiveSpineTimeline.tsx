'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ArchiveSpineTimelineProps };
/** 綴じ目をたどる記録の年表。 */
export default function ArchiveSpineTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="archive-spine-timeline" />;
}
