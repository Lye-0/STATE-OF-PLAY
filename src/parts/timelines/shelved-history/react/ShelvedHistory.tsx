'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ShelvedHistoryProps };
/** 出来事を時刻札付きの小さな棚に載せ、開いた内容の下に段を残す。 */
export default function ShelvedHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="shelved-history" />;
}
