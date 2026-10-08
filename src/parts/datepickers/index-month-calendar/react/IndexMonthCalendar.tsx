'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "index-month-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type IndexMonthCalendarProps = FoundationProps;
/** 月の索引票。見出しを上のタブへ、日付は下の一枚の記録面へ配置する。 */
export default forwardRef<HTMLDivElement, IndexMonthCalendarProps>(function IndexMonthCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
