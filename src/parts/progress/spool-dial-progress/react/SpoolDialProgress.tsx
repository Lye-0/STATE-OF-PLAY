'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "spool-dial-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type SpoolDialProgressProps = FoundationProps;
/** 一つの太い巻取り環と、固定した中央の数字窓を持つリール式進捗表示。元の同心リールを保持し、重複した細環と破線を撤去する。174pxの実割合環と112pxの淡い数字窓へ線幅と間隔を統一し、0%に着色量を残さず、100%で環全周を満たす。 */
export default forwardRef<HTMLDivElement, SpoolDialProgressProps>(function SpoolDialProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
