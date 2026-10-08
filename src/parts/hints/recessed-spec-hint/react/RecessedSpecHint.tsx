'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "recessed-spec-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type RecessedSpecHintProps = FoundationProps;
/** 二つの開いた鋳造溝へ、仕様値を刻む照合用の補足表示。厚い全周の額縁を廃止し、見出しの小口を持つ梁・枠で囲わない本文・二つの独立した溝・下のnative操作面へ分ける。品質/設定の実項目名は、溝の上壁へ接続する不透明な名前面に印字する。仕様値は上14px/下20pxの実肉厚と12pxの奥壁を持つ溝へ固定し、溝の片端は開いたまま残す。文字は深さを表す装飾から離して読みやすく印字する。 */
export default forwardRef<HTMLDivElement, RecessedSpecHintProps>(function RecessedSpecHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
