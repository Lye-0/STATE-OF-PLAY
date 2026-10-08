'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "pendulum-seat-range",
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
export type PendulumSeatRangeProps = FoundationProps;
/** 固定数値の下に振り子の支点を置く。つまみの中心がレール上の位置と一致する。 */
export default forwardRef<HTMLDivElement, PendulumSeatRangeProps>(function PendulumSeatRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
