'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "counter-drum-number",
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
export type CounterDrumNumberProps = FoundationProps;
/** 回転ドラムの円筒と上下の数字窓を分ける。確定値に応じて背面の罫線が送り出され、入力窓は固定。 */
export default forwardRef<HTMLDivElement, CounterDrumNumberProps>(function CounterDrumNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
