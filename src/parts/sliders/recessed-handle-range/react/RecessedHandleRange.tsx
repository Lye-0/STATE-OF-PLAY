'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "recessed-handle-range",
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
export type RecessedHandleRangeProps = FoundationProps;
/** 上下の二つのずれた肩で溝縁を抱え、片側の深い指掛かりで動かすスライダー。二重の角丸のつまみをやめ、64pxの斜めの断面と28pxの低い指の面を持つ引き手へ変える。実溝は移動範囲の全幅にし、主軌道だけをnative中心の32px内側へ合わせ、最小/最大でも肩が溝縁へ接する。 */
export default forwardRef<HTMLDivElement, RecessedHandleRangeProps>(function RecessedHandleRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
