'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "terraced-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type TerracedProgressProps = FoundationProps;
/** 柔らかい五段のテラスへ、実割合を満たす進捗表示。元の段状の進行を保持し、暗いぼかしと強い緑の勾配を廃止する。固定した段の高さと1pxの境界、影のない到達面で終端を明確にし、数値と進む量を揃える。 */
export default forwardRef<HTMLDivElement, TerracedProgressProps>(function TerracedProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
