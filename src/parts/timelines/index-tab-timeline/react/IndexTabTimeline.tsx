'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as IndexTabTimelineProps };
/** 実日時の連続する後帯を、前の記録紙の負の索引切口から読む。全履歴の後帯は一つで、前の紙が上・下20pxずつを覆い、140pxの実日時窓だけを左・中央・右へ順に開く。小さい正のタブや個別のフォルダ外周は廃し、実日時と全幅の本文が同じ連続索引を担う。切口の二角20pxは本当の後帯へ抜け、任意の長い日時は窓の高さを自然に広げる。本文面は全幅で読み、native文字を切口で切らない。 */
export default function IndexTabTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="index-tab-timeline" />;
}
