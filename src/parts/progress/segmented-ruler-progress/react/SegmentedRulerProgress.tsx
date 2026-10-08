'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "segmented-ruler-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type SegmentedRulerProgressProps = FoundationProps;
/** 十の実区間と真っ直ぐな上下の基準を持つ、折尺の進捗表示。元の十区画を保持し、全体のskewを外して高さ42pxへ統一する。区画は固定した10%ごと、進行面は実割合の幅だけを満たし、部分到達の位置も見える。数字は定規の上へ固定する。 */
export default forwardRef<HTMLDivElement, SegmentedRulerProgressProps>(function SegmentedRulerProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
