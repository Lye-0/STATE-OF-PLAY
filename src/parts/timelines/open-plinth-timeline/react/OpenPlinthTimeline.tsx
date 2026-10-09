'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as OpenPlinthTimelineProps };
/** 開いた記録台の支持線と厚みを揃える。実本文面の下8pxだけを台の厚みへ広げ、16pxの四角い節が細い支持線を結ぶ。台の外は本当の背景で抜き、本文の大枠や偽の飾り文字を増やさない。14pxの日付、16pxの見出しと14pxの本文の序列を整え、狭幅も全幅の読み順と64px以上のnative操作を保つ。 */
export default function OpenPlinthTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="open-plinth-timeline" />;
}
