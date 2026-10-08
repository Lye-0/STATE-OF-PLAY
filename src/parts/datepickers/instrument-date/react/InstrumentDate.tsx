'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "instrument-date",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type InstrumentDateProps = FoundationProps;
/** 七つの曜日の実尺度軸に、選択日の三面のキャリッジを合わせる日付選択。二重の全周ケースと普通の年月窓を廃止し、大きい固定年月ドラム、実月送りのレバー、全六週へ続く七本の尺度軸へ組み直す。年月ドラムと実月送りは共通の横軸でつなぎ、二本の支脚がドラム下端と曜日尺度盤へ各2px重なる。選択した日だけがその曜日の軸へ留まり、月送りで実日付が変わる。無意味な目盛りや架空の計測値を加えず、文字と操作位置は固定する。 */
export default forwardRef<HTMLDivElement, InstrumentDateProps>(function InstrumentDate(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
