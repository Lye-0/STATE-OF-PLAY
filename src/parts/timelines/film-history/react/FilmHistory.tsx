'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as FilmHistoryProps };
/** フィルムの送り穴と小さなフレームが、時間を区切る。 */
export default function FilmHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="film-history" />;
}
