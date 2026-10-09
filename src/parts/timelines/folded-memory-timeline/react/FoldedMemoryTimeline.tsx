'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as FoldedMemoryTimelineProps };
/** 実日時を全幅の大きい折面へ載せ、記録紙をその手前へ折り返す。142px以上の日時面は48pxの斜めの自由端と44pxの折り耳を持ち、本文紙が下の42pxへ実際に重なる。44×84pxの戻りが日時面から手前の記録紙へ続き、紙の外は背景へ開く。独立した小さい日付札を横に並べず、日時・折返し・本文が一枚の紙の前後を担う。狭幅は折端28px・重なり32pxへ調整し、実文字は無変形で全文を読む。 */
export default function FoldedMemoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="folded-memory-timeline" />;
}
