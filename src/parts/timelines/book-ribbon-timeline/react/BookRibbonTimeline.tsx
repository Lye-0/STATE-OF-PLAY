'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BookRibbonTimelineProps };
/** 日付の実しおりと本文を、余白と同じ基準へ揃える。84pxのしおりの実日付を14pxへ広げ、下の16pxの自由端は背景へ抜く。本文は紙の箱へ囲わず、しおりに隣る一つの記録面として読む。黄土色の面積を日時だけへ絞り、実見出し16px・本文14pxと18pxの余白を確保する。狭幅は日付を上へ移し、切欠きの位置を読む面の外へ残す。 */
export default function BookRibbonTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="book-ribbon-timeline" />;
}
