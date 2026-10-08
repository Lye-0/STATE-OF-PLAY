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
/** くぼんだ仕様プレート。見出しは上の細い面、説明と設定は奥の明るい区画に収める。 */
export default forwardRef<HTMLDivElement, RecessedSpecHintProps>(function RecessedSpecHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
