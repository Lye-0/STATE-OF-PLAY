'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as WarmJournalTimelineProps };
/** 日記や記録に合う穏やかな年表。 */
export default function WarmJournalTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="warm-journal-timeline" />;
}
