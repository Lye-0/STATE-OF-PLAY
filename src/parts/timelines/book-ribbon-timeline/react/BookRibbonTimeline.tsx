'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BookRibbonTimelineProps };
/** 本の栞と出来事の段落を結ぶ。 */
export default function BookRibbonTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="book-ribbon-timeline" />;
}
