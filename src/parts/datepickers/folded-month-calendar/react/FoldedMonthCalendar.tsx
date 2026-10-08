'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-month-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type FoldedMonthCalendarProps = FoundationProps;
/** 月の六つの週を、実際の折り返し面へ一段ずつ載せる日付選択。ピンクの月見出し帯を廃止し、週ごとに上下10pxの折り返しと12pxの斜め肩を持つ紙面へ分ける。読む七列は全段で同じ位置を保ち、日付は折り面から離れた中央に固定する。月送りで新しい六週が同じ構造へ入る。 */
export default forwardRef<HTMLDivElement, FoldedMonthCalendarProps>(function FoldedMonthCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
