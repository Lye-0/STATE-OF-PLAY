'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bridge-saddle-range",
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
export type BridgeSaddleRangeProps = FoundationProps;
/** 一本の主レールを、橋脚型のnativeつまみで跨ぐスライダー。元の橋の輪郭を残し、強い6pxの主軌道と薄い1pxの上の補助線へ整理する。38pxつまみの中心と19px内側の軌道の端点を一致し、読む数字とnativeの操作を固定する。 */
export default forwardRef<HTMLDivElement, BridgeSaddleRangeProps>(function BridgeSaddleRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
