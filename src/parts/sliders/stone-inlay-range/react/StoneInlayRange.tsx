'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-inlay-range",
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
export type StoneInlayRangeProps = FoundationProps;
/** 石の溝へ滑る小さい楔。台の切れ目とつまみを揃え、量を埋まった溝で読ませる。 */
export default forwardRef<HTMLDivElement, StoneInlayRangeProps>(function StoneInlayRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
