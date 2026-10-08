'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-block-number",
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
export type StoneBlockNumberProps = FoundationProps;
/** アーチの数値窓を持つ石の数量操作。元の大きいアーチと明るい窓を保持し、左右のnative押面も同じ石の曲がる端石に揃える。土台の10pxの断面、窓の6pxの奥の面、押面の7pxの下面を分け、尖った白い矩形キーを置かない。長い数値と単位は彫った平らな窓へ置き、狭幅は同じアーチの下へ二つの操作石を揃える。 */
export default forwardRef<HTMLDivElement, StoneBlockNumberProps>(function StoneBlockNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
