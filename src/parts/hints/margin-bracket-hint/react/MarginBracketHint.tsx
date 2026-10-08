'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "margin-bracket-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type MarginBracketHintProps = FoundationProps;
/** 脚注を挟む角括弧。広い色面を抑え、見出しと適用の区切りだけで読み進められる説明欄。 */
export default forwardRef<HTMLDivElement, MarginBracketHintProps>(function MarginBracketHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
