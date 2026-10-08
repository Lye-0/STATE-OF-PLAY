'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "field-guide-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type FieldGuideHintProps = FoundationProps;
/** 一枚の固定した案内板から、異なる長さの三つの索引片を出す補足表示。交互の蛇腹を廃止し、見出しの36pxの索引に記号、28px/24pxの索引に品質/設定の実ラベルを配置する。値と本文とnativeチェック・適用は同じ読面で表示する。実情報と索引が対応し、任意の内容や長文でも紙面を折り返さない。 */
export default forwardRef<HTMLDivElement, FieldGuideHintProps>(function FieldGuideHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
