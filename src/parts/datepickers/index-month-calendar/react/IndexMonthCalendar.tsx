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
/** 七つの曜日索引を、月面から張り出す大きい肩付きの札へ分ける日付選択。月表示の小札を撤去し、48pxの実曜日札と、その下の実日付の列を直結する。選択日の曜日に対応する索引へ同じ色を付け、飾りだけの札でなく、日付を見つける手掛かりとして使う。 */
export default forwardRef<HTMLDivElement, IndexMonthCalendarProps>(function IndexMonthCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
