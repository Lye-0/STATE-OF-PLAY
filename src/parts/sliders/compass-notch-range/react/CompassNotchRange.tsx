'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "compass-notch-range",
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
export type CompassNotchRangeProps = FoundationProps;
/** 切欠きのある方位盤を、細い一本の線へ通すスライダー。元の多角形を残し、八つの厚い縁と明るい中央、細い二方向の基準線を明快にする。黄色の台に沈んだ輪郭を濃い小口で分け、盤の中心と主軌道を合わせる。 */
export default forwardRef<HTMLDivElement, CompassNotchRangeProps>(function CompassNotchRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
