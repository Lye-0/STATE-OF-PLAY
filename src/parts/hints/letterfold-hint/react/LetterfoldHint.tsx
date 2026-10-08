'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "letterfold-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type LetterfoldHintProps = FoundationProps;
/** 折り込まれた手紙の補足欄。本文と設定を上下の紙面へ分け、最下段を返信操作にする。 */
export default forwardRef<HTMLDivElement, LetterfoldHintProps>(function LetterfoldHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
