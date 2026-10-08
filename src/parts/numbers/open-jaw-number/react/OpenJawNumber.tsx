'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-jaw-number",
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
export type OpenJawNumberProps = FoundationProps;
/** 数値窓を上下の開いた顎で保持する操作。元の二つの開いた顎を保持し、顎の始端を12pxずつnative押面へ延ばして同じ8pxの側材/10pxの上下材へ揃える。上下の部材は32pxの読む余白の外へ置き、数値を囲む括弧の飾りから、固定した窓と実操作端の接続へ整える。狭幅も読む窓の両端をnative押面の内側へ残す。 */
export default forwardRef<HTMLDivElement, OpenJawNumberProps>(function OpenJawNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
