'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "odometer-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type OdometerProgressProps = FoundationProps;
/** 数値の固定窓と太い送りベルト。進捗量を帯の走行距離で見せる。 */
export default forwardRef<HTMLDivElement, OdometerProgressProps>(function OdometerProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
