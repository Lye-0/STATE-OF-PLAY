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
/** 上下の固定レールに、実割合の位置へ進む一つの小さい指標を合わせる進捗表示。元の二レールを保持し、暗い太線とぼかしを抑え、3pxの基準線と12pxの一体指標へ統一する。指標の半幅6pxを両端に予約して、0/100でも全体がレール内へ収まる。 */
export default forwardRef<HTMLDivElement, PairedScaleProgressProps>(function PairedScaleProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
