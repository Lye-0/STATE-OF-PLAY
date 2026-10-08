'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ArchiveSpineTimelineProps };
/** 保管記録の背表紙。日付を背の狭い欄、出来事を開く紙面に分け、時系列の線を綴じ側に通す。 */
export default function ArchiveSpineTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="archive-spine-timeline" />;
}
