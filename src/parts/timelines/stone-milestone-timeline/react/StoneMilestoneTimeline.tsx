'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StoneMilestoneTimelineProps };
/** 時系列を一つの露頭の割れ目として読む。92pxの実日時面と記録面の間に30pxの本当の裂け目を通し、各日時とsummaryの高さに54×28pxの残った石の橋を置く。橋は日時側と記録側へ12pxずつ入り、裂け目の上下は背景へ抜ける。各行の面は途切れず全高の岩体へ続き、本文を小さい丸角石へ分割しない。狭幅は日時を上の切口へ移し、34pxの残存橋で下の実記録面へつなぐ。 */
export default function StoneMilestoneTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stone-milestone-timeline" />;
}
