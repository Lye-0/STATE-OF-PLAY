'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "caption-band-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type CaptionBandProgressProps = FoundationProps;
/** 実数値を印刷した紙帯が前後へ折り返す進捗表示。裏へ回る帯と正面のキャプションをつなぎ、前面の下縁に実値の細い進捗線を置く。 */
export default forwardRef<HTMLDivElement, CaptionBandProgressProps>(function CaptionBandProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
