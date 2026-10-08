'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-paper-range",
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
export type FoldedPaperRangeProps = FoundationProps;
/** 二つの折面と中心の折返しが、一本の軌道を跨ぐ紙のスライダー。元の折紙のつまみを残し、左の明るい面と右の厚い影の面を別の折れ方向へ合わせる。中心の細い返しと下端の折れを接点へ置き、文字とnativeの操作を固定する。 */
export default forwardRef<HTMLDivElement, FoldedPaperRangeProps>(function FoldedPaperRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
