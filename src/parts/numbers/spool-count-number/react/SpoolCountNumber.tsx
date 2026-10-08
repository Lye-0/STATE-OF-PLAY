'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderNumber, } from '../../../../shared/foundation/number';
import {mountSculptedNumber as mountNumber} from '../../../../shared/foundation/sculpted-number';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "spool-count-number",
  "kind": "numbers",
  "variant": "essential",
  "label": "必要な量を、ちょうどよく。",
  "description": "",
  "defaultValue": 3,
  "min": 0,
  "max": 24,
  "step": 1,
  "unit": "UNITS"
};
export type SpoolCountNumberProps = FoundationProps;
/** 糸巻きの数値操作。元の中央の巻いた素材と両端の丸い操作を保持し、横罫は12pxの左右の巻き幅だけへ移す。native数値と単位は線を一切通さない平らな同じ巻き芯へ置き、12pxの木のフランジと5px/8pxの端面を作る。丸い増減の押面も芯と同じ木の上面・下面へ揃え、紙貼りの数値と別素材のキーを廃する。 */
export default forwardRef<HTMLDivElement, SpoolCountNumberProps>(function SpoolCountNumber(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderNumber} mountContent={mountNumber}/>;
});
