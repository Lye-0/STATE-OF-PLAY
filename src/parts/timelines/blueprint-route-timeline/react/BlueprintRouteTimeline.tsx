'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as BlueprintRouteTimelineProps };
/** 全履歴を一本の開いた幅40pxの図面経路で結ぶ。実日時は120×72px以上の角の節へ載り、経路はその角を回って次の反対側の実日時へ続く。実summaryと本文の読む面は経路の内側へ12px重なり、開いた余白へ広がる。独立した円と矢印を廃し、順序を表す一体の面だけを使う。経路の長さは収納する実本文で決まり、時間差や架空目盛りを表さない。狭幅は経路24px、記録面の重なり12pxで全文を読む。 */
export default function BlueprintRouteTimeline(props: TimelineProps) {
  return <TimelineView {...props} skin="blueprint-route-timeline" />;
}
