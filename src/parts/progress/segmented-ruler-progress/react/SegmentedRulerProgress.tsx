'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "segmented-ruler-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type SegmentedRulerProgressProps = FoundationProps;
/** 折尺の五つの面を交互に起こした進捗表示。つながった節と目盛を残し、実値の充填が折れた面を横切る。数値は正面へ固定して読み取れる。 */
export default forwardRef<HTMLDivElement, SegmentedRulerProgressProps>(function SegmentedRulerProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
