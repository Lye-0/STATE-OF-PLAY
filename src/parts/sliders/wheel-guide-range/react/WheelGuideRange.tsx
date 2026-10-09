'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "wheel-guide-range",
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
export type WheelGuideRangeProps = FoundationProps;
/** スポークと軸を持つ車輪が、下側のレールへ接するスライダー。車輪・走行面・下の枕木を接続し、値はネイティブ入力で即座に確定する。 */
export default forwardRef<HTMLDivElement, WheelGuideRangeProps>(function WheelGuideRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
