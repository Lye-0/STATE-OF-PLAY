'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as MarginNoteTimelineProps };
/** 欄外の日付と余白の広い記録。 */
export default function MarginNoteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="margin-note-timeline" />;
}
