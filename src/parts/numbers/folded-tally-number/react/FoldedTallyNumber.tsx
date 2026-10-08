'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-tally-number",
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
export type FoldedTallyNumberProps = FoundationProps;
/** 一枚の数量紙を片側だけ大きく返し、減らす押面を露出した裏折面、増やす押面を前の紙の下の自由端へ置く数値入力。四辺を閉じる左右対称の枠を廃し、52pxの操作列、68pxの裏へ返る折面、16pxの前紙の重なり、下へL形に続く一枚の読む紙へ変える。上と下のnative操作の間は本当の開いた側端となり、数値は前の固定平面の全文を使って読む。紙の折りを小さい記号へせず、減らす/入力/増やすを表裏の異なる実位置へ組む。 */
export default forwardRef<HTMLDivElement, FoldedTallyNumberProps>(function FoldedTallyNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
