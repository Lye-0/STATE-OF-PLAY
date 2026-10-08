'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "clockface-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type ClockfaceProgressProps = FoundationProps;
/** 扇形の計量盤。太い有効弧と目盛りを分け、百分率の読み取りを助ける。 */
export default forwardRef<HTMLDivElement, ClockfaceProgressProps>(function ClockfaceProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
