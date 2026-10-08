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
/** 上端を中空に巻いた一枚の注釈用紙を、補足と設定へ展開する表示。細い見出し帯を廃し、全幅60pxの巻き口と実際に抜いた楕円の空隙を作る。読む紙は巻口の下36pxから続き、文字は巻口より下の62pxから固定する。設定と適用は同じ紙の読み順に残す。 */
export default forwardRef<HTMLDivElement, AnnotationLeafHintProps>(function AnnotationLeafHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
