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
/** レールを跨ぐ橋脚型のつまみ。動かす位置と橋の支点を一致させる。 */
export default forwardRef<HTMLDivElement, BridgeSaddleRangeProps>(function BridgeSaddleRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
