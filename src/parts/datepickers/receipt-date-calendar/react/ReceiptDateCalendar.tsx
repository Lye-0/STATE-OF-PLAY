'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "receipt-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type ReceiptDateCalendarProps = FoundationProps;
/** 一枚の月の伝票紙を、斜めの切取り受けと押えの下へ通す暦。四十二枚の小票の反復を廃止し、全幅30pxの厚い押え、連続した刃の小口、その下に続く一枚の読む紙と切り離す自由端へ作り直す。実月と実七列の間に56pxを予約し、刃を曜日や数字へ重ねない。押えの奥/手前で同じ紙が続き、紙の終端は机から離れた切断輪郭で見せる。 */
export default forwardRef<HTMLDivElement, ReceiptDateCalendarProps>(function ReceiptDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
