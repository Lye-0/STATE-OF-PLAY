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
/** 上下に折れた札の谷へ数値を収め、増減で背面の折り目だけを送り出す。 */
export default forwardRef<HTMLDivElement, FoldedTallyNumberProps>(function FoldedTallyNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
