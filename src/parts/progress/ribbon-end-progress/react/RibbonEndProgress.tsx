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
/** 細い縦の巻芯から、進んだ量だけ一枚の幅広いリボンを引き出す進捗表示。黄色い通常棒と小さい点を廃止し、14pxの三面巻芯と68px幅の布、実終端の大きい燕尾切りへ再構築する。紙面上の余分な飾りでなく、出た布の量そのものが実割合へ一致する。数値は布から離れた固定面に置く。 */
export default forwardRef<HTMLDivElement, RibbonEndProgressProps>(function RibbonEndProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
