'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-meter-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type StitchedMeterProgressProps = FoundationProps;
/** 離れた上下の布片を、進んだ割合だけ縫い合わせる進捗表示。普通の横棒と細かい縫い目を廃止し、12px離れた二つの布片へ、40px高の大きい交差糸を渡す。糸の届く幅が実割合へ一致し、未達側は布の開いた隙間が残る。数値は固定した読面で明確に表示する。 */
export default forwardRef<HTMLDivElement, StitchedMeterProgressProps>(function StitchedMeterProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
