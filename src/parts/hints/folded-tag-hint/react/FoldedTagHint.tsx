'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-tag-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type FoldedTagHintProps = FoundationProps;
/** 実際の吊穴と留め輪から、補足用の大きいタグを下げる表示。右の小さい折線を廃し、左右44pxの斜め肩と20pxの実円孔を全輪郭に作る。30×48pxの留め輪は孔へ通り、見出しと詳細と適用をタグの中央へ固定する。タグ全体を回したり文字を揺らしたりしない。 */
export default forwardRef<HTMLDivElement, FoldedTagHintProps>(function FoldedTagHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
