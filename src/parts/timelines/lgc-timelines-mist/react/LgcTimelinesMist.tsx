'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LgcTimelinesMistProps };
/** 情報を小さなカードにまとめる。 */
export default function LgcTimelinesMist(props: TimelineProps) {
  return <TimelineView {...props} skin="lgc-timelines-mist" className={`lgc-root ${props.className??''}`} />;
}
