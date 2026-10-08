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
/** 花弁のような縁を持つ月間票。日付面を歪めず、角と選択日の小さな面だけを柔らかくする。 */
export default forwardRef<HTMLDivElement, PetalMonthCalendarProps>(function PetalMonthCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
