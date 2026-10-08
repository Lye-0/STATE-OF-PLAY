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
/** 薄い円のリムと一つの軸を持つホイールのスライダー。元のホイールを残し、大きい四角の目盛りと重い同心円をやめる。主軌道の下に細い5pxの目盛りを離して置き、動く円の中心を一本の軌道へ合わせる。 */
export default forwardRef<HTMLDivElement, WheelGuideRangeProps>(function WheelGuideRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
