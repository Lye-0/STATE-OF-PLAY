'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "blueprint-callout-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type BlueprintCalloutHintProps = FoundationProps;
/** 開いた三角の定規で、図面の注釈板を片側から支える表示。水色の細線の箱を廃止し、64px幅の全高三角と、実際に抜いた大きい内三角、6px重なる読む板を作る。基準の方眼は本文の後ろで弱く留め、品質と設定は自然な縦の読み順へ配置する。文字やnative操作を斜めにしない。 */
export default forwardRef<HTMLDivElement, BlueprintCalloutHintProps>(function BlueprintCalloutHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
