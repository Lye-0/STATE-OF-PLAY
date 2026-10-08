'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "linear-radar-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type LinearRadarProgressProps = FoundationProps;
/** 上下の二つのガイドに接続した走査ヘッドが、実割合の位置へ進む進捗表示。固定格子や検出点を撤去し、108pxの紙送り場、10pxの上下ガイドと、それを受ける22px幅の実走査ヘッドへ再構築する。ヘッドの前に残る原稿の横線は、通過した側の静かな面に置き換わる。数値とヘッドの到達位置は一つのnative progressへ一致し、未確定状態ではヘッドを出さない。 */
export default forwardRef<HTMLDivElement, LinearRadarProgressProps>(function LinearRadarProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
