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
/** 大きい数値と、五つの階段状の通過面を持つ進捗表示。元の五階段を維持し、面の高さと進行方向の対応をそのまま残す。20%ごとの固定区切りに対し、充填は実割合で進む。説明は実際の階段形へ一致させ、存在しない斜め終端の説明を外す。 */
export default forwardRef<HTMLDivElement, CaptionBandProgressProps>(function CaptionBandProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
