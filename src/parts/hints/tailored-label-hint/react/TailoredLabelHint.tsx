'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "tailored-label-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type TailoredLabelHintProps = FoundationProps;
/** 大きいV形の開いた襟と、その下へ縫い付ける読むラベルを持つ補足表示。紫の左線だけの箱を廃止し、全幅76pxの空いた襟口・二つの斜めの襟面・下の布地と、88pxから始まるラベルを作る。見出しと設定と実操作は縫い付けた紙面の上に揃え、布に文字を揺らす演出を入れない。 */
export default forwardRef<HTMLDivElement, TailoredLabelHintProps>(function TailoredLabelHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
