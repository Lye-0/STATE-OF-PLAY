'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ceramic-count-number",
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
export type CeramicCountNumberProps = FoundationProps;
/** 確定量を器の縁の弧で読む陶製の数値操作。元の楕円の器と量の弧を保持し、左下へ偏る濃い影を廃し、器とnative押面を同じ釉薬の白と5px/8pxの成形面へ揃える。量の弧は器の外の14%の帯だけへ置き、数字と単位は32px内側の無地の平面で読む。反射や弧で文字/操作範囲を歪めない。 */
export default forwardRef<HTMLDivElement, CeramicCountNumberProps>(function CeramicCountNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
