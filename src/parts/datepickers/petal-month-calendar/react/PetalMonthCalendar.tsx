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
/** 二枚の花弁が中央で重なる月見出しを持つカレンダー。後ろの左弁と前の右弁を縁と陰で分け、日付は通常の曜日列に整列する。 */
export default forwardRef<HTMLDivElement, PetalMonthCalendarProps>(function PetalMonthCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
