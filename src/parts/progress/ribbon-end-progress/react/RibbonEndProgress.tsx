'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ribbon-end-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type RibbonEndProgressProps = FoundationProps;
/** 旗の形に開いた帯へ進捗を染める。固定した終端へ色面が到達する構図。 */
export default forwardRef<HTMLDivElement, RibbonEndProgressProps>(function RibbonEndProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
