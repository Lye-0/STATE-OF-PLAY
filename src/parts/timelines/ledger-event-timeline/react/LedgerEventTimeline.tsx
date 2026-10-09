'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LedgerEventTimelineProps };
/** 一本の実日時の控えと、開く記録面を残し橋でつなぐ帳簿。104pxの日時列は全記録を通して連続し、その横の24pxの実空隙を40×36pxの紙橋が渡る。橋の端は控えと本文面へ8pxずつ入り、日付を小札へ分割しない。実日時は18px、見出しはセリフ18px、本文は14pxで読む。狭幅では日時の控えを上へ回し、36×40pxの残し橋を縦へつなぎ替え、全幅の実記録を開く。 */
export default function LedgerEventTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="ledger-event-timeline" />;
}
