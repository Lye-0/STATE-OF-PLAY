'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LgcTimelinesLensProps };
/** 現在と過去を、明快な一本の線へ。 */
export default function LgcTimelinesLens(props: TimelineProps) {
  return <TimelineView {...props} skin="lgc-timelines-lens" className={`lgc-root ${props.className??''}`} />;
}
