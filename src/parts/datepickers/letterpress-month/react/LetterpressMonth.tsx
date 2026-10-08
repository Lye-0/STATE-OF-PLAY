'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "letterpress-month",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type LetterpressMonthProps = FoundationProps;
/** セリフの数字と週の基線を、薄い活版の月面へ揃える日付選択。元の活字と罫線を保持し、年月は24px、日付は15pxへ比率を揃える。二重の上下基準は5pxへ抑え、選択日は同じ文字位置のまま一つの内側の版面として明確に示す。 */
export default forwardRef<HTMLDivElement, LetterpressMonthProps>(function LetterpressMonth(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
