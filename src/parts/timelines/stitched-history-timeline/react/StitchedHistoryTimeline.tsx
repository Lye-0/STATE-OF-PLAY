'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as StitchedHistoryTimelineProps };
/** 時系列の実接点を、大きい連続チェーンステッチへ変える。76pxの縫い代の実孔に日時の始点を揃え、28pxの長円糸が次の接点へ伸びる。上のループの先端を次の短い濃い糸がくぐり、前後の層を分ける。本文が伸びても糸の上端と次の日時の接点は固定し、架空の小さいステッチ列を本文へ増やさない。狭幅は縫い代46px・ループ20pxへ縮め、日時と本文14px以上の読む面を広く確保する。 */
export default function StitchedHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="stitched-history-timeline" />;
}
