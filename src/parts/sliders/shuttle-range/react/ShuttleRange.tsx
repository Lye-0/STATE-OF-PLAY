'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "shuttle-range",
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
export type ShuttleRangeProps = FoundationProps;
/** 二つの爪が上下の細い案内線を抱え、中央の主レールを開けて跨ぐシャトルのスライダー。元の紺の台と明るい操作面を残し、普通の矩形を二つの実爪へ開く。上爪/下爪の端を案内線へ接し、中央の選択量は強い一本の軌道で読む。 */
export default forwardRef<HTMLDivElement, ShuttleRangeProps>(function ShuttleRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
