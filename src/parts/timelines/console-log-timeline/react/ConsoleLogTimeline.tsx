'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as ConsoleLogTimelineProps };
/** 実ログ全体を、一つの開放金属チャンネルの底面へ読む。実履歴の見出しが後ろの壁、各実日付とログが連続した底面へ載り、40pxの折曲げ側面と下48pxの前端が全高の一体材を支える。右端は斜めの断面を露出して開き、日時を横の色列へ閉じ込めない。全記録は同じ底面を続け、イベントごとの金属箱や架空のノブを作らない。狭幅は側面20px・前端44pxへ縮め、実文字14px以上とnative押面を保つ。 */
export default function ConsoleLogTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="console-log-timeline" />;
}
