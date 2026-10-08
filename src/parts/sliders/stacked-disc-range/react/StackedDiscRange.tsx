'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stacked-disc-range",
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
export type StackedDiscRangeProps = FoundationProps;
/** 三つの薄い円板の小口を、一本の軌道へ積むスライダー。元の積層のつまみを残し、横の単なる縞をやめる。各円板の楕円上面と左右の小さい段差を実際の外形へ合わせ、三つの断面の厚みを静かに読む。 */
export default forwardRef<HTMLDivElement, StackedDiscRangeProps>(function StackedDiscRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
