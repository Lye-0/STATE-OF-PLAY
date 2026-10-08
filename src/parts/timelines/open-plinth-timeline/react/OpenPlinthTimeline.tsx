'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as OpenPlinthTimelineProps };
/** 低い台座の記録列。出来事の見出しを横に支え、本文が開いても時系列の軸をずらさない。 */
export default function OpenPlinthTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="open-plinth-timeline" />;
}
