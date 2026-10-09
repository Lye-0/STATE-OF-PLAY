'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LoopHistoryTimelineProps };
/** 輪の日付と本文の重みを揃える。実日時の88pxの輪郭、記録の下線と状態の線を同じ材へまとめ、選択だけが強い丸札を廃する。日時14px・セリフ見出し18px・本文14pxへ広げ、実本文面を輪の横の余白へ開く。狭幅は輪を全幅へ広げ、長い日時を省略せず、その下で記録を読む。 */
export default function LoopHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="loop-history-timeline" />;
}
