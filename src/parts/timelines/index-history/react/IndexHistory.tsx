'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as IndexHistoryProps };
/** インデックスのついたカードを開き、奥の説明を読む。 */
export default function IndexHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="index-history" />;
}
