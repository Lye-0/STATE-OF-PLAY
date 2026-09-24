'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as SwitchyardTimelineProps };
/** レールと駅のような節点をたどり、出来事の詳細を開く。 */
export default function SwitchyardTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="switchyard-timeline" />;
}
