'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "rail-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type RailDateCalendarProps = FoundationProps;
/** 上のレールに載せた二つの月送りから、日付の紙面を吊るす暦。ヘッダーの上下の細線を廃止し、6pxの実レール・二つの成形された月送り台車・16pxの二吊具へ作り直す。吊具は曜日面へ10px重なり、日付面はその下へ連続する。月と日付の読みは装飾から離して固定する。 */
export default forwardRef<HTMLDivElement, RailDateCalendarProps>(function RailDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
