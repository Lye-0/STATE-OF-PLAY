'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as RailwayLogTimelineProps };
/** 実履歴の順序を、二本のレールと駅の節へ揃える。幅20pxの路線は枕木と二本の2pxのレールで連続し、20pxの駅点が完了・進行・予定の実文字へ対応する。日付と出来事を20pxの空隙で区別し、本文の下線を2pxの共通基準へまとめる。狭幅では日付を各駅の上へ移し、文字やクリック位置をhoverで動かさない。 */
export default function RailwayLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="railway-log-timeline" />;
}
