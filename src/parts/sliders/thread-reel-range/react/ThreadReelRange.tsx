'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "thread-reel-range",
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
export type ThreadReelRangeProps = FoundationProps;
/** 二つの厚いフランジと、間に巻かれた糸の胴を持つリールのスライダー。二重円の普通のつまみをやめ、52px高の巻き胴の輪郭を実際に絞り、一本の張った糸が巻き端と右の小さい糸口へ接する。nativeの値と固定の読む面を保つ。 */
export default forwardRef<HTMLDivElement, ThreadReelRangeProps>(function ThreadReelRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
