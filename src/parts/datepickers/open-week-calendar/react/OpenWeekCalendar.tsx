'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-week-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type OpenWeekCalendarProps = FoundationProps;
/** 余白を活かした週の一覧。余計な箱を外し、曜日と日付を大きく揃えて月を読み取る。 */
export default forwardRef<HTMLDivElement, OpenWeekCalendarProps>(function OpenWeekCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
