'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "caliper-jaw-range",
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
export type CaliperJawRangeProps = FoundationProps;
/** 固定顎と可動顎をレールの上下へ分けたノギス。動く顎が数値の位置を直接示す。 */
export default forwardRef<HTMLDivElement, CaliperJawRangeProps>(function CaliperJawRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
