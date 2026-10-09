'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as LetterpressHistoryTimelineProps };
/** 実日時・出来事・本文が異なる基線と余白を共有する非対称の活版組版。72pxの実日時は全幅の上段で右へ寄せ、26pxの実summaryは次の左の基線へ、本文は96px深く掛け込む。大きい日時が作る上の空白、実見出しの左の面、本文の内側の幅で一件の読む領域を組む。普通の同じ左揃えの縦積みを廃し、任意の長い日時も最初から全幅の独立段で組む。狭幅は日時48px・本文の掛け込み24pxへ調整し、字面とnative押面は変形しない。 */
export default function LetterpressHistoryTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="letterpress-history-timeline" />;
}
