'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ceramic-caption-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type CeramicCaptionHintProps = FoundationProps;
/** 一つの大きい中空の陶製アーチへ、読む説明板を接続する補足表示。線の色分けだけだった三襞を廃止し、全幅110px高の曲面と18pxの上縁、16pxの両脚を実外形へ作る。説明板は88pxから始まり、両脚と6px重なる22px高の接合を持つ。空いたアーチの下で文字とnative操作を読む面へ固定する。 */
export default forwardRef<HTMLDivElement, CeramicCaptionHintProps>(function CeramicCaptionHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
