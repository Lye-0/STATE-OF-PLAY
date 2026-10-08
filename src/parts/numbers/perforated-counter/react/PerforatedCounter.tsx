'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "perforated-counter",
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
export type PerforatedCounterProps = FoundationProps;
/** 一枚の孔のあいた数量紙を、上の二つのnative送り輪から下へ出す数値操作。紙の中央に浮いていた左右の歯車を上の送り端へ移し、押面の中心は端から46px、紙の始端は80px、上の実孔の中心は88pxへ揃える。押面の外の歯の輪は紙の上の半径7pxの実孔へ入り、数値は下の平らな一枚紙で読む。数字窓の26px余白へ孔や輪を通さない。確定値で逆向きに動く輪と固定のnative押面/数字を分離し、狭幅も同じ上の送り端を保つ。 */
export default forwardRef<HTMLDivElement, PerforatedCounterProps>(function PerforatedCounter(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
