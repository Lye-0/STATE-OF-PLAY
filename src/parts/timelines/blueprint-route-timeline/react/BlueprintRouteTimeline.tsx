'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BlueprintRouteTimelineProps };
/** 経過を読む図面ログ。日付と状態点を目盛りに揃え、本文は罫線を越えず右側へ展開。 */
export default function BlueprintRouteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="blueprint-route-timeline" />;
}
