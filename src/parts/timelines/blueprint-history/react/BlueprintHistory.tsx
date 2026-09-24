'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BlueprintHistoryProps };
/** 直角の配線と節点を使って、工程をたどる。 */
export default function BlueprintHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="blueprint-history" />;
}
