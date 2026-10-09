'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ArchiveSpineTimelineProps };
/** 保管記録の背と紙面の階層を揃える。72pxの日付列、実記録の本文面、四角い綴じ点を細い背へ接続し、本文面は下の3pxだけで紙の厚みを示す。日付13px・見出し16px・本文14pxへ広げ、狭幅では日付を上へ移して全文を読める幅を確保する。native summaryは64px以上、状態は色と実文字の両方で読める。 */
export default function ArchiveSpineTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="archive-spine-timeline" />;
}
