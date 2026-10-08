'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bridge-control-number",
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
export type BridgeControlNumberProps = FoundationProps;
/** 固定したnative数字窓の下で、左右の操作支点を結ぶ梁が確定値に応じて傾く数値操作。元の天秤の関係を保持し、梁を数字面から切り離して実操作支柱の中心間へ渡す。12px梁の中央は下から52px、30pxの支えの頂点も同じ52pxへ揃える。最大±6度の両端は高さ72pxの固定操作支柱へ入る。狭幅は数字窓を全幅上段へ、操作柱と梁を下段へ分ける。数字・caret・値の確定は材の動きを待たない。 */
export default forwardRef<HTMLDivElement, BridgeControlNumberProps>(function BridgeControlNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
