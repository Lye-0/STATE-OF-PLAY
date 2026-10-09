'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RecessedRecordTimelineProps };
/** 全記録を、一方が全長で開いた凹曲面の床へ読む。左の本当の外形は全高を通じて80から28、104pxへ大きく湾曲し、そこから24pxの曲がる壁面だけが床へ続く。反対側は上の囲いを作らず、床の切断面24pxだけを露出する。固定の四辺枠と角丸ケースを廃し、20件に増えても全長の輪郭が内容の収納量に沿って曲がる。狭幅は曲面を比例縮小し、日時・見出し・本文は広い平底へ平らに保つ。 */
export default function RecessedRecordTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="recessed-record-timeline" />;
}
