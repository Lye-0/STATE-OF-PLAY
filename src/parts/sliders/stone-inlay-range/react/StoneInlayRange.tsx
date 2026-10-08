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
/** 丸い石の台に、明るい小口を持つ濃い石のインレイを通すスライダー。元の溝と直線の操作面を残し、44px高の操作面を濃く、縁を明るくして埋もれを防ぐ。小口の3pxの厚みを主レールと同じ軸へ揃える。 */
export default forwardRef<HTMLDivElement, StoneInlayRangeProps>(function StoneInlayRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
