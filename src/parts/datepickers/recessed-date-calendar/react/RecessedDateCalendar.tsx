'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "recessed-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type RecessedDateCalendarProps = FoundationProps;
/** 凹面の日時コントロール。月表示と日付を明るい内面に収め、押した日の薄い影で状態を伝える。 */
export default forwardRef<HTMLDivElement, RecessedDateCalendarProps>(function RecessedDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
