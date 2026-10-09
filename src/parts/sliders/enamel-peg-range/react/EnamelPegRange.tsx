'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "enamel-peg-range",
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
export type EnamelPegRangeProps = FoundationProps;
/** 明るいプレートからはっきり浮かぶ青灰の琺瑯ペグ。握る頭と細い軸を同じ素材で結び、ネイティブ入力の位置を見つけやすくする。 */
export default forwardRef<HTMLDivElement, EnamelPegRangeProps>(function EnamelPegRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
