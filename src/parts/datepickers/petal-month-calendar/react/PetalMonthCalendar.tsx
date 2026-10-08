'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "petal-month-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type PetalMonthCalendarProps = FoundationProps;
/** 月の大きい花弁と選択日の小さい花弁を、同じ対角の曲率へ揃える暦。元の非対称曲線を保持し、42px/4pxの月の肩、16px/2pxの実月送り、14px/2pxの選択日へ大きさを配分する。読む七列は直線で揃え、花弁を文字の変形へ使わない。 */
export default forwardRef<HTMLDivElement, PetalMonthCalendarProps>(function PetalMonthCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
