'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "terraced-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type TerracedProgressProps = FoundationProps;
/** 階段状の到達面を一つの領域として満たす。増加量が右上へ上る地形になる。 */
export default forwardRef<HTMLDivElement, TerracedProgressProps>(function TerracedProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
