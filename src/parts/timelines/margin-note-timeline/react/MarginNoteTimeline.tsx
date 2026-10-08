'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as MarginNoteTimelineProps };
/** 余白の注記を時系列で並べる。日付を細い外側の欄に置き、開いた本文の左線だけを伸ばす。 */
export default function MarginNoteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="margin-note-timeline" />;
}
