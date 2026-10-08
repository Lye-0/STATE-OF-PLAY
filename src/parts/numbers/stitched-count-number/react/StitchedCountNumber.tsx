'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-count-number",
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
export type StitchedCountNumberProps = FoundationProps;
/** 数値の平らな読む芯を、左右の実増減の押環へ渡す織布のスリング。細長い矩形と上下線を廃し、24pxの凹む腰、広い左右の肩、8px/10pxの織った素材端で一枚の布が押環の裏へ続く形にする。縫い目は布の曲がる外の端だけへ置く。native値/単位/当たりは布の張りで変形させず、狭幅は布の下の両環へ操作を分ける。 */
export default forwardRef<HTMLDivElement, StitchedCountNumberProps>(function StitchedCountNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
