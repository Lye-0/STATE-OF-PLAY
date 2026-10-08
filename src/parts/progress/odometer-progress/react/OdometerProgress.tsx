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
/** 軽い計器ケースと大きい数字窓の比率を揃える、送り式の進捗表示。元の計器と横の送り帯を保持し、暗い全周枠を淡い6–9pxの成形縁へ抑える。数字窓は48pxの等幅活字、送り帯は20px/20px間隔の固定した目盛りへ揃え、数字を主役にする。 */
export default forwardRef<HTMLDivElement, OdometerProgressProps>(function OdometerProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
