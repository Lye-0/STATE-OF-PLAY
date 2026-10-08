'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "rail-caption-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type RailCaptionHintProps = FoundationProps;
/** 上下の独立したレールへ、四つの短い留め足で説明札を掛ける補足表示。縦の設定積みと細い線だけの案を廃止し、上下12pxの二面レール、四つの12×30pxの足と、間の読む札を作る。レールの両端は露出し、長文の札だけが伸びる。本文とnative操作は札の上へ固定する。 */
export default forwardRef<HTMLDivElement, RailCaptionHintProps>(function RailCaptionHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
