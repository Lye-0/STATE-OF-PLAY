'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-week-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type OpenWeekCalendarProps = FoundationProps;
/** 一枚の厚い支持板が左右へ蛇行し、六つの実週の受棚を連続して作る暦。独立したU枠六個を全廃し、24pxの水平受面と9pxの小口、左/右へ交互に曲がる一筆の支持へ変える。週間の空隙は片側が開き、七列の数字は各受棚の同じ位置へ固定する。選択日は実週の読む床で示し、架空の棚や余分な値を足さない。 */
export default forwardRef<HTMLDivElement, OpenWeekCalendarProps>(function OpenWeekCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
