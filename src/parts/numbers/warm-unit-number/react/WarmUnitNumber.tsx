'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, mountNumber} from '../../../../shared/foundation/number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "warm-unit-number",
  "kind": "numbers",
  "variant": "essential",
  "label": "分量を調整する",
  "description": "",
  "defaultValue": 250,
  "min": 0,
  "max": 2000,
  "step": 5,
  "unit": "g"
};
export type WarmUnitNumberProps = FoundationProps;
/** Warm Unit Number: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, WarmUnitNumberProps>(function WarmUnitNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
