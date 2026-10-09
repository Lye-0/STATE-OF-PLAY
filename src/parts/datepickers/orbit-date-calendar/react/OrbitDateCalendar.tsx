'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "orbit-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type OrbitDateCalendarProps = FoundationProps;
/** 月見出しを二重の細い軌道で支えるカレンダー。日付は通常の曜日列を保ち、月送りの操作を軌道の両端に置く。 */
export default forwardRef<HTMLDivElement, OrbitDateCalendarProps>(function OrbitDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
