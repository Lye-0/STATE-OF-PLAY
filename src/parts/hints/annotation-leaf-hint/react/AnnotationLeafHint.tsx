'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "annotation-leaf-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type AnnotationLeafHintProps = FoundationProps;
/** 余白から開く注釈紙。見出しの細い左線を、本文と適用欄を結ぶ縦の注釈線へ展開。 */
export default forwardRef<HTMLDivElement, AnnotationLeafHintProps>(function AnnotationLeafHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
