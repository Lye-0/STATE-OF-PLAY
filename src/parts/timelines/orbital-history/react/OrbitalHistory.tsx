'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as OrbitalHistoryProps };
/** 軌道の縁に沿って並ぶ日付と、開くと広がる観測リング。 */
export default function OrbitalHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="orbital-history" />;
}
