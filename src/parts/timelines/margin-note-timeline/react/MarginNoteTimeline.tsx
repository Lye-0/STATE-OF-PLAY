'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as MarginNoteTimelineProps };
/** 余白の注記と本文の基準線を、記録帳の同じ欄へ整える。細い外側の余白帯、斜体14pxの日付、18pxの見出しを使い、内側の重複する縦罫と細かい下線を取り除く。本文は14pxの落ち着いた行間、状態は独立した13pxの実文字で読む。狭幅も日付と本文を上下に開き、注記だけの細列へ閉じ込めない。 */
export default function MarginNoteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="margin-note-timeline" />;
}
