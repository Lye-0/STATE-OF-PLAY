'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "orbit-date-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type OrbitDateCalendarProps = FoundationProps;
/** 月の上弧と、選択日の円を同じ静かな曲率へ揃える日付選択。元の曲線と丸い選択点を保持し、上弧を3pxへ、左右の月送りを36pxの円へ精密化する。読む月面の下端と曜日グリッドは真っ直ぐに固定し、曲線を文字や入力へ波及させない。 */
export default forwardRef<HTMLDivElement, OrbitDateCalendarProps>(function OrbitDateCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
