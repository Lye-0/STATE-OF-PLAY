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
/** 全高の丸い掘込みの内側へ、実際の月の読む面を収める暦。薄い二重枠を廃止し、46%の大きい弧を持つ石面と、20pxの深い上切断面、16pxの内側の壁へ作り直す。月・七列の日付・操作は曲がらない中央の平底に固定し、深い端面を文字へ被せない。 */
export default forwardRef<HTMLDivElement, RecessedDateCalendarProps>(function RecessedDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
