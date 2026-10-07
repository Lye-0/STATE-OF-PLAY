'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as OpenPlinthTimelineProps };
/** 出来事を低い台座に載せる。 */
export default function OpenPlinthTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="open-plinth-timeline" />;
}
