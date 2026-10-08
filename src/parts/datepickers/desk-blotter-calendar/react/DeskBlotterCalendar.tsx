'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "desk-blotter-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type DeskBlotterCalendarProps = FoundationProps;
/** 革のマットの上で、一枚の暦紙を二本の巻取り円筒へ掛ける日付選択。四隅の三角留めを廃止し、40px高の上下の円筒と丸い端面、厚いマットの小口を作る。暦紙は円筒の接線へ連続し、読む月・日付・操作は巻かない中央面へ固定する。月送りはその一枚の実暦紙を次の月へ切り替える。 */
export default forwardRef<HTMLDivElement, DeskBlotterCalendarProps>(function DeskBlotterCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
