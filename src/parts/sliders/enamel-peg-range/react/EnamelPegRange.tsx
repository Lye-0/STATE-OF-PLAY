'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "enamel-peg-range",
  "kind": "sliders",
  "variant": "essential",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": 62,
  "min": 0,
  "max": 100,
  "step": 1,
  "unit": "%",
  "range": false
};
export type EnamelPegRangeProps = FoundationProps;
/** 大きい釉薬の頭と細い8pxの脚を持つピンで、一本の軌道の値を示すスライダー。黄色の普通の角丸つまみをやめ、実際に絞った脚と一つの白い反射を持つ頭へ変える。釉薬の無地を広く、影の縁を下に限定し、nativeの操作を保持する。 */
export default forwardRef<HTMLDivElement, EnamelPegRangeProps>(function EnamelPegRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
