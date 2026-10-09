'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "orbital-mark-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type OrbitalMarkProgressProps = FoundationProps;
/** 傾いた軌道面に進捗の弧と終点を示すプログレス。数値は正面に固定し、値が不明なときは終点を表示しない。 */
export default forwardRef<HTMLDivElement, OrbitalMarkProgressProps>(function OrbitalMarkProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
