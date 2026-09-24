'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as PulseHistoryProps };
/** 進行中の出来事にだけ、波形の輪郭が浮かび上がる。 */
export default function PulseHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="pulse-history" />;
}
