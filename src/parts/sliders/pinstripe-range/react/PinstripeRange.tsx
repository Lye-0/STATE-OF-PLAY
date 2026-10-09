'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "pinstripe-range",
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
export type PinstripeRangeProps = FoundationProps;
/** 上下の横尺を挟む可動のバーニアと、中央の細い指示線を持つスライダー。目盛りの上に実際のキャリッジを通し、値を指す線とつかむ枠を分ける。 */
export default forwardRef<HTMLDivElement, PinstripeRangeProps>(function PinstripeRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
