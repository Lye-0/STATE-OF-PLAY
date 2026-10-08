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
/** 開いた顎の間へ数字を固定し、上下の測定面が数量に合わせて開閉する。 */
export default forwardRef<HTMLDivElement, OpenJawNumberProps>(function OpenJawNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
