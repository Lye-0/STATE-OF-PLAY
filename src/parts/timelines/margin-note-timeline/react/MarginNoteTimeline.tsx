'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as MarginNoteTimelineProps };
/** 余白に書いた日付から本文へ罫が折れる記録帳。実日付を見出しの上へ引き出し、各記録を注記のまとまりとして読む。 */
export default function MarginNoteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="margin-note-timeline" />;
}
