'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "console-counter-number",
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
export type ConsoleCounterNumberProps = FoundationProps;
/** 数字の固定窓と左右の操作キーを一体の卓上計数機にまとめ、下段のインジケータが範囲を示す。 */
export default forwardRef<HTMLDivElement, ConsoleCounterNumberProps>(function ConsoleCounterNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
