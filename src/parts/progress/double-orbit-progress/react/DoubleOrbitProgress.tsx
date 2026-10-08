'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "double-orbit-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
const renderOrbit = (options: Parameters<typeof renderProgress>[0]) => renderProgress(options).replace(/<svg viewBox="0 0 120 120">[\s\S]*?<\/svg>/, "<svg viewBox=\"0 0 240 120\"><path class=\"ff-ring-base\" d=\"M120 60 C92 8 12 8 12 60 C12 112 92 112 120 60 C148 8 228 8 228 60 C228 112 148 112 120 60\"/><path class=\"ff-ring-value\" pathLength=\"100\" d=\"M120 60 C92 8 12 8 12 60 C12 112 92 112 120 60 C148 8 228 8 228 60 C228 112 148 112 120 60\"/></svg>");
export type DoubleOrbitProgressProps = FoundationProps;
/** 左右の二つの軌道を、一本の連続経路として順に辿る進捗表示。標準の円と装飾楕円、独立して動く到達点は撤去する。実割合0–50%で左の軌道、50–100%で右の軌道へ進み、描かれた経路の端がそのまま到達位置になる。二つの別データを表す環ではなく、一つの実進捗の全経路を100へ正規化する。未確定状態では固定した短い中立経路と省略記号を表示する。 */
export default forwardRef<HTMLDivElement, DoubleOrbitProgressProps>(function DoubleOrbitProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderOrbit} mountContent={mountProgress}/>;
});
