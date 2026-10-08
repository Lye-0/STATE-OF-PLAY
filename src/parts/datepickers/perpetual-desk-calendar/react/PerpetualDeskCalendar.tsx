'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "perpetual-desk-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type PerpetualDeskCalendarProps = FoundationProps;
/** 卓上の万年カレンダー。月の表示札と七列の日付板を分け、下の台座に今日・クリアを置く。 */
export default forwardRef<HTMLDivElement, PerpetualDeskCalendarProps>(function PerpetualDeskCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
