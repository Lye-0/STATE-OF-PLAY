'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "recessed-dial-number",
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
export type RecessedDialNumberProps = FoundationProps;
/** 半円の目盛りを持つ数値ダイヤル。入力面を固定し、外周の指針だけが最小から最大へ回る。 */
export default forwardRef<HTMLDivElement, RecessedDialNumberProps>(function RecessedDialNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
