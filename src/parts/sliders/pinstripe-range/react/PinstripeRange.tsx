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
/** 記入欄と細い仕切りを持つ横尺。つまみの一本の針が量を正確に指す。 */
export default forwardRef<HTMLDivElement, PinstripeRangeProps>(function PinstripeRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
