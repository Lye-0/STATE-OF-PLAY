'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "outline-range",
  "kind": "sliders",
  "variant": "outline",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": [
    24,
    78
  ],
  "min": 0,
  "max": 100,
  "step": 5,
  "unit": "%",
  "range": true
};
export type OutlineRangeProps = FoundationProps;
/** Outline Range: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, OutlineRangeProps>(function OutlineRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
