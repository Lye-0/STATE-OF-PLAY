'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "rail-stop-number",
  "kind": "numbers",
  "variant": "essential",
  "label": "必要な量を、ちょうどよく。",
  "description": "",
  "defaultValue": 3,
  "min": 0,
  "max": 24,
  "step": 1,
  "unit": "UNITS"
};
export type RailStopNumberProps = FoundationProps;
/** 確定値を赤いストップで読むレール数量操作。元の赤い位置材と左右の半円押面を保持し、目盛り床は5pxの一つの実レールへ接し、両端を操作面へ12px伸ばす。ストップの幅22px/厚18pxと上下の材料面を揃え、確定値に応じて同じレールの内側を移動する。数字窓は26pxの下余白で動く材料から離し、レールの動きでもnative文字/当たりは固定する。 */
export default forwardRef<HTMLDivElement, RailStopNumberProps>(function RailStopNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
