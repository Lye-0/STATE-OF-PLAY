'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LetterpressHistoryTimelineProps };
/** 活版の年代記のような見出し。 */
export default function LetterpressHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="letterpress-history-timeline" />;
}
