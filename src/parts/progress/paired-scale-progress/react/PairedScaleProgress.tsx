'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "paired-scale-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type PairedScaleProgressProps = FoundationProps;
/** 二量に見える二本線を廃止し、上下の固定レール間を一本の指標が移動する測定器にする。 */
export default forwardRef<HTMLDivElement, PairedScaleProgressProps>(function PairedScaleProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
