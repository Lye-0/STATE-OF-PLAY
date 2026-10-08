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
/** 索引カードの裏面に説明を展開。見出しと設定にそれぞれ独立した欄を設ける。 */
export default forwardRef<HTMLDivElement, IndexCardHintProps>(function IndexCardHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
