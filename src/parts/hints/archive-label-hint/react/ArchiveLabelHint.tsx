'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "archive-label-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type ArchiveLabelHintProps = FoundationProps;
/** 厚い書庫の開口から、補足の引出しを引き出す表示。黄の薄い枠を廃止し、上の42pxの開口と引出した読む面、下14pxの前小口へ再設計する。設定と本文は引出しの面へ固定し、実適用ボタンを手前の握り形の面へ収める。装飾の握りは独立した操作として扱わない。 */
export default forwardRef<HTMLDivElement, ArchiveLabelHintProps>(function ArchiveLabelHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
