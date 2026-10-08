'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "inspection-window-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type InspectionWindowHintProps = FoundationProps;
/** 厚い点検口と、右へ開いた検査蓋を持つ補足表示。青い矩形枠を廃止し、片側64pxの曲面・上下12pxの小口・背後へ開く46pxの蓋を作る。三つの36×10pxの実ヒンジは表示枠へ固定し、読面に12px重なって蓋を接続する。品質/設定の照合面とnativeチェック・適用は局所スクロールへ収め、長文でも接合具を動かさない。 */
export default forwardRef<HTMLDivElement, InspectionWindowHintProps>(function InspectionWindowHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
