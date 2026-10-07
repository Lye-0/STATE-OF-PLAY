'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BookRibbonTimelineProps };
/** ページを横切る栞で節目を示す。 */
export default function BookRibbonTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="book-ribbon-timeline" />;
}
