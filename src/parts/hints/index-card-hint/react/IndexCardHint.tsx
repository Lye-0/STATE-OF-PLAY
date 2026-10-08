'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "index-card-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type IndexCardHintProps = FoundationProps;
/** 上の索引札と、前へ重ねた読むカードを一つに揃える補足表示。元の上見出し札を維持し、後ろの18pxの段付きカード、52pxの前の読む紙、見出し札の4pxの上小口を実際に接続する。本文と設定の区切りは静かな紙の横罫へ揃え、読み順を固定する。 */
export default forwardRef<HTMLDivElement, IndexCardHintProps>(function IndexCardHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
