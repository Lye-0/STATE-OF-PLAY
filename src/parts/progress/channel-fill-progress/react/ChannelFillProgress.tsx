'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "channel-fill-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type ChannelFillProgressProps = FoundationProps;
/** 深い上下二壁の溝へ、進んだ幅だけ充填する進捗表示。青い長方形と短い縦線を廃止し、76pxの溝・14/16pxの上下壁・左12pxの止壁と、三つの面を持つ44pxの充填体を作る。充填の端は実割合へ一致し、0%で充填なし、100%で全幅を満たす。 */
export default forwardRef<HTMLDivElement, ChannelFillProgressProps>(function ChannelFillProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
