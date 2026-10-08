'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-grid-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type StoneGridCalendarProps = FoundationProps;
/** 平日の五列を一枚の石台へ、土日の二列を深い切込みへ載せる暦。四十二の同じ面取りキーを廃止し、全六週へ続く一体の高い石台と18px低い週末の受面、14pxの切断面へ再構成する。曜日と日付は同じ七列に固定し、平日と週末の間に14pxの切断面の余白を予約して読む数字を石の縁から離す。選択した日だけがその実面上で明瞭に変わる。 */
export default forwardRef<HTMLDivElement, StoneGridCalendarProps>(function StoneGridCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
