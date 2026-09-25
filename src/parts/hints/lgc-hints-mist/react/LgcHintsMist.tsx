'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "lgc-hints-mist",
  "kind": "hints",
  "variant": "soft",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type LgcHintsMistProps = FoundationProps;
/** Mist Hint: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, LgcHintsMistProps>(function LgcHintsMist(props, ref) {
  return <FoundationWidget {...props} className={`lgc-root ${props.className??''}`} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
