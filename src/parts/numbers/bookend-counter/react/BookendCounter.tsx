'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bookend-counter",
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
export type BookendCounterProps = FoundationProps;
/** 二つの実操作の本立てが数値の紙束を保持するカウンター。元の左右の押面と中央の紙束を保持し、濃い茶の巨大な操作面を明るい木へ、紙の縦罫を無地の読む面へ揃える。幅44pxの本立てと高さ126pxの紙束の接触を0gapで保ち、6pxの木の端と8pxの紙の小口を見せる。狭幅では長い数値の紙を全幅へ広げ、本立ての二つの操作を下へ揃える。 */
export default forwardRef<HTMLDivElement, BookendCounterProps>(function BookendCounter(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
