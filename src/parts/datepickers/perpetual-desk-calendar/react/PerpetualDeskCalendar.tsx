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
/** 二つの開いた三角支持脚で、実際の月の紙面を卓上へ立てる日付選択。月の枠と下の色帯を廃止し、102pxの左右の二脚と82pxの空いた下方を作る。支持脚は暦の読む面へ20px重なり、三角の内部は淡い無地の背景面へ抜け、背後の別の文字を透かさない。日付と操作は支えから離れた上の面に固定する。 */
export default forwardRef<HTMLDivElement, PerpetualDeskCalendarProps>(function PerpetualDeskCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
